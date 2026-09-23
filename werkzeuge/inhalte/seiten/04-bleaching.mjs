import { b, text, faq, hinweis, aufruf, bild, pt } from "../pt.mjs";
const BUCHEN = { titel: "Termin online buchen", ziel: "https://app.cituro.com/booking/2814276", extern: true };
const fall = (n, titel) => ({ _key: `fall-${n}`, titel, bilder: [bild(`fall-${n}-1`, `Fallbeispiel ${n}: Ausgangssituation`), bild(`fall-${n}-2`, `Fallbeispiel ${n}: nach dem HEYDENT Power Bleaching`), bild(`fall-${n}-3`, `Fallbeispiel ${n}: nach dem Refresher Bleaching`)] });

const bleaching = {
  slug: "bleaching", art: "leistung", titel: "Professionelles Zahnbleaching in Zürich", teaser: "Natürlich weisse Zähne in rund 60 Minuten: HEYDENT Power Bleaching, Refresher und Home Bleaching – seit 2012 in Zürich Altstetten.",
  seoTitel: "Zahnbleaching Zürich – Bleaching seit 2012 – WHITE SMYLE", seoBeschreibung: "Zahnbleaching in Zürich seit 2012: HEYDENT Power Bleaching, Home Bleaching und Refresher. Preise, Fallbeispiele, Antworten auf häufige Fragen. Termin buchen.",
  hero: { variante: "seite", kurzzeile: "Bleaching-Erfahrung seit 2012", titel: "Professionelles Zahnbleaching in Zürich", text: "Natürlich weisse Zähne in rund 60 Minuten mit modernen Bleaching-Technologien – bei den Bleaching-Profis von WHITE SMYLE in Zürich Altstetten.", knopf: BUCHEN, zweiterKnopf: { titel: "Bleaching-Preise", ziel: "/preise/" }, bild: bild("bleaching-hero", "Lachende Frau formt mit den Händen einen Bilderrahmen") },
  bild: bild("bleaching-hero", "Lachende Frau formt mit den Händen einen Bilderrahmen"), alteUrls: ["/bleaching.html"], quelle: "whitesmyle.ch/bleaching.html", pruefstatus: "sprachlich-angepasst", mitInhaltsverzeichnis: true,
  bausteine: [
    text(`Seit 2012 steht WHITE SMYLE für professionelle Zahnaufhellung. Mit tausenden durchgeführten Bleachings, moderner Technologie und langjähriger Erfahrung gehört die Praxis nach eigener Angabe zu den etablierten Anbietern für Zahnbleaching in Zürich. Der Fokus: natürlich weisse Zähne statt künstlicher Hollywood-Look.

Dabei kombiniert die Praxis moderne Bleaching-Systeme, sichere Anwendungen, individuelle Beratung, professionelle Dental-Erfahrung und schonende Methoden. Das Ergebnis sind sichtbar hellere, gepflegte und natürliche Zähne – abgestimmt auf Sie und Ihr Lächeln.

## Warum sich immer mehr Menschen für Zahnbleaching entscheiden

Ein gepflegtes Lächeln verändert oft mehr, als man denkt. Es wirkt offen, gepflegt, attraktiv und selbstbewusst – ob beim ersten Date, im Business-Meeting, auf Fotos oder einfach im Alltag. Viele Menschen fühlen sich mit verfärbten oder gelblichen Zähnen unsicher und lächeln weniger bewusst.

Durch Kaffee, Tee, Rotwein, Rauchen oder die natürliche Alterung verlieren Zähne mit der Zeit ihre Helligkeit. Selbst bei guter Zahnpflege lassen sich diese Verfärbungen oft nicht mehr vollständig entfernen. Mit einem professionellen Bleaching bringen Sie Ihr natürliches Zahnweiss zurück – schonend, modern und sichtbar.`, { anker: "profi", titel: "Ihr Bleaching-Profi in Zürich", bild: bild("bleaching-lampe", "Bleaching-Behandlung mit Lichtaktivierung"), bildPosition: "rechts" }),
    b("leistungenBaustein", { anker: "arten", titel: "Unsere Bleaching-Arten", einleitung: "Welches Bleaching passt zu Ihnen? Die Praxis berät Sie persönlich und findet gemeinsam mit Ihnen die passende Methode für Ihre Wünsche und Ihre Zahnfarbe.", leistungen: ["leistung-power-bleaching-plus", "leistung-power-bleaching", "leistung-refresher", "leistung-home-bleaching"], darstellung: "karten" }),
    b("ablaufBaustein", { anker: "reihenfolge", titel: "Die optimale Reihenfolge für gesunde und weisse Zähne", einleitung: "Vor einem Bleaching empfiehlt die Praxis eine professionelle Dentalhygiene: Zahnstein wird entfernt, Beläge gelöst, Oberflächen gereinigt. Das Bleaching kann dadurch gleichmässiger und effektiver wirken.", schritte: [
      { _key: "r1", titel: "Dentalhygiene", text: "Entfernung aller Oberflächenverfärbungen für ein optimales Bleaching-Ergebnis. So beseitigt das Gel die in der Tiefe des Zahnschmelzes liegenden Verfärbungen besser.", bild: bild("bleaching-ablauf-1", "Dentalhygiene vor dem Bleaching") },
      { _key: "r2", titel: "Bleaching mit Lichtaktivierung", text: "Bleaching-Behandlung mit Lichtaktivierung des High-Performance-Bleaching-Gels.", bild: bild("bleaching-ablauf-2", "Bleaching-Lampe über den Zähnen einer Patientin") },
      { _key: "r3", titel: "Farbvergleich", text: "Vergleich der Zahnfarben vorher – nachher. Resultat geniessen und viel lachen.", bild: bild("bleaching-ablauf-3", "Farbring zum Vergleich der Zahnfarbe") },
    ], abschluss: "Alles in einer Sitzung: das Kombipaket Dentalhygiene & Bleaching." }),
    b("aufrufBaustein", { variante: "karte", titel: "Für das beste Ergebnis: Kombipaket Dentalhygiene & Bleaching", text: "Dentalhygiene und Bleaching in einer Sitzung, ca. 2 Stunden. Kombipakete ab CHF 349.–.", knopf: { titel: "Zum Kombipaket", ziel: "/kombipaket/" }, zweiterKnopf: BUCHEN }),
    b("kennzahlenBaustein", { anker: "warum", titel: "Warum Kundinnen und Kunden seit Jahren zu WHITE SMYLE kommen", einleitung: "Bleaching-Erfahrung seit 2012, Erfahrung mit unterschiedlichsten Zahnfarben, genetischen Beschaffenheiten und Verfärbungen, moderne Bleaching-Systeme, zentral in Zürich Altstetten." }),
    b("kundenmeinungenBaustein", { anker: "kundenstimmen", titel: "Kundenstimmen über WHITE SMYLE Bleaching", darstellung: "wand", meinungen: ["km-bl-jessica-m", "km-bl-marco-m", "km-bl-alina-r", "km-bl-kevin-s", "km-bl-laura-t", "km-bl-sarah-k", "km-bl-nico-b", "km-bl-vanessa-l", "km-bl-david-p", "km-bl-elena-f"], quellenHinweis: "Kundenstimmen wörtlich von whitesmyle.ch/bleaching.html (inklusive der dort gezeigten Sternebewertungen). Eine Plattformquelle ist nicht angegeben; Herkunft und Einwilligung sind durch die Praxis zu bestätigen." }),
    faq("Häufige Fragen zum Zahnbleaching", [
      ["Ist professionelles Zahnbleaching schädlich für die Zähne?", "Professionelles Zahnbleaching gilt bei fachgerechter Anwendung als sicher und schonend. Moderne Bleaching-Systeme arbeiten gezielt auf Verfärbungen an der Zahnoberfläche und im Zahnschmelz, ohne die Zahnsubstanz zu beschädigen. Wichtig ist, dass das Bleaching professionell durchgeführt oder begleitet wird. Günstige Home-Kits oder unsachgemässe Anwendungen können häufiger zu Reizungen oder Überempfindlichkeiten führen."],
      ["Wie lange hält ein Zahnbleaching?", "Das Ergebnis hängt stark von der Genetik der Zähne ab und hält je nach Lebensstil und Ernährung meist zwischen 1 und 2 Jahren. Wer viel Kaffee trinkt, raucht oder regelmässig Rotwein konsumiert, wird meist schneller neue Verfärbungen bemerken. Mit guter Zahnpflege, regelmässiger Dentalhygiene und gelegentlichen Refresher-Behandlungen lassen sich die Resultate deutlich länger erhalten."],
      ["Funktioniert Bleaching bei jedem?", "Grundsätzlich ja – allerdings unterschiedlich stark. Das Resultat hängt unter anderem ab von natürlicher Zahnfarbe, Stärke der Verfärbungen, Alter, Beschaffenheit des Zahnschmelzes und bisherigen Zahnbehandlungen. Gelbliche Zähne reagieren oft besser auf Bleaching als gräuliche Verfärbungen."],
      ["Können Kronen, Veneers oder Füllungen aufgehellt werden?", "Nein. Bleaching wirkt nur auf natürliche Zahnsubstanz. Kronen, Veneers oder Kunststofffüllungen verändern ihre Farbe nicht. Deshalb prüft die Praxis vor jeder Behandlung individuell, welche Resultate realistisch und ästhetisch sinnvoll sind."],
      ["Warum eine Dentalhygiene vor dem Bleaching?", "Beläge und Zahnstein können das Bleaching-Ergebnis beeinflussen. Durch eine professionelle Dentalhygiene werden Oberflächen gereinigt und Verfärbungen entfernt, das Bleaching wirkt gleichmässiger."],
      ["Warum werden Zähne überhaupt gelb oder dunkler?", "Zähne verfärben sich mit der Zeit ganz natürlich – besonders häufig durch Kaffee, Tee, Rotwein, Nikotin, Curry oder andere stark färbende Lebensmittel und die natürliche Alterung. Zusätzlich lagern sich Farbpigmente über Jahre im Zahnschmelz ein, die mit normalem Zähneputzen oft nicht mehr entfernt werden können."],
      ["Wie oft kann man Bleaching machen?", "Professionelles Bleaching sollte nicht übertrieben werden. Viele Kundinnen und Kunden machen alle 1–2 Jahre ein Power Bleaching und zwischendurch Refresher-Sitzungen. So bleiben die Zähne langfristig schön hell und natürlich."],
      ["Ist Bleaching auch für empfindliche Zähne geeignet?", "In vielen Fällen ja. Moderne Systeme wie professionelle HEYDENT-Bleachings arbeiten nach Angabe der Praxis deutlich schonender als viele günstige Whitening-Produkte. Zusätzlich können spezielle Gele oder angepasste Anwendungen verwendet werden, um Empfindlichkeiten zu minimieren. Mehr auf der Seite [Bleaching ohne Dentalhygiene](/bleaching/bleaching-ohne-dentalhygiene/)."],
      ["Gibt es Unterschiede zwischen professionellem Bleaching und Whitening-Strips?", "Ja – grosse Unterschiede. Professionelles Bleaching: stärkere und effektivere Wirkstoffe, kontrollierte Anwendung, gleichmässigere Resultate, sicherer für Zahnfleisch und Zahnschmelz. Whitening-Strips aus Drogerien liefern meist deutlich schwächere und ungleichmässigere Ergebnisse; viele Nutzerinnen und Nutzer berichten häufiger über Sensibilität oder Schmerzen."],
      ["Tut Bleaching weh?", "Die meisten empfinden die Behandlung als gut erträglich. Von 100 Personen haben nach Erfahrung der Praxis ca. 20 während oder nach dem Bleaching kurzfristig leichte Empfindlichkeiten – besonders, wenn jemand mit den Zähnen knirscht oder presst, generell empfindliche Zähne oder freiliegende Zahnhälse hat. Dieses Gefühl verschwindet normalerweise innerhalb weniger Stunden bis Tage wieder. WHITE SMYLE bietet Produkte für die Behandlung vor und nach dem Bleaching an."],
      ["Warum werden Zähne nach dem Bleaching manchmal empfindlich?", "Beim Bleaching öffnen sich mikroskopisch kleine Poren im Zahnschmelz, damit Verfärbungen entfernt werden können. Dadurch reagieren Zähne kurzfristig empfindlicher auf Kälte, Wärme, Luft und süsse Lebensmittel. Die Sensibilität ist meist nur temporär. Zahnpasten mit Hydroxylapatit (Zahnschmelz) helfen nach Angabe der Praxis, Sensitivitäten schnell zu beseitigen."],
      ["Kann Rauchen nach dem Bleaching das Ergebnis beeinflussen?", "Ja. Nikotin gehört zu den häufigsten Ursachen für neue Zahnverfärbungen. Wer nach dem Bleaching regelmässig raucht, wird meist schneller wieder dunklere Zähne bekommen. Tipp der Praxis: 1–2 Tage rauchfrei, und die Zahnaufhellung hält länger an."],
      ["Wie weiss werden meine Zähne wirklich?", "Das Ziel eines professionellen Bleachings ist ein natürlich frisches Weiss – nicht ein künstlicher «Hollywood-Look». Ihre Zähne können nur bis zum genetisch möglichen Weiss aufgehellt werden; es hängt also von Ihrer natürlichen Zahnfarbe ab. In vielen Fällen sind mehrere Nuancen Aufhellung möglich."],
      ["Wie lange dauert ein Bleaching-Termin?", "HEYDENT Power Bleaching plus: ca. 60–90 Minuten. Refresher Bleaching: ca. 30–45 Minuten. Home Bleaching: Schiene erstellen und Beratung ca. 30 Minuten, Bleaching-Sitzung zuhause je nach Gel 60 Minuten oder über Nacht."],
      ["Hat Genetik Einfluss auf das Bleaching-Ergebnis?", "Ja. Die natürliche Zahnfarbe und Zahnstruktur sind teilweise genetisch bedingt. Gelbliche Zähne reagieren oft stärker auf Bleaching als gräuliche oder bläuliche Zahnfarben. Gräuliche oder bläuliche Zähne sind häufig stärker genetisch oder durch Medikamente beeinflusst und reagieren manchmal langsamer oder weniger intensiv – dann sind mehrere Sitzungen notwendig. Deshalb fällt jedes Ergebnis individuell aus."],
      ["Warum ist professionelle Beratung wichtig?", "Ein professionelles Bleaching beginnt immer mit einer individuellen Einschätzung der Ausgangssituation: natürliche Zahnfarbe, Art der Verfärbungen, genetische Grundfarbe, Zahnschmelz, vorhandene Füllungen oder Kronen. So können realistische und ästhetisch schöne Ergebnisse erzielt werden."],
      ["Was sollte ich nach dem Bleaching vermeiden?", "Während der ersten 24–48 Stunden nach dem Bleaching sollten Sie möglichst auf stark färbende Lebensmittel verzichten: Kaffee, Tee, Rotwein, Nikotin, Curry und andere verfärbende Gewürze, dunkle Saucen, blutiges Steak, Balsamico, Tomatensauce, Sojasauce – kurz gesagt alles, was auf einem weissen T-Shirt Flecken hinterlässt. In dieser Zeit sind die Zähne besonders aufnahmefähig für neue Farbpigmente."],
    ], { anker: "faq" }),
    b("fallbeispieleBaustein", { anker: "fallbeispiele", titel: "Fallbeispiele von schwierigen Bleaching-Fällen", einleitung: pt(`Bleaching-Beispiele nach dem ersten und zweiten Bleaching. Die Erfahrung der Praxis zeigt: Dranbleiben lohnt sich. Auch wenn die Zahnstellung nicht perfekt ist, wirken weisse Zähne wesentlich besser.

Erstes Bild: Ausgangssituation. Zweites Bild: vollständiges HEYDENT Power Bleaching, Dauer ca. 60 Minuten. Drittes Bild: meist 4–6 Monate danach Refresher Bleaching, Dauer ca. 20–30 Minuten.`), beschriftungen: ["Ausgangssituation", "Nach HEYDENT Power Bleaching (ca. 60 Min.)", "4–6 Monate später: nach Refresher Bleaching"], faelle: [fall(1, "Bleaching-Fallbeispiel 1"), fall(2, "Bleaching-Fallbeispiel 2"), fall(3, "Bleaching-Fallbeispiel 3"), fall(4, "Bleaching-Fallbeispiel 4"), fall(5, "Bleaching-Fallbeispiel 5"), fall(6, "Bleaching-Fallbeispiel 6")], hinweis: "Aufnahmen und Beschriftungen der Praxis von der bisherigen Website, unbearbeitet. Jedes Ergebnis ist individuell (siehe AGB). Die Einwilligung der abgebildeten Personen ist durch die Praxis zu bestätigen." }),
    text(`## Sind Sie bereit für Ihr neues Lächeln?

Ein strahlendes Lächeln wirkt gepflegt, attraktiv und selbstbewusst – oft mehr, als man denkt. Seit Jahren vertrauen Kundinnen und Kunden aus Zürich auf die Erfahrung von WHITE SMYLE, wenn es um professionelle Zahnaufhellung und natürlich weisse Zähne geht. Mit ca. 800 Bleachings pro Jahr weiss die Praxis nach eigener Angabe, welche Methode zu Ihrem Zahntyp, Ihrer Ausgangsfarbe und Ihren Wünschen passt.

Ob HEYDENT Power Bleaching plus, Refresher Bleaching oder Home Bleaching – die Praxis berät Sie persönlich und ehrlich, damit Ihr Ergebnis natürlich, harmonisch und sichtbar schön wirkt. Mehr lachen, frischer wirken, sich wohler fühlen.`, { anker: "bereit", breite: "schmal" }),
    aufruf({ titel: "Jetzt Bleaching-Termin online buchen", text: "WHITE SMYLE Dentalhygiene & Bleaching Spezialist, Buckhauserstrasse 17, 8048 Zürich – seit 2012 spezialisiert auf professionelles Zahnbleaching in Zürich.", zweiterKnopf: { titel: "Bleaching-Fakten im Ratgeber", ziel: "/ratgeber/zahnbleaching/" } }),
  ],
};

