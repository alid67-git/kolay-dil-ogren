-- Mevcut sessions tablosuna cihaz sütunları ekle
-- Çalıştır: npx wrangler d1 execute kdo-analytics --file=migrate-device.sql
ALTER TABLE sessions ADD COLUMN device_type TEXT DEFAULT '';
ALTER TABLE sessions ADD COLUMN os TEXT DEFAULT '';
ALTER TABLE sessions ADD COLUMN os_ver TEXT DEFAULT '';
ALTER TABLE sessions ADD COLUMN browser TEXT DEFAULT '';
ALTER TABLE sessions ADD COLUMN browser_ver TEXT DEFAULT '';
