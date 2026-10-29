// Lightweight telemetry / event tracking helper
export function trackEvent(eventName, payload = {}) {
  try {
    if (typeof window !== 'undefined') {
      // Check for Google Analytics or custom tag manager
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, payload);
      }
      // Developer log in dev mode
      if (import.meta.env.DEV) {
        console.log(`[Event Tracked]: ${eventName}`, payload);
      }
    }
  } catch {
    // Graceful no-op fallback
  }
}

export default trackEvent;
