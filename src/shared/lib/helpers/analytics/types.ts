export interface AnalyticsEvent {
  name: string
  params?: Record<string, string | number | boolean>
}

export interface AnalyticsProvider {
  logEvent(event: AnalyticsEvent): void
  setUserProperty(key: string, value: string): void
}
