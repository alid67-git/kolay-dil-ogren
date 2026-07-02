-- Cloudflare D1 schema for Kolay Dil Ogren analytics
CREATE TABLE IF NOT EXISTS sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  visitor_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  lang TEXT,
  ui_lang TEXT,
  country TEXT,
  ip_hash TEXT,
  page TEXT,
  duration_sec INTEGER DEFAULT 0,
  event TEXT,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_sessions_visitor ON sessions(visitor_id);
CREATE INDEX IF NOT EXISTS idx_sessions_ip ON sessions(ip_hash);
CREATE INDEX IF NOT EXISTS idx_sessions_lang ON sessions(lang);
CREATE INDEX IF NOT EXISTS idx_sessions_country ON sessions(country);
CREATE INDEX IF NOT EXISTS idx_sessions_created ON sessions(created_at);

-- Migration: cihaz bilgisi sütunları (mevcut DB için ayrıca çalıştır: migrate-device.sql)
-- ALTER TABLE sessions ADD COLUMN device_type TEXT DEFAULT '';
-- ALTER TABLE sessions ADD COLUMN os TEXT DEFAULT '';
-- ALTER TABLE sessions ADD COLUMN os_ver TEXT DEFAULT '';
-- ALTER TABLE sessions ADD COLUMN browser TEXT DEFAULT '';
-- ALTER TABLE sessions ADD COLUMN browser_ver TEXT DEFAULT '';
