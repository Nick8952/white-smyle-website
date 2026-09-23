import { b, text, faq, hinweis, aufruf, bild } from "../pt.mjs";
const BUCHEN = { titel: "Termin online buchen", ziel: "https://app.cituro.com/booking/2814276", extern: true };

const dentalhygiene = {
  slug: "dentalhygiene", art: "leistung", titel: "Dentalhygiene in Zürich Altstetten",
  teaser: "Professionelle Dentalhygiene durch die dipl. Dentalhygienikerin HF – deutlich mehr als eine Zahnreinigung.",
  einleitung: "Dentalhygiene ist der wichtigste Schritt für langfristig gesunde Zähne und ein strahlendes Lächeln. Bei WHITE SMYLE erhalten Sie eine gründliche, schonende und individuell abgestimmte Behandlung, die weit über eine einfache Zahnreinigung hinausgeht.",
  seoTitel: "Dentalhygiene Zürich Altstetten – professionelle Zahnreinigung",
  seoBeschreibung: "Dentalhygiene in Zürich: gründliche Reinigung auch unter dem Zahnfleisch, Schutz vor Parodontitis, Beratung. CHF 175.– durch dipl. Dentalhygienikerin HF. Termin buchen.",
  bild: bild("dh-zuerich", "Dentalhygienikerin behandelt eine Patientin auf dem Behandlungsstuhl"),
  hero: { variante: "seite", titel: "Dentalhygiene in Zürich Altstetten", text: "Dentalhygiene ist der wichtigste Schritt für langfristig gesunde Zähne und ein strahlendes Lächeln. Bei WHITE SMYLE erhalten Sie eine gründliche, schonende und individuell abgestimmte Behandlung, die weit über eine einfache Zahnreinigung hinausgeht.", knopf: BUCHEN, zweiterKnopf: { titel: "Preise ansehen", ziel: "/preise/" }, bild: bild("dh-zuerich", "Dentalhygienikerin behandelt eine Patientin auf dem Behandlungsstuhl") },
  alteUrls: ["/dentalhygiene.html", "/dentalhygienezurich.html", "/zahnreinigung-zuerich.html"], quelle: "whitesmyle.ch/dentalhygiene.html, /dentalhygienezurich.html, /zahnreinigung-zuerich.html (zusammengeführt)", pruefstatus: "sprachlich-angepasst",
  mitInhaltsverzeichnis: true,
  bausteine: [
    hinweis(`**Kurz erklärt:** Dentalhygiene ist eine medizinische Behandlung zur Vorbeugung von Karies, Gingivitis und Parodontitis – und deutlich umfassender als eine klassische Zahnreinigung. Die Karieskontrolle durch die Dentalhygienikerin ersetzt nicht die jährliche Kontrolle durch den Zahnarzt.`, "medizinisch"),
    b("vergleichBaustein", { anker: "unterschied", titel: "Dentalhygiene oder Zahnreinigung – der Unterschied", einleitung: "Unterschiede in Ausbildung, Tiefe und Wirkung der Behandlung.", spalten: [
      { _key: "dh", titel: "Dentalhygiene", untertitel: "bei WHITE SMYLE", hervorgehoben: true, punkte: ["Durchführung durch ausgebildete Dentalhygienikerin (3-jährige Ausbildung)", "Tiefgehende Reinigung auch unter dem Zahnfleisch", "Entfernung von Zahnstein, Bakterien und Belägen in kritischen Bereichen", "Behandlung und Vorbeugung von Parodontitis", "Medizinischer Fokus auf langfristige Zahngesundheit", "Ergebnis: nachhaltig gesunde Zähne und gesundes Zahnfleisch"] },
      { _key: "zr", titel: "Zahnreinigung (Prophylaxe)", untertitel: "oft durch Prophylaxeassistentin", punkte: ["Durchführung oft durch Prophylaxeassistentin (ca. 3 Wochen Ausbildung)", "Reinigung hauptsächlich an der Zahnoberfläche", "Entfernung von sichtbaren Belägen und Verfärbungen", "Fokus auf Ästhetik und kurzfristige Sauberkeit", "Ergebnis: saubere Zähne – aber weniger Tiefenwirkung"] },
    ], fazit: "Für langfristig gesunde Zähne reicht eine oberflächliche Zahnreinigung nicht aus. Nur die regelmässige Dentalhygiene entfernt Bakterien auch dort, wo Krankheiten entstehen. Mehr dazu im Ratgeber «Dentalhygienikerin oder Prophylaxeassistentin»." }),
    b("leistungenBaustein", { anker: "angebot", titel: "Unser Behandlungsangebot Dentalhygiene", einleitung: "Medizinische Dentalhygiene durch die Dentalhygienikerin. Preise gemäss Preisliste; Zusatzversicherungen übernehmen häufig einen Teil der Kosten – WHITE SMYLE dental ist Krankenkassen anerkannt: Fragen Sie nach Ihrem Rückforderungsbeleg.", leistungen: ["leistung-dentalhygiene", "leistung-frontpolish", "leistung-kinder"], darstellung: "liste" }),
    b("ablaufBaustein", { anker: "ablauf", titel: "Was bei einer Dentalhygiene bei WHITE SMYLE gemacht wird", einleitung: "Eine professionelle Dentalhygiene umfasst mehrere Schritte. Dauer: ca. 45 bis 90 Minuten.", schritte: [
      { _key: "s1", titel: "Untersuchung", text: "Untersuchung von Zähnen und Zahnfleisch; Karies- und Zahnfleischkontrolle mit der Sonde.", bild: bild("dh-schritt-3", "Kontrolle der Zähne mit der Sonde") },
      { _key: "s2", titel: "Ultraschall-Reinigung", text: "Tiefgehende Entfernung von Zahnstein und Bakterien mit Ultraschall – auch zwischen Zahn und Zahnfleisch.", bild: bild("dh-schritt-1", "Ultraschall-Reinigung der Zähne") },
      { _key: "s3", titel: "Handinstrument", text: "Feine Dentalhygiene-Reinigung mit dem Handinstrument (auf Wunsch auch ganz ohne Ultraschall).", bild: bild("dh-schritt-2", "Reinigung mit dem Handinstrument") },
      { _key: "s4", titel: "Zahnzwischenräume", text: "Intensive Reinigung der Zahnzwischenräume mit Handinstrument und Zahnseide.", bild: bild("dh-schritt-5", "Reinigung der Zahnzwischenräume mit Zahnseide") },
      { _key: "s5", titel: "Airflow", text: "Reinigung der Zahnoberfläche und Zahnzwischenräume mit AirFlow (Wasser-Luft-Pulverstrahl).", bild: bild("dh-schritt-6", "Airflow-Reinigung der Zahnoberfläche") },
      { _key: "s6", titel: "Politur", text: "Politur der Zähne; auf Wunsch Zahnschmelzschutz.", bild: bild("dh-schritt-4", "Politur der Zähne") },
      { _key: "s7", titel: "Beratung und Instruktion", text: "Individuelle Beratung zur optimalen Mundpflege, Ernährung und Vorbeugung bei Knirschen und Pressen.", bild: bild("dh-instruktion", "Beratung zur Zahnpflege mit Zahnbürste") },
      { _key: "s8", titel: "Ergebnis", text: "Saubere Zähne und Zahnzwischenräume, Bakterienherde zwischen Zahn und Zahnfleisch entfernt.", bild: bild("dh-abschluss", "Lachende Patientin nach der Dentalhygiene") },
    ] }),
    text(`## Was ist eine Airflow-Anwendung?

Airflow ist eine sanfte, moderne Reinigungsmethode für die Zähne. Mit einem warmen Wasser-Luft-Pulverstrahl werden Zahnbeläge, Verfärbungen und Bakterien schonend entfernt – auch an schwer erreichbaren Stellen.

- **Für Empfindliche:** besonders schonend und nahezu schmerzfrei
- **Für Ästhetik-Orientierte:** entfernt auch hartnäckige Verfärbungen für ein sichtbar helleres Lächeln
- **Für Gesundheitsbewusste:** reduziert Bakterien gründlich – wichtig für Zahnfleisch und Mundgesundheit

## Dentalhygiene und Ästhetik

Neben der Gesundheit verbessert die Dentalhygiene auch das Aussehen der Zähne – speziell durch die Beseitigung von Zahnbelag und Zahnstein mit Ultraschall, Handinstrumenten und Airflow. Das Ergebnis: glattere Zahnoberflächen, Entfernung von Verfärbungen, ein natürlich helleres Lächeln. Für tiefere Verfärbungen kann zusätzlich ein [Bleaching](/bleaching/) sinnvoll sein.`, { anker: "airflow", titel: "Airflow und Ästhetik", bild: bild("dh-476", "Nahaufnahme einer Dentalhygiene-Behandlung"), bildPosition: "rechts" }),
    b("stufenBaustein", { anker: "phasen", titel: "Die Phasen des Zahnverfalls und Massnahmen dagegen", einleitung: "Darstellung der Praxis von der bisherigen Website. Die Beurteilung im Einzelfall erfolgt in der Untersuchung.", stufen: [
      { _key: "p1", titel: "Gesunder Zahn", untertitel: "ohne Beschwerden", bild: bild("zahnaufbau-1", "Schemazeichnung eines gesunden Zahns"), anzeichen: ["keine"], massnahmen: ["Tägliche Zahnpflege", "1–2 Mal jährlich Dentalhygiene durch Dentalhygienikerin oder Prophylaxeassistentin", "Regelmässige Zahnarztkontrolle"] },
      { _key: "p2", titel: "Leichte Gingivitis", untertitel: "Zahnfleischentzündung", bild: bild("zahnaufbau-2", "Schemazeichnung eines Zahns mit leichter Zahnfleischentzündung"), anzeichen: ["Geschwollenes und entzündetes Zahnfleisch", "4–5 mm Zahntaschen", "Zahnstein entsteht in der Tiefe, der selbst nicht mehr beseitigt werden kann", "Beginnende Knochen- und Zahnfleischauflösung (Parodontitis)", "Zahnfleischbluten beim Putzen"], massnahmen: ["Tägliche Zahnpflege intensivieren", "Mehr Zahnseide, Mundspülung, Zahnpflegekaugummi, Interdentalbürstchen", "2 Mal jährlich professionelle Dentalhygiene nur durch Dentalhygienikerin, bis die Entzündung weg ist", "Regelmässige Zahnarztkontrolle"] },
      { _key: "p3", titel: "Mittelschwere Gingivitis", untertitel: "beginnende Parodontitis", bild: bild("zahnaufbau-3", "Schemazeichnung eines Zahns mit beginnender Parodontitis"), anzeichen: ["Deutliche Auflösung des Knochens (Halteapparat des Zahns)", "Tiefer, harter, unter dem Zahnfleisch liegender Zahnstein", "6–8 mm tiefe Zahntaschen", "Starke Blutung und Mundgeruch"], massnahmen: ["Tägliche Zahnpflege intensivieren", "Mehr Zahnseide, Mundspülung, Zahnpflegekaugummi, Interdentalbürstchen", "Alle 3–4 Monate Dentalhygiene nur durch Dentalhygienikerin, bis die Entzündung verschwunden ist", "Schmerzhafte Tiefenreinigung, oft mit Spritze durch den Zahnarzt", "Regelmässige Zahnarztkontrolle"] },
      { _key: "p4", titel: "Schwere Parodontitis", bild: bild("zahnaufbau-4", "Schemazeichnung eines Zahns mit schwerer Parodontitis"), anzeichen: ["Starker Knochenabbau (Halteapparat des Zahns)", "9–12 mm tiefe Zahntaschen", "Schwer entzündetes, zerstörtes Zahnfleisch und Knochen, oft bis zur Wurzelspitze", "Oft Eiterbildung und starker Mundgeruch", "Extrem starke Blutung"], massnahmen: ["Tägliche Zahnpflege intensivieren", "Mehr Zahnseide, Mundspülung, Zahnpflegekaugummi, Interdentalbürstchen", "Intensive Parodontitisbehandlung, meist 4 Sitzungen hintereinander, bis die Entzündung verschwunden ist", "Alle 3–4 Monate Dentalhygiene nur durch Dentalhygienikerin", "Zahnärztliche Behandlungen notwendig: Parodontitisbehandlung, Wurzelbehandlung, Ziehen des Zahns, Implantat oder Brücke"] },
    ] }),
    faq("Häufige Fragen zur Dentalhygiene", [
      ["Was ist Dentalhygiene?", `Die Dentalhygiene ist eine professionelle und medizinisch fundierte Reinigung der Zähne. Sie erreicht auch schwer zugängliche Stellen und Bereiche unter dem Zahnfleisch, in den Zahnzwischenräumen, unter Brücken und bei Kronen, die mit normaler Zahnpflege nicht ausreichend gereinigt werden können.

Ziele der Dentalhygiene:
- Entfernung von Zahnstein und Plaque
- Vorbeugung von Zahnfleischentzündungen
- Schutz vor Parodontitis
- Verbesserung der Mundgesundheit
- Beseitigung von bakteriellem Mundgeruch
- Ästhetisch sauberere und hellere Zähne`],
      ["Warum ist Dentalhygiene so wichtig?", `Auch bei gründlichem Zähneputzen bleiben Bakterien in schwer erreichbaren Bereichen zurück – besonders unter dem Zahnfleisch, unter Brücken und Kronen und in den Zahnzwischenräumen. Diese Bakterien sind die Hauptursache für Parodontitis, eine chronische Entzündung, die unbehandelt längerfristig zu Zahnverlust führen kann.

Vorteile der regelmässigen Dentalhygiene: gesünderes Zahnfleisch, frischer Atem, weniger Kariesrisiko, Früherkennung von Problemen, langfristiger Zahnerhalt.`],
      ["Wie oft sollte man zur Dentalhygiene?", "Die Häufigkeit hängt von Ihrer individuellen Situation ab. Empfehlung der Praxis: 1–2 Mal pro Jahr bei gesunden Zähnen, 3–4 Mal pro Jahr bei Parodontitis oder erhöhtem Risiko wie bei Raucherinnen und Rauchern."],
      ["Für wen ist Dentalhygiene geeignet?", `Dentalhygiene ist besonders wichtig für:
- Erwachsene ab 18 Jahren
- Seniorinnen und Senioren wegen eventueller Kronen, Brücken oder Implantate
- Patientinnen und Patienten mit empfindlichem Zahnfleisch oder Zähnen
- Personen mit Parodontitis (Zahnfleischentzündung)
- Jugendliche und Erwachsene beim Tragen von Zahnspangen oder Zahnschienen
- Raucherinnen und Raucher – erhöhtes Risiko für Zahnfleisch und Zähne`],
      ["Was kostet die Dentalhygiene in Zürich?", "Die Kosten variieren je nach Aufwand und Dauer der Behandlung. Richtpreise: ca. CHF 170 bis 220 pro Sitzung in vielen Praxen; bei WHITE SMYLE CHF 175.–. Zusatzversicherungen übernehmen häufig einen Teil der Kosten, die Grundversicherung meist nicht. Siehe auch die [Preise](/preise/)."],
      ["Ist Dentalhygiene schmerzhaft?", "In der Regel nicht. Bei empfindlichem Zahnfleisch kann es kurzfristig unangenehm sein. Empfindliche Stellen werden individuell berücksichtigt; auf Wunsch wird ganz ohne Ultraschall mit dem Handinstrument gereinigt."],
      ["Wie lange dauert die Behandlung?", "Zwischen 45 und 90 Minuten, je nach Aufwand."],
      ["Dentalhygiene bei Parodontitis?", "Bei Parodontitis ist eine regelmässige Dentalhygiene unverzichtbar. Sie hilft, Entzündungen zu reduzieren, Bakterien zu entfernen und das Fortschreiten der Erkrankung zu stoppen. Mehr auf der Seite [Behandlung bei Parodontitis](/dentalhygiene/parodontitis/)."],
    ], { anker: "faq" }),
    text(`## Unsere Empfehlung für gesunde Zähne

- 1–2 Mal pro Jahr regelmässig Dentalhygiene
- 2 Mal pro Tag die Zähne putzen (am Abend besonders wichtig!)
- mindestens 2 Mal pro Woche Zahnseide, Zahnstocher oder Interdentalbürstchen benutzen
- Zucker vermeiden
- Für weisse Zähne ist der WHITE SMYLE Bleaching-Refresher ideal

**Ihre Vorteile in Zürich Altstetten:** individuelle Betreuung, schonende und sehr gründliche Behandlung, Beratung, die über das «Normale» hinausgeht, über 30 Jahre Erfahrung – zentral gelegen direkt an der Tramlinie 2 und mit Gratis-Parkplätzen.

Unsere Dentalhygienikerin Frau Obenauer, mit über 30 Jahren Berufserfahrung die «Zahnheldin» mit Herz und Hand: Sie macht nicht nur sauber, sie macht den Unterschied und bewahrt Ihr schönes Lachen.`, { anker: "empfehlung", titel: "Empfehlung", bild: bild("tuende-logo", "Tünde Obenauer, Leitung Dentalhygiene & Bleaching", "Tünde Obenauer, Leitung Dentalhygiene & Bleaching"), bildPosition: "rechts" }),
    aufruf({ titel: "Jetzt Dentalhygiene-Termin buchen", text: "Online über Cituro oder telefonisch unter 043 931 78 74. Termine Di–Do 11–19 Uhr, Fr 9–13 Uhr, Sa nach Vereinbarung.", zweiterKnopf: { titel: "Kombipaket mit Bleaching", ziel: "/kombipaket/" } }),
  ],
};