const power = {
  slug: "bleaching/power-bleaching", art: "leistung", titel: "HEYDENT Power Bleaching", teaser: "Professionelle Zahnaufhellung in der Praxis mit dem medizinischen HEYDENT Power Bleaching Gel (35 % Wasserstoffperoxid).",
  einleitung: "Professionelle Zahnaufhellung ist heute deutlich mehr als nur «weissere Zähne». Moderne Power-Bleaching-Systeme arbeiten präzise, kontrolliert und zahnschonend. Mit dem medizinischen Bleaching-Gel HEYDENT Power Bleaching kommt eine In-Office-Technologie zum Einsatz, die speziell für professionelle Zahnaufhellungen entwickelt wurde.",
  seoTitel: "Power Bleaching Zürich – HEYDENT Power Bleaching", seoBeschreibung: "Power Bleaching in Zürich mit HEYDENT: medizinisch klassifiziertes Gel mit 35 % Wasserstoffperoxid, Aufhellung in einer Sitzung. Preise und Fragen.",
  bild: bild("power-hero", "Lachende Frau mit hellen Zähnen"), alteUrls: ["/power-bleaching-zuerich.html"], quelle: "whitesmyle.ch/power-bleaching-zuerich.html, /power-bleaching-aktion.html", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    b("leistungenBaustein", { titel: "Power Bleaching und Power Bleaching plus", einleitung: "Preise gemäss Preisliste. Voraussetzung: Die letzte Dentalhygiene liegt nicht länger als 6 Monate zurück – sonst empfiehlt die Praxis das Kombipaket.", leistungen: ["leistung-power-bleaching", "leistung-power-bleaching-plus"], darstellung: "liste" }),
    text(`## Was ist HEYDENT Power Bleaching?

HEYDENT Power Bleaching ist ein professionelles Power-Bleaching-Gel mit 35 % Wasserstoffperoxid zur schnellen und kontrollierten Zahnaufhellung in der Praxis. Das Gel wurde nach Angabe des Herstellers speziell für stark verfärbte, dunklere Zähne oder bereits gebleichte Zähne entwickelt, die noch weisser werden sollen, und wird am besten mit Lichtaktivierung verwendet. Es wird ausschliesslich im professionellen Bereich eingesetzt.

## Wie wirkt das Bleaching-Gel?

Der Wirkstoff Wasserstoffperoxid dringt in den Zahnschmelz ein und löst dort eingelagerte Farbpigmente auf. Diese Oxidation reduziert Verfärbungen sichtbar und hellt die natürliche Zahnfarbe auf. Das Gel wirkt in der Tiefe des Zahnschmelzes sowie an der Oberfläche. Dadurch eignet sich die Behandlung besonders bei Kaffee- und Tee-Verfärbungen, Raucherverfärbungen, altersbedingten Verfärbungen und Medikamentenverfärbungen.

## Wann ist das Gel besonders geeignet?

- **Bei dunklen oder gelblichen Zähnen:** Menschen mit natürlichen Verfärbungen profitieren häufig besonders stark.
- **Kaffee-, Tee- oder Nikotinverfärbungen:** Tiefe Farbpigmente können gezielt reduziert werden.
- **Vor Events oder Hochzeiten:** Sichtbare Ergebnisse oft bereits nach einer Sitzung.
- **Wunsch nach schneller Zahnaufhellung:** Im Vergleich zu Home Bleaching wirken hochkonzentrierte In-Office-Gele deutlich schneller – für die erste Aufhellung sehr zu empfehlen.`, { bild: bild("power-gel", "Bleaching-Gel wird auf die Zähne aufgetragen"), bildPosition: "rechts" }),
    text(`## Was unterscheidet HEYDENT Power Bleaching von anderen Bleaching-Gels?

1. **Medizinisches In-Office-System:** Viele frei verkäufliche Whitening-Produkte arbeiten mit deutlich niedrigeren Konzentrationen und liefern oft ungleichmässige Resultate. HEYDENT Power Bleaching wurde speziell für professionelle Anwendungen entwickelt.
2. **Neutraler pH-Wert:** Das Gel besitzt laut Hersteller einen neutralen pH-Wert, wodurch die Zahnoberfläche geschont werden soll – ein wichtiger Unterschied zu aggressiveren Bleaching-Produkten.
3. **Enthält Mineralien:** Das System enthält zusätzlich Mineralien zur Unterstützung und zum Schutz der Zahnstruktur während der Aufhellung.
4. **Kein Verlaufen des Gels:** Durch die spezielle Konsistenz bleibt das Gel stabil auf dem Zahn und ermöglicht eine gleichmässigere Aufhellung.
5. **Auto-Mix-Technologie:** Das Gel wird automatisch in der richtigen Mischung kombiniert – konstante Wirkstoffqualität ohne manuelles Anmischen.

## Welche Vorteile haben Patientinnen und Patienten?

- **Schnelle sichtbare Ergebnisse:** Viele sehen bereits nach einer Behandlung eine deutliche Aufhellung.
- **Natürlichere Weissgrade:** kein künstlicher Hollywood-Look, sondern ein natürlich helleres Zahnbild.
- **Professionelle Kontrolle:** Die Behandlung erfolgt kontrolliert mit Schutz für Zahnfleisch und Weichgewebe.
- **Gleichmässigere Ergebnisse:** Professionelle Hochleistungsgele arbeiten präziser als viele Home-Whitening-Produkte.
- **Längerfristige Resultate:** Durch die hohe Wirkstoffkonzentration können Ergebnisse häufig länger sichtbar bleiben – abhängig von Ernährung und Lebensstil.

## Ist das Gel medizinisch geprüft?

HEYDENT Power Bleaching wird laut Hersteller als Medizinprodukt der Klasse IIa beschrieben und ist für die professionelle Anwendung entwickelt worden: kein normales Kosmetikprodukt, medizinisch klassifiziert, ausschliesslich für Fachpersonal bestimmt. Power Bleaching darf nur in einer Dentalhygiene- oder Zahnarztpraxis durchgeführt werden.`, { breite: "schmal" }),
    hinweis(`**Ist das Bleaching sicher?** Professionelles Power Bleaching gilt bei gesunden Zähnen grundsätzlich als sichere Methode der Zahnaufhellung. Entscheidend sind korrekte Diagnose, Schutz des Zahnfleisches, professionelle Anwendung und passende Wirkstoffdosierung. Leichte temporäre Empfindlichkeiten können bei manchen Patientinnen und Patienten auftreten, verschwinden jedoch meist nach kurzer Zeit. Auch beim Bleaching gilt: Zu viel ist nicht gut – die Abstände nennt Ihnen die Fachperson.`, "medizinisch"),
    faq("Häufige Fragen zu HEYDENT Power Bleaching", [
      ["Wie funktioniert Power Bleaching?", "Power Bleaching ist eine schnelle und effektive Methode zur Aufhellung von Zähnen. Innerhalb einer Stunde ist die deutliche Aufhellung zu sehen. Mit dem Home Bleaching braucht man ca. 14 Tage, um das gleiche Ergebnis zu erreichen."],
      ["Warum fallen Bleaching-Ergebnisse unterschiedlich aus?", "Das Ergebnis hängt unter anderem ab von natürlicher Zahnfarbe, Zahnschmelzdicke, Alter, Ernährung, Nikotin, genetischer Zahnstruktur und Medikamentenverfärbungen. Deshalb wird professionelles Bleaching individuell angepasst."],
      ["Wie lange hält Power Bleaching?", "Die Haltbarkeit ist individuell unterschiedlich – durchschnittlich ca. 6 Monate bis mehrere Jahre. Beeinflusst wird das Ergebnis durch Rauchen, Kaffee und Tee, Mundhygiene, Dentalhygiene und Ernährung."],
      ["Wird das Zahnfleisch geschützt?", "Ja. Während der Behandlung wird ein spezieller Zahnfleisch-Schutz verwendet."],
      ["Können Kronen oder Veneers gebleicht werden?", "Nein. Bleaching wirkt nur auf natürliche Zahnsubstanz."],
      ["Ist das Gel auch für empfindliche Zähne geeignet?", "Empfindliche Zähne müssen individuell beurteilt werden. Das Gel besitzt jedoch laut Hersteller einen neutralen pH-Wert und mineralische Bestandteile zur Zahnschonung."],
      ["Wie schnell sieht man Ergebnisse?", "Bereits nach einer Sitzung hat man ein sichtbares Ergebnis. Je nach Verfärbungsgrad werden die Zähne deutlich heller – ein Hollywood-Weiss wird nicht erreicht, sondern ein natürliches schönes Weiss."],
      ["Warum ist professionelles Power Bleaching besser als Drogerie-Produkte?", "Professionelle Systeme arbeiten nach Angabe der Praxis kontrollierter, stärker, gleichmässiger, sicherer und medizinisch überwacht."],
    ]),
    b("galerieBaustein", { titel: "Eindrücke", bilder: [bild("power-galerie-20", "Vier lachende Menschen mit hellen Zähnen"), bild("power-galerie-4", "Lachender Mund"), bild("power-galerie-9", "Lachender Mund"), bild("power-galerie-7", "Lachender Mund"), bild("power-galerie-8", "Lachender Mund"), bild("power-galerie-10", "Lachender Mann"), bild("power-galerie-11", "Zahnfarbring vor einem lachenden Mund"), bild("power-galerie-17", "Lachender Mann"), bild("power-galerie-1", "Lachender Mund")], hinweis: "Bilder der bisherigen Aktionsseite; Herkunft (Praxis oder Symbolbild) dort nicht angegeben." }),
    aufruf({ titel: "Buchen Sie jetzt Ihren Bleaching-Termin", text: "Online über Cituro oder telefonisch: 043 931 78 74 / 076 460 38 10.", zweiterKnopf: { titel: "Aktion ansehen", ziel: "/preise/aktion/" } }),
  ],
};

