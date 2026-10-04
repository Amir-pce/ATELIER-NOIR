# رویاخواب لوکس | Luxury Sleep Studio

## Ziel des Projekts
Eine hochwertige, moderne, statische E-Commerce-Landingpage für تشک، لحاف و کالای خواب mit persischer RTL-Oberfläche, professionellem Header, SVG-Menü, GSAP-Animationen, erweiterten Filtern und einzigartigen interaktiven Beratungstools.

## Aktuell umgesetzte Features
- Professioneller Sticky-Glassmorphism-Header mit Brand-SVG, responsivem SVG-Hamburger-Menü und Warenkorb-/Favoriten-Badges.
- GSAP- und ScrollTrigger-Animationen für Hero, Karten, Scroll-Reveals, Floating-Orbs und Produkt-Rendering.
- Produktkatalog mit 12 kuratierten Beispielprodukten.
- Erweiterte Filter:
  - Suche
  - Kategorie
  - Schlafposition
  - Härtegrad
  - Temperatur-/Kühlungsprofil
  - Material
  - Anti-Allergie
  - Höhe
  - Budget-Slider
  - Spezialfeatures wie طبی، بدون انتقال حرکت، هتلی، اکو
  - Sortierung nach Preis, Bewertung, Neuheit und Empfehlung
- Grid-/Listenansicht und Pagination.
- Favoritenverwaltung mit `localStorage`.
- Warenkorb mit Mengen und Gesamtsumme in einem Drawer.
- Vergleichsfunktion für bis zu drei Produkte.
- Smart-Sleep-Match-Quiz für personalisierte Produktempfehlungen.
- Einzigartige Experience-Module:
  - Schlafklima-Simulator
  - Körperdruck-Karte
  - Dekor-/Farbpaletten-Simulator
- Newsletter-Formular mit clientseitigem Feedback.
- Voll responsives Layout für Desktop, Tablet und Mobile.
- Barrierebewusste Struktur mit semantischen Bereichen, Labels und ARIA-Attributen.

## Funktionale Entry URIs
- `/index.html` — Hauptseite
- `/index.html#hero-section` — Hero-Bereich
- `/index.html#products-section` — Produktkatalog mit Filtern
- `/index.html#advisor-section` — Schlafberater/Quiz
- `/index.html#innovation-section` — Interaktive Experience-Tools
- `/index.html#journal-section` — Ratgeberkarten
- `/index.html#contact-section` — Footer/Kontakt/Newsletter

## Öffentliche URLs
- Produktion: Noch nicht veröffentlicht. Zum Veröffentlichen bitte den **Publish Tab** verwenden.
- API-Endpunkte: Keine externen APIs im Einsatz.

## Datenmodelle und Speicherung
Die Produktdaten sind clientseitig in `js/app.js` als Array gespeichert. Jeder Produktdatensatz enthält:
- `id`
- `name`
- `category`
- `price`
- `rating`
- `newness`
- `sleep`
- `firmness`
- `cooling`
- `material`
- `allergy`
- `height`
- `features`
- `desc`
- `image`

Persistenz im Browser:
- `dreamSleepFavorites` in `localStorage`
- `dreamSleepCompare` in `localStorage`
- `dreamSleepCart` in `localStorage`

## Noch nicht implementiert
- Echte Zahlungsabwicklung.
- Backend-gestützte Bestellungen und Lagerverwaltung.
- Benutzerkonten oder Authentifizierung.
- Live-Chat oder CRM-Integration.

## Empfohlene nächste Schritte
1. Reale Produktbilder, Preise und Lagerbestände einpflegen.
2. Optional die RESTful Table API für dynamische Produktverwaltung nutzen.
3. Checkout als statisches Anfrageformular oder über einen externen, CORS-fähigen Dienst anbinden.
4. SEO-Texte und strukturierte Daten für Produkte ergänzen.
5. Performance-Audit mit echten Bildern durchführen.
