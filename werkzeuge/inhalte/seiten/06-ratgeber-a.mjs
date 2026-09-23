import { b, text, faq, hinweis, aufruf, bild } from "../pt.mjs";
const R = (o) => ({ art: "ratgeber", pruefstatus: "sprachlich-angepasst", ...o });

const zahnbleaching = R({
  slug: "ratgeber/zahnbleaching", titel: "Bleaching-Fakten: Alles über Zahnbleaching", teaser: "Methoden, Haltbarkeit, Kosten, Risiken und Tipps für dauerhaft weisse Zähne – in 30 Sekunden und im Detail.",
  einleitung: "Schöne weisse Zähne machen einen Unterschied. Ein strahlendes Lächeln wirkt gepflegt, sympathisch und selbstbewusst – genau deshalb entscheiden sich immer mehr Menschen für ein professionelles Zahnbleaching.",
  seoTitel: "Zahnbleaching Ratgeber – Methoden, Haltbarkeit, Kosten, Risiken", seoBeschreibung: "Alles über Zahnbleaching: In-Office, Home Bleaching, Whitening-Produkte, Haltbarkeit 1–3 Jahre, Empfindlichkeit und was danach zu beachten ist.",
  bild: bild("bleaching-ratgeber-hero", "Mann mit weissem Lächeln hält eine Zahnbürste"), alteUrls: ["/zahnbleaching-ratgeber.html"], quelle: "whitesmyle.ch/zahnbleaching-ratgeber.html",
  bausteine: [
    hinweis(`**Zahnbleaching in 30 Sekunden erklärt**
- Bleaching hellt natürliche Zähne sichtbar auf.
- Die Behandlung dauert meist 45–75 Minuten.
- Professionelles Bleaching ist bei gesunden Zähnen sicher.
- Das Ergebnis hält meist 1–3 Jahre.
- Kaffee, Tee und Rauchen können neue Verfärbungen verursachen.
- Kronen und Füllungen werden nicht aufgehellt.`, "info"),
    text(`## Was ist Zahnbleaching überhaupt?

Bleaching ist die professionelle Aufhellung natürlicher Zähne. Dabei werden spezielle Wirkstoffe eingesetzt, die eingelagerte Farbpigmente im Zahnschmelz lösen. Die Zahnsubstanz wird dabei nicht abgeschliffen oder beschädigt. Das Ergebnis sind sichtbar hellere und frischere Zähne – oft bereits nach einer einzigen Behandlung.

## Warum verfärben sich Zähne?

Im Laufe der Jahre lagern sich Farbstoffe in den Zähnen ein. Häufige Ursachen: Kaffee, Tee, Rotwein, Rauchen, Curry und stark färbende Lebensmittel, Medikamente, natürliche Alterungsprozesse, genetische Veranlagung. Je nach Ursache und Zahnstruktur können die Ergebnisse unterschiedlich ausfallen.

## Welche Bleaching-Methoden gibt es?

**In-Office-Bleaching in der Praxis** ist die schnellste und effektivste Methode: sichtbares Ergebnis bereits nach ca. 60 Minuten, professioneller Schutz von Zahnfleisch und Lippen, höhere Wirksamkeit, sichere Durchführung, individuelle Betreuung. Für viele ist dies die beste Wahl, wenn schnell ein sichtbares Resultat gewünscht wird.

**Home Bleaching:** Individuelle Zahnschienen mit Bleaching-Gel werden zuhause angewendet. Vorteile: flexible Anwendung, schrittweise Aufhellung, gute Ergänzung nach einer Praxisbehandlung. Nachteile: längere Behandlungsdauer, weniger intensive Sofortwirkung, höherer Eigenaufwand.

**Whitening-Produkte aus dem Handel:** Strips, Pens oder Zahnpasten können leichte oberflächliche Verfärbungen reduzieren. Für eine deutliche Erstaufhellung empfiehlt die Praxis jedoch immer ein professionelles Bleaching in der Praxis.

## Ist Bleaching schädlich?

Eine der häufigsten Fragen überhaupt. Bei fachgerechter Durchführung gilt professionelles Zahnbleaching als sichere Methode. Wichtig ist: Die Zähne sollten gesund sein, Karies sollte vorher behandelt werden, das Zahnfleisch sollte gesund sein, und die Behandlung sollte durch zahnmedizinisch geschultes Fachpersonal erfolgen. Vor jeder Behandlung prüft die Praxis deshalb Ihre individuelle Situation.

## Werden die Zähne empfindlich?

Manche Menschen spüren nach dem Bleaching vorübergehend eine erhöhte Empfindlichkeit auf Kälte, Wärme, Süsses oder Luft. Diese Reaktion verschwindet normalerweise innerhalb kurzer Zeit wieder. Moderne Bleaching-Systeme sind deutlich schonender als früher.

## Wie lange hält das Ergebnis?

Das hängt von Ihren Gewohnheiten ab. Wer viel Kaffee trinkt oder raucht, wird schneller neue Verfärbungen bemerken. Typischerweise hält ein professionelles Bleaching 1–3 Jahre. Mit regelmässigen Auffrischungen und guter Mundhygiene bleibt das Ergebnis oft deutlich länger erhalten.

## Können Kronen oder Füllungen aufgehellt werden?

Nein. Bleaching wirkt nur auf natürliche Zahnsubstanz. Kronen, Veneers, Brücken und Kunststofffüllungen verändern ihre Farbe nicht. Deshalb prüft die Praxis vor jeder Behandlung, welche Resultate realistisch erreichbar sind.

## Warum eine Dentalhygiene vor dem Bleaching?

Beläge und Zahnstein können das Ergebnis beeinträchtigen. Eine professionelle Dentalhygiene sorgt dafür, dass Verfärbungen entfernt werden, die Zahnoberflächen sauber sind, das Bleaching gleichmässiger wirkt und das Ergebnis schöner wird. Die Kombination aus Dentalhygiene und Bleaching liefert oft die besten Resultate – siehe [Kombipaket](/kombipaket/).

## Was sollten Sie nach dem Bleaching beachten?

Während der ersten 24 bis 48 Stunden möglichst wenig färbende Lebensmittel: Kaffee, Tee, Rotwein, Nikotin, Curry, Sojasauce, dunkle Saucen. Eine einfache Regel: Vermeiden Sie alles, was auf einem weissen T-Shirt Flecken hinterlassen würde.

## Wer eignet sich besonders für ein Bleaching?

Menschen mit gelblichen Verfärbungen, Kaffee- oder Teeverfärbungen, Raucherverfärbungen oder altersbedingten Verfärbungen. Vor jeder Behandlung berät die Praxis persönlich und beurteilt die individuelle Ausgangssituation.`),
    faq("Die häufigsten Fragen zum Zahnbleaching", [
      ["Wie weiss werden meine Zähne?", "Das hängt von Ihrer natürlichen Zahnfarbe, der Zahnstruktur und den vorhandenen Verfärbungen ab. Ziel ist meist ein natürlich wirkendes Weiss und kein künstlicher Hollywood-Look."],
      ["Wie oft darf man Bleaching machen?", "In der Regel empfiehlt die Praxis Auffrischungen alle 6 bis 12 Monate."],
      ["Ist Bleaching während Schwangerschaft oder Stillzeit möglich?", "Während Schwangerschaft und Stillzeit empfiehlt die Praxis grundsätzlich kein klassisches Bleaching mit Wasserstoffperoxid."],
      ["Wie lange dauert ein professionelles Bleaching?", "Je nach Methode etwa 45 bis 60 Minuten."],
      ["Tut Bleaching weh?", "Die meisten empfinden die Behandlung als gut verträglich. Gelegentliche Empfindlichkeiten verschwinden normalerweise rasch wieder."],
    ]),
    aufruf({ titel: "Professionelles Zahnbleaching in Zürich", text: "Seit 2012 begleitet WHITE SMYLE Kundinnen und Kunden zu einem sichtbar helleren, natürlichen Lächeln.", zweiterKnopf: { titel: "Bleaching-Arten und Preise", ziel: "/bleaching/" } }),
  ],
});