const kinder = {
  slug: "dentalhygiene/kinder", art: "leistung", titel: "Dentalhygiene für Kinder", teaser: "Gesunde Zähne von Anfang an: sanfte Zahnreinigung für Kinder ab etwa 6 Jahren, spielerische Anleitung und Motivation.",
  einleitung: "Eine gute Dentalhygiene bei Kindern ist die Grundlage für lebenslang gesunde Zähne. Bereits ab dem ersten Milchzahn beginnt die richtige Mundpflege – und genau hier unterstützen wir Sie und Ihr Kind professionell und spielerisch.",
  seoTitel: "Zahnreinigung für Kinder in Zürich – Dentalhygiene & Kariesprophylaxe", seoBeschreibung: "Kinder-Zahnreinigung in Zürich Altstetten: sanfte Dentalhygiene ab ca. 6 Jahren, Karieskontrolle, spielerische Putzanleitung. Tipps für Eltern und Zahnwechsel.",
  bild: bild("kinder-hero", "Drei lachende Kinder"), alteUrls: ["/dentalhygiene-kinder.html"], quelle: "whitesmyle.ch/dentalhygiene-kinder.html", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    text(`Kinderzähne sind besonders empfindlich und anfällig für Karies, da der Zahnschmelz noch nicht vollständig ausgereift ist. Deshalb ist eine frühzeitige Prophylaxe entscheidend.

## Warum ist Dentalhygiene bei Kindern so wichtig?

Milchzähne sind nicht nur «Platzhalter», sondern wichtig für die Sprachentwicklung, die richtige Zahnstellung und gesundes Kauen. Werden sie nicht richtig gepflegt, kann dies langfristige Folgen haben. Regelmässige Zahnreinigung und richtige Putzgewohnheiten reduzieren das Risiko für Karies und Zahnfleischprobleme deutlich.

## Was passiert bei der Zahnreinigung für Kinder?

Bei der professionellen Dentalhygiene für Kinder achten wir besonders auf eine sanfte und kindgerechte Behandlung:

- Entfernung von Plaque und Belägen
- Kontrolle auf Karies
- Spielerische Anleitung zum richtigen Zähneputzen
- Motivation für die tägliche Zahnpflege

Durch das Anfärben der Zähne sehen Kinder selbst, wo sie noch besser putzen können – ein wichtiger Lerneffekt. Die Plaque- und Zahnsteinentfernung wird sanft und einfühlsam gemacht. Danach wird bei der Karieskontrolle festgestellt, ob es Handlungsbedarf für einen Zahnarztbesuch gibt.

## Ab wann ist Dentalhygiene sinnvoll?

- Erste Zahnpflege: ab dem ersten Zahn
- Professionelle Zahnreinigung: ab ca. 6 Jahren
- Kontrolle: 1 Mal pro Jahr empfohlen

Zahnstein kann bereits ab dem 5.–6. Lebensjahr entstehen. Zahnreinigung 1 Mal pro Jahr genügt in den meisten Fällen; die Dauer der Behandlung beträgt ca. 30–45 Minuten.

## Spielerisch zu gesunden Zähnen

Kinder lernen am besten durch Spass und Vorbilder. Wird Zähneputzen als positives Ritual integriert, bleibt dieses Verhalten oft ein Leben lang bestehen. Unser Ziel ist es, dass Ihr Kind gerne zur Dentalhygiene kommt, selbstständig gut putzt und keine Angst vor Behandlungen hat. Unser Motto: «Mit Spass lernt man leichter.» Die lockere Atmosphäre in unserer Praxis – eine Oase ohne bohrende Geräusche – lässt die Anspannung vor der Zahnreinigung verschwinden.

### Tipps für gesunde Kinderzähne

- 2 Mal täglich Zähne putzen (ab dem 1. Zahn)
- Zucker nur zu Hauptmahlzeiten
- Eltern putzen nach (bis ca. 8 Jahre)
- Regelmässige Kontrollen`),
    text(`## Welcher bleibende Zahn kommt wann?

Bei Kindern kommen im Alter von etwa 6 Jahren die ersten bleibenden Zähne. Der Zahnschmelz, die äusserste Schicht des Zahns, ist bei diesen Zähnen besonders empfindlich. 20 Milchzähne fallen meist zwischen dem 6. und dem 18.–30. Lebensjahr aus und werden durch die bleibenden Zähne ersetzt.

Der erste bleibende Backenzahn, der ab dem 6. Lebensjahr kommt, verdient am meisten Aufmerksamkeit: Er versteckt sich beim Putzen hinter dem letzten Milchzahn und wird so meist übersehen. Es ist die Aufgabe der Eltern, das Kind darauf aufmerksam zu machen und mitzuhelfen, diesen Zahn zu putzen. Die Mundhygiene ist ab 6 Jahren besonders wichtig, damit sich die «neuen bleibenden Zähne» entwickeln können und lange gesund bleiben.

### Fissurenversiegelung / Kariesvorbeugung

Die Kauoberfläche der Backenzähne besteht besonders bei Kindern und Jugendlichen aus tiefen Grübchen (Fissuren), die sich mit einer Zahnbürste kaum reinigen lassen. Hier kann nach der Dentalhygiene, der gründlichen Säuberung und Vorbehandlung des Zahnes eine Versiegelung mit einem dünnen Kunststoff erfolgen. So kann eine Kariesinfektion grösstenteils verhindert werden.`, { anker: "zahnwechsel", titel: "Zahnwechsel", bild: bild("kinder-zahnwechsel", "Schema: welcher bleibende Zahn kommt in welchem Alter"), bildPosition: "rechts" }),
    text(`## Zahnpflege für Kinder und Jugendliche soll Spass machen

### Was sollten Eltern bei Säuglingen beachten?

Bereits bei Säuglingen ist es für die Zahngesundheit wichtig, dass das Kind nicht dauerhaft an Nuckelflaschen oder Ähnlichem saugt. Dieses «Dauernuckeln» kann durch die Saugwirkung die Entwicklung des Kiefers beeinträchtigen. Dies wirkt sich später nicht nur auf die Zahngesundheit aus, sondern kann auch Folgen für das Sprechen, die Gesichtsmimik und die Zahnstellung haben. Süsse Getränke aus der Babyflasche wie Kakao, Säfte oder mit Honig gesüsste Milch fördern die Kariesbildung. Im Gegensatz zum Nuckeln an Babyfläschchen beeinflusst das Stillen die Kieferentwicklung des Kindes positiv.

Ist das erste Milchzähnchen durchgebrochen, sollten Eltern ihrem Kind einmal täglich die Zähne putzen. Ab dem zweiten Geburtstag ist zweimal tägliches Zähneputzen sinnvoll. Lassen Sie Ihr Kind ruhig selbst putzen – bis zum Schulalter sollten Sie aber von allen Seiten noch einmal nachputzen.

### Zahnpasta und Zahnbürste

Eine weiche Kinderzahnbürste sowie eine möglichst natürliche Zahnpasta sind vorteilhaft, da Kleinkinder den Grossteil der Zahnpaste schlucken. Inhaltsstoffe wie Xylitol oder Hydroxylapatit (Zahnschmelz) zeigen nach Angaben der Praxis positive Wirkung und schützen vor Karies.

### Ernährung

Zuckerhaltige Lebensmittel nicht über den Tag verteilt naschen, sondern möglichst nur im Rahmen der Hauptmahlzeiten essen. Auch sehr saure Lebensmittel sollten nur sparsam auf dem Speisezettel stehen, denn die Säure macht den Zahn empfindlich. Süsses oder Saures gänzlich zu meiden, ist aber nicht notwendig.

### Prophylaxe in der Praxis

Kinderprophylaxe in der Praxis sollte ab dem 6. Lebensjahr regelmässig 1 Mal pro Jahr gemacht werden. Der Mundhygienestatus wird kontrolliert; meist werden die Zähne angefärbt – Plaque leuchtet dann rosa oder lila, und die kleinen Patientinnen und Patienten sehen, welche Zähne nicht ordentlich geputzt worden sind. Folgende Fragen werden mit Eltern und Kind individuell besprochen: Wie entsteht Karies? Warum ist das Zahnfleisch entzündet? Wie kann mein Kind die Mundhöhle besser pflegen? Wo versteckt sich Zucker? Ist Fluorid für mein Kind sinnvoll? Kann mein Kind seine Zähne schon alleine gut reinigen?`, { anker: "eltern", titel: "Für Eltern", breite: "schmal" }),
    faq("Häufige Fragen zur Zahnreinigung für Kinder", [
      ["Wie oft sollten Kinder zur Dentalhygiene?", "Einmal pro Jahr wird empfohlen. Bei erhöhtem Kariesrisiko auch häufiger."],
      ["Ab wann sollte mein Kind zum ersten Mal zur Zahnreinigung?", "Sobald bleibende Zähne kommen (ca. ab 6 Jahren) oder bei sichtbaren Belägen."],
      ["Ist eine professionelle Zahnreinigung für Kinder sinnvoll?", "Ja, sie entfernt Beläge, die Kinder selbst oft nicht erreichen, und verbessert die Putztechnik nachhaltig."],
      ["Wie oft sollten Kinder die Zähne putzen?", "Mindestens zweimal täglich für jeweils zwei Minuten."],
      ["Müssen Eltern nachputzen?", "Ja, bis etwa 7–8 Jahre, da die Feinmotorik noch nicht ausreicht."],
      ["Welche Zahnpasta ist für Kinder geeignet?", "Kinderzahnpasten sollten generell sehr natürliche Inhaltsstoffe haben, da Kinder die Zahnpaste teils verschlucken. Inhaltsstoffe wie Xylitol oder Hydroxylapatit (Zahnschmelz) zeigen positive Wirkung und schützen effektiv vor Karies."],
      ["Ist Hydroxylapatit in Kinderzahnpasta wirksam?", "Nach Angabe der Praxis zeigen Studien, dass Hydroxylapatit Karies bei Kindern ähnlich gut vorbeugen kann wie Fluorid. Es stärkt den Zahnschmelz, repariert kleine Defekte und gilt als besonders gut verträglich – auch beim Verschlucken."],
      ["Was ist das grösste Risiko für Karies bei Kindern?", "Häufiges Naschen und zuckerhaltige Getränke, besonders aus der Nuckelflasche."],
      ["Wie kann ich mein Kind zum Zähneputzen motivieren?", "Spielerisch, gemeinsam und mit Vorbildfunktion – Routine ist entscheidend."],
    ]),
    aufruf({ titel: "Kindertermin vereinbaren", text: "Für die Zahnreinigung Ihres Kindes ist auf der bisherigen Website kein Preis genannt – die Praxis gibt gerne Auskunft.", knopf: BUCHEN, zweiterKnopf: { titel: "Kontakt", ziel: "/kontakt/" } }),
  ],
};

