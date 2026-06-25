# Kolay Dil Ogren

Tek cekirdek uygulama, ayri dil paketleri mantigiyla kurulan genel dil ogrenme platformu.

## Yapi

- `index.html`: Ortak uygulama motoru ve GitHub Pages girisi.
- `languages/registry.js`: Uygulamanin bildigi diller ve ana diller.
- `languages/en/manifest.js`: Ingilizce paket tanimi.
- `languages/en/lessons/`: Ingilizce ders verileri.
- `languages/th/manifest.js`: Tayca paket tanimi.
- `languages/th/lessons/`: Tayca ders verileri.
- `docs/roadmap.md`: Sonraki adimlar.

## Mantik

Uygulama ayarlardan once ogrenilecek dili, sonra ana dili secer. Her dil paketi kendi manifest dosyasinda ders listesini, ses dilini ve veri alanlarini tanimlar. Cekirdek arayuz dersleri ihtiyac oldukça ilgili paketten yukler.

## GitHub Pages

Bu klasor repo kok dizini olacak sekilde yayinlanabilir. Giris dosyasi `index.html`.

## Not

Bu ilk platform surumu mevcut Kolay Ingilizce ve Kolay Tayca ders dosyalarini dil paketleri olarak kullanir. Eski uygulamalar ayrica kalabilir; yeni gelistirmeler bu platformda ortak cekirdek uzerinden ilerletilebilir.