const dhpa = R({
  slug: "ratgeber/dentalhygienikerin-oder-prophylaxeassistentin", titel: "Dentalhygienikerin oder Prophylaxeassistentin?", teaser: "Dentalhygiene ist nicht gleich Zahnreinigung: Ausbildung, Kompetenzen und Behandlungsumfang im Vergleich.",
  einleitung: "Stellen Sie sicher, dass Sie für Ihre Dentalhygiene auch eine dipl. Dentalhygienikerin als Behandlerin bekommen und keine Prophylaxeassistentin – ausser Sie wünschen das. Wenn Ihnen Ihre langfristige Zahngesundheit wichtig ist, fragen Sie vor der Behandlung, wer Sie behandeln wird.",
  seoTitel: "Dentalhygienikerin oder Prophylaxeassistentin – der Unterschied", seoBeschreibung: "DH oder PA? Ausbildung (3 Jahre HF vs. 20 Tage), Behandlungsumfang, Diagnostik und Verantwortung im Vergleich – und warum WHITE SMYLE auf die Dentalhygienikerin setzt.",
  bild: bild("you-love-it", "Grafik: Dentalhygiene, super sauber, you love it"), alteUrls: ["/zahnreinigung-dh-oder-pa.html"], quelle: "whitesmyle.ch/zahnreinigung-dh-oder-pa.html", mitInhaltsverzeichnis: true,
  bausteine: [
    b("vergleichBaustein", { anker: "vergleich", titel: "Dentalhygienikerin (DH) vs. Prophylaxeassistentin (PA)", spalten: [
      { _key: "dh", titel: "Dentalhygienikerin (DH)", untertitel: "3 Jahre höhere Fachschule (HF)", hervorgehoben: true, punkte: ["Ausbildung: 3 Jahre höhere Fachschule (HF), umfassende medizinische Ausbildung", "Behandlungsumfang: auch tiefe Zahnreinigung (unter dem Zahnfleisch) und Parodontitis-Behandlung", "Diagnostik: erkennt Krankheiten früh, erstellt Therapiepläne, arbeitet teils eigenständig", "Einsatz bei Zahnfleischproblemen, Parodontitis, komplexen Fällen", "Hohe Fachverantwortung, Teil der Therapieplanung"] },
      { _key: "pa", titel: "Prophylaxeassistentin (PA)", untertitel: "Weiterbildung nach Dentalassistentin", punkte: ["Ausbildung: kurze Weiterbildung (ca. 20 Tage) nach der Dentalassistentin", "Behandlungsumfang: oberflächliche Reinigung und Prophylaxe (z. B. Politur, Fluorid)", "Keine eigenständige Diagnose, arbeitet unter Aufsicht des Zahnarztes", "Einsatz bei gesunden Patientinnen und Patienten, einfache Routine-Prophylaxe", "Unterstützende Rolle im Präventionsbereich"] },
    ], fazit: "Kurz zusammengefasst: Dentalhygienikerin = Spezialistin für umfassende und auch medizinische Zahnbehandlung. Prophylaxeassistentin = Fachkraft für einfache Vorsorge und Reinigung. WHITE SMYLE setzt auf das Ausbildungsniveau der Dentalhygienikerin, um den langfristigen Zahnerhalt besser zu fördern." }),
    text(`## Dentalhygiene oder Zahnreinigung – was ist besser?

Viele fragen sich, ob eine Zahnreinigung ausreicht. Der wichtige Unterschied: Die **Zahnreinigung** reinigt die Zahnoberfläche, mit Fokus auf Ästhetik und kurzfristigem Effekt. Die **Dentalhygiene** reinigt tiefgehend auch unter dem Zahnfleisch, entfernt Bakterien in kritischen Bereichen, beugt Parodontitis vor und zielt auf langfristige Zahngesundheit. Eine Zahnreinigung allein reicht nicht aus, um Zahnerkrankungen vorzubeugen.

In der Praxis steht die Dentalhygiene-Behandlung als Vorsorge im Fokus: Die Behandlung durch die Dentalhygienikerin trägt wesentlich zur Mundgesundheit bei und unterscheidet sich deutlich vom Einsatzgebiet der Prophylaxeassistentin.

**Prophylaxeassistentin (PA):** Die PA unterstützt die regelmässige Zahnpflege bei stabiler Mundgesundheit. Sie entfernt oberflächliche Beläge und Verfärbungen und hilft, die tägliche Mundhygiene zu optimieren.

**Dentalhygienikerin (DH):** Sie geht einen entscheidenden Schritt weiter – spezialisiert auf die gründliche Reinigung auch unter dem Zahnfleisch, erkennt frühzeitig Veränderungen und behandelt gezielt Zahnfleischerkrankungen wie Parodontitis. Viele Probleme im Mundraum entstehen unbemerkt unter dem Zahnfleisch. Genau hier setzt die Dentalhygienikerin an: Durch ihre vertiefte Ausbildung und den erweiterten Behandlungsumfang kann sie nicht nur reinigen, sondern aktiv dazu beitragen, Erkrankungen zu verhindern und Zähne langfristig zu erhalten. Die Prophylaxe ist eine gute Ergänzung – die Dentalhygiene ist der Schlüssel für langfristig gesunde Zähne und ein stabiles Zahnfleisch.`, { anker: "unterschied", titel: "Der Unterschied", breite: "schmal" }),
    text(`## Warum Sie den Unterschied kennen sollten

Nicht jede angebotene Dentalhygiene wird auch durch eine dipl. Dentalhygienikerin durchgeführt. Der Unterschied hat direkte Auswirkungen auf Qualität, Tiefe und Art der zahnmedizinischen Prävention und Behandlung.

### 1. Spezialisierung und Behandlungsumfang

Dentalhygienikerinnen sind umfassender ausgebildet und befähigt, auch tiefergehende Behandlungen durchzuführen, wie die Entfernung von Zahnstein unterhalb des Zahnfleischrandes und die Behandlung von Parodontitis. Wer unter Zahnfleischbluten, Entzündungen oder parodontalen Erkrankungen leidet, sollte eine Dentalhygienikerin aufsuchen, da sie die erforderlichen Behandlungskenntnisse und diagnostischen Fähigkeiten besitzt, um die Krankheit frühzeitig zu erkennen und zu behandeln. Prophylaxeassistentinnen sind darauf spezialisiert, präventive Massnahmen zur Kariesvermeidung und Oberflächenreinigung durchzuführen. Für regelmässige, unkomplizierte Zahnreinigungen und Mundhygieneanleitungen kann das oft ausreichen – bei schwereren Erkrankungen fehlt jedoch die notwendige Behandlungsbefugnis.

### 2. Kosten und Effizienz

Aus Kosten- und Effizienzgründen kann eine Prophylaxeassistentin für routinemässige Reinigungen die günstigere Wahl sein. Komplexere Fälle, bei denen eine Dentalhygienikerin benötigt wird (z. B. fortgeschrittene Parodontitis), verursachen höhere Kosten, da die Behandlung tiefer geht und spezialisierter ist. Ein Beispiel der Praxis: Wer raucht und im Frontbereich Verfärbungen und generell Zahnstein hat, könnte die Zähne zweimal pro Jahr abwechselnd von einer Prophylaxeassistentin und einer Dentalhygienikerin reinigen lassen.

### 3. Frühzeitige Erkennung von Erkrankungen

Dentalhygienikerinnen sind durch ihre Ausbildung besser darin geschult, Anzeichen ernsthafter Zahn- und Mundkrankheiten frühzeitig zu erkennen, wie Parodontitis oder sogar orale Krebsvorstufen. Regelmässige Besuche dienen nicht nur der Zahnreinigung, sondern auch der Früherkennung. Prophylaxeassistentinnen können ebenfalls Anzeichen feststellen, jedoch nicht in derselben Tiefe.

### 4. Langfristige Zahngesundheit

Eine Dentalhygienikerin kann individuellere Behandlungspläne erstellen, die langfristige Effekte auf die Zahngesundheit haben – besonders bei Risikofaktoren wie Rauchen, Diabetes oder genetischer Veranlagung für Parodontitis. Für gesunde Patientinnen und Patienten ohne grössere Probleme kann die Prophylaxeassistentin eine gute Wahl sein.

### 5. Risikobasierte Behandlung

Wer bestimmte Risiken hat – Vorerkrankungen, schlechte Mundhygiene, genetische Disposition –, ist unter Umständen regelmässig auf die umfangreicheren Leistungen einer Dentalhygienikerin angewiesen. Ohne spezielle Risikofaktoren kann man von der regelmässigen Pflege durch eine Prophylaxeassistentin profitieren und sich in schwierigen Fällen an eine Dentalhygienikerin wenden.

### 6. Individuelle Betreuung und Beratung

Dentalhygienikerinnen geben umfassende, auf die individuellen Bedürfnisse zugeschnittene Mundhygieneanleitungen und Ernährungstipps, beurteilen den Zustand von Zahnfleisch und Zahnhalteapparat genauer und erstellen personalisierte Pflegepläne. Prophylaxeassistentinnen konzentrieren sich stärker auf allgemeine Prävention.

**Fazit:** Den Unterschied zu kennen hilft, informierte Entscheidungen über die eigene Zahngesundheit zu treffen – je nach Gesundheitszustand, Behandlungsbedarf und finanziellen Überlegungen.`, { anker: "gruende", titel: "Sechs Gründe", breite: "schmal" }),
    text(`## Ausbildung und Kompetenzen in der Schweiz

In der Schweiz gibt es klare Unterschiede in Ausbildung, Aufgabenbereichen und Kompetenzen. Beide Berufe spielen eine wichtige Rolle in der präventiven Zahnmedizin, jedoch mit unterschiedlichem Ausbildungsniveau und Verantwortungsumfang.

| | Dentalhygienikerin HF | Prophylaxeassistentin |
| --- | --- | --- |
| Ausbildungsdauer | 3 Jahre Vollzeit (höhere Fachschule) oder 4 Jahre berufsbegleitend; 5400 Lernstunden, 2/3 Theorie, 1/3 Abschlusspraktikum | 20 Tage Theorie und Praxis, meist verteilt auf ein Jahr berufsbegleitend; 480 Lernstunden; 150 Behandlungen innerhalb von 6 Monaten |
| Voraussetzung | Abschluss Sekundarstufe II oder gleichwertig, bestandene Eignungsabklärung; einschlägig: EFZ Dentalassistentin | Grundbildung als Dentalassistentin EFZ oder zweijährige Lehre als zahnmedizinische Assistentin, bestandener Röntgenkurs, Eignungsabklärung |
| Abschluss | Diplom als Dentalhygienikerin HF | Zertifikat als Prophylaxeassistentin |
| Inhalte | Anatomie, Pathologie, Parodontologie, Radiologie, Mikrobiologie, zahnärztliche Therapieformen, Patientenschulung | Zahnreinigung, Kariesprophylaxe, Patienteninstruktion zur Mundhygiene, Unterstützung bei präventiven Behandlungen |
| Arbeitsfeld | Praxen, Zahnkliniken, Spitäler, Heime, Industrie, öffentliche Dienste, Schulen, Gesundheitszentren; im Rahmen der gesetzlichen Bestimmungen auch eigene Praxis | Ergänzt das zahnmedizinische Team in enger Zusammenarbeit mit dipl. Dentalhygienikerin HF und Zahnarzt |
| Empfohlen für | Menschen aller Altersgruppen; Patientinnen und Patienten mit Zahnfleischproblemen (Parodontitis), Kariesrisiko, medizinische Risikopatienten (Herz-Kreislauf, Diabetes, Organempfänger, Immunerkrankungen; in Dentalhygiene-Praxen nur mit Bestätigung des Hausarztes), Raucher, Schwangere, Implantate, über 30 Jahre | Vorzugsweise Kinder und Jugendliche, Patienten ohne parodontale Probleme und ohne Kariesprobleme, Spangenträger, unter 30 Jahre |

### Ausbildungsverlauf Dentalhygienikerin HF

1. Jahr: theoretisches Grundlagenwissen, psychologische und didaktische Kenntnisse für den Umgang mit Patientinnen und Patienten, Einüben der manuellen Fertigkeiten (am Modell, gegenseitig, am Patienten), Kurzpraktikum in Privatpraxen. 2. Jahr: Vertiefen und Verknüpfen der theoretischen Kenntnisse zur Umsetzung in die Praxis, praktische Arbeit am Patienten in der Klinik der Dentalhygiene-Schule, Sozialpraktikum in Institutionen. 3. Jahr: Praktikumsjahr in Zahnarztpraxen oder Institutionen während vier Tagen pro Woche.

### Befähigung

Beide: Aufklärung über Karies und Kariesprophylaxe, Beziehungsgestaltung, Zusammenarbeit im Team, Motivierung zur Verhaltensänderung, Befundaufnahme, Instruktion der Mundhygiene inklusive Hilfsmittel, Röntgenaufnahmen und deren Interpretation, Erkennen von Veränderungen, Raucherintervention, Bleaching, Öffentlichkeitsarbeit, Entfernung von Ablagerungen oberhalb des Zahnfleisches mit Hand- und maschinellen Instrumenten.

Nur Dentalhygienikerin: Entfernung von Ablagerungen unterhalb des Zahnfleisches, Erstellen eines individuellen dentalhygienischen Behandlungs- und Betreuungsplans, Durchführung der nichtchirurgischen, erhaltenden Parodontaltherapie, Entfernung von Füllungsüberschüssen und Politur von Füllungen, Erkennen der Zusammenhänge von Allgemeinerkrankungen und Parodontitis, Abstimmen der Therapie mit weiteren Fachpersonen, Qualitätssicherung, Mitarbeit bei Berufsentwicklung und Forschung, lebenslange Weiterbildung.

^ Angaben der Praxis auf der bisherigen Website. Zeitungsartikel zum Thema: [Tages-Anzeiger, «Was, wenn die Dentalhygiene gar keine ist?»](https://www.tagesanzeiger.ch/zuerich/region/Was-wenn-die-Dentalhygiene-gar-keine-ist/story/16566365)`, { anker: "ausbildung", titel: "Ausbildung", breite: "schmal" }),
    faq("Die wichtigsten Fragen und Antworten", [
      ["Was ist der Unterschied zwischen Dentalhygiene und Zahnreinigung?", "Dentalhygiene ist eine medizinische Behandlung, die auch unter dem Zahnfleisch reinigt und bakterielle Ursachen entfernt. Eine Zahnreinigung konzentriert sich auf sichtbare Beläge und Verfärbungen."],
      ["Reicht eine normale Zahnreinigung nicht aus?", "Für kurzfristige Sauberkeit: ja. Für langfristige Zahngesundheit: nein, da Bakterien unter dem Zahnfleisch unbehandelt bleiben können."],
      ["Wie oft sollte man zur Dentalhygiene?", "Empfohlen: 1–2 Mal pro Jahr, je nach Risiko auch häufiger."],
      ["Ist Dentalhygiene teurer – und lohnt sich das?", "Ja, aber: Sie verhindert oft kostspielige Folgebehandlungen durch frühzeitige Intervention."],
      ["Warum sollte ich zu einer Dentalhygienikerin gehen?", "Weil sie tiefgehende Reinigungen durchführen kann, Erkrankungen früh erkennt und individuelle Therapiepläne erstellt. Das schützt langfristig vor Zahnverlust und teuren Folgebehandlungen."],
      ["Wann brauche ich eine Dentalhygienikerin?", "Besonders bei Zahnfleischbluten, empfindlichem Zahnfleisch, Parodontitis und Risikofaktoren (Rauchen, Diabetes, Alter)."],
    ], { anker: "faq" }),
    aufruf({ titel: "Dentalhygiene-Termin vereinbaren", text: "Bei WHITE SMYLE behandelt Sie ausschliesslich die dipl. Dentalhygienikerin HF.", zweiterKnopf: { titel: "Zur Dentalhygiene", ziel: "/dentalhygiene/" } }),
  ],
});