const parodontitis = {
  slug: "dentalhygiene/parodontitis", art: "leistung", titel: "Behandlung bei Parodontitis", teaser: "Parodontose früh erkennen und behandeln: die Rolle der Dentalhygienikerin bei Zahnfleischentzündungen und Zahnhalteapparat.",
  einleitung: "Parodontose – medizinisch Parodontitis – ist eine chronische Entzündung des Zahnfleisches und des Zahnhalteapparates. Sie entsteht durch Bakterien, die sich unter dem Zahnfleisch ansiedeln.",
  seoTitel: "Parodontitis behandeln in Zürich – Dentalhygiene", seoBeschreibung: "Parodontose früh erkennen und behandeln: Tiefenreinigung, Zahnfleischtaschen, Airflow, Recall. Dentalhygiene bei Parodontitis in Zürich Altstetten.",
  bild: bild("paro-hero", "Dentalhygienikerin behandelt eine Patientin"), alteUrls: ["/parodontose-zuerich.html"], quelle: "whitesmyle.ch/parodontose-zuerich.html", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    text(`Unbehandelt kann Parodontose dazu führen, dass sich das Zahnfleisch zurückzieht und Zähne locker werden oder verloren gehen.

**Typische Anzeichen:** Zahnfleischbluten, Rötung oder Schwellung, Mundgeruch, empfindliche Zahnhälse, lockere Zähne (späteres Stadium).

## Behandlung durch die Dentalhygienikerin

Bei entstehender und bestehender Parodontitis ist eine regelmässige Dentalhygiene besonders wichtig. Unsere Behandlung hilft, Bakterien zu reduzieren, Entzündungen zu kontrollieren und das Fortschreiten der Erkrankung zu stoppen.

## Wie wird Parodontose behandelt?

Die Dentalhygienikerin spielt eine zentrale Rolle bei der Behandlung:

- Tiefenreinigung unter dem Zahnfleisch, Entfernung von Bakterien und Belägen
- Reinigung der Zahnfleischtaschen
- Airflow für schonende Belagsentfernung
- Individuelle Mundhygiene-Anleitung
- Regelmässige Nachkontrollen ([Recall](/dentalhygiene/recall/))

Ziel: Entzündung stoppen, Zahnfleisch stabilisieren und Zähne langfristig erhalten. Die Phasen von Gingivitis bis schwerer Parodontitis sind auf der Seite [Dentalhygiene](/dentalhygiene/#phasen) dargestellt.`, { bild: bild("paro-ablauf", "Schemazeichnung: Ablauf einer Parodontitis-Behandlung"), bildPosition: "rechts" }),
    faq("Häufige Fragen zu Parodontitis und Dentalhygiene", [
      ["Ist Parodontose heilbar?", "Parodontose ist nicht vollständig heilbar, aber sehr gut kontrollierbar. Mit regelmässiger Dentalhygiene kann die Krankheit gestoppt werden."],
      ["Ist Parodontose schlimm?", "Ja – unbehandelt kann sie zu Zahnverlust führen und steht im Zusammenhang mit allgemeinen Gesundheitsrisiken."],
      ["Tut die Behandlung weh?", "Die Behandlung ist heute schonend und gut verträglich. Empfindliche Stellen werden individuell berücksichtigt."],
      ["Wie entsteht Parodontose?", "Durch Bakterien im Zahnbelag, oft begünstigt durch unzureichende Mundhygiene, Rauchen, Stress und genetische Veranlagung."],
      ["Kann ich Parodontose selbst behandeln?", "Nein. Die Bakterien unter dem Zahnfleisch können nur professionell entfernt werden."],
      ["Wie oft muss ich zur Dentalhygiene bei Parodontose?", "In der Regel alle 3–6 Monate, je nach Schweregrad."],
      ["Ist Mundgeruch ein Zeichen für Parodontose?", "Ja – oft ein frühes Warnsignal durch bakterielle Entzündungen."],
      ["Können sich Zähne bei Parodontose wieder festigen?", "Wenn früh behandelt wird: ja, teilweise Stabilisierung möglich."],
      ["Was passiert, wenn ich bei Parodontose nichts mache?", "Fortschreitender Knochenabbau, Zahnlockerung, Zahnverlust."],
      ["Ist Parodontose ansteckend?", "Bakterien können übertragen werden (z. B. über Speichel), aber das Risiko hängt stark von der individuellen Mundgesundheit ab."],
      ["Übernimmt die Krankenkasse die Behandlung?", "In der Schweiz meist nicht standardmässig, ausser bei Zusatzversicherungen."],
      ["Hilft eine elektrische Zahnbürste bei Parodontose?", "Ja – sie unterstützt die tägliche Pflege, ersetzt aber keine professionelle Behandlung. Nach Ansicht der Praxis ist eine Ultraschallzahnbürste die noch bessere Wahl."],
      ["Hilft eine Ultraschallzahnbürste bei Parodontose?", "Nach Angabe der Praxis kann Ultraschall wie bei der MEGASONEX M8 helfen, indem er Bakterienstrukturen im Biofilm auch in tieferen Zahnfleischtaschen zerstört und so die Keimlast reduziert – unterstützend zur normalen Zahnpflege, nicht als Ersatz für eine Behandlung. Mehr im Ratgeber [Ultraschallzahnbürste](/ratgeber/ultraschallzahnbuerste/)."],
      ["Welche Rolle spielt die Dentalhygienikerin langfristig?", "Sie ist entscheidend für die Kontrolle der Entzündung, die Prävention von Rückfällen und den langfristigen Zahnerhalt."],
    ]),
    aufruf({ titel: "Dentalhygiene-Termin bei Parodontose", text: "Melden Sie sich für Ihren Dentalhygiene-Termin an, um Parodontose zu vermeiden oder zu behandeln.", knopf: BUCHEN, zweiterKnopf: { titel: "Zur Dentalhygiene", ziel: "/dentalhygiene/" } }),
  ],
};

