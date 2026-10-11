# e-Kofident — paczka do wdrożenia

Paczka zachowuje istniejący interfejs HTML i grafikę referencyjną z ostatniej wersji v7. Dodano tylko podstawowe pliki PWA: manifest, rejestrację service workera i pamięć podręczną do pracy offline.

## Wdrożenie
1. Rozpakuj całą zawartość ZIP.
2. Wgraj wszystkie pliki i folder `icons` do katalogu głównego witryny HTTPS (nie wgrywaj samego `index.html`).
3. Po wdrożeniu otwórz adres w Safari na iPhonie.
4. Wybierz **Udostępnij → Dodaj do ekranu początkowego → Dodaj**.

## Ważne
- Nic nie zostało opublikowane na GitHubie ani Vercelu.
- Prototyp jest nieoficjalny i niepowiązany z Policją. Nie wysyła zgłoszeń do służb.
- Dane wpisywane w formularzach pozostają lokalne w przeglądarce.
- Service worker działa po pierwszym otwarciu przez HTTPS lub localhost. Samo otwarcie pliku przez `file://` nie aktywuje instalacji PWA.