const anbieter = R({
  slug: "ratgeber/anbieterauswahl", titel: "Anbieterauswahl: Tipps für Dentalhygiene und Bleaching", teaser: "Dentalhygienikerin, Zahnarzt, Prophylaxeassistentin oder Kosmetikerin? Worauf Sie bei der Wahl achten sollten.",
  einleitung: "Tipps der Praxis, damit Ihre Dentalhygiene- und Bleaching-Behandlung ein Erfolg wird.",
  seoTitel: "Anbieterauswahl Dentalhygiene und Bleaching – worauf achten?", seoBeschreibung: "Dentalhygienikerin oder Prophylaxeassistentin, Kosmetikinstitut oder Dentalpraxis beim Bleaching: Tipps der Praxis WHITE SMYLE zur Auswahl des richtigen Anbieters.",
  bild: bild("anbieterauswahl", "Zahnärztliches Team mit Patientin"), alteUrls: ["/anbieterauswahl.html"], quelle: "whitesmyle.ch/anbieterauswahl.html",
  bausteine: [
    text(`## Dentalhygienikerin, Zahnarzt, Prophylaxeassistentin oder Kosmetikerin?

Bei der professionellen Zahnreinigung ist es gut, sich zu vergewissern, ob Sie von einer Dentalhygienikerin (DH) oder von einer Prophylaxeassistentin (PA) behandelt werden. Die Preise für eine Behandlung bei einer Prophylaxeassistentin liegen laut Praxis bei CHF 80 bis 120, bei einer Dentalhygienikerin meist ab CHF 140 bis 250. Ausschlaggebend ist die Qualität der Leistung. Wenn der Zahnarzt persönlich die Zahnreinigung durchführt, ist dies nach Ansicht der Praxis ebenfalls nicht die Qualität, die von einer extra dafür ausgebildeten Dentalhygienikerin erbracht werden kann.

Der Artikel im Tages-Anzeiger [«Was, wenn die Dentalhygiene gar keine ist?»](https://www.tagesanzeiger.ch/zuerich/region/Was-wenn-die-Dentalhygiene-gar-keine-ist/story/16566365) beschreibt die Konsequenzen der Unwissenheit über den Ausbildungsstandard von zahnmedizinischem Personal. So heisst es dort: «Prophylaxeassistentinnen kosten Zahnärzte deutlich weniger als ausgebildete Dentalhygienikerinnen. Viele Patienten kennen die Unterschiede nicht, zahlen zu viel und tragen die Schäden.»

## Bleaching: nur zahnmedizinisches Fachpersonal für tiefenwirksame Methoden

Kosmetische Institute dürfen nicht mit Bleaching-Methoden arbeiten, die mehr als 6 % Wasserstoffperoxid enthalten. Seien Sie vorsichtig, wenn ein Kosmetikinstitut mit Power Bleaching wirbt: Ein Power Bleaching hat meist zwischen 25 und 40 % Wasserstoffperoxid als Wirkstoff, der für die intensive und lang anhaltende Zahnaufhellung notwendig ist. Nur Dentalpraxen dürfen tiefenwirksame Bleaching-Methoden mit starker Aufhellung verwenden; nur zahnmedizinisch ausgebildetes Fachpersonal darf Zahnaufhellungen mit mehr als 6 % Wasserstoffperoxid durchführen. Zahnoberflächenbehandlungen können auch Kosmetikinstitute durchführen – diese sind sehr sanft, die Haltbarkeit ist jedoch nur gering, da die Oberflächen schnell wieder Verfärbungen annehmen.

## Worauf Sie bei der Auswahl achten können

- **Die richtigen Pflegeprodukte im Angebot?** Auch nach der Dentalhygiene ist es wichtig, für den täglichen Bedarf die richtigen Pflegeprodukte zu benutzen. Ein breites Angebot an Zahnpasten, Mundspülungen, Zahnseide und anderen Artikeln ist nach Ansicht der Praxis ein Qualitätszeichen.
- **Berücksichtigung Ihrer zahnmedizinischen Situation?** Wenn Sie sich für ein Bleaching entscheiden, muss zuerst Ihre zahnmedizinische Situation berücksichtigt und ein entsprechendes Bleaching empfohlen werden.
- **Umsetzung Ihrer Aufhellungswünsche?** Welche Vorstellung haben Sie, und wie kann sie umgesetzt werden? Ein wichtiger Punkt bei der Auswahl des richtigen Bleaching-Gels.
- **Bleaching-Profi oder nicht?** Fragen Sie, wie viele Bleaching-Behandlungen pro Jahr in der Praxis gemacht werden. Nur durch Erfahrung und Routine kann gut beraten werden. WHITE SMYLE macht nach eigener Angabe rund 800 Bleaching-Behandlungen pro Jahr.
- **Welche Bleaching-Methoden im Angebot?** Ein Anbieter sollte mehrere Bleaching-Methoden mit verschiedenen Funktionen anbieten, damit Sie das gewünschte Ergebnis erhalten.`),
    aufruf({ titel: "Beratung bei WHITE SMYLE", text: "Dentalhygiene nur durch die dipl. Dentalhygienikerin HF, Bleaching in der Praxis mit medizinischem Bleaching-Gel.", zweiterKnopf: { titel: "Ratgeber DH oder PA", ziel: "/ratgeber/dentalhygienikerin-oder-prophylaxeassistentin/" } }),
  ],
});

