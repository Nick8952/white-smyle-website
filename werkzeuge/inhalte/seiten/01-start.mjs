import { b, text, faq, aufruf, bild } from "../pt.mjs";
const BUCHEN = { titel: "Termin online buchen", ziel: "https://app.cituro.com/booking/2814276", extern: true };
export default [{
  slug: "start", art: "seite", titel: "Dentalhygiene & Bleaching in Zürich Altstetten",
  seoTitel: "Dentalhygiene & Bleaching Zürich – WHITE SMYLE dental",
  seoBeschreibung: "Dentalhygiene CHF 175.– durch dipl. Dentalhygienikerin HF, Kombipaket Dentalhygiene & Bleaching ab CHF 399.– – WHITE SMYLE dental in Zürich Altstetten. Online buchen.",
  alteUrls: ["/", "/index.html"], quelle: "whitesmyle.ch (Startseite)", pruefstatus: "sprachlich-angepasst",
  hero: { variante: "start", kurzzeile: "Dentalhygiene & Bleaching in Zürich Altstetten", titel: "Saubere Zähne. Sichtbar weisser. In einer Sitzung.",
    text: "Dentalhygiene ausschliesslich durch die dipl. Dentalhygienikerin HF, professionelles Bleaching direkt im Anschluss. Krankenkassen anerkannt, Termine online buchbar.",
    knopf: BUCHEN, zweiterKnopf: { titel: "Preise ansehen", ziel: "/preise/" },
    // Belegte Fakten: Krankenkassen anerkannt (dentalhygiene.html), Berufsbezeichnung (Impressum/Bewilligung), ca. 800 Bleachings pro Jahr (AGB 05/2025; «seit 2012» bewusst nicht im Hero, weil die Quelle auch 2011 nennt), über 30 Jahre Berufserfahrung (dentalhygiene.html)
    fakten: ["Krankenkassen anerkannt für Dentalhygiene", "dipl. Dentalhygienikerin HF", "Ca. 800 Bleachings pro Jahr", "Über 30 Jahre Berufserfahrung"],
    // Preis aus data/kombinationen.json (kombi-power: 399, Einzelpreise 175 + 249 = 424)
    angebot: { etikett: "Kombipaket", titel: "Dentalhygiene & Power Bleaching in einer Sitzung", preisText: "CHF 399.–", hinweis: "Einzelpreise zusammen CHF 424.–, Dauer ca. 2 Stunden", link: { titel: "Zum Kombipaket", ziel: "/kombipaket/" } },
    bild: bild("hero-farbring", "Lachende Frau hält einen Zahnfarbring vor ihre Zähne") },
  bausteine: [
    b("linkkartenBaustein", { titel: "Drei Wege zu gesunden und weissen Zähnen", spalten: 3, karten: [
      { _key: "k1", titel: "Dentalhygiene", preisChf: 175, text: "Behandlung durch die dipl. Dentalhygienikerin (keine Prophylaxeassistentin). Die gründliche Dentalhygiene 1–2 Mal pro Jahr sichert Ihre Zahngesundheit.", link: { titel: "Zur Dentalhygiene", ziel: "/dentalhygiene/" }, bild: bild("start-dentalhygiene", "Dentalhygiene-Behandlung bei WHITE SMYLE, mit Hinweis «Krankenkassen anerkannt»") },
      { _key: "k2", titel: "HEYDENT Power Bleaching plus", preisChf: 249, preisPraefix: "Aktion", text: "Ihr Zahn-Upgrade: die Zahnaufhellung in der Praxis. Aktionspreis statt CHF 299.– – Gültigkeit wird von der Praxis bestätigt.", link: { titel: "Zum Bleaching", ziel: "/bleaching/" }, bild: bild("start-bleaching", "Vergleich der Zahnfarbe vor und nach dem Bleaching") },
      { _key: "k3", titel: "Kombipaket Dentalhygiene & Bleaching", preisChf: 399, preisPraefix: "ab", text: "Dentalhygiene und Bleaching in einer Sitzung, nur durch die dipl. Dentalhygienikerin. Sie sparen Zeit – sichtbares Ergebnis nach rund zwei Stunden.", link: { titel: "Zum Kombipaket", ziel: "/kombipaket/" }, bild: bild("start-kombi", "Vergleich eines Lachens vor und nach Dentalhygiene und Bleaching") },
    ] }),
    text(`## WHITE SMYLE – die Praxis für Dentalhygiene und Zahnaufhellung in Zürich

Bei WHITE SMYLE stehen Sie und Ihre Gesundheit im Mittelpunkt. Seit über 30 Jahren arbeitet die Inhaberin mit viel Freude, Erfahrung und echter Fürsorge für ihre Patientinnen und Patienten. Jede Behandlung erfolgt gründlich, sanft und individuell abgestimmt – für ein sauberes, frisches Mundgefühl und ein gutes Gefühl danach.

Unsere professionelle Dentalhygiene entfernt zuverlässig Plaque, Zahnstein und bakterielle Beläge – eine wichtige Grundlage zur Vorbeugung von Karies, Zahnfleischentzündungen und Mundgeruch. Ergänzend sorgt ein schonendes Bleaching für sichtbar weissere Zähne – oft schon nach nur einer Behandlung.

### Was uns besonders macht

Wir denken weiter. Dank fundiertem Gesundheitswissen erhalten Sie bei uns nicht nur eine gründliche Zahnreinigung, sondern auch eine ganzheitliche Beratung rund um Ihre Mundgesundheit und das damit verbundene Wohlbefinden.

**Unser Versprechen:** Gründliche Reinigung. Sanfte Behandlung. Sichtbare Ergebnisse. Persönliche Betreuung.`, { bild: bild("dh-hero", "Dentalhygienikerin bei der Behandlung einer Patientin"), bildPosition: "rechts" }),
    b("kennzahlenBaustein", { titel: "Warum WHITE SMYLE", einleitung: "Angaben der Praxis auf der bisherigen Website; Herkunft jeweils darunter. Zentral in Zürich Altstetten erreichbar aus Zürich HB, Oerlikon, Wiedikon, Schlieren und Dietikon." }),
    b("kombinationenBaustein", { titel: "Unsere Kombipakete für saubere und weisse Zähne", einleitung: "Dentalhygiene und Bleaching in nur einer Sitzung: In etwa zwei Stunden werden Ihre Zähne gründlich gereinigt und anschliessend aufgehellt. Kein zweiter Termin, ein sofort sichtbares Ergebnis.", kombinationen: ["kombi-power", "kombi-refresher", "kombi-home"], mitEinzelpreisen: true }),
    faq("Häufige Fragen", [
      ["Wie oft sollte man eine Dentalhygiene machen?", "In der Regel 1–2 Mal pro Jahr, bei erhöhtem Risiko auch häufiger."],
      ["Ist Bleaching schädlich für die Zähne?", "Professionell durchgeführt gilt Bleaching bei gesunden Zähnen als sichere und schonende Methode für den Zahnschmelz. Wichtig ist, dass die Zähne vorher kontrolliert und gereinigt werden."],
      ["Was kostet Dentalhygiene in Zürich und was bei WHITE SMYLE?", "Dentalhygiene durch die Dentalhygienikerin kostet je nach Praxis ca. CHF 160–220. Nur Zahnreinigung durch eine Prophylaxeassistentin je nach Praxis ca. CHF 80–160. Bei WHITE SMYLE kostet die Dentalhygiene – nur durch die Dentalhygienikerin – CHF 175.–."],
      ["Wie lange hält ein Bleaching?", "In der Regel 6–24 Monate, abhängig von Ernährung und Pflege."],
      ["Kann man Dentalhygiene und Bleaching kombinieren?", "Ja – das verbessert sogar das Ergebnis deutlich. Saubere Zähne ermöglichen ein gleichmässigeres und besseres Bleaching-Ergebnis; deshalb zuerst Dentalhygiene, dann Bleaching."],
    ]),
    b("kundenmeinungenBaustein", { titel: "Was unsere Kundinnen und Kunden sagen", darstellung: "zitate", meinungen: ["km-start-jessica", "km-start-nicolas", "km-start-mona", "km-start-carla"] }),
    b("galerieBaustein", { titel: "Dentalhygiene und Bleaching: das Ergebnis danach", bilder: ["lachen-1326", "lachen-1326-1", "lachen-1326-2", "lachen-1326-3", "lachen-1326-5", "lachen-1326-7", "lachen-1331-2", "lachen-1331-5", "lachen-1353-2", "lachen-1353-3", "lachen-1353-4", "lachen-1353-5", "lachen-1353-6"].map((id) => bild(id, "Lachender Mund mit hellen Zähnen")), hinweis: "Bilder der bisherigen Website. Ob es sich um Aufnahmen aus der Praxis oder Symbolbilder handelt, ist dort nicht angegeben." }),
    text(`## Natürliche Zahnpflege – weil Ihr Mund mehr verdient

Alles, was täglich in Ihren Mund kommt, sollte sauber, sicher und sinnvoll sein – dennoch greifen viele noch zu Zahnpasten mit unnötiger Chemie. Dabei ist Ihr Mund ein sensibles Mikrobiom, das Sie nicht aus dem Gleichgewicht bringen sollten. Moderne Zahnpflege setzt deshalb auf natürliche, gut erforschte Inhaltsstoffe: Enzyme, die Beläge sanft lösen (ohne Kratzen), Hydroxylapatit zur Stärkung des Zahnschmelzes – auch als Alternative zu Fluorid – und ätherische Öle für Frische statt künstlicher Zusätze.

Natürlich und wissenschaftlich muss kein Widerspruch sein. Im Gegenteil: Die beste Zahnpflege verbindet beides. Ausgewählte natürliche Zahnpasten finden Sie im [Zahnpastashop](https://www.zahnpastashop.ch/), dem externen Webshop der Praxisbetreiber. Mehr dazu im Ratgeber [Natürliche Zahnpflege](/ratgeber/natuerliche-zahnpflege/).`, { bild: bild("splat-zahnpasten", "Zahnpasten-Tuben der Marke SPLAT"), bildPosition: "links" }),
    aufruf({ titel: "Sind auch Sie bereit für Ihr neues Lachen?", text: "Termine buchen Sie online über den externen Dienst Cituro – oder Sie rufen an: 043 931 78 74.", zweiterKnopf: { titel: "Kontakt und Anfahrt", ziel: "/kontakt/" } }),
  ],
}];