const home = {
  slug: "bleaching/home-bleaching", art: "leistung", titel: "Home Bleaching mit Philips ZOOM", teaser: "Professionelle Zahnaufhellung für zuhause mit individueller Bleaching-Schiene – die Ergänzung zum Power Bleaching.",
  einleitung: "Weisse Zähne stehen für Attraktivität, Gesundheit und Selbstbewusstsein. Home Bleaching ist eine professionelle Möglichkeit, die Zahnaufhellung bequem zuhause fortzuführen oder das Ergebnis eines Praxis-Bleachings langfristig zu erhalten.",
  seoTitel: "Home Bleaching mit Philips ZOOM – Zahnaufhellung für zuhause", seoBeschreibung: "Home Bleaching mit Philips ZOOM: individuelle Schiene aus dem Labor, Unterschied Wasserstoff- und Carbamidperoxid, Preise. WHITE SMYLE Zürich.",
  bild: bild("home-bleaching", "Grafik Home Bleaching System mit lachender Frau"), alteUrls: ["/home-bleaching.html"], quelle: "whitesmyle.ch/home-bleaching.html", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    b("leistungenBaustein", { titel: "Home Bleaching und Kombipaket", leistungen: ["leistung-home-bleaching"], darstellung: "liste" }),
    text(`**Wichtig zu wissen:** Wer zum ersten Mal ein Bleaching macht und möglichst schnell ein deutlich sichtbares Ergebnis möchte, erzielt dieses in der Regel deutlich effizienter mit einem professionellen [Power Bleaching](/bleaching/power-bleaching/) in der Praxis. Während ein In-Office Power Bleaching bereits nach etwa einer Stunde sichtbar hellere Zähne erzeugen kann, benötigt ein Home Bleaching meist rund 10–14 Tage, um ein vergleichbares Ergebnis zu erreichen.

**Zu beachten:** Während eines Home Bleachings, das 1–2 Wochen dauern kann, oder wenn man nur 1–2 Tage kurz aufhellt, sollten keine verfärbenden Substanzen konsumiert werden – gerade für Raucherinnen, Raucher und Kaffeetrinkende oft eine schwierige Situation.

Deshalb eignet sich Home Bleaching besonders als Ergänzung zum professionellen Bleaching, zur Auffrischung zwischen Praxisbehandlungen, als flexible Lösung vor wichtigen Events und zur langfristigen Erhaltung eines weissen Lächelns.

## Warum zuerst ein Power Bleaching sinnvoll ist

Ein professionelles Power Bleaching in der Praxis bietet sofort sichtbare Ergebnisse, kontrollierte Anwendung, gleichmässige Aufhellung und eine schnelle Behandlung in nur einer Sitzung – ideal vor Hochzeiten, Fotoshootings oder Business-Events. Viele nutzen anschliessend Home Bleaching, um das erreichte Weiss dauerhaft zu erhalten: maximale Sofortwirkung in der Praxis, flexible Nachpflege zuhause.

## Die professionelle Bleaching-Schiene

Für ein hochwertiges Home Bleaching wird zuerst eine individuelle Bleaching-Schiene hergestellt:

1. **Abdruck der Zähne:** In der Praxis wird ein präziser Abdruck oder digitaler Scan Ihrer Zähne erstellt.
2. **Herstellung im Dentallabor:** Die Bleaching-Schiene wird individuell im Labor angefertigt.
3. **Fertigstellung nach ca. 7 Tagen:** Nach etwa einer Woche erhalten Sie Ihre massgeschneiderte Schiene für zuhause.

Vorteile einer individuellen Schiene: perfekte Passform, gleichmässige Verteilung des Gels, weniger Gelverbrauch, geringeres Risiko für Zahnfleischreizungen, angenehmer Tragekomfort.

## Für wen eignet sich Home Bleaching?

Besonders für Patientinnen und Patienten nach einem Power Bleaching, für regelmässige Auffrischungen, Menschen mit wenig Zeit, Berufstätige, vor Hochzeiten, Events, Dates und Fotoshootings.`, { titel: "Die professionelle Ergänzung zum Power Bleaching", bild: bild("power-galerie-11", "Zahnfarbring vor einem lachenden Mund"), bildPosition: "rechts" }),
    text(`## Was bedeutet der Unterschied zwischen 6 % und 20 % bei einem Home-Bleaching-Gel?

Der wichtigste Unterschied: **Wasserstoffperoxid vs. Carbamidperoxid.** Viele Menschen glauben: Je höher die Prozentzahl auf dem Gel, desto stärker das Bleaching. Das ist jedoch nicht korrekt.

Carbamidperoxid kann man sich wie eine «gestreckte» Form von Wasserstoffperoxid vorstellen – ähnlich wie eine Apfelschorle im Vergleich zu reinem Apfelsaft. Das bedeutet: Höhere Carbamidperoxid-Prozentzahlen wirken nicht automatisch stärker; der Wirkstoff wird lediglich langsamer freigesetzt, deshalb müssen diese Gele länger getragen werden. Beispiel: 6 % Wasserstoffperoxid wirkt schnell, 16 % Carbamidperoxid setzt langsamer über längere Zeit frei.

**Gesetzliche Grenze in Europa:** In Home-Bleaching-Produkten für Privatkundinnen und -kunden dürfen maximal 6 % Wasserstoffperoxid enthalten sein. Deshalb enthalten viele Produkte mit 10 %, 16 % oder 20 % kein reines Wasserstoffperoxid, sondern Carbamidperoxid.

### Warum längere Tragezeiten Nachteile haben können

Viele Home-Bleaching-Gele mit Carbamidperoxid werden mehrere Stunden oder über Nacht getragen. Dabei kann ein Teil des Gels geschluckt werden. Mögliche Nebenwirkungen: gereizter Magen, empfindliches Zahnfleisch, erhöhte Zahnempfindlichkeit, trockener Mund. Deshalb bevorzugen viele moderne Systeme mit kürzeren Tragezeiten.

### Warum die Praxis Philips ZOOM empfiehlt – speziell DayWhite mit 6 % Peroxid

Kürzere Tragezeiten, moderne Formulierungen, schnelle Wirkung, gut für Event-Auffrischungen, weniger Gelkontakt, weniger Risiko des Verschluckens, bessere Alltagstauglichkeit.

## Professionelles Home Bleaching mit Philips ZOOM

Für das Home Bleaching kommen professionelle Bleaching-Gele von Philips ZOOM zum Einsatz.

**Philips ZOOM DayWhite** (Anwendung tagsüber): 6 % Wasserstoffperoxid, kurze tägliche Tragezeiten, ideal für den Alltag. Besonders geeignet für Berufstätige, schnelle Auffrischungen vor Events und Anwenderinnen und Anwender mit empfindlichen Zähnen.

**Philips ZOOM NiteWhite** (Anwendung über Nacht): 16 % Carbamidperoxid, langsame Wirkstofffreisetzung, längere Tragezeit während der Nacht. Wichtig: 16 % Carbamidperoxid bedeutet nicht, dass das Gel stärker ist als ein 6-%-Wasserstoffperoxid-Gel – Carbamidperoxid zerfällt erst langsam zu Wasserstoffperoxid und wird daher länger in der Schiene getragen.

Produktkauf im externen [Zahnpastashop (ZOOM-Gel)](https://www.zahnpastashop.ch/zahnaufhellung-zoom-gel.html) – der Vorteil laut Praxis: Einzelspritzen sind erhältlich, wer nur kurz aufhellen will, muss kein 3er- oder 5er-Pack kaufen.`, { titel: "Wasserstoffperoxid oder Carbamidperoxid", breite: "schmal" }),
    faq("Häufige Fragen zum Home Bleaching", [
      ["Wie lange dauert Home Bleaching?", "Je nach Ausgangsfarbe meist 10–14 Tage bis zum gewünschten Ergebnis."],
      ["Ist Home Bleaching so stark wie Power Bleaching?", "Nein. Professionelles Power Bleaching erzielt meist deutlich schnellere Ergebnisse in nur einer Sitzung."],
      ["Warum gibt es Gele mit 16 % oder 20 %?", "Dabei handelt es sich meist um Carbamidperoxid, nicht um reines Wasserstoffperoxid."],
      ["Bedeutet mehr Prozent automatisch bessere Wirkung?", "Nein. Höhere Carbamidperoxid-Werte bedeuten meist nur eine langsamere Freisetzung und längere Tragezeit."],
      ["Wie lange dauert die Herstellung der Schiene?", "In der Regel ca. 7 Tage nach Abdrucknahme."],
      ["Kann ich Home Bleaching ohne Schiene machen?", "Professionelle Ergebnisse werden am besten mit individuell angefertigten Schienen erzielt."],
      ["Ist Home Bleaching sicher?", "Bei professioneller Anwendung und korrekter Dosierung gilt Home Bleaching als sichere Methode der Zahnaufhellung."],
    ]),
    aufruf({ titel: "Home Bleaching anfragen", text: "Schiene und Beratung: ca. 30 Minuten in der Praxis. Termin online oder telefonisch.", zweiterKnopf: { titel: "Alle Bleaching-Arten", ziel: "/bleaching/" } }),
  ],
};