const mikrobiom = R({
  slug: "ratgeber/orales-mikrobiom", titel: "Das orale Mikrobiom", teaser: "Ihr unsichtbarer Beschützer im Mund: was das Mikrobiom ist, was bei einer Dysbiose passiert und wie Sie es natürlich stärken.",
  einleitung: "In Ihrem Mund leben Milliarden Mikroorganismen. Die Praxis zeigt, warum das gut ist – und wie dieses Gleichgewicht geschützt wird.",
  seoTitel: "Orales Mikrobiom – Bedeutung für die Zahngesundheit", seoBeschreibung: "Was ist das orale Mikrobiom, warum ist es wichtig für die Zahngesundheit und wie lässt es sich natürlich stärken? Antworten der Praxis WHITE SMYLE.",
  bild: bild("mikrobiom-hero", "Grafik mit grünen Bakterien; Schriftzug «Orales Mikrobiom»"), alteUrls: ["/orales-mikrobiom.html"], quelle: "whitesmyle.ch/orales-mikrobiom.html",
  bausteine: [
    b("vergleichBaustein", { titel: "Drei Blickwinkel", spalten: [
      { _key: "m1", titel: "Was ist das Mikrobiom?", punkte: ["Milliarden Mikroorganismen, die Ihr Ökosystem im Mund bilden"] },
      { _key: "m2", titel: "Dysbiose", untertitel: "bakterielles Ungleichgewicht", punkte: ["Was passiert, wenn das Gleichgewicht kippt"] },
      { _key: "m3", titel: "Ganzheitlicher Bezug", punkte: ["Wie Mundgesundheit den ganzen Körper beeinflusst"] },
    ] }),
    text(`## So unterstützen Sie Ihr Mikrobiom natürlich

- Zuckerarme Ernährung
- Genug Speichelfluss
- Stressreduktion
- Mundhygiene mit natürlichen Zahnpasten
- Professionelle Dentalhygiene`),
    faq("Häufige Fragen zum oralen Mikrobiom", [
      ["Was ist das orale Mikrobiom?", "Das orale Mikrobiom ist die Gemeinschaft von Bakterien, Pilzen und weiteren Mikroorganismen, die natürlicherweise in Ihrem Mund leben. Nach dem Darm ist die Mundhöhle die zweitvielfältigste mikrobiell besiedelte Region des Körpers. Diese Mikroorganismen sind kein Zeichen mangelnder Hygiene, sondern ein lebenswichtiger Teil eines gesunden Mundes: Sie bilden ein fein abgestimmtes Ökosystem, das Zähne und Zahnfleisch aktiv mitschützt."],
      ["Sind Bakterien im Mund automatisch schlecht?", "Nein. Die meisten Bakterien im Mund sind harmlos oder sogar nützlich – sie halten schädliche Keime in Schach und unterstützen ein gesundes Milieu. Probleme entstehen nicht durch die blosse Anwesenheit von Bakterien, sondern erst dann, wenn das Gleichgewicht kippt."],
      ["Was passiert bei einem bakteriellen Ungleichgewicht (Dysbiose)?", "Gerät das orale Mikrobiom aus dem Gleichgewicht, können sich schädliche Bakterien stärker ausbreiten. Das begünstigt Karies, Zahnfleischentzündungen (Gingivitis) oder Parodontitis. Häufige Auslöser sind zuckerreiche Ernährung, Rauchen, Alkohol, Stress, bestimmte Medikamente sowie ein geschwächtes Immunsystem. Auch der übermässige Einsatz stark antibakterieller Mundpflegeprodukte kann dazu beitragen."],
      ["Warum ist «möglichst viele Bakterien abtöten» nicht die beste Strategie?", "Aggressive antibakterielle Produkte unterscheiden nicht zwischen nützlichen und schädlichen Bakterien. Das kann das natürliche Gleichgewicht zusätzlich stören, statt es zu stärken. Deshalb setzt WHITE SMYLE nach eigener Angabe nicht auf Keimreduktion um jeden Preis, sondern auf den Aufbau und Erhalt eines stabilen, gesunden mikrobiellen Gleichgewichts."],
      ["Wie hängt Mundgesundheit mit der Gesamtgesundheit zusammen?", "Der Mund ist eine der wichtigsten Eintrittspforten des Körpers und über Speichel und Verdauungstrakt eng mit dem restlichen Organismus verbunden. Ein gestörtes orales Mikrobiom wirkt sich deshalb nicht nur auf Zähne und Zahnfleisch aus, sondern kann das gesamte Wohlbefinden beeinflussen."],
      ["Schadet professionelle Zahnreinigung meinem Mikrobiom?", "Nein – im Gegenteil. Eine fachgerecht durchgeführte Dentalhygiene entfernt gezielt schädliche Beläge und schafft die Grundlage für ein stabiles Gleichgewicht. Wichtig ist, dass sie sanft und individuell abgestimmt erfolgt."],
      ["Wie oft sollte ich mein orales Mikrobiom professionell überprüfen lassen?", "Das hängt vom individuellen Zustand ab. Die bisherige Website nennt als Orientierung an einer Stelle «alle 6–12 Monate», an einer anderen «alle 3–6 Monate»; bei Anzeichen einer Dysbiose auch häufiger. Den passenden Rhythmus ermittelt die Praxis in einer persönlichen Beratung."],
      ["Kann ich mein orales Mikrobiom durch die Ernährung beeinflussen?", "Ja. Zucker und stark verarbeitete Lebensmittel fördern schädliche Bakterien, während eine ballaststoffreiche, ausgewogene Ernährung das gesunde Gleichgewicht unterstützt."],
      ["Was macht die ganzheitliche Dentalhygiene bei WHITE SMYLE anders?", "Statt einzelne Symptome isoliert zu behandeln, betrachtet die Praxis den Mund als lebendiges Ökosystem. Im Mittelpunkt steht die Stärkung des natürlichen mikrobiellen Gleichgewichts als Grundlage für nachhaltige Zahn-, Zahnfleisch- und Mundgesundheit – gründlich, sanft und individuell."],
    ]),
    aufruf({ titel: "Lassen Sie Ihr orales Mikrobiom professionell beurteilen", text: "In einer persönlichen Dentalhygiene-Behandlung schaut sich die Praxis Ihr Mundmilieu an und zeigt, wie Sie es natürlich stärken können.", zweiterKnopf: { titel: "Zur Dentalhygiene", ziel: "/dentalhygiene/" } }),
  ],
});

