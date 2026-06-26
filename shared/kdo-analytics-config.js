/**
 * Kolay Dil Ogren — kullanım istatistikleri (ücretsiz, cihaz TTS gibi API ücreti yok).
 * Cloudflare Worker endpoint'i deploy sonrası buraya yazılır.
 */
window.KDO_ANALYTICS = {
  /** Deploy sonrası: https://kdo-analytics.<subdomain>.workers.dev */
  endpoint: 'https://kdo-analytics.alid67.workers.dev',
  enabled: true,
  pingSec: 60
};
window.KDO_PLATFORM_VERSION = window.KDO_PLATFORM_VERSION || 'v2.0.0';