const only = {
  slug: "bleaching/bleaching-ohne-dentalhygiene", art: "leistung", titel: "Bleaching ohne Dentalhygiene", teaser: "Wann ein Bleaching allein möglich ist, warum saubere Zähne wichtig sind und was bei empfindlichen Zähnen hilft.",
  einleitung: "Sie wünschen sich natürlich weisse Zähne und ein frisches, gepflegtes Lächeln? Seit 2012 hat WHITE SMYLE tausende professionelle Bleachings durchgeführt und weiss, worauf es bei einer sicheren, schonenden und sichtbaren Zahnaufhellung ankommt.",
  seoTitel: "Bleaching ohne Dentalhygiene – Voraussetzungen, Empfindlichkeit, Haltbarkeit", seoBeschreibung: "Zahnbleaching Zürich: wann Bleaching ohne Dentalhygiene möglich ist (letzte Dentalhygiene max. 6 Monate), Empfindlichkeit, Haltbarkeit und Kosten einfach erklärt.",
  bild: bild("bleaching-only-hero", "Bleaching-Behandlung mit Lichtaktivierung"), alteUrls: ["/bleaching-only.html", "/bleaching-aktion.html"], quelle: "whitesmyle.ch/bleaching-only.html, /aktion.html", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    hinweis(`**Voraussetzung:** Bleaching ohne Dentalhygiene («Bleaching only») ist möglich, wenn die letzte Dentalhygiene nicht länger als 6 Monate zurückliegt – bei Raucherinnen und Rauchern eher 2–3 Monate. Liegt Ihre letzte Dentalhygiene länger zurück, empfiehlt die Praxis das [Kombipaket Dentalhygiene & Bleaching](/kombipaket/) für das sichtbar beste Ergebnis in nur einer Sitzung.`, "wichtig"),
    b("leistungenBaustein", { titel: "Bleaching-Methoden für Zähne mit aktueller Dentalhygiene", einleitung: "Wenn Sie noch nie ein Bleaching gemacht haben und die letzte Dentalhygiene nicht länger als ein halbes Jahr zurückliegt, ist eine dieser Optionen die richtige.", leistungen: ["leistung-power-bleaching", "leistung-power-bleaching-plus", "leistung-home-bleaching"], darstellung: "liste" }),
    text(`Viele Kundinnen und Kunden kommen wegen Kaffee- oder Nikotinverfärbungen, gelblichen Zähnen trotz guter Zahnpflege, empfindlichen Zähnen nach früheren Bleachings oder dem Wunsch nach einem natürlichen Weiss ohne künstlichen Hollywood-Look. Das Ziel der Praxis ist nicht «unnatürlich weiss», sondern gesunde, gepflegte und sichtbar frischere Zähne, die zu Ihnen passen.

## Warum vor dem Bleaching eine Dentalhygiene wichtig ist

Für ein schönes und gleichmässiges Bleaching-Ergebnis sollten die Zähne professionell gereinigt sein. Wenn Oberflächenverfärbungen beseitigt werden, kann das Bleaching-Gel die in der Tiefe des Zahnschmelzes liegenden Verfärbungen besser beseitigen. Beläge, Zahnstein und oberflächliche Verfärbungen können das Ergebnis beeinflussen; saubere Zähne nehmen das Bleaching gleichmässiger und schöner an.

## Hatten Sie schon einmal Schmerzen nach einem Bleaching?

Das hört die Praxis häufig. Viele Menschen haben nach günstigen Home-Kits oder unsachgemässen Behandlungen empfindliche Zähne bekommen und sind deshalb unsicher. Die gute Nachricht: Heute gibt es Möglichkeiten, Empfindlichkeiten deutlich zu reduzieren oder sogar zu verhindern. WHITE SMYLE arbeitet seit Jahren mit remineralisierenden Produkten und speziellen Schutzsystemen für empfindliche Zähne. Je nach Situation empfiehlt die Praxis:

- remineralisierende Pflegeprodukte
- spezielle Zahnschmelz-Aufbauprodukte
- Vorbereitung der Zähne 1–2 Wochen vor dem Bleaching
- angepasste Bleaching-Methoden für sensible Zähne

**Besonders wichtig:** Wenn Sie empfindliche Zähne haben oder früher Schmerzen hatten, sagen Sie das unbedingt vor der Behandlung. Dank der Erfahrung seit 2012 kann die Praxis das Bleaching individuell anpassen.`, { bild: bild("bleaching-geraet", "Bleaching-Gerät in der Praxis"), bildPosition: "rechts" }),
    faq("Die wichtigsten Fakten für ein erfolgreiches Bleaching", [
      ["Warum können Zähne nach dem Bleaching weh tun?", "Nach dem Bleaching können die Zähne vorübergehend empfindlicher auf Kälte oder Wärme reagieren. Das ist normal und klingt meist nach kurzer Zeit wieder ab. Mit modernen remineralisierenden Produkten lassen sich diese Empfindlichkeiten oft deutlich reduzieren."],
      ["Bleaching bei empfindlichen Zähnen – geht das überhaupt?", "Ja, auch bei empfindlichen Zähnen ist ein professionelles Bleaching möglich. Wichtig ist eine individuelle Vorbereitung mit remineralisierenden Produkten und eine schonende Methode. Viele mit sensiblen Zähnen berichten von deutlich angenehmeren Erfahrungen als bei früheren Bleachings."],
      ["Ist Zahnbleaching schädlich?", "Professionelles Zahnbleaching gilt bei gesunden Zähnen als sichere Methode zur Zahnaufhellung. Wichtig ist, dass die Behandlung fachgerecht durchgeführt wird und die Zähne vorher kontrolliert und gereinigt werden."],
      ["Was hilft gegen Schmerzen nach dem Bleaching?", "Empfindlichkeiten nach dem Bleaching lassen sich nach Angabe der Praxis oft mit remineralisierenden Produkten und speziellen Zahnpasten mit Hydroxylapatit (Zahnschmelz) lindern. Auch die richtige Vorbereitung vor dem Bleaching kann helfen. Das Produkt Tooth Mousse, erhältlich im externen Zahnpastashop, kann bereits 1–2 Wochen vor dem Bleaching abends nach dem Zähneputzen aufgetragen werden, um Sensitivitäten zu reduzieren."],
      ["Home Bleaching oder professionelles Bleaching – was ist besser?", "Home-Kits können leichte Verfärbungen verbessern, erreichen aber oft nicht die Resultate eines professionellen Bleachings. Zudem kommt es bei unsachgemässer Anwendung häufiger zu empfindlichen Zähnen oder ungleichmässigen Ergebnissen. Beim ersten Bleaching erreichen Sie mit dem professionellen Bleaching in der Praxis in einer Stunde das gleiche Ergebnis wie mit Home Bleaching in 1–2 Wochen."],
      ["Warum sollte vor dem Bleaching eine Dentalhygiene gemacht werden?", "Saubere Zähne nehmen das Bleaching gleichmässiger auf. Zahnstein, Beläge und Verfärbungen können das Ergebnis beeinträchtigen. Deshalb sollte die Dentalhygiene idealerweise innerhalb der letzten 6 Monate erfolgt sein – bei Raucherinnen und Rauchern eher innerhalb von 2–3 Monaten."],
      ["Warum werden Zähne trotz Putzen gelb?", "Auch bei guter Zahnpflege können sich die Zähne mit der Zeit verfärben. Ursachen sind oft Kaffee, Tee, Rotwein, Nikotin oder natürliche Alterungsprozesse. Normales Zähneputzen entfernt diese tieferen Verfärbungen meist nicht vollständig."],
      ["Ist Bleaching bei Raucherinnen und Rauchern sinnvoll?", "Ja, besonders Nikotinverfärbungen können durch professionelles Bleaching sichtbar aufgehellt werden. Wichtig ist jedoch eine aktuelle Dentalhygiene vor der Behandlung, damit das Ergebnis möglichst gleichmässig wird."],
      ["Wie lange hält Zahnbleaching wirklich?", "Je nach Ernährung, Rauchen und Zahnpflege hält ein professionelles Zahnbleaching meistens zwischen 1 und 2 Jahren. Kaffee, Tee, Rotwein und Nikotin können die Zähne schneller wieder verfärben."],
    ]),
    aufruf({ titel: "Bereit für ein frischeres und weisseres Lächeln?", text: "Buchen Sie jetzt Ihren Online-Termin bei WHITE SMYLE Zürich. Preise finden Sie in der Preisübersicht.", zweiterKnopf: { titel: "Preise", ziel: "/preise/" } }),
  ],
};

