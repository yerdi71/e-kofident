# e-Kofident — parodia PWA

To kompletna, instalowalna aplikacja webowa (PWA) w formie satyrycznej demonstracji.

## Publikacja i instalacja
PWA musi być udostępniona przez HTTPS, aby można ją było dodać do ekranu startowego i używać offline.

### Najprościej: GitHub + Vercel
1. Rozpakuj ZIP.
2. Utwórz nowe repozytorium na GitHubie i wrzuć do niego wszystkie pliki z tego folderu (nie sam folder nadrzędny).
3. W Vercel wybierz **Add New → Project**, zaimportuj repozytorium i kliknij **Deploy**. Nie trzeba ustawiać frameworka ani komendy build.
4. Otwórz otrzymany adres `https://...vercel.app` w Chrome na Androidzie.
5. Menu `⋮` → **Dodaj do ekranu głównego** lub **Zainstaluj aplikację**.
6. Ikona e-Kofident pojawi się na ekranie startowym i otworzy się w trybie aplikacji.

## Co zawiera
- responsywny interfejs mobilny,
- działające kafelki z fikcyjnymi scenariuszami,
- lokalne statystyki zapisane w przeglądarce,
- profil i reset statystyk,
- manifest PWA, ikony i service worker do działania offline po pierwszym otwarciu.

## Ważne
To wyłącznie parodia. Aplikacja nie korzysta z aparatu ani GPS i nie przesyła prawdziwych zgłoszeń. Nie jest powiązana z żadną instytucją.
