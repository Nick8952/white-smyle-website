import { b, text, faq, hinweis, aufruf, bild, pt } from "../pt.mjs";
const BUCHEN = { titel: "Termin online buchen", ziel: "https://app.cituro.com/booking/2814276", extern: true };

const preise = {
  slug: "preise", art: "seite", titel: "Preise für Dentalhygiene und Bleaching", teaser: "Alle Preise auf einen Blick: Dentalhygiene, Bleaching-Arten, Kombipakete, Zahlungsmöglichkeiten und Terminbedingungen.",
  einleitung: "Dentalhygiene und Bleaching bei WHITE SMYLE Zürich – Behandlung nur durch die dipl. Dentalhygienikerin. Alle Preise in CHF gemäss der Preisliste der bisherigen Website.",
  seoTitel: "Preise Dentalhygiene und Bleaching Zürich – WHITE SMYLE", seoBeschreibung: "Preise bei WHITE SMYLE Zürich: Dentalhygiene CHF 175.–, Frontpolish CHF 100.–, Power Bleaching ab CHF 249.–, Kombipakete ab CHF 349.–. Zahlung und Bedingungen.",
  hero: { variante: "seite", titel: "Preise für Dentalhygiene und Bleaching", text: "Behandlung nur durch die dipl. Dentalhygienikerin HF. Alle Preise in CHF gemäss Preisliste; Voraussetzungen stehen direkt beim Angebot.", knopf: BUCHEN, zweiterKnopf: { titel: "Kombipakete vergleichen", ziel: "/kombipaket/" }, bild: bild("preise-1", "Dentalhygienikerin behandelt eine Patientin") },
  bild: bild("preise-1", "Dentalhygienikerin behandelt eine Patientin"), alteUrls: ["/preise.html", "/zahlungsmoumlglichkeiten.html"], quelle: "whitesmyle.ch/preise.html, /zahlungsmoumlglichkeiten.html, AGB", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    b("preistafelBaustein", { anker: "preisliste", titel: "Preisliste", aktion: "aktion-power-plus", mitZahlungsarten: true, fussnoten: [
      "Alle Preise in CHF gemäss Preisliste auf whitesmyle.ch (Stand 23.09.2026). Bei speziellen Situationen können weitere Dentalhygiene-Sitzungen notwendig sein.",
      "Kombipaket Dentalhygiene & Home Bleaching: Die Preisliste nennt CHF 549.–, die Seiten «Kombiangebote» und «Aktion» CHF 514.–. Die Praxis bestätigt den gültigen Preis.",
      "Aktion Power Bleaching plus: kein Enddatum auf der bisherigen Website; Gültigkeit und Bedingungen bestätigt die Praxis.",
      "Kinder-Zahnreinigung: kein Preis auf der bisherigen Website genannt.",
    ] }),
    text(`## Terminverlegungen und Terminstornierungen

Bitte verlegen oder stornieren Sie Ihren Termin rechtzeitig, mindestens 48 Stunden im Voraus und innerhalb der Praxis-Arbeitszeiten. Andernfalls wird Ihnen der volle Preis in Rechnung gestellt. Beachten Sie bitte, dass die 48 Stunden nur an Werktagen zählen, da Stornierungen ausserhalb der Arbeitszeiten (Sonn- und Feiertage) nicht berücksichtigt werden können.

Kurzfristige Absagen und Nichterscheinen aus jeglichen Gründen (auch Krankheit) werden gemäss AGB nach der üblichen Gebührenliste verrechnet, um die anfallenden Kosten zu decken. Details in den [AGB](/agb/).

## Bezahlen Sie bequem nach der Behandlung

Dienstleistungen sind direkt nach der Behandlung mit den üblichen Zahlungsmitteln wie Kreditkarte, PostFinance Card, TWINT oder in bar zu bezahlen. Rechnungszahlung ist nur nach Absprache möglich.

## Krankenkasse

WHITE SMYLE dental ist nach eigener Angabe Krankenkassen anerkannt. Fragen Sie nach Ihrem Rückforderungsbeleg für die Dentalhygiene, falls Sie eine entsprechende Zusatzversicherung haben. Die Grundversicherung übernimmt Dentalhygiene meist nicht, Zusatzversicherungen oft teilweise.`, { anker: "bedingungen", titel: "Bedingungen und Zahlung", breite: "schmal" }),
    aufruf({ titel: "Vereinbaren Sie Ihren Online-Termin", text: "Die Praxis berät Sie, welches Angebot für Ihre Wünsche und Ihre zahnmedizinische Situation passt.", zweiterKnopf: { titel: "Aktion ansehen", ziel: "/preise/aktion/" } }),
  ],
};

