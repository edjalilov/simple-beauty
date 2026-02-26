export {}

declare global {
  interface Window {
    onBridgeReady?: () => void
    webkit?: {
      messageHandlers?: {
        analytics?: { postMessage(payload: string): void }
      }
    }
    AndroidBridge?: {
      logEvent(payload: string): void
      setUserProperty(key: string, value: string): void
    }
  }
}