const koerper = R({
  slug: "ratgeber/zahngesundheit-und-koerper", titel: "Wie Zahngesundheit den ganzen Körper beeinflusst", teaser: "Parodontitis, Entzündungen, Mundflora und der Zusammenhang zwischen Zahnfleisch und Allgemeingesundheit – mit Quellenangaben.",
  einleitung: "Viele Menschen denken bei Zahngesundheit hauptsächlich an Karies oder schöne Zähne. Tatsächlich steht die Mundgesundheit jedoch in enger Verbindung mit dem gesamten Körper.",
  seoTitel: "Zahngesundheit und Körper – Zusammenhang zwischen Mund und Allgemeingesundheit", seoBeschreibung: "Wie Parodontitis, Entzündungen und Mundflora Herz, Diabetes, Immunsystem und Schwangerschaft beeinflussen können – Ratgeber mit Studienverweisen von WHITE SMYLE.",
  bild: bild("koerper-hero", "Dentalhygienikerin kontrolliert Zahnfleisch und Zähne"), alteUrls: ["/zahngesundheit--krankheiten.html"], quelle: "whitesmyle.ch/zahngesundheit--krankheiten.html", mitInhaltsverzeichnis: true,
  bausteine: [
    text(`Entzündungen im Mundraum können nicht nur Zahnfleisch und Zähne schädigen, sondern auch Auswirkungen auf Herz, Immunsystem, Verdauung oder Allgemeinbefinden haben. Moderne Zahnmedizin und Naturmedizin beschäftigen sich zunehmend mit der Frage, wie chronische Entzündungen, bakterielle Belastungen und die Mundflora den Organismus beeinflussen. Besonders Parodontitis gilt heute nicht mehr nur als lokales Zahnproblem, sondern als möglicher Risikofaktor für verschiedene gesundheitliche Beschwerden.

## Warum der Mund eine wichtige Rolle für die Gesundheit spielt

Im Mund befinden sich Millionen von Bakterien. Viele davon sind wichtig für eine gesunde Mundflora. Problematisch wird es, wenn sich schädliche Bakterien vermehren und Entzündungen entstehen. Bleiben bakterielle Beläge über längere Zeit bestehen, können sie Zahnfleischentzündungen verursachen, Zahnstein bilden, das Zahnfleisch schädigen, den Kieferknochen angreifen und Entzündungsstoffe im Körper freisetzen. Diese Prozesse bleiben oft lange unbemerkt.

## Parodontitis – die unterschätzte Entzündung

Parodontitis gehört weltweit zu den häufigsten chronischen Erkrankungen. Dabei entzündet sich das Gewebe rund um den Zahn. Unbehandelt kann dies zu Knochenabbau und Zahnverlust führen. Typische Anzeichen: Zahnfleischbluten, Mundgeruch, empfindliches Zahnfleisch, Zahnfleischrückgang, lockere Zähne, unangenehmer Geschmack im Mund. Viele Betroffene haben anfangs kaum Schmerzen und bemerken die Erkrankung deshalb erst spät.`, { anker: "mund", titel: "Der Mund als Teil des Körpers" }),
    b("vergleichBaustein", { anker: "zusammenhang", titel: "Zusammenhang zwischen Zahnfleisch und Allgemeingesundheit", einleitung: "Darstellung der Praxis; die Studienverweise stehen weiter unten.", spalten: [
      { _key: "z1", titel: "Herz-Kreislauf-System", punkte: ["Chronische Entzündungen im Mund können das Herz-Kreislauf-System belasten", "Entzündungsstoffe und Bakterien gelangen über die Blutbahn in den Körper und stehen im Verdacht, Gefässe zusätzlich zu belasten"] },
      { _key: "z2", titel: "Diabetes", punkte: ["Wechselseitige Beziehung zwischen Diabetes und Parodontitis", "Menschen mit Diabetes haben häufiger Zahnfleischentzündungen", "Chronische Entzündungen können die Blutzuckerregulation erschweren"] },
      { _key: "z3", titel: "Immunsystem und Schwangerschaft", punkte: ["Naturmedizinische Ansätze betrachten den Mund als Teil des gesamten Immunsystems", "Chronische Entzündungsherde können den Organismus dauerhaft belasten", "In der Schwangerschaft verändert sich das Zahnfleisch hormonbedingt; viele Frauen entwickeln schneller Entzündungen"] },
    ] }),
    text(`## Mundflora – das natürliche Gleichgewicht im Mund

Ähnlich wie im Darm existiert auch im Mund eine empfindliche Bakterienbalance. Gerät diese aus dem Gleichgewicht, können sich schädliche Keime stärker vermehren. Naturmedizinisch wird deshalb oft Wert gelegt auf entzündungsarme Ernährung, ausreichende Mineralstoffversorgung, genügend Flüssigkeit, Speichelfluss, Reduktion von Zucker, Stressmanagement und Unterstützung des Immunsystems. Eine gesunde Mundflora kann helfen, Entzündungen vorzubeugen.

## Was sagt die Naturmedizin?

Naturheilkundliche Ansätze betrachten Zahngesundheit häufig ganzheitlich. Häufig diskutierte Themen: Einfluss chronischer Entzündungen, Bedeutung der Ernährung, Zusammenhang zwischen Darm und Mundflora, Mineralstoffhaushalt, Stress und Zähneknirschen, Auswirkungen von Rauchen, entzündungsfördernde Lebensweise. **Naturmedizin ersetzt keine zahnmedizinische Behandlung,** kann jedoch eine Ergänzung für Prävention und allgemeines Wohlbefinden sein.

## Warum professionelle Dentalhygiene medizinisch wichtig ist

Viele bakterielle Beläge sitzen an Stellen, die mit der Zahnbürste kaum erreichbar sind: Zahnzwischenräume, unter dem Zahnfleisch, rund um Implantate, bei Kronen und Brücken. Professionelle Dentalhygiene entfernt diese Beläge gezielt und hilft, Zahnfleischentzündungen vorzubeugen, Parodontitis frühzeitig zu erkennen, Zahnstein zu entfernen, die Mundflora zu stabilisieren und langfristig Zähne zu erhalten.

## Ernährung, Stress, Früherkennung

Auch die Ernährung beeinflusst die Mundgesundheit deutlich: möglichst wenig versteckter Zucker, ausreichend Vitamine und Mineralstoffe, calciumreiche Ernährung, genügend Wasser, frische Lebensmittel, Reduktion stark säurehaltiger Getränke. Stress wirkt sich nicht nur psychisch, sondern auch körperlich aus – häufige Folgen sind Zähneknirschen, Verspannungen, trockener Mund, geschwächtes Immunsystem und erhöhte Entzündungsneigung. Viele Erkrankungen im Mund entwickeln sich langsam; regelmässige Kontrollen und professionelle Dentalhygiene helfen, Veränderungen frühzeitig zu erkennen.

**Fazit:** Die Mundgesundheit beeinflusst weit mehr als nur die Zähne. Professionelle Dentalhygiene, gute Mundpflege und ein bewusster Lebensstil können einen wichtigen Beitrag leisten, um Zähne und Zahnfleisch langfristig gesund zu erhalten – und damit auch das allgemeine Wohlbefinden zu unterstützen.`, { anker: "mundflora", titel: "Mundflora, Naturmedizin, Ernährung" }),
    text(`## Wissenschaftliche Quellen und Studien

Die auf der bisherigen Website genannten Quellen (Zusammenfassungen der Praxis, Links extern):

1. **Parodontitis und Diabetes:** «Bidirectional association between periodontal disease and diabetes mellitus», Scientific Reports (Nature). Wechselseitiger Zusammenhang; chronische Entzündungen beeinflussen den Stoffwechsel. [Nature](https://www.nature.com/articles/s41598-021-93062-6)
2. **Parodontitis und Herz-Kreislauf-Erkrankungen:** Zusammenhang zwischen Parodontitis und Gefässerkrankungen, Gefässchirurgie / Springer Medizin. Parodontitis gilt als möglicher Risikofaktor; interdisziplinäre Zusammenarbeit wird empfohlen. [Springer](https://link.springer.com/article/10.1007/s00772-020-00689-2)
3. **«Bermuda-Dreieck»-Studie:** Parodontitis, Diabetes und Herzgesundheit, niederländische Forschungsarbeit (Vrije Universiteit Amsterdam). [VU Amsterdam](https://research.vu.nl/en/publications/25f743f7-61bf-40a3-9dbd-18adad2af77e)
4. **PAROKRANK-Studie** (Karolinska Institutet): über 1600 Personen; Hinweise auf Zusammenhänge zwischen versteckten Diabetes-Erkrankungen, Herzinfarkten und schwerer Parodontitis. [PubMed](https://pubmed.ncbi.nlm.nih.gov/31182493/)
5. **Deutsche Mundgesundheitsstudie (DMS 6):** Menschen mit Herz-Kreislauf-Erkrankungen weisen häufiger Zahnverlust, schwere Parodontitis und eingeschränkte Mundgesundheit auf. [dms6.info](https://www.dms6.info/)
6. **Naturmedizin und ganzheitliche Ansätze:** chronische Entzündungen, Mundflora, Ernährung, Immunsystem, Stress, Darm-Mund-Achse – viele dieser Ansätze werden zunehmend wissenschaftlich untersucht.

^ Disclaimer der Praxis: Die beschriebenen Zusammenhänge basieren auf wissenschaftlichen Studien und aktuellen medizinischen Erkenntnissen. Naturmedizinische Ansätze verstehen sich als ergänzende Betrachtungsweise und ersetzen keine zahnmedizinische oder ärztliche Behandlung. Die Verlinkung und Zusammenfassung der Studien stammen von der Praxis; diese Demo hat die Inhalte der Studien nicht überprüft.`, { anker: "quellen", titel: "Quellen", breite: "schmal" }),
    aufruf({ titel: "Vereinbaren Sie Ihren Dentalhygiene-Termin", text: "Regelmässige Dentalhygiene als Beitrag zu Zahnerhalt und Wohlbefinden.", zweiterKnopf: { titel: "Ratgeber Mikrobiom", ziel: "/ratgeber/orales-mikrobiom/" } }),
  ],
});