const aktion = {
  slug: "preise/aktion", art: "seite", titel: "Aktion: Power Bleaching plus", teaser: "Zahn-Upgrade gefällig? Die Aktion der Praxis für das HEYDENT Power Bleaching plus – allein oder im Kombipaket.",
  einleitung: "Wählen Sie Ihre Option für gesunde und weisse Zähne: Kombipaket Dentalhygiene & Bleaching oder Bleaching allein.",
  seoTitel: "Aktion Power Bleaching Zürich – WHITE SMYLE", seoBeschreibung: "Aktion bei WHITE SMYLE Zürich: Power Bleaching plus CHF 249.– statt 299.–, im Kombipaket mit Dentalhygiene CHF 399.– statt 474.–. Gültigkeit bestätigt die Praxis.",
  bild: bild("aktion-gesund-weiss", "Zwei lachende Personen; Schriftzug «gesund & weiss»"), alteUrls: ["/aktion.html", "/power-bleaching-aktion.html", "/bleaching-aktion.html"], quelle: "whitesmyle.ch/aktion.html, /power-bleaching-aktion.html, Startseite", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    b("aktionBaustein", { aktion: "aktion-power-plus" }),
    b("linkkartenBaustein", { titel: "Welche Option passt zu Ihnen?", spalten: 2, karten: [
      { _key: "o1", titel: "Kombipaket Dentalhygiene & Bleaching", preisChf: 399, preisPraefix: "ab", text: "Ihre letzte Dentalhygiene liegt länger als ein halbes Jahr zurück und Sie wollen ein vollständiges Bleaching machen? Dann ist diese Option die richtige: Dentalhygiene & Power Bleaching CHF 399.–, & Power Bleaching plus CHF 474.– (Aktion: 399.–), & Home Bleaching CHF 549.–.", link: { titel: "Zum Kombipaket", ziel: "/kombipaket/" }, bild: bild("aktion-kombi", "Dentalhygienikerin behandelt eine Patientin") },
      { _key: "o2", titel: "Bleaching allein", preisChf: 249, preisPraefix: "ab", text: "Wenn Sie noch nie ein Bleaching gemacht haben und die letzte Dentalhygiene nicht länger als ein halbes Jahr zurückliegt: Power Bleaching CHF 249.–, Power Bleaching plus CHF 299.– (Aktion: 249.–), Home-Bleaching-Schiene CHF 399.–.", link: { titel: "Bleaching ohne Dentalhygiene", ziel: "/bleaching/bleaching-ohne-dentalhygiene/" }, bild: bild("aktion-bleaching", "Frau hält einen Zahnfarbring vor ihre Zähne") },
    ] }),
    text(`## Lachen war noch nie einfacher

Schnell und effizient zu weissen Zähnen: Das HEYDENT Power Bleaching plus zum Aktionspreis von CHF 249.– (statt CHF 299.– gemäss Preisliste). Tipp der Praxis: das Kombipaket Dentalhygiene & Power Bleaching für CHF 399.–.

Power Bleaching darf nur in einer Dentalhygiene- oder Zahnarztpraxis durchgeführt werden – nur zahnmedizinisches Fachpersonal darf ein Power Bleaching durchführen. Es werden 20 Zähne (4 Quadranten je 5 Zähne) aufgehellt, keine Backenzähne (AGB).

Melden Sie sich für Ihr Bleaching an: 043 931 78 74 oder 076 460 38 10.`, { bild: bild("aktion-1", "Lachende Frau formt mit den Händen einen Rahmen"), bildPosition: "rechts" }),
    aufruf({ titel: "Aktion nutzen", text: "Online buchen über Cituro oder telefonisch. Die Aktion hat auf der bisherigen Website kein Enddatum; die Praxis bestätigt Gültigkeit und Bedingungen.", zweiterKnopf: { titel: "Alle Preise", ziel: "/preise/" } }),
  ],
};