const fragen = {
  slug: "dentalhygiene/fragen-und-antworten", art: "leistung", titel: "Dentalhygiene: Fragen und Antworten", teaser: "Verständliche Antworten zu Ablauf, Kosten, Airflow, Parodontitis, Häufigkeit und Vorteilen der Dentalhygiene.",
  einleitung: "Viele Menschen haben Fragen rund um Dentalhygiene, Zahnstein, Zahnfleischbluten oder professionelle Zahnreinigung. Hier finden Sie verständliche Antworten zu Ablauf, Kosten, Airflow, Parodontitis, Häufigkeit und den Vorteilen regelmässiger Dentalhygiene.",
  seoTitel: "Dentalhygiene FAQ Zürich – häufige Fragen und Antworten", seoBeschreibung: "Alles über professionelle Dentalhygiene, Zahnsteinentfernung, Airflow und gesundes Zahnfleisch. Verständliche Antworten auf häufige Fragen – WHITE SMYLE dental Zürich.",
  bild: bild("faq-hero", "Frau beisst in einen grünen Apfel, Schriftzug «good to know»"), alteUrls: ["/q--a-dentalhygiene.html"], quelle: "whitesmyle.ch/q--a-dentalhygiene.html", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    faq("Zahnstein, Atem, Zahnfleisch", [
      ["Warum habe ich trotz Putzen Zahnstein?", "Auch gründliches Zähneputzen entfernt nicht alle Beläge – besonders in Zahnzwischenräumen oder unter dem Zahnfleisch. Dort kann sich Plaque verhärten und zu Zahnstein werden, der nur professionell entfernt werden kann."],
      ["Warum riecht mein Atem trotz Zähneputzen?", "Mundgeruch entsteht häufig durch Bakterien in Zahnzwischenräumen, auf der Zunge oder unter dem Zahnfleisch. Normales Putzen erreicht diese Bereiche oft nicht vollständig. Eine professionelle Dentalhygiene reduziert bakterielle Beläge gezielt."],
      ["Wieso blutet mein Zahnfleisch?", "Zahnfleischbluten ist meist ein Zeichen von Entzündungen durch Bakterien oder Zahnstein. Gesundes Zahnfleisch sollte beim Putzen normalerweise nicht bluten. Frühzeitige Dentalhygiene hilft, Entzündungen zu stoppen."],
      ["Warum blutet Zahnfleisch nach der Dentalhygiene manchmal leicht?", "Leichtes Zahnfleischbluten kann auftreten, wenn bereits Entzündungen vorhanden waren. Nach der Entfernung von Bakterien und Zahnstein beruhigt sich das Zahnfleisch meist innerhalb kurzer Zeit."],
      ["Warum entzündet sich Zahnfleisch trotz Putzen?", "Selbst gründliches Putzen erreicht nicht alle Bereiche im Mund. Besonders Zahnzwischenräume und Stellen unter dem Zahnfleisch bieten Bakterien ideale Bedingungen für Entzündungen."],
      ["Warum fühlen sich meine Zähne rau an?", "Raue Zahnoberflächen entstehen häufig durch Beläge, Zahnstein oder Verfärbungen. Nach einer professionellen Dentalhygiene fühlen sich die Zähne wieder glatt und sauber an."],
      ["Was passiert, wenn Zahnstein nicht entfernt wird?", "Unbehandelter Zahnstein fördert Entzündungen, Zahnfleischbluten, Mundgeruch und langfristig Parodontitis. Im schlimmsten Fall kann dies zu Knochenabbau und Zahnverlust führen."],
    ], { anker: "zahnstein" }),
    faq("Behandlung, Häufigkeit, Kosten", [
      ["Wie oft brauche ich wirklich Dentalhygiene?", "Für die meisten Menschen werden 1–2 Behandlungen pro Jahr empfohlen. Bei empfindlichem Zahnfleisch, Parodontitis, Implantaten oder Rauchgewohnheiten können häufigere Termine sinnvoll sein."],
      ["Reicht normales Putzen nicht aus?", "Nein. Zahnbürsten reinigen vor allem sichtbare Oberflächen. Bereiche unter dem Zahnfleisch, zwischen den Zähnen oder rund um Kronen und Implantate benötigen oft eine professionelle Tiefenreinigung."],
      ["Ist Dentalhygiene schmerzhaft?", "Moderne Dentalhygiene ist heute besonders schonend und in den meisten Fällen nahezu schmerzfrei. Empfindliche Bereiche werden individuell berücksichtigt, damit die Behandlung möglichst angenehm verläuft."],
      ["Ist Dentalhygiene auch bei empfindlichen Zähnen möglich?", "Ja. Moderne Methoden wie Airflow oder schonende Handinstrumente ermöglichen eine sanfte Reinigung auch bei empfindlichen Zähnen oder sensiblem Zahnfleisch."],
      ["Ist Dentalhygiene auch für Angstpatientinnen und -patienten geeignet?", "Ja. Gerade sie profitieren von einer ruhigen, sanften und verständnisvollen Behandlung. Moderne Methoden ermöglichen eine entspannte Dentalhygiene ohne unangenehme Erfahrungen."],
      ["Wird die Behandlung individuell auf mich abgestimmt?", "Jede Mundsituation ist anders. Deshalb werden Reinigung, Intensität und Pflegeempfehlungen individuell an Zahnfleisch, Zahngesundheit, Implantate oder empfindliche Stellen angepasst."],
      ["Wie lange dauert eine Dentalhygiene?", "Je nach Aufwand dauert eine Behandlung meist zwischen 45 und 90 Minuten. Faktoren wie Zahnstein, Verfärbungen oder empfindliches Zahnfleisch beeinflussen die Dauer."],
      ["Was kostet Dentalhygiene in Zürich?", "Die Kosten variieren je nach Aufwand, Dauer und individueller Mundsituation. Bei regelmässiger Dentalhygiene liegen die Preise in Zürich laut Praxis zwischen CHF 170 und 230. Bei WHITE SMYLE: CHF 175.– ([Preise](/preise/))."],
      ["Ist Dentalhygiene wirklich notwendig?", "Ja. Selbst bei guter Mundhygiene entstehen Beläge an schwer erreichbaren Stellen. Professionelle Dentalhygiene hilft, Zahnstein, Entzündungen und langfristige Schäden frühzeitig zu verhindern."],
    ], { anker: "behandlung" }),
    faq("Airflow, Parodontitis, Bleaching", [
      ["Was ist moderne Airflow-Technologie?", "Airflow ist eine besonders schonende Reinigungsmethode mit feinem Pulver, Wasser und Luft. Verfärbungen und weiche Beläge können sanft entfernt werden – auch an schwer erreichbaren Stellen."],
      ["Ist Airflow schädlich für die Zähne?", "Nein. Moderne Airflow-Technologie gilt als besonders schonend. Verfärbungen und weiche Beläge werden sanft entfernt, ohne die Zahnoberfläche unnötig zu belasten."],
      ["Wie oft sollte Airflow gemacht werden?", "Airflow wird häufig im Rahmen der regelmässigen Dentalhygiene durchgeführt. Wie oft dies sinnvoll ist, hängt von Verfärbungen, Kaffee-, Tee- oder Nikotinkonsum sowie der individuellen Mundgesundheit ab."],
      ["Kann man Parodontitis stoppen?", "Wird Parodontitis früh erkannt, kann das Fortschreiten meist deutlich verlangsamt oder gestoppt werden. Entscheidend sind regelmässige Dentalhygiene, gute Mundpflege und Kontrollen."],
      ["Wie erkennt man Parodontitis?", "Warnzeichen können Zahnfleischbluten, Mundgeruch, empfindliches Zahnfleisch, Zahnfleischrückgang oder lockere Zähne sein. Oft entwickelt sich Parodontitis jedoch lange unbemerkt."],
      ["Wann braucht man eine Tiefenreinigung?", "Eine Tiefenreinigung wird notwendig, wenn sich Bakterien und Zahnstein unter dem Zahnfleisch oder in tiefen Zahntaschen ansammeln. Ziel ist es, Entzündungen zu reduzieren und das Zahnfleisch zu stabilisieren."],
      ["Kann Dentalhygiene Karies vorbeugen?", "Ja. Durch die Entfernung von Plaque und bakteriellen Belägen wird das Risiko für Karies deutlich reduziert. Zusätzlich hilft die Behandlung dabei, Problemstellen frühzeitig zu erkennen."],
      ["Warum sollte ich vor dem Bleaching eine Dentalhygiene machen?", "Vor einem Bleaching sollten Zahnstein, Beläge und Verfärbungen entfernt werden. Dadurch kann das Bleaching gleichmässiger wirken, und das Ergebnis hält oft länger an. Siehe [Kombipaket](/kombipaket/)."],
      ["Können bei der Dentalhygiene Probleme früh erkannt werden?", "Ja. Während der Behandlung werden Zahnfleisch, Zahnbeläge und mögliche Veränderungen kontrolliert. Früh erkannte Probleme lassen sich oft einfacher und schonender behandeln."],
      ["Was bedeutet medizinisch fundierte Dentalhygiene?", "Dentalhygiene ist weit mehr als eine kosmetische Reinigung. Ziel ist die professionelle Entfernung von bakteriellen Belägen, um Entzündungen, Parodontitis und Folgeschäden vorzubeugen."],
      ["Warum ist eine diplomierte Dentalhygienikerin wichtig?", "Eine diplomierte Dentalhygienikerin verfügt über spezialisierte Ausbildung und Erfahrung im Bereich Zahnfleischgesundheit, Prophylaxe und professionelle Tiefenreinigung. Mehr im Ratgeber [Dentalhygienikerin oder Prophylaxeassistentin](/ratgeber/dentalhygienikerin-oder-prophylaxeassistentin/)."],
      ["Geht es bei Dentalhygiene nur um saubere Zähne?", "Nein. Im Mittelpunkt steht vor allem gesundes Zahnfleisch. Denn gesundes Zahnfleisch bildet die Grundlage für stabile, schöne und langfristig gesunde Zähne."],
    ], { anker: "airflow" }),
    aufruf({ titel: "Haben Sie weitere Fragen zur Dentalhygiene?", text: "Unser Team berät Sie gerne persönlich rund um Zahnfleischgesundheit, professionelle Zahnreinigung, Airflow und langfristigen Zahnerhalt.", knopf: BUCHEN, zweiterKnopf: { titel: "Kontakt", ziel: "/kontakt/" } }),
  ],
};

