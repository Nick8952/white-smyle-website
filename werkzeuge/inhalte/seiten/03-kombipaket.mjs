import { b, text, hinweis, aufruf, bild } from "../pt.mjs";
const BUCHEN = { titel: "Termin online buchen", ziel: "https://app.cituro.com/booking/2814276", extern: true };
export default [{
  slug: "kombipaket", art: "leistung", titel: "Kombipaket Dentalhygiene & Bleaching", teaser: "Dentalhygiene und Bleaching in einer Sitzung: in etwa zwei Stunden gründlich gereinigt und aufgehellt.",
  einleitung: "Sofort sichtbar weissere Zähne – professionell, schonend und zeitsparend. Bei WHITE SMYLE erhalten Sie Dentalhygiene und Bleaching in nur einer Sitzung: In etwa zwei Stunden werden Ihre Zähne gründlich gereinigt und anschliessend aufgehellt – für ein sichtbar strahlenderes Lächeln direkt nach der Behandlung. Kein zweiter Termin, kein unnötiger Aufwand.",
  seoTitel: "Dentalhygiene + Bleaching Zürich – Kombipaket in einer Sitzung", seoBeschreibung: "Dentalhygiene und Bleaching in einer Sitzung in Zürich. Kombipakete ab CHF 349.–, sofort sichtbares Ergebnis, professionelle Behandlung. Jetzt Termin buchen.",
  hero: { variante: "seite", kurzzeile: "Eine Sitzung, ca. 2 Stunden", titel: "Kombipaket Dentalhygiene & Bleaching", text: "Sofort sichtbar weissere Zähne – professionell, schonend und zeitsparend. In etwa zwei Stunden werden Ihre Zähne gründlich gereinigt und anschliessend aufgehellt. Kein zweiter Termin.", knopf: BUCHEN, zweiterKnopf: { titel: "Alle Preise", ziel: "/preise/" }, bild: bild("kombi-4", "Lachende Frau nach der Behandlung") },
  bild: bild("kombi-4", "Lachende Frau nach der Behandlung"), alteUrls: ["/kombiangebote.html"], quelle: "whitesmyle.ch/kombiangebote.html, Startseite, /preise.html", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    b("kombinationenBaustein", { titel: "Die Kombipakete im Vergleich", einleitung: "Preise gemäss Preisliste der bisherigen Website. Die Differenz zu den Einzelpreisen wird nur gezeigt, wo alle Einzelpreise belegt sind.", mitEinzelpreisen: true }),
    b("ablaufBaustein", { titel: "Wie läuft die Behandlung ab?", schritte: [
      { _key: "a1", titel: "Professionelle Dentalhygiene", text: "Entfernung von Zahnstein, Belägen und Verfärbungen – auch unter dem Zahnfleisch." , bild: bild("bleaching-ablauf-1", "Dentalhygiene als Vorbereitung auf das Bleaching") },
      { _key: "a2", titel: "Vorbereitung der Zähne", text: "Optimale Basis für ein gleichmässiges Bleaching; Schutz von Zahnfleisch und Weichgewebe." },
      { _key: "a3", titel: "Bleaching-Behandlung", text: "Aufhellung mit Lichtaktivierung des Bleaching-Gels für sichtbar weissere Zähne.", bild: bild("bleaching-ablauf-2", "Bleaching-Behandlung mit Lichtaktivierung") },
      { _key: "a4", titel: "Farbvergleich", text: "Vergleich der Zahnfarbe vorher – nachher. Resultat geniessen und viel lachen.", bild: bild("bleaching-ablauf-3", "Vergleich der Zahnfarbe mit dem Farbring") },
    ], abschluss: "Gesamtdauer: ca. 2 Stunden." }),
    text(`## Warum nicht nur Bleaching?

Viele unterschätzen, wie entscheidend die richtige Vorbereitung für ein erfolgreiches Bleaching ist. Erst durch eine professionelle Dentalhygiene werden Zahnbelag, Zahnstein und oberflächliche Verfärbungen vollständig entfernt. Das ermöglicht dem anschliessenden Bleaching, gleichmässiger zu wirken, intensivere Ergebnisse zu erzielen und länger anzuhalten.

Ein Bleaching ohne vorherige Dentalhygiene kann ungleichmässige Ergebnisse liefern, weniger effektiv sein und schneller an Wirkung verlieren. Genau deshalb setzt die Praxis auf die Kombination – für ein optimales und nachhaltigeres Resultat. Ohne vorgängige Reinigung bleibt das Potenzial eines Bleachings oft ungenutzt.

## Für wen ist das Kombiangebot ideal?

Diese Behandlung eignet sich besonders, wenn Sie

- Verfärbungen durch Kaffee, Tee oder Nikotin haben
- trotz guter Zahnpflege nicht die gewünschte Helligkeit erreichen
- ein schnelles und sichtbares Ergebnis möchten
- sich auf ein Event, Fotoshooting oder einen besonderen Anlass vorbereiten
- Ihre letzte Dentalhygiene länger als ein halbes Jahr zurückliegt und Sie ein vollständiges Bleaching wünschen

## Ihr Vorteil: alles in einer Sitzung

Beide Behandlungen werden direkt hintereinander und aufeinander abgestimmt durchgeführt: Dentalhygiene und Bleaching in einer Sitzung, sofort sichtbares Ergebnis nach nur einem Termin, kein zusätzlicher Besuch notwendig, maximale Wirkung durch professionelle Vorbereitung.

Mit über 2400 Dentalhygiene-Behandlungen und ca. 800 Bleachings pro Jahr gehört WHITE SMYLE nach eigener Angabe in Zürich zu den Spezialisten für professionelle Dentalhygiene und sofort sichtbares Bleaching-Ergebnis. Die Praxis berät Sie, welches Kombipaket für Ihre Wünsche und Ihre zahnmedizinische Situation passt.`, { bild: bild("kombi-1", "Lachende Frau mit hellen Zähnen"), bildPosition: "links" }),
    hinweis(`**Was ein Bleaching kann und was nicht:** Die Praxis kann keine Versprechungen bezüglich Resultat und Dauer der Sichtbarkeit geben, da Ausgangsfarbe, Zahnschmelzqualität und der Konsum verfärbender Lebensmittel individuell verschieden sind. Oft braucht es mehrere Bleaching-Behandlungen, bis das gewünschte Farbergebnis erreicht ist (AGB der Praxis). Kronen, Veneers und Füllungen werden nicht aufgehellt.`, "medizinisch"),
    b("kundenmeinungenBaustein", { titel: "Was Kundinnen und Kunden zum Kombipaket sagen", darstellung: "zitate", meinungen: ["km-kombi-janine", "km-kombi-carlo", "km-kombi-ariane"] }),
    b("galerieBaustein", { titel: "Eindrücke", bilder: [bild("kombi-2", "Lachende Frau nach der Behandlung"), bild("kombi-3", "Lachende Frau mit hellen Zähnen"), bild("lachen-1344-1", "Lachender Mund"), bild("lachen-1344-2", "Lachender Mund"), bild("lachen-1344-3", "Lachender Mund"), bild("lachen-1344-4", "Lachender Mund"), bild("lachen-1305-3", "Lachender Mund")], hinweis: "Bilder der bisherigen Website; Herkunft (Praxis oder Symbolbild) dort nicht angegeben." }),
    aufruf({ titel: "Jetzt Termin für Dentalhygiene & Bleaching in Zürich sichern", text: "Sparen Sie Zeit, vermeiden Sie mehrere Termine und erhalten Sie ein sichtbar besseres Ergebnis – alles in nur einer Sitzung.", zweiterKnopf: { titel: "Preise ansehen", ziel: "/preise/" } }),
  ],
}];