const termin = {
  slug: "termin", art: "seite", titel: "Ihr Wunschtermin", teaser: "Termine für Dentalhygiene oder Bleaching online über Cituro buchen – oder telefonisch, per SMS und WhatsApp anfragen.",
  einleitung: "Vereinbaren Sie Ihren Termin für Dentalhygiene und/oder Bleaching online. Die Buchung läuft über den externen Dienst Cituro; alternativ erreichen Sie die Praxis telefonisch.",
  seoTitel: "Termin buchen – Dentalhygiene oder Bleaching in Zürich", seoBeschreibung: "Wunschtermin für Dentalhygiene oder Bleaching bei WHITE SMYLE Zürich Altstetten: online über Cituro buchen oder anrufen: 043 931 78 74.",
  hero: { variante: "seite", titel: "Ihr Wunschtermin für Dentalhygiene oder Bleaching", text: "Online buchen über den externen Dienst Cituro – oder anrufen, SMS oder WhatsApp an 076 460 38 10. Laut Praxis sind auch kurzfristige Termine möglich.", knopf: BUCHEN, zweiterKnopf: { titel: "Kontakt und Anfahrt", ziel: "/kontakt/" }, bild: bild("zahnreinigung", "Dentalhygienikerin bei der Behandlung") },
  bild: bild("zahnreinigung", "Dentalhygienikerin bei der Behandlung"), alteUrls: ["/termin.html", "/online-termin.html"], quelle: "whitesmyle.ch/termin.html, /online-termin.html", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    b("ablaufBaustein", { titel: "So kommen Sie zu Ihrem Termin", schritte: [
      { _key: "t1", titel: "Angebot wählen", text: "Dentalhygiene, Bleaching oder das Kombipaket – die Voraussetzungen stehen bei jedem Angebot. Unsicher? Die Praxis berät Sie telefonisch." },
      { _key: "t2", titel: "Online buchen", text: "Der Knopf «Termin online buchen» öffnet die Buchungsseite von Cituro in einem neuen Tab. Dort wählen Sie Leistung und Zeit; es gelten die Datenschutzbestimmungen von Cituro." },
      { _key: "t3", titel: "Oder anrufen", text: "043 931 78 74 (Praxis) oder 076 460 38 10 (auch SMS und WhatsApp). Öffnungszeiten: Di–Do 11–19 Uhr, Fr 9–13 Uhr, Sa nach Vereinbarung." },
      { _key: "t4", titel: "Termin einhalten", text: "Verlegungen oder Absagen bitte mindestens 48 Stunden im Voraus innerhalb der Praxis-Arbeitszeiten – sonst wird der volle Preis verrechnet (AGB)." },
    ] }),
    hinweis(`Die Online-Buchung ist ein externer Dienst (Cituro, app.cituro.com). Diese Demo enthält keine eigene Terminverwaltung und zeigt keine freien Termine an. Beim Öffnen der Buchungsseite werden Daten an Cituro übertragen; Angaben dazu finden Sie in der [Datenschutzerklärung](/datenschutz/).`, "info"),
    b("kontaktBaustein", { titel: "Kontakt", mitFormular: true, mitKarte: false }),
  ],
};