const gingivitis = R({
  slug: "ratgeber/gingivitis", titel: "Gingivitis: Zahnfleischentzündung behandeln", teaser: "Zahnfleischbluten oder gerötetes Zahnfleisch? Ursachen, Symptome, was Sie selbst tun können und wie Dentalhygiene hilft.",
  einleitung: "Gingivitis ist eine Entzündung des Zahnfleisches und die früheste Form der Parodontitis (Zahnfleischerkrankung). Sie entsteht meist durch bakterielle Zahnbeläge (Plaque), die sich am Zahnfleischrand ansammeln.",
  seoTitel: "Gingivitis behandeln – Zahnfleischentzündung und Dentalhygiene", seoBeschreibung: "Zahnfleischbluten oder gerötetes Zahnfleisch? Gingivitis: Ursachen, Symptome, Selbsthilfe und wie Dentalhygiene das Zahnfleisch nachhaltig verbessert.",
  bild: bild("paro-ablauf", "Schemazeichnung: Ablauf einer Parodontitis-Behandlung"), alteUrls: ["/gingivitis.html"], quelle: "whitesmyle.ch/gingivitis.html",
  bausteine: [
    text(`**Typisch:** gerötetes Zahnfleisch, Schwellung, Zahnfleischbluten beim Putzen. Wichtig: Gingivitis ist reversibel, wenn sie früh erkannt und behandelt wird.

## Professionelle Dentalhygiene bei Gingivitis

Die wichtigste Therapie ist die gründliche Entfernung von Plaque, Zahnstein und Bakterien unter dem Zahnfleisch. Diese Behandlung (Scaling) reduziert Entzündungen und ermöglicht die Heilung des Zahnfleisches.

## Ursachen von Zahnfleischentzündung

Die Hauptursache ist unzureichende Mundhygiene. Dadurch entstehen bakterielle Beläge, die das Zahnfleisch reizen. Weitere Risikofaktoren: Rauchen, Diabetes, Hormonveränderungen (z. B. Schwangerschaft), schlechte Zahnstellung, bestimmte Medikamente.

## Symptome – so erkennen Sie Gingivitis frühzeitig

Achten Sie auf Zahnfleischbluten (häufig erstes Symptom), Rötung und Schwellung, empfindliches Zahnfleisch und Mundgeruch. Gesundes Zahnfleisch blutet nicht beim Putzen – Blut ist immer ein Warnsignal.

## Was passiert ohne Behandlung?

Unbehandelte Gingivitis kann sich zu Parodontitis entwickeln: Zerstörung von Knochen und Gewebe, Zahnlockerung, Zahnverlust. Früh behandeln ist entscheidend, da nur Gingivitis vollständig heilbar ist.

## Was Sie selbst tun können

- 2 Mal täglich Zähneputzen
- tägliche Zahnzwischenraumreinigung mit Zahnseide oder Zahnsticks
- regelmässige Kontrollen

Gute Mundhygiene kann Gingivitis oft vollständig rückgängig machen. Blutet das Zahnfleisch beim Verwenden von Zahnseide, deutet das meist auf eine Entzündung durch bakterielle Beläge hin. Reinigen Sie die Zahnzwischenräume weiterhin täglich – in den meisten Fällen lässt das Bluten nach wenigen Tagen nach, sobald die Entzündung abklingt.

## «Ich putze doch schon gut …»

Selbst bei guter Mundhygiene entstehen oft bakterielle Beläge an schwer erreichbaren Stellen. Gingivitis verursacht oft lange keine Schmerzen, deshalb wird sie häufig erst entdeckt, wenn das Zahnfleisch bereits stark entzündet ist. Eine regelmässige professionelle Reinigung entfernt Bakterien auch in schwer erreichbaren Bereichen, reduziert Zahnfleischbluten schnell und verhindert langfristige Schäden. Ziel der Behandlung: Entzündung stoppen, Zahnfleisch stärken, Fortschreiten verhindern.

^ Die Praxis verweist für die Definition auf die [Mayo Clinic](https://www.mayoclinic.org/diseases-conditions/gingivitis/symptoms-causes/syc-20354453).`),
    faq("Häufige Fragen", [
      ["Ist Zahnfleischbluten normal?", "Nein. Zahnfleischbluten ist ein typisches Zeichen für Gingivitis und sollte immer abgeklärt werden."],
      ["Kann Gingivitis von alleine verschwinden?", "Nein – ohne Behandlung bleibt die Entzündung bestehen oder verschlechtert sich."],
      ["Wie schnell heilt Gingivitis?", "Bei guter Mundhygiene und professioneller Reinigung oft innerhalb von 1–2 Wochen."],
      ["Wie oft sollte man zur Dentalhygiene?", "In der Regel 1–2 Mal pro Jahr, bei Gingivitis häufiger."],
      ["Ist Gingivitis gefährlich?", "Unbehandelt kann sie zu Parodontitis und Zahnverlust führen."],
      ["Was ist der Unterschied zwischen Gingivitis und Parodontitis?", "Gingivitis ist reversibel (Zahnfleischentzündung), Parodontitis verursacht bleibende Schäden am Zahnhalteapparat."],
      ["Welche Zahnpasta hilft bei Gingivitis?", "Zahnpasten mit antibakteriellen Wirkstoffen oder Hydroxylapatit können nach Angabe der Praxis unterstützen – entscheidend ist jedoch die richtige Putztechnik."],
    ]),
    aufruf({ titel: "Gingivitis vermeiden – Termin buchen", text: "Regelmässige Dentalhygiene entfernt Bakterien auch dort, wo die Zahnbürste nicht hinkommt.", zweiterKnopf: { titel: "Behandlung bei Parodontitis", ziel: "/dentalhygiene/parodontitis/" } }),
  ],
});

