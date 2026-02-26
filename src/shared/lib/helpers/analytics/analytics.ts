import { nativeBridgeProvider } from './native-bridge'
import type { AnalyticsEvent, AnalyticsProvider } from './types'

let provider: AnalyticsProvider = nativeBridgeProvider

export function setAnalyticsProvider(p: AnalyticsProvider) {
  provider = p
}

export function logEvent(event: AnalyticsEvent) {
  provider.logEvent(event)
}

export function setUserProperty(key: string, value: string) {
  provider.setUserProperty(key, value)
}