const kontakt = {
  slug: "kontakt", art: "seite", titel: "Kontakt und Standort", teaser: "Buckhauserstrasse 17, 8048 Zürich Altstetten – Praxis im Innenhof, 100 m von der Tramhaltestelle Kappeli, gratis Parkplätze.",
  einleitung: "WHITE SMYLE dental, Praxis für Dentalhygiene und Bleaching, Buckhauserstrasse 17 (Ecke Badenerstrasse), 8048 Zürich. Wir kümmern uns um Ihre Wünsche.",
  seoTitel: "Kontakt und Standort – WHITE SMYLE Zürich Altstetten", seoBeschreibung: "WHITE SMYLE dental, Buckhauserstrasse 17, 8048 Zürich: 043 931 78 74, 076 460 38 10 (SMS/WhatsApp), kontakt@whitesmyle.ch. Tram 2 Kappeli, gratis Parkplätze.",
  hero: { variante: "seite", titel: "Kontakt und Standort", text: "Buckhauserstrasse 17, 8048 Zürich Altstetten – die Praxis liegt im grünen Innenhof des Geschäftshauses. Telefon 043 931 78 74.", knopf: BUCHEN, bild: bild("standort-schaufenster", "Schaufenster der Praxis WHITE SMYLE") },
  bild: bild("standort-schaufenster", "Schaufenster der Praxis WHITE SMYLE"), alteUrls: ["/kontakt.html", "/standort.html"], quelle: "whitesmyle.ch/kontakt.html, /standort.html", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    b("kontaktBaustein", { titel: "So erreichen Sie uns", mitFormular: true, mitKarte: true, anfahrt: pt(`## Anfahrt

Sie finden uns an der Badenerstrasse, Ecke Buckhauserstrasse. Der Eingang ins Geschäftshaus Buckhauserstrasse 17 führt nur zum Briefkasten – die Praxis liegt im grünen Innenhof, Eingang im Rückgebäude.

- **Tram:** Linie 2, Haltestelle Kappeli, 100 Meter entfernt
- **Bus:** Linien 89 und 95 ab S-Bahnhof Altstetten bis Letzipark West, 200 Meter entfernt
- **Auto:** gratis Tiefgarage direkt im Haus oder Stellplätze vor dem Haus (Besucherparkplätze)`), anfahrtBilder: [
      bild("standort-luft", "Luftbild mit Markierung der Buckhauserstrasse 17", "Lage an der Badenerstrasse, Ecke Buckhauserstrasse"),
      bild("standort-17", "Eingang des Geschäftshauses mit der Nummer 17", "Eingang Buckhauserstrasse 17 (hier nur Briefkasten)"),
      bild("standort-eingang", "Schaufenster mit Praxisbeschriftung", "Eingang im Rückgebäude / Innenhof"),
      bild("standort-tram", "Tramhaltestelle Kappeli", "Tram 2, Haltestelle Kappeli"),
      bild("standort-bus", "Bushaltestelle Letzipark West", "Bus 89 und 95, Letzipark West"),
      bild("standort-garage", "Einfahrt zur Tiefgarage", "Gratis Tiefgarage im Haus"),
    ] }),
    hinweis(`Das Kontaktformular der bisherigen Website enthielt einen Datei-Upload. Auf dieser Demo gibt es bewusst keinen Upload und keinen Versand über die Website: Das Formular bereitet nur eine E-Mail in Ihrem eigenen Mailprogramm vor. Bitte senden Sie keine Gesundheitsangaben, Befunde oder Fotos per E-Mail – besprechen Sie Medizinisches telefonisch oder im Termin.`, "info"),
  ],
};