const recall = {
  slug: "dentalhygiene/recall", art: "leistung", titel: "Recall-Erinnerung", teaser: "Vergessen Sie nie wieder Ihren Dentalhygiene-Termin: Erinnerung per SMS, Anruf, E-Mail oder Brief zum gewünschten Zeitpunkt.",
  einleitung: "Recall-Service von WHITE SMYLE – pünktlich und zuverlässig: Wir erinnern Sie an Ihren nächsten Dentalhygiene-Termin. Eine regelmässige Dentalhygiene sichert den langfristigen Zahnerhalt.",
  seoTitel: "Recall Dentalhygiene – Terminerinnerung WHITE SMYLE", seoBeschreibung: "Mit dem Recall-Service von WHITE SMYLE werden Sie termingerecht an Ihre nächste Dentalhygiene erinnert – per SMS, Anruf, E-Mail oder Brief.",
  bild: bild("recall-hero", "Dentalhygienikerin behandelt eine Patientin; Schriftzug «Dentalhygiene Recall Service»"), alteUrls: ["/recall-programm.html"], quelle: "whitesmyle.ch/recall-programm.html", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    b("ablaufBaustein", { titel: "So funktioniert der Dentalhygiene-Recall", schritte: [
      { _key: "r1", titel: "Registrieren", text: "Sie teilen der Praxis mit, wann Sie erinnert werden möchten (Fixtermin im gewünschten Monat) und wofür: Dentalhygiene, Bleaching, Dentalhygiene & Bleaching oder Zahnarztkontrolle." },
      { _key: "r2", titel: "Erinnerung erhalten", text: "Sie erhalten Ihre Recall-Erinnerung per SMS, Anruf, E-Mail oder Postkarte – nach 3, 6, 9 oder 12 Monaten, wie gewünscht." },
      { _key: "r3", titel: "Termin vereinbaren", text: "Sie melden sich bequem für Ihren Dentalhygiene-Termin an – online oder telefonisch." },
    ] }),
    hinweis(`Auf der bisherigen Website gab es ein Registrierungsformular für den Recall-Service. Auf dieser Demo werden keine Formulardaten übermittelt oder gespeichert. Für die Registrierung nutzen Sie den E-Mail-Weg auf der [Kontaktseite](/kontakt/) (Anliegen «Recall-Erinnerung einrichten» mit Wunschmonat und Intervall) oder rufen Sie an: 043 931 78 74. Bitte keine Gesundheitsangaben per E-Mail senden.`, "info"),
    aufruf({ titel: "Recall einrichten", text: "Schreiben Sie der Praxis mit Wunschmonat und Erinnerungsintervall – oder buchen Sie gleich den nächsten Termin.", knopf: { titel: "E-Mail vorbereiten", ziel: "/kontakt/" }, zweiterKnopf: BUCHEN }),
  ],
};

export default [dentalhygiene, kinder, parodontitis, fragen, recall];
