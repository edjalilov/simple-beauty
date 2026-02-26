import type { AnalyticsEvent, AnalyticsProvider } from './types'

interface QueueMessage {
  type: 'logEvent' | 'setUserProperty'
  data: unknown
}

const pendingQueue: QueueMessage[] = []
let bridgeReady = false

function dispatchToNative(type: QueueMessage['type'], data: unknown): void {
  try {
    if (globalThis.window?.webkit?.messageHandlers?.analytics) {
      globalThis.window.webkit.messageHandlers.analytics.postMessage(
        JSON.stringify({ type, data }),
      )
      return
    }

    if (globalThis.window?.AndroidBridge) {
      if (type === 'logEvent') {
        globalThis.window.AndroidBridge.logEvent(JSON.stringify(data))
      } else if (type === 'setUserProperty') {
        const { key, value } = data as { key: string; value: string }
        globalThis.window.AndroidBridge.setUserProperty(key, value)
      }
      return
    }

    console.warn('[analytics:bridge] no native handler', type, data)
  } catch (error) {
    console.error('[analytics:bridge] dispatch failed', error)
  }
}

function flushQueue(): void {
  while (pendingQueue.length > 0) {
    const msg = pendingQueue.shift()
    if (msg) dispatchToNative(msg.type, msg.data)
  }
}

function postToNative(type: QueueMessage['type'], data: unknown): void {
  // eslint-disable-next-line no-console
  console.log(`[analytics] ${type}`, data)

  if (!bridgeReady) {
    pendingQueue.push({ type, data })
    return
  }
  dispatchToNative(type, data)
}

function isBridgeAvailable(): boolean {
  return !!(
    globalThis.window?.webkit?.messageHandlers?.analytics ||
    globalThis.window?.AndroidBridge
  )
}

export function markBridgeReady(): void {
  bridgeReady = true
  flushQueue()
}

export function initBridge(): void {
  if (isBridgeAvailable()) {
    markBridgeReady()
    return
  }

  globalThis.window.onBridgeReady = () => {
    markBridgeReady()
  }
}

export const nativeBridgeProvider: AnalyticsProvider = {
  logEvent(event: AnalyticsEvent) {
    postToNative('logEvent', event)
  },
  setUserProperty(key: string, value: string) {
    postToNative('setUserProperty', { key, value })
  },
}