const team = {
  slug: "team", art: "seite", titel: "Team", teaser: "Ihr WHITE SMYLE Team: Tünde Obenauer, dipl. Dentalhygienikerin HF, und Andreas Obenauer, Praxisleitung.",
  einleitung: "Ihr WHITE SMYLE Team – lachen war noch nie einfacher.",
  seoTitel: "Team – WHITE SMYLE dental Zürich", seoBeschreibung: "Das Team von WHITE SMYLE dental: Tünde Obenauer, Dipl. Dentalhygienikerin HF, Bleaching-Spezialistin und Leitung Dentalhygiene; Andreas Obenauer, Praxisleitung.",
  alteUrls: ["/team.html"], quelle: "whitesmyle.ch/team.html, /impressum.html", pruefstatus: "uebernommen",
  bausteine: [
    b("teamBaustein", { titel: "Das Team" }),
    text(`## Über die Praxis

Die Dentalhygiene bei WHITE SMYLE wird ausschliesslich durch die dipl. Dentalhygienikerin HF durchgeführt – keine Prophylaxeassistentin. Tünde Obenauer verfügt laut Praxis über mehr als 30 Jahre Berufserfahrung und besitzt die Bewilligung der Gesundheitsdirektion Zürich zur selbständigen Berufsausübung für Dentalhygiene. Es gelten die Berufsordnung der Gesundheitsdirektion Zürich und das Hygienekonzept Swissmedic.

Die bisherige Website erwähnt an einzelnen Stellen «Zahnarzt» und zahnärztliche Leistungen (z. B. Implantate, Kontrollen). Auf der Teamseite ist jedoch kein Zahnarzt aufgeführt; Karieskontrollen durch die Dentalhygienikerin ersetzen laut AGB nicht die jährliche Kontrolle durch den Zahnarzt. Diese Demo stellt WHITE SMYLE deshalb als Praxis für Dentalhygiene und Bleaching dar – die Praxis bestätigt das Leistungsspektrum.`, { breite: "schmal" }),
    b("medienstimmenBaustein", { titel: "WHITE SMYLE in den Medien" }),
    aufruf({ titel: "Lernen Sie uns kennen", text: "Vereinbaren Sie Ihren Dentalhygiene- oder Bleaching-Termin.", zweiterKnopf: { titel: "Kundenmeinungen lesen", ziel: "/kundenmeinungen/" } }),
  ],
};

const meinungen = {
  slug: "kundenmeinungen", art: "seite", titel: "Kundenmeinungen", teaser: "Erfahrungen von Patientinnen, Patienten und Kunden, die die Praxis gerne teilt – wörtlich übernommen.",
  einleitung: "Erfahrungen von Patientinnen, Patienten und Kunden, welche wir gerne mit Ihnen teilen möchten.",
  seoTitel: "Kundenmeinungen – WHITE SMYLE Zürich", seoBeschreibung: "Was Kundinnen und Kunden über Dentalhygiene und Bleaching bei WHITE SMYLE sagen – Erfahrungsberichte von der bisherigen Website, wörtlich übernommen.",
  alteUrls: ["/kundenmeinungen.html"], quelle: "whitesmyle.ch/kundenmeinungen.html, Startseite, /bleaching.html, /kombiangebote.html", pruefstatus: "uebernommen",
  bausteine: [
    b("kundenmeinungenBaustein", { titel: "Ich gehe zu WHITE SMYLE …", darstellung: "wand", meinungen: ["km-kurz-peter", "km-kurz-valentina", "km-kurz-beat", "km-kurz-jessica", "km-kurz-mila", "km-kurz-urs", "km-kurz-nicole", "km-kurz-lara", "km-kurz-benjamin", "km-kurz-daniel", "km-kurz-sarah"], quellenHinweis: "Kurzstatements von whitesmyle.ch/kundenmeinungen.html (Textliste und Kundengrafiken), wörtlich." }),
    b("kundenmeinungenBaustein", { titel: "Erfahrungsberichte", darstellung: "wand", meinungen: ["km-daniel", "km-elvira", "km-nicolas", "km-livia", "km-marco", "km-alfred", "km-diana", "km-pascal", "km-esra", "km-otto", "km-cindy", "km-marcel", "km-alessia", "km-veronika", "km-samira", "km-oliver", "km-carla", "km-valerio", "km-susanne", "km-adrian", "km-martina", "km-anja", "km-danijela", "km-adriano", "km-angie", "km-stefan", "km-michelle", "km-lucia"] }),
    hinweis(`Einige Berichte nennen Leistungen, die auf der aktuellen Preisliste nicht mehr stehen (Soft Bleaching, ZOOM Bleaching) oder eine frühere Namensform der Dentalhygienikerin (Frau Tauber). Die Texte sind unverändert übernommen; welche Leistungen heute angeboten werden, steht in der [Preisübersicht](/preise/).`, "info"),
    aufruf({ titel: "Testen auch Sie uns", text: "Vereinbaren Sie Ihre Dentalhygiene oder Ihr Bleaching.", zweiterKnopf: { titel: "Kontakt", ziel: "/kontakt/" } }),
  ],
};