const hochzeit = {
  slug: "bleaching/hochzeitsbleaching", art: "leistung", titel: "Hochzeitsbleaching", teaser: "Weisse Zähne für die Hochzeit – für Braut und Bräutigam, idealerweise 2–3 Wochen vor dem grossen Tag.",
  einleitung: "Der Hochzeitstermin steht fest, die Ringe sind gekauft, die Location ist gebucht und die Einladungen sind versendet. Aber was fehlt noch? Das Hochzeitsbleaching.",
  seoTitel: "Hochzeitsbleaching Zürich – weisse Zähne für die Hochzeit", seoBeschreibung: "Hochzeitsbleaching bei WHITE SMYLE Zürich: Bleaching für Braut und Bräutigam, bei Bedarf mit Dentalhygiene im Kombipaket. Empfehlung: 2–3 Wochen vor der Hochzeit.",
  bild: bild("hochzeit-1", "Brautpaar; Schriftzug «Hochzeitsbleaching»"), alteUrls: ["/hochzeitsbleaching.html"], quelle: "whitesmyle.ch/hochzeitsbleaching.html", pruefstatus: "sprachlich-angepasst",
  bausteine: [
    text(`## Weisse Zähne für Braut und Bräutigam

Die Traumhochzeit findet natürlich nur mit schönen weissen Zähnen statt. Kommen Sie gemeinsam vorbei für ein Bleaching und, wenn notwendig, auch für eine Dentalhygiene im Kombipaket.

**Tipp der Praxis:** Wenn die letzte Dentalhygiene länger als ein halbes Jahr zurückliegt, ist vor dem Hochzeitsbleaching eine Dentalhygiene angesagt – sie verschönert das Ergebnis. Die Praxis empfiehlt, das Bleaching 2–3 Wochen vor der Hochzeit zu machen.

## Ja, ich will … aber nur mit weissen Zähnen!

Ihre Hochzeitsfotos – ob im Fotoalbum, auf Ihrer Website oder auf Instagram, Facebook & Co. – sind eine bleibende Erinnerung und werden sicher noch von Ihren Enkelkindern bestaunt. Melden Sie sich für eine Beratung oder sichern Sie sich noch heute Ihren Termin.`, { bild: bild("hochzeit-2", "Bräutigam trägt die Braut; Schriftzug «Hochzeitsbleaching»"), bildPosition: "rechts" }),
    b("kombinationenBaustein", { titel: "Passende Angebote", einleitung: "Bleaching allein (bei aktueller Dentalhygiene) oder im Kombipaket. Preise gemäss Preisliste.", kombinationen: ["kombi-power", "kombi-power-plus"], mitEinzelpreisen: true }),
    aufruf({ titel: "Termin für Ihr Hochzeitsbleaching", text: "Online buchen oder anrufen: 043 931 78 74.", zweiterKnopf: { titel: "Bleaching-Arten vergleichen", ziel: "/bleaching/" } }),
  ],
};

export default [bleaching, power, home, only, hochzeit];