const karies = R({
  slug: "ratgeber/karies", titel: "Karies: Ursachen, Symptome und Prävention", teaser: "Wie Karies entsteht, wie Sie sie früh erkennen und welche vier Dinge helfen, nie wieder Karies zu bekommen.",
  einleitung: "Karies ist eine der häufigsten Zahnerkrankungen weltweit und entsteht durch Bakterien, die Zucker in Säuren umwandeln und dadurch den Zahnschmelz angreifen.",
  seoTitel: "Karies behandeln und vorbeugen – Ursachen, Symptome, Dentalhygiene", seoBeschreibung: "Karies früh erkennen und vorbeugen: Ursachen, Symptome, Karies bei Kindern, «Nie wieder Karies» in vier Schritten. Ratgeber der Praxis WHITE SMYLE Zürich.",
  bild: bild("karies-hero", "Frau bei der Zahnbehandlung"), alteUrls: ["/karies.html"], quelle: "whitesmyle.ch/karies.html",
  bausteine: [
    text(`Unbehandelt führt Karies zu Löchern im Zahn, Schmerzen und langfristig Zahnverlust. Wichtig: Karies entsteht schleichend – oft lange ohne Beschwerden.

## Wie entsteht Karies?

Karies entsteht durch ein Zusammenspiel von drei Faktoren: Bakterien (Plaque), zuckerhaltige Ernährung und unzureichende Mundhygiene. Bakterien wandeln Zucker innerhalb weniger Minuten in Säuren um, die den Zahnschmelz angreifen und entmineralisieren. Besonders häufig betroffen: Kinder (weicher Zahnschmelz) und Menschen mit schlechter Zahnzwischenraumreinigung.

## Symptome – Karies früh erkennen

Frühe Anzeichen: weisse oder matte Flecken auf dem Zahn, beginnende Verfärbungen. Spätere Symptome: Schmerzen, Empfindlichkeit (heiss, kalt, süss), sichtbare Löcher. Schmerzen bedeuten meist: Karies ist bereits fortgeschritten.

## Karies bei Kindern – besonders wichtig

Karies ist eine der häufigsten Erkrankungen im Kindesalter. Kinder sind stärker betroffen wegen dünnerem Zahnschmelz, häufigerem Zuckerkonsum und unvollständiger Putztechnik. Laut Praxis zeigen Studien: Kinder aus Familien mit Karies haben ein deutlich höheres Risiko (bis zu 3-mal höher). Siehe auch [Dentalhygiene für Kinder](/dentalhygiene/kinder/).

## Was passiert ohne Behandlung?

Unbehandelte Karies breitet sich im Zahn aus, erreicht das Zahninnere (Nerv) und kann Entzündungen verursachen. Früh erkannt ist Karies einfach behandelbar – spät wird es aufwendig.

## Karies vorbeugen

Die wichtigste Prävention ist die regelmässige Entfernung von Plaque, Bakterien und Zahnstein durch die professionelle Dentalhygiene. Dadurch wird die Entstehung von Karies deutlich reduziert. Was Sie selbst tun können: 2 Mal täglich Zähneputzen, tägliche Zahnseide oder Interdentalbürsten, Zucker reduzieren (besonders Zwischenmahlzeiten), regelmässige Kontrollen. «Kein Zucker – keine Karies» ist laut Praxis wissenschaftlich gut belegt. Ziel der Kariesprävention: Zahnschmelz stärken, Bakterien reduzieren, Löcher verhindern.

^ Die Praxis verweist für die Definition auf [Helvident](https://helvident.ch/de/zahnkaries/).`),
    text(`## Nie wieder Karies: diese vier Dinge sollten Sie wissen

Ein lohnendes Ziel: Egal wie viel Karies Sie in der Vergangenheit hatten – entscheiden Sie, dass Sie nie neue bekommen möchten.

1. **Die Gewohnheiten funktionieren.** Es gibt einen Grund, warum Dentalhygienikerinnen und Zahnärzte möchten, dass Sie die Zähne zweimal täglich putzen, einmal am Tag Zahnseide oder Sticks benutzen und zweimal im Jahr eine professionelle Zahnreinigung bei der Dentalhygienikerin machen: Es verhindert wirklich, dass Sie «Löcher» bekommen. Karies wird durch zwei Dinge verursacht: Kohlenhydrate und Bakterien. Kohlenhydrate in Form von Zucker und Stärke füttern die Bakterien auf den Zähnen; nach einer Mahlzeit (gesüsste Speisen, Fruchtsäfte, Softdrinks, Kuchen, aber auch Ketchup, Joghurt, Brot, Müsli, Pasta, Pizza, Kartoffeln, Reis) scheiden sie Säure aus. Wird dieser Belag nicht entfernt, frisst er sich durch den Zahnschmelz. Bestimmte Stellen erreicht man mit der Zahnbürste nicht – erst bei der nächsten Dentalhygiene wird dort die Plaque entfernt.
2. **Reduzieren Sie Zucker und Kohlenhydrate.** Ernsthaft, und stark. Essen oder trinken Sie nichts mit Zucker zwischen den Mahlzeiten. Wenn Sie Lust auf Süsses haben, essen Sie es zu den Mahlzeiten und nicht als Snack – und putzen Sie danach die Zähne.
3. **Fragen Sie nach einer Versiegelung der Backenzähne.** Sie deckt die tiefen Rillen (Fissuren) ab, sodass Karies nicht so schnell entstehen kann. Viele Rillen sind zu tief und schmal für die Zahnbürste; eine Versiegelung macht die Oberfläche glatt und leichter zu reinigen.
4. **Zahnpasten mit Hydroxylapatit.** Unter dem Mikroskop sind Zähne wie eine «Kraterlandschaft». Diese Krater werden nach Angabe der Praxis beim Putzen mit Zahnpasten mit künstlichem Zahnschmelz (Hydroxylapatit) aufgefüllt; die Kristalle vereinen sich mit der Zahnoberfläche und machen sie glatter und widerstandsfähiger, sodass weniger Bakterien anhaften.

Wenn Sie diese vier Schritte anwenden, sinkt laut Praxis die Wahrscheinlichkeit, dass Sie je «Löcher» bekommen, drastisch.`, { titel: "Dental News", bild: bild("karies-entstehung", "Schemazeichnung: Entstehung von Karies"), bildPosition: "rechts" }),
    faq("Häufige Fragen zu Karies", [
      ["Was ist die Hauptursache für Karies?", "Bakterien, die Zucker in Säuren umwandeln und den Zahnschmelz angreifen."],
      ["Kann Karies von selbst heilen?", "Im Frühstadium (Initialkaries) ja – durch Remineralisation und gute Mundhygiene."],
      ["Wie erkenne ich Karies früh?", "Durch weisse Flecken oder Verfärbungen auf den Zähnen – oft ohne Schmerzen."],
      ["Ist Karies bei Kindern gefährlich?", "Ja. Milchzähne sind wichtig für die Entwicklung und sollten unbedingt behandelt werden."],
      ["Wie oft sollte man zur Dentalhygiene?", "1–2 Mal pro Jahr, bei erhöhtem Risiko häufiger."],
      ["Kann man Karies komplett verhindern?", "Mit guter Mundhygiene, wenig Zucker und regelmässiger Kontrolle ist das Risiko stark reduzierbar."],
      ["Warum bekomme ich trotz Zähneputzen Karies?", "Häufig liegt es an fehlender Zahnzwischenraumreinigung, zu häufigem Zuckerkonsum oder falscher Putztechnik."],
      ["Wie helfen Zahnpasten mit Hydroxylapatit gegen Karies?", "Hydroxylapatit (HAP) hilft nach Angabe der Praxis bei der Kariesprävention, indem es den Zahnschmelz remineralisiert und mikroskopisch kleine Defekte auffüllt, bevor sich daraus ein Kariesloch entwickeln kann. Studien zeigten laut Praxis eine ähnliche Schutzwirkung wie Fluorid."],
    ]),
    aufruf({ titel: "Erste Anzeichen von Karies oder Zahnschmerzen?", text: "Vereinbaren Sie Ihre Dentalhygiene in Zürich und schützen Sie Ihre Zähne langfristig. Bei Schmerzen ist zusätzlich eine zahnärztliche Abklärung nötig.", zweiterKnopf: { titel: "Dentalhygiene", ziel: "/dentalhygiene/" } }),
  ],
});

export default [zahnbleaching, dhpa, anbieter, mikrobiom, koerper, gingivitis, karies];