const medien = {
  slug: "medienstimmen", art: "seite", titel: "Medienstimmen", teaser: "Medienbeiträge und Interviews mit WHITE SMYLE – als Verweise auf die Originale.",
  einleitung: "Medienkommentare zu WHITE SMYLE: Beiträge über die Praxis und Frau Obenauer, dipl. Dentalhygienikerin HF. Fremde Artikel werden hier nur verlinkt beziehungsweise als von der Praxis bereitgestelltes Dokument angeboten.",
  seoTitel: "Medienstimmen – WHITE SMYLE", seoBeschreibung: "Medienbeiträge über WHITE SMYLE: Tages-Anzeiger-Artikel zur Dentalhygiene, Unternehmensbeitrag «Gesund und weiss», Quartier-Echo.",
  alteUrls: ["/medienstimmen.html"], quelle: "whitesmyle.ch/medienstimmen.html", pruefstatus: "uebernommen",
  bausteine: [
    b("medienstimmenBaustein", { titel: "Beiträge" }),
    b("downloadsBaustein", { titel: "Dokumente", downloads: ["download-quartier-echo"] }),
  ],
};

const tests = {
  slug: "tests", art: "fragebogen", titel: "Fragen zur Vorbereitung", teaser: "Die fünf Fragebögen der Praxis (Dentalhygiene, Bleaching, Knirschen, Mundgeruch, Zahnpasta) – hier nur zum Lesen.",
  einleitung: "Auf der bisherigen Website bietet die Praxis fünf «Gratis-Tests» an: Formulare, deren Antworten per E-Mail an die Praxis gehen und dort persönlich ausgewertet werden. Diese Demo zeigt die Fragen zum Lesen – ohne Eingabe, ohne Auswertung und ohne Speicherung.",
  seoTitel: "Fragen zur Vorbereitung – Dentalhygiene-, Bleaching-, Mundgeruch-Test", seoBeschreibung: "Die Fragebögen von WHITE SMYLE zu Dentalhygiene, Bleaching, Zahnknirschen, Mundgeruch und Zahnpasta – was die Praxis vorab klärt. Keine Datenerfassung auf dieser Demo.",
  alteUrls: ["/tests.html"], quelle: "whitesmyle.ch/tests.html", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    hinweis(`Die Fragebögen sind keine Diagnose und ersetzen keine persönliche Untersuchung. Wer die Fragen tatsächlich beantworten und von der Praxis auswerten lassen möchte, kann das weiterhin auf whitesmyle.ch tun (externe Übermittlung per E-Mail an die Praxis) – oder die Punkte direkt im Termin besprechen.`, "medizinisch"),
    b("fragebogenListeBaustein", { titel: "Die fünf Fragebögen" }),
    aufruf({ titel: "Lieber direkt besprechen?", text: "Buchen Sie einen Termin oder rufen Sie an: 043 931 78 74.", zweiterKnopf: { titel: "Kontakt", ziel: "/kontakt/" } }),
  ],
};
const testSeite = (id, slug, titel, teaser, alt) => ({
  slug: `tests/${slug}`, art: "fragebogen", titel, teaser, einleitung: `Diese Fragen stellt die Praxis im Fragebogen «${titel}». Hier nur zum Lesen – ohne Eingabe, Auswertung oder Speicherung.`,
  seoTitel: `${titel} – Fragen zur Vorbereitung`, seoBeschreibung: teaser, alteUrls: [alt], quelle: `whitesmyle.ch${alt}`, pruefstatus: "sprachlich-angepasst",
  bausteine: [b("fragebogenBaustein", { fragebogen: id, titel }), aufruf({ titel: "Direkt besprechen", text: "Termin buchen oder anrufen: 043 931 78 74.", zweiterKnopf: { titel: "Alle Fragebögen", ziel: "/tests/" } })],
});

const ratgeber = {
  slug: "ratgeber", art: "seite", titel: "Ratgeber", teaser: "Wissen rund um Dentalhygiene, Bleaching und Mundgesundheit – die Ratgeber der Praxis.",
  einleitung: "Die Ratgeber der Praxis zu Zahnbleaching, Dentalhygiene, Mundgeruch, Karies, Zahnfleisch, Schwangerschaft, Zahnknirschen und ganzheitlicher Mundgesundheit. Die Texte stammen von der bisherigen Website und geben die Sicht der Praxis wieder; sie ersetzen keine Beratung im Termin.",
  seoTitel: "Ratgeber Dentalhygiene und Bleaching – WHITE SMYLE", seoBeschreibung: "Ratgeber von WHITE SMYLE Zürich: Zahnbleaching, Dentalhygienikerin oder Prophylaxeassistentin, Mundgeruch, Karies, Gingivitis, Schwangerschaft, Zahnknirschen.",
  alteUrls: ["/aktuelle-dental-tipps.html"], quelle: "whitesmyle.ch (Navigation)", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    b("ratgeberListeBaustein", { titel: "Alle Ratgeber" }),
    b("linkkartenBaustein", { titel: "Ausserdem", spalten: 3, karten: [
      { _key: "l1", titel: "Fragen zur Vorbereitung", text: "Die fünf Fragebögen der Praxis zu Dentalhygiene, Bleaching, Knirschen, Mundgeruch und Zahnpasta – zum Lesen.", link: { titel: "Zu den Fragebögen", ziel: "/tests/" } },
      { _key: "l2", titel: "Fragen und Antworten zur Dentalhygiene", text: "Verständliche Antworten zu Zahnstein, Zahnfleischbluten, Airflow, Kosten und Häufigkeit.", link: { titel: "Zu den Antworten", ziel: "/dentalhygiene/fragen-und-antworten/" } },
      { _key: "l3", titel: "Zahnpastashop", text: "Der externe Webshop der Praxisbetreiber mit natürlichen Zahnpasten, Mundspülungen und Zubehör. Preise und Bedingungen dort.", link: { titel: "Shop öffnen", ziel: "https://www.zahnpastashop.ch/", extern: true } },
    ] }),
  ],
};

const zahnpflege = {
  slug: "ratgeber/natuerliche-zahnpflege", art: "ratgeber", titel: "Natürliche Zahnpflege", teaser: "Warum die Praxis auf natürliche Zahnpasten mit Enzymen, Hydroxylapatit und ätherischen Ölen setzt.",
  einleitung: "Alles, was täglich in Ihren Mund kommt, sollte sauber, sicher und sinnvoll sein.",
  seoTitel: "Natürliche Zahnpflege – gesunde Zahnpasten kurz erklärt", seoBeschreibung: "Natürliche Zahnpflege laut WHITE SMYLE: Enzyme, Hydroxylapatit als Alternative zu Fluorid, ätherische Öle. Fragen und Antworten zu gesunden Zahnpasten.",
  bild: bild("splat-zahnpasten", "Zahnpasten-Tuben der Marke SPLAT"), alteUrls: ["/"], quelle: "whitesmyle.ch (Startseite, Abschnitt «Natürliche Zahnpflege»)", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    text(`Dennoch greifen viele noch zu Zahnpasten mit unnötiger Chemie. Dabei ist der Mund ein sensibles Mikrobiom, das man nicht aus dem Gleichgewicht bringen sollte. Moderne Zahnpflege setzt deshalb nach Ansicht der Praxis auf natürliche, gut erforschte Inhaltsstoffe: Enzyme, die Beläge sanft lösen (ohne Kratzen), Hydroxylapatit zur Stärkung des Zahnschmelzes – auch als Alternative zu Fluorid – und ätherische Öle für Frische statt künstlicher Zusätze.

Natürlich und wissenschaftlich muss kein Widerspruch sein. Im Gegenteil: Die beste Zahnpflege verbindet beides. Kurz gesagt: Was in Ihren Mund kommt, sollte Ihnen auch wirklich guttun.`),
    faq("Gesunde Zahnpasten kurz erklärt", [
      ["Warum sollte ich auf meine Zahnpasta achten?", "Weil Sie sie täglich verwenden – und alles, was in Ihren Mund kommt, sollte möglichst sauber und verträglich sein."],
      ["Was macht eine Zahnpasta «gesund»?", "Natürliche Inhaltsstoffe, die wirksam reinigen, ohne das orale Mikrobiom zu stören."],
      ["Geht Zahnpflege auch ohne Fluorid?", "Ja – zum Beispiel mit Hydroxylapatit, einem Stoff, der dem natürlichen Zahnschmelz sehr ähnlich ist und ihn unterstützt (Angabe der Praxis)."],
      ["Wie werden die Zähne sauber ohne aggressive Schleifstoffe?", "Durch Enzyme, die Zahnbelag sanft auflösen, statt ihn mechanisch «wegzuschrubben»."],
      ["Warum ätherische Öle statt Chemie?", "Sie sorgen für Frische und können antibakteriell wirken – ganz ohne unnötige synthetische Zusätze."],
      ["Natürlich oder wissenschaftlich – was ist besser?", "Die Kombination macht es: natürliche Inhaltsstoffe, deren Wirkung auch wissenschaftlich sinnvoll ist."],
    ]),
    b("aufrufBaustein", { variante: "karte", titel: "Ausgewählte natürliche Zahnpasten", text: "Im Zahnpastashop, dem externen Webshop der Praxisbetreiber. Preise, Bestände und Versandbedingungen finden Sie dort.", knopf: { titel: "Zum Zahnpastashop", ziel: "https://www.zahnpastashop.ch/zahnpasten.html", extern: true }, zweiterKnopf: { titel: "Ratgeber Hilfsmittel", ziel: "/ratgeber/hilfsmittel/" } }),
  ],
};

export default [preise, aktion, termin, kontakt, team, meinungen, medien, tests,
  testSeite("fb-dentalhygiene", "dentalhygiene-test", "Dentalhygiene-Test", "Sollte ich wieder einmal zur Dentalhygiene? Die Fragen der Praxis zum Handlungsbedarf.", "/dentalhygiene-test.html"),
  testSeite("fb-bleaching", "bleaching-test", "Bleaching-Test", "Welcher Bleaching-Typ sind Sie? Wünsche und zahnmedizinisches Profil – die Fragen der Praxis.", "/bleaching-test.html"),
  testSeite("fb-knirschen", "zahnknirsch-test", "Zahnknirsch-Test", "Beeinflusst Knirschen Ihre Zahngesundheit? Anzeichen, die die Praxis abfragt.", "/zahn-knirsch-test.html"),
  testSeite("fb-mundgeruch", "mundgeruch-test", "Mundgeruch-Test", "Anzeichen von Mundgeruch erkennen – die Fragen der Praxis zu Situation und Gewohnheiten.", "/mundgeruch-test.html"),
  testSeite("fb-zahnpasta", "zahnpasta-test", "Zahnpasta-Test", "Welche Zahnpaste passt zu Ihren Zähnen? Die Fragen der Praxis für eine Empfehlung.", "/zahnpasta-test.html"),
  ratgeber, zahnpflege];
