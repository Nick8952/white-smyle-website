import { b, text, faq, hinweis, aufruf, bild, pt } from "../pt.mjs";
const R = (o) => ({ art: "ratgeber", pruefstatus: "sprachlich-angepasst", ...o });

const mundgeruch = R({
  slug: "ratgeber/mundgeruch", titel: "Mundgeruch erkennen und nachhaltig behandeln", teaser: "Ich putze meine Zähne und habe trotzdem Mundgeruch: Ursachen, die Rolle der Zunge, Hilfsmittel und die Checkliste «frischer Atem».",
  einleitung: "Viele Menschen leiden unter Mundgeruch, obwohl sie ihre Zähne regelmässig putzen. Oft entsteht schlechter Atem nicht durch mangelnde Hygiene, sondern durch bakterielle Beläge auf der Zunge, Zahnfleischentzündungen oder schwer erreichbare Stellen zwischen den Zähnen.",
  seoTitel: "Mundgeruch (Halitosis) – Ursachen und Hilfe in Zürich", seoBeschreibung: "Mundgeruch trotz Zähneputzen? Ursachen, Zungenreinigung, Hilfsmittel, Tagesplan und Checkliste «frischer Atem». Ratgeber der Praxis WHITE SMYLE Zürich.",
  bild: bild("mundgeruch-hero", "Frau prüft ihren Atem mit der Hand vor dem Mund"), alteUrls: ["/mundgeruch.html"], quelle: "whitesmyle.ch/mundgeruch.html", mitInhaltsverzeichnis: true,
  bausteine: [
    text(`Besonders unangenehm ist, dass Betroffene ihren eigenen Mundgeruch häufig gar nicht bemerken – das Umfeld dagegen schon. Das kann im Alltag, bei der Arbeit oder in persönlichen Gesprächen sehr belastend sein.

## Was verursacht Mundgeruch?

In den meisten Fällen entsteht Mundgeruch direkt im Mundraum. Häufige Ursachen: bakterielle Beläge auf der Zunge, Zahnfleischentzündungen (Gingivitis), Parodontitis, Zahnstein, ungepflegte Zahnzwischenräume, trockener Mund, Entzündungen im Mundraum. Bakterien produzieren dabei Schwefelverbindungen, die den typischen unangenehmen Geruch verursachen.

## Warum Mundgeruch trotz guter Zahnpflege entstehen kann

Mit der Zahnbürste allein erreicht man oft nicht alle Bereiche, in denen sich Bakterien ansammeln: Zahnzwischenräume, Zahnfleischtaschen, die Zungenoberfläche, schwer zugängliche Stellen im hinteren Mundbereich. Professionelle Dentalhygiene kann helfen, diese Beläge gezielt zu entfernen.

## Mundgeruch und Zahnfleischprobleme

Gesundes Zahnfleisch blutet nicht und riecht nicht unangenehm. Entzündetes Zahnfleisch dagegen bietet ideale Bedingungen für Bakterien. Typische Warnzeichen: Zahnfleischbluten, geschwollenes Zahnfleisch, schlechter Geschmack im Mund, unangenehmer Atem trotz Zähneputzen. Unbehandelt können sich Entzündungen langfristig verschlimmern.

## Die Zunge spielt oft eine grosse Rolle

Viele geruchsbildende Bakterien sitzen direkt auf der Zunge. Ein weisslicher oder gelblicher Belag kann deshalb eine häufige Ursache für Mundgeruch sein. In der Mundhöhle leben laut Praxis rund 50 Millionen verschiedene Bakterien; die bevorzugten Plätze sind Orte, an denen sie nicht durch das Zähneputzen gestört werden und wenig Sauerstoff vorhanden ist: Zahnzwischenräume, Zahnfleischtaschen, Zahnersatz – und die Zunge. Experten vermuten nach Angabe der Praxis, dass mit einer besseren Zungenhygiene rund der Hälfte aller an Mundgeruch leidenden Personen geholfen werden kann. Vor allem dem hinteren Teil der Zunge sollte man mehr Aufmerksamkeit schenken und ihn 2 Mal pro Tag gründlich reinigen.

## Was hilft gegen Mundgeruch?

Eine nachhaltige Verbesserung gelingt meist nur, wenn die Ursache behandelt wird. Wichtige Massnahmen: professionelle Dentalhygiene, Reinigung der Zahnzwischenräume, Entfernung von Zahnstein, Behandlung von Zahnfleischentzündungen, regelmässige Zungenreinigung, ausreichende Flüssigkeitszufuhr. Frischer Atem beginnt mit gesunden Zähnen und gesundem Zahnfleisch.`, { anker: "ursachen", titel: "Ursachen", bild: bild("zungenbelag", "Frau zeigt ihre Zunge; Schriftzug «Zungenreinigung – Mundgeruch durch Zungenbelag»"), bildPosition: "rechts" }),
    text(`## Hilfsmittel für die Zungenreinigung

Die vier wesentlichen Möglichkeiten laut Praxis:

1. **Zahnbürste:** besser als gar nicht zu putzen. Eine separate weiche Zahnbürste nehmen – harte Borsten würden die Papillen der Zungenoberfläche verletzen, und mit derselben Bürste würden Bakterien von der Zunge auf die Zähne übertragen.
2. **Zungenschaber:** Es gibt viele Modelle von Kunststoff bis Gold. Normalerweise genügt ein Zungenschaber mit zweifacher Schabkante – so reduziert sich der Brechreiz, und die Zunge wird besonders gründlich gereinigt. Die Praxis empfiehlt Zungenschaber von TePe oder Curaprox.
3. **Sonic-Zungenreinigung von Philips:** Wer eine elektrische Zahnbürste von Philips besitzt, kann den Sonicare-Zungenreiniger aufstecken. Durch die 200 kegelförmigen Mikroborsten und 31 000 Schwingungen pro Minute entsteht eine sanfte, tiefgreifende Reinigung, ohne die Papillen zu verletzen.
4. **Ultraschall-Zungenreinigung von MEGASONEX:** Ein Aufsatz für den MEGASONEX-Zahnbürstengriff. Nach Angabe des Herstellers kombiniert er sanftes Schaben mit Ultraschall (96 Millionen Impulse pro Minute, bis 12 mm tief) und 9000–18 000 Vibrationen pro Minute, um Bakterien in den Papillenzwischenräumen zu entfernen. Erhältlich im externen [Zahnpastashop](https://www.zahnpastashop.ch/megasonex-ultraschall.html). Mehr im Ratgeber [Ultraschallzahnbürste](/ratgeber/ultraschallzahnbuerste/).`, { anker: "hilfsmittel", titel: "Hilfsmittel", bild: bild("zungenreinigung", "Frau reinigt ihre Zunge mit einem Zungenschaber"), bildPosition: "links" }),
    b("spaltenBaustein", { anker: "tagesplan", titel: "Tipps für den täglichen Gebrauch", einleitung: "Tägliche Mundhygiene mit den richtigen Hilfsmitteln – der Tagesplan der Praxis (auch als PDF «Checkliste frischer Atem»).", spalten: [
      { _key: "m", titel: "Morgens", inhalt: pt(`- Zähneputzen (1–2 Minuten)
- Mit Zungenschaber Zunge reinigen
- Mundspülung benutzen`) },
      { _key: "t", titel: "Tagsüber", inhalt: pt(`- Zahnzwischenräume unbedingt mit Zahnseide oder Zahnstochern/Interdentalbürsten reinigen
- Mundspülung verwenden oder Mund mit Wasser gut ausspülen (Option: Zähne putzen mit Mundspülung statt Zahnpasta)
- Xylitol-Kaugummi verwenden`) },
      { _key: "a", titel: "Abends", inhalt: pt(`- Zahnzwischenräume gründlich reinigen mit Zahnseide/Interdentalbürstchen
- Sanftes und gründliches Zähneputzen von mindestens 3 Minuten – am besten mit einer elektrischen Schallzahnbürste
- Mit Zungenschaber und eventuell Gel Zunge reinigen
- Mundspülung benutzen`) },
    ] }),
    b("spaltenBaustein", { anker: "praevention", titel: "Prävention laut Praxis", spalten: [
      { _key: "h", titel: "Hilfsmittel für die tägliche Mundhygiene", inhalt: pt(`- MEGASONEX Ultraschall- oder elektrische Zahnbürste
- Keine schleifende Zahnpasta
- Zungenschaber
- Zahnseide / Interdentalbürstchen
- Mundspülung
- Xylitol-Kaugummi`) },
      { _key: "d", titel: "1–2 Mal pro Jahr Dentalhygiene", inhalt: pt(`Dentalhygiene durch eine diplomierte Dentalhygienikerin:
- Zahnsteinentfernung mit Ultraschall und Handinstrument
- Bei Bedarf Deep Scaling – Entfernen von unter dem Zahnfleisch liegendem Zahnstein und Zahnbelag
- Politur mit Paste oder Airflow (Pulverstrahlreiniger)
- Bei belegter Zunge Reinigung der Zunge mit einem rotierenden Instrument
- Kontrolle auf kariöse Stellen
- Individuelle Beratung für optimale Mundhygiene`) },
      { _key: "e", titel: "Ernährung und Körper", inhalt: pt(`Empfehlungen der Praxis (nicht fachlich geprüft):
- Möglichst viel chlorophyllhaltiges Gemüse (Broccoli, Spinat, Kohlsorten)
- Zwischenmahlzeiten mit Obst oder Nüssen statt Chips und Süssigkeiten
- Mehr Reis und Kartoffeln statt Brot und Pasta
- Wasser, Tee oder natürliche Säfte statt zuckerhaltiger Softdrinks
- Sport treiben, Pausen vom Stress des Tages`) },
    ] }),
    b("downloadsBaustein", { anker: "download", titel: "Checkliste zum Herunterladen", downloads: ["download-mundgeruch"] }),
    faq("Häufige Fragen zu Mundgeruch", [
      ["Warum habe ich Mundgeruch trotz Zähneputzen?", "Bakterien auf der Zunge, Zahnfleischentzündungen oder Beläge zwischen den Zähnen sind häufige Ursachen."],
      ["Kann Mundgeruch vom Zahnfleisch kommen?", "Ja. Entzündetes Zahnfleisch und Parodontitis gehören zu den häufigsten Ursachen von schlechtem Atem."],
      ["Hilft Dentalhygiene gegen Mundgeruch?", "Professionelle Dentalhygiene kann bakterielle Beläge und Zahnstein entfernen und dadurch Mundgeruch deutlich reduzieren."],
      ["Warum riecht mein Atem morgens schlecht?", "Während des Schlafs produziert der Mund weniger Speichel. Dadurch können sich Bakterien stärker vermehren."],
      ["Was verursacht schlechten Geschmack im Mund?", "Häufige Ursachen sind bakterielle Beläge, Zahnfleischprobleme oder Entzündungen im Mundraum."],
      ["Ist Mundgeruch heilbar?", "In vielen Fällen ja – besonders wenn die Ursache frühzeitig erkannt und behandelt wird."],
    ], { anker: "faq" }),
    aufruf({ titel: "Dentalhygiene-Termin mit Mundgeruchsberatung", text: "Mundgeruch ist oft behandelbar – die Ursache sollte frühzeitig erkannt werden.", zweiterKnopf: { titel: "Fragen zur Vorbereitung", ziel: "/tests/mundgeruch-test/" } }),
  ],
});

const rauchen = R({
  slug: "ratgeber/rauchen-und-kaffee", titel: "Rauchen, Kaffee und Zahngesundheit", teaser: "Verfärbungen, Mundgeruch, Zahnstein und Zahnfleischprobleme – und was moderne Dentalhygiene dagegen ausrichten kann.",
  einleitung: "Für viele Menschen gehören Kaffee und Zigaretten zum Alltag: der erste Kaffee am Morgen, die Zigarette zwischendurch, die entspannte Pause im Café. Doch genau diese Kombination hinterlässt oft sichtbare Spuren an Zähnen und Zahnfleisch.",
  seoTitel: "Rauchen, Kaffee und Zähne – Verfärbungen, Mundgeruch, Zahnfleisch", seoBeschreibung: "Wie Rauchen und Kaffee Zähne und Zahnfleisch beeinflussen: Verfärbungen, Mundgeruch, Zahnstein, Parodontitis-Risiko – und was Dentalhygiene bewirken kann.",
  bild: bild("rauchen-hero", "Frau mit Zigarette"), alteUrls: ["/rauchen-zahnverfaerbungen.html"], quelle: "whitesmyle.ch/rauchen-zahnverfaerbungen.html",
  bausteine: [
    text(`Verfärbungen, Mundgeruch, Zahnstein oder gereiztes Zahnfleisch entwickeln sich meist schleichend. Viele bemerken die Veränderungen erst, wenn die Zähne dunkler wirken oder das Zahnfleisch empfindlicher wird. Die gute Nachricht: Moderne Dentalhygiene kann viele dieser Folgen deutlich reduzieren.

## Warum Kaffee und Rauchen Zähne verfärben

Kaffee enthält Tannine und Farbstoffe, die sich an der Zahnoberfläche ablagern können. Besonders in feinen Unebenheiten des Zahnschmelzes entstehen mit der Zeit sichtbare Verfärbungen. Beim Rauchen kommen Nikotin, Teerstoffe, Hitze und trockene Mundschleimhäute hinzu. Diese Kombination fördert hartnäckige Ablagerungen und gelblich-braune Verfärbungen – besonders entlang des Zahnfleischrandes und zwischen den Zähnen. Viele berichten, dass sich trotz täglichem Putzen dunkle Beläge bilden, die zuhause kaum mehr entfernt werden können.

## Mundgeruch – die häufig unterschätzte Nebenwirkung

Rauchen reduziert den Speichelfluss, Kaffee kann den Mund zusätzlich austrocknen, Bakterien vermehren sich leichter, Schwefelverbindungen verursachen unangenehmen Geruch. Ein trockener Mund bietet ideale Bedingungen für geruchsbildende Bakterien – besonders auf der Zunge und entlang des Zahnfleisches.

## Warum Zahnfleisch bei Raucherinnen und Rauchern stärker belastet wird

Rauchen beeinflusst die Durchblutung des Zahnfleisches. Dadurch werden Entzündungen häufig später erkannt. Typische Folgen: empfindliches Zahnfleisch, Zahnfleischrückgang, erhöhte Zahnsteinbildung, langsamere Heilung, höheres Risiko für Parodontitis. Besonders problematisch: Bei Raucherinnen und Rauchern blutet das Zahnfleisch oft weniger, obwohl bereits Entzündungen vorhanden sind – Parodontitis bleibt häufig lange unbemerkt.

## Kaffee allein ist selten das Hauptproblem

Kaffee allein ist oft weniger problematisch als die Kombination aus Rauchen, Zucker, häufigem Snacking, mangelnder Zahnzwischenraumreinigung und unregelmässiger Dentalhygiene.

## Warum sich Verfärbungen trotz Putzen festsetzen

Selbst gute Zahnbürsten erreichen nicht jede Stelle: Zahnzwischenräume, hintere Backenzähne, Zahnfleischrand, Kronen und Implantate. Mit der Zeit verbinden sich Farbstoffe, Bakterien und Zahnstein zu festen Ablagerungen, die sich oft nur noch professionell entfernen lassen. Viele versuchen es mit Whitening-Zahnpasten, Aktivkohle-Produkten, Hausmitteln oder aggressiven Aufhellern – nicht alle Methoden sind sinnvoll; manche Produkte können bei falscher Anwendung den Zahnschmelz unnötig belasten.

## Moderne Dentalhygiene kann viel bewirken

Professionelle Dentalhygiene entfernt Zahnstein, bakterielle Beläge, Rauchverfärbungen, Kaffeeablagerungen und oberflächliche Flecken. Besonders moderne Airflow-Technologie ermöglicht heute eine schonende Reinigung auch bei stärkeren Verfärbungen. Viele berichten nach der Behandlung über glattere Zähne, frischeres Mundgefühl, hellere Zahnoberflächen, angenehmeren Atem und ein saubereres Zahnfleischgefühl. Für Raucherinnen, Raucher und Kaffeetrinkende bietet die Praxis zudem den [Frontpolish](/preise/) als Zusatzreinigung an.

## Kleine Gewohnheiten machen einen grossen Unterschied

Wer nicht auf Kaffee oder Rauchen verzichten möchte, kann die Belastung trotzdem reduzieren: Wasser nach dem Kaffee trinken, Zähne nicht direkt nach dem Kaffee putzen, regelmässige Zahnzwischenraumreinigung, ausreichend trinken, weniger Zucker, professionelle Dentalhygiene, regelmässige Kontrollen. Kaffee eher bewusst in kürzerer Zeit konsumieren statt über Stunden verteilt.

## Prävention ist günstiger als spätere Reparaturen

Viele Folgen entstehen schleichend: Verfärbungen, Zahnfleischentzündungen, Mundgeruch, Parodontitis, Zahnverlust. Spätere Behandlungen wie Kronen, Implantate, Knochenaufbau oder Parodontitis-Therapie sind deutlich aufwendiger und teurer als regelmässige Vorsorge.

**Fazit:** Kaffee und Rauchen gehören für viele Menschen zum Alltag. Wer frühzeitig auf professionelle Dentalhygiene, gute Mundpflege und regelmässige Kontrollen setzt, kann viele Auswirkungen deutlich reduzieren – ohne auf jeden Genussmoment verzichten zu müssen.`),
    aufruf({ titel: "Buchen Sie Ihre Dentalhygiene", text: "Verfärbungen von Kaffee und Nikotin lassen sich professionell entfernen – für tiefere Verfärbungen kann ein Bleaching sinnvoll sein.", zweiterKnopf: { titel: "Cannabis und Mundgesundheit", ziel: "/ratgeber/cannabis-und-mundgesundheit/" } }),
  ],
});

const cannabis = R({
  slug: "ratgeber/cannabis-und-mundgesundheit", titel: "Cannabis und Mundgesundheit", teaser: "Warum Cannabis-Konsum Zähne und Zahnfleisch belasten kann – plus Wissenswertes zu Zahnschmelz, Hydroxylapatit und Zahnzwischenräumen.",
  einleitung: "Cannabis wird heute von vielen Menschen als entspannend, natürlich oder sogar medizinisch betrachtet. Was jedoch häufig unterschätzt wird: Regelmässiger Marihuana-Konsum kann sich deutlich auf Zähne, Zahnfleisch und die gesamte Mundgesundheit auswirken.",
  seoTitel: "Marihuana und Zahngesundheit – Cannabis, Zahnfleisch, Parodontitis", seoBeschreibung: "Wie Cannabis die Mundgesundheit beeinflusst: trockener Mund, Zahnfleischentzündungen, Parodontitis-Risiko, Folgekosten. Mit Studienverweisen und Tipps.",
  bild: bild("cannabis-hero", "Mann bläst Rauch aus"), alteUrls: ["/mundgesundheit-canabis.html"], quelle: "whitesmyle.ch/mundgesundheit-canabis.html", mitInhaltsverzeichnis: true,
  bausteine: [
    text(`Besonders das Rauchen von Cannabis belastet die Mundflora, trocknet die Schleimhäute aus und kann Entzündungen im Zahnfleisch fördern. Viele Schäden entwickeln sich schleichend – oft ohne Schmerzen – und werden erst spät bemerkt. Die Folge können aufwendige und kostspielige Zahnbehandlungen sein. Studien zeigen laut Praxis zunehmend Zusammenhänge zwischen Cannabis-Konsum, Parodontitis, Zahnfleischentzündungen, Mundtrockenheit und erhöhtem Risiko für Zahnverlust.

## Warum Marihuana die Mundgesundheit beeinflusst

Beim Rauchen von Cannabis entstehen ähnliche Belastungen wie beim klassischen Rauchen: Hitzeeinwirkung auf Schleimhäute, verringerter Speichelfluss, bakterielle Veränderungen im Mund, erhöhte Entzündungsneigung, trockener Mund («Cotton Mouth»). Speichel spielt eine entscheidende Schutzfunktion: Er neutralisiert Säuren, reduziert Bakterien und schützt Zähne und Zahnfleisch. Fehlt dieser Schutz über längere Zeit, steigt das Risiko für Karies, Zahnfleischentzündungen, Mundgeruch, Zahnsteinbildung und Parodontitis.

## Der trockene Mund – ein unterschätztes Problem

Ein trockener Mund bedeutet weniger natürliche Reinigung, mehr bakterielle Beläge, erhöhte Säurebelastung, schnelleres Fortschreiten von Karies und empfindlicheres Zahnfleisch.

## Cannabis und Parodontitis

Besonders kritisch ist der mögliche Zusammenhang zwischen Cannabis und Parodontitis. Eine bekannte Langzeitstudie aus Neuseeland zeigte laut Praxis früh einen Zusammenhang zwischen regelmässigem Cannabis-Rauchen und erhöhtem Parodontitis-Risiko bei jungen Erwachsenen. Parodontitis entwickelt sich oft schleichend: Zahnfleischbluten, Mundgeruch, Zahnfleischrückgang, empfindliche Zahnhälse, lockere Zähne, Knochenabbau.

## Warum die Behandlung schnell teuer werden kann

Mögliche Konsequenzen unbehandelter Entzündungen: häufigere Dentalhygiene, Parodontitis-Behandlungen, Kronen, Wurzelbehandlungen, Implantate, Knochenaufbau, Zahnverlust. Früherkennung und Prävention sind deutlich günstiger als spätere Reparaturen.

## Naturmedizinische Sichtweise

Ganzheitliche Ansätze betrachten den Mund als Teil des gesamten Immunsystems. Diskutiert werden entzündungsfördernde Rauchstoffe, geschwächtes Immunsystem, gestörte Mundflora, erhöhte bakterielle Belastung und oxidative Belastung des Gewebes. Empfohlen werden häufig entzündungsarme Ernährung, ausreichende Flüssigkeitszufuhr, gute Mundhygiene, regelmässige professionelle Dentalhygiene, Reduktion des Rauchens, Unterstützung der Mundflora. Naturmedizin ersetzt keine professionelle zahnmedizinische Behandlung.

## Was Cannabis-Konsumentinnen und -Konsumenten für ihre Zähne tun können

Regelmässige Dentalhygiene, gründliche Reinigung der Zahnzwischenräume, ausreichend Wasser trinken, Zucker reduzieren, Speichelfluss fördern, regelmässige Kontrollen, professionelle Entfernung von Zahnstein, frühe Behandlung von Zahnfleischentzündungen. Gerade bei regelmässigem Rauchen – egal ob Tabak oder Cannabis – empfehlen viele Fachpersonen häufigere Kontrollen und Reinigungen.

^ Quellen laut Praxis: JAMA – Cannabis Smoking and Periodontal Disease Among Young Adults ([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC2823391/)); Journal of Periodontal Research – Systematic Review Cannabis & Periodontitis ([cannabisandhealth.org](https://www.cannabisandhealth.org/research/is-the-use-of-cannabis-associated-with-periodontitis-a-systematic-review-and-meta-analysis/)); BMC Oral Health – Drug Use and Oral Disease Meta-Analysis ([BMC](https://bmcoralhealth.biomedcentral.com/articles/10.1186/s12903-020-1010-3)); California Dental Association – Cannabis and Periodontal Oral Health ([Taylor & Francis](https://www.tandfonline.com/doi/abs/10.1080/19424396.2017.12222492)). Forschende weisen darauf hin, dass weitere Langzeitstudien notwendig bleiben.`, { anker: "cannabis", titel: "Cannabis" }),
    text(`## Rauchen, Kaffee und Parodontitis

Leider haben Raucherinnen und Raucher, je nachdem wie viel sie rauchen, laut Praxis eine bis zu fünfzehnmal so hohe Wahrscheinlichkeit, an Parodontitis zu erkranken, wie Nichtrauchende. Kaffee- und Teetrinkende «leiden» oft an Verfärbungen, Mundgeruch oder belegter Zunge. Rauchen fördert die Lockerung von Zähnen, und auf die Behandlung einer Parodontitis reagieren Rauchende deutlich schlechter.

Parodontalerkrankungen sind Entzündungen des Zahnhalteapparates (Zahnfleisch, Zahnhaltefasern und Zahnknochen). Am Zahnfleischrand oder in den Zahnzwischenräumen anhaftende Bakterienbeläge lösen zuerst eine entzündliche Abwehrreaktion aus. Erste Symptome wie Zahnfleischbluten treten bei Rauchenden durch die Verengung der Blutgefässe deutlich seltener auf. Zahnstein und Plaque sammeln sich zwischen Zahn und Zahnfleisch an; ohne Dentalhygiene entsteht eine Zahnfleischtasche, in der Bakterien eine Entzündung hervorrufen, das Zahnfleisch auflösen und in der Folge den Knochen angreifen.

Durch Rauchen, Kaffee- und Teetrinken entstehen verschiedene Problembereiche: Verfärbungen an Zähnen, Lippen und Zunge, Karies, Mundgeruch, belegte Zunge, Parodontalerkrankungen, Implantatverlust, schlechte Wundheilung, Knochenabbau, Präkanzerosen (Vorstufen von Krebs) und Krebs (Mundraum, Lippen, Zunge, Speicheldrüsen).

**Tipps der Praxis:** richtige tägliche Mundhygiene, regelmässige Röntgenkontrollen wegen Knochenabbau, regelmässige Dentalhygiene, Zahnpasten mit natürlichen und aufbauenden Inhaltsstoffen (Enzyme aus Ananas oder Papaya, Vitamin E, Baobab, Xylitol oder Aktivkohle), Frontpolish – die 30-minütige Dentalhygiene zur Entfernung von Verfärbungen, Zahnbelag und Zahnstein.`, { anker: "rauchen", titel: "Rauchen und Kaffee", bild: bild("rauchen-paro", "Schemazeichnung: gesundes Parodont und Parodontitis", "Darstellung: Deutsches Krebsforschungszentrum, Stabsstelle Krebsprävention, 2011"), bildPosition: "rechts" }),
    text(`## Zahnschmelz schützen und aufbauen: Hydroxylapatit

Hydroxylapatit ist ein Mineral, das nach Angabe der Praxis den Zahnschmelz härtet, Schmerzempfindlichkeiten senkt und durch die glattere Oberfläche das Lachen weisser und glänzender erscheinen lässt. Unser Zahnschmelz ist der härteste Stoff im Körper; 95–98 % bestehen aus dem kristallinen Mineral Hydroxylapatit.

Unsere Ess- und Genussmittelgewohnheiten beeinflussen die Widerstandsfähigkeit des Zahnschmelzes. Kohlenhydrathaltige Nahrung wird zu Zucker abgebaut, Bakterien «fressen» diesen Zucker und bilden Säuren; auch Fruchtsäfte aus Konzentraten, Limonaden und Energy-Drinks sind stark säurehaltig. Diesen täglichen Säureattacken hält der Zahnschmelz nicht stand und wird langsam aufgelöst. Die Folge: Entmineralisierung, poröse Zähne, freiliegende Zahnhälse mit geöffneten Kanälen (Tubuli), schmerzempfindliche Zähne und eine dunklere Zahnfarbe durch die durchschimmernde Zahnwurzel.

Zwei Funktionen sind laut Praxis in Zahnpasta, Mundschaum oder Mundspülung heute wichtig: Neutralisierung mit Wirkstoffen wie Papaya-Enzymen und aktiver Zahnschmelzschutz mit naturidentischem Zahnschmelz (Hydroxylapatit, HAP). Zahnpasten mit HAP-Kristallen in passender Grösse können sich in den Zahnschmelz einbauen, die Oberfläche remineralisieren, mikrofeine Defekte reparieren, Sensitivitäten reduzieren und den Zahn glänzen lassen. Hersteller wie SPLAT, ROCS, Curaprox und Biorepair bieten solche Produkte an.

**Was Sie täglich tun können:** Softdrinks mit aggressiven Säuren und Fruchtsäfte aus Konzentrat vermeiden, kohlensäurehaltige Getränke reduzieren, nach säurehaltigem Essen eine halbe Stunde mit dem Putzen warten, frisch gepresste Säfte und Smoothies bevorzugen, täglich eine Zahnpasta mit Hydroxylapatit benutzen.

^ Quelle laut Praxis: The Remineralizing Effect of Carbonate-Hydroxyapatite Nanocrystals on Dentine – L. Rimondini, B. Palazzo, M. Iafisco, L. Canegallo, F. Demarosi, M. Merlo, N. Roveri, Materials Science Forum 2007, Vols. 539–543: 602–605. Die Aussagen zu Hydroxylapatit geben die Sicht der Praxis wieder.`, { anker: "zahnschmelz", titel: "Zahnschmelz", bild: bild("anti-zahnschmelz", "Softdrink-Flaschen und -Dosen; Schriftzug «Anti Zahnschmelz»", "Starke Säurebildner wie Softdrinks greifen den Zahnschmelz am meisten an."), bildPosition: "links" }),
    text(`## Reinigung der Zahnzwischenräume

Welche Stelle ist mit der Zahnbürste am schlechtesten zu erreichen? An welchen Stellen muss der Zahnarzt am meisten Löcher reparieren? Wo entsteht am schnellsten Parodontose? Richtig: in den Zahnzwischenräumen. Deshalb weisen Dentalhygienikerin und Zahnarzt darauf hin, regelmässig Zahnseide zu benutzen. Für viele ist das zu umständlich – die Praxis versteht das.

Bakterieller Zahnbelag (Plaque) entsteht permanent neu, 365 Tage, 24 Stunden. Deshalb sind das tägliche gründliche Zähneputzen und der halbjährliche, maximal jährliche Besuch bei der Dentalhygienikerin wichtig. Die Zahnbürste allein reicht nicht aus. «Die Zwischenraumreinigung hat sich in den letzten Jahren als wichtiger als alle anderen Reinigungen herauskristallisiert», zitiert die Praxis Prof. Dr. med. dent. Ulrich Saxer. Durch die tägliche Reinigung der Zwischenräume werden auch Bakterien reduziert, die in die Blutbahn gelangen können.

**Alternativen zur Zahnseide,** die laut Praxis ähnlich effektiv und praktischer sind: Zahnsticks aus Plastik oder Gummi und Zahnstocher für sehr enge Zwischenräume; Interdentalbürsten und Zahnseide mit Halter für nicht zu enge Zwischenräume – nutzbar zuhause vor dem Fernseher, beim Lesen und unterwegs.

**Weitere Hilfsmittel:** Die MEGASONEX-Ultraschallzahnbürste (nach Angabe der Praxis das «High End» der Zahnpflege; Ultraschall dringt bis 12 mm in Zahnzwischenräume und Zahnfleisch ein) sowie Mundspülungen und Mundschaum mit möglichst natürlichen Inhaltsstoffen (Xylitol/Birkenzucker, Papaya-Enzyme, Süssholzextrakt, Aloe-Vera-Gel, Granatapfelextrakt). Sie ersetzen keine Zahnseide, reduzieren aber Plaque und ergänzen die Mundhygiene.`, { anker: "zwischenraeume", titel: "Zahnzwischenräume", bild: bild("interdental", "Frau reinigt ihre Zahnzwischenräume mit Zahnseide"), bildPosition: "rechts" }),
    b("videoBaustein", { anker: "video", titel: "Video: Zahnzwischenraum-Reinigung mit Ultraschall", youtubeId: "bs4Tqt-Zh54", videoTitel: "MEGASONEX Ultraschallzahnbürste (YouTube, extern)", text: "Von der Praxis eingebettetes Herstellervideo. Es wird erst nach Ihrer Zustimmung von YouTube geladen." }),
    aufruf({ titel: "Dentalhygiene mit Parodontose-Kontrolle", text: "Vereinbaren Sie Ihren Termin – für Raucherinnen, Raucher und Kaffeetrinkende bietet die Praxis zusätzlich den Frontpolish an.", zweiterKnopf: { titel: "Zum Zahnpastashop (extern)", ziel: "https://www.zahnpastashop.ch/", extern: true } }),
  ],
});

const schwangerschaft = R({
  slug: "ratgeber/schwangerschaft", titel: "Dentalhygiene in der Schwangerschaft", teaser: "Warum Parodontitis in der Schwangerschaft besondere Aufmerksamkeit braucht – und der Präventionsplan der Praxis.",
  einleitung: "Ein gesundes Baby ist eine wahre Freude. Der Einfluss von Parodontitis auf die Schwangerschaft wird seit zwei Jahrzehnten untersucht – Grund genug für Zahnprävention, Aufklärung und zahnmedizinische Betreuung schwangerer Frauen.",
  seoTitel: "Dentalhygiene in der Schwangerschaft – Parodontitis und Baby", seoBeschreibung: "Dentalhygiene in der Schwangerschaft: Zusammenhang Parodontitis, Frühgeburt und Geburtsgewicht, Präventionsplan nach Schwangerschaftsdrittel.",
  bild: bild("schwangerschaft-hero", "Schwangere Frau hält ein Kleid über den Bauch"), alteUrls: ["/schwangerschaft.html"], quelle: "whitesmyle.ch/schwangerschaft.html, /aktuelle-dental-tipps.html",
  bausteine: [
    text(`## Der Einfluss von Parodontitis auf die Schwangerschaft

Parodontologen beschäftigen sich seit zwei Jahrzehnten mit dem Einfluss von Parodontitis auf die Schwangerschaft im Zusammenhang mit vermindertem Geburtsgewicht und frühzeitiger Geburt. Aus diesem Grund ist die Zahnprävention, die Aufklärung und die zahnmedizinische Betreuung schwangerer Frauen ein Muss, um Mutter und Kind zu schützen und das gesunde Wachstum des Kindes zu gewährleisten.

### Entzündungen in der Schwangerschaft

Schon 1891 wurde ein wissenschaftlicher Artikel über den Einfluss peripherer Entzündungsherde veröffentlicht (nicht die Hauptorgane betreffende Entzündungen, wie z. B. im Mund). Diese können dazu beitragen, in anderen Organen eine Krankheit zu fördern oder anzustossen – wobei der Mund ein Entzündungsherd sein kann.

### Siebenfach erhöhtes Risiko für parodontale Erkrankungen

Das Risiko einer parodontalen Erkrankung ist während der Schwangerschaft erhöht. Eine Gingivitis (Zahnfleischentzündung) kann bei schwangeren Frauen aus noch ungeklärten Gründen auftreten; eine Erklärung ist der erheblich veränderte Hormonhaushalt, auch immunologische Mechanismen werden in Betracht gezogen. So reagieren schwangere Frauen empfindlicher auf die übliche bakterielle Last im Mund.

### Wie können Mundinfektionen den Fötus gefährden?

Bei einer parodontalen Infektion erreichen die Bakterien auf dem Weg der Zahnfleischtaschen (Spalt zwischen Zahnwurzel und umliegendem Gewebe) die Blutgefässe und können so ihren Weg zu verschiedenen Organen finden, auch zur Plazenta. Eine gesunde Plazenta ist für die Entwicklung des Kindes ein wichtiger Faktor.

### Schädigung der Plazenta durch parodontale Erkrankungen

Der vermutete Zusammenhang zwischen parodontalen Erkrankungen und niedrigem Geburtsgewicht: Die chronische Parodontitis kann eine Entzündungsreaktion auslösen, die die Plazenta schädigen und deren Blutversorgung beeinträchtigen kann. Frauen, die an Parodontitis erkrankt sind, haben laut der zitierten Quelle ein siebenfach höheres Risiko für eine Frühgeburt oder die Geburt eines Kindes mit vermindertem Geburtsgewicht.`, { bild: bild("schwangerschaft-3", "Hand mit Stethoskop am Bauch einer Schwangeren; Schriftzug «Zahngesundheit für ein gesundes Baby»"), bildPosition: "rechts" }),
    b("ablaufBaustein", { titel: "Der Schwangerschafts-Präventionsplan der Praxis", einleitung: "Die bisherige Website nennt zwei leicht unterschiedliche Fassungen des Plans; beide sind hier zusammengeführt. Die Behandlung im Einzelfall richtet sich nach der Diagnose.", schritte: [
      { _key: "s1", titel: "1.–3. Monat", text: "Beratung, Prävention und Behandlung von Gingivitis, Parodontitis, Zahnerosionen und Karies. Eine gründliche Dentalhygiene mit Reinigung zwischen Zahn und Zahnfleisch und Beseitigung von Zahnfleischentzündungen. Möglichst natürliche Zahnpasten; Zahnpasten mit Hydroxylapatit schützen laut Praxis vor Zahnschmelzverlust." },
      { _key: "s2", titel: "4.–6. Monat", text: "Die Übelkeit ist meist verschwunden: professionelle Zahnreinigung und Instruktion für die Mundhygiene zu Hause, Behandlung, wenn bei gegebener Diagnose notwendig." },
      { _key: "s3", titel: "7.–9. Monat", text: "Einschränkung bei der Patientenlagerung: Beratung zur Zahn- und Mundgesundheit und zur Prophylaxe des werdenden Kindes. Eine kurze Zahnreinigung vor der Geburt hilft, die erste Zeit nach der Geburt mit gesunden Zähnen und gesundem Zahnfleisch zu überbrücken." },
    ] }),
    hinweis(`**Bleaching in der Schwangerschaft:** Während Schwangerschaft und Stillzeit empfiehlt die Praxis grundsätzlich kein klassisches Bleaching mit Wasserstoffperoxid (siehe [Bleaching-Fakten](/ratgeber/zahnbleaching/)).`, "medizinisch"),
    text(`## Definitionen

- **Gingivitis:** Oberflächenentzündung des Zahnfleischs
- **Parodontitis:** bakterielle Infektion des Zahnhalteapparats, der die Zähne umgebenden Gewebe und des Kieferknochens
- **Zahnerosionen:** Verlust von Zahnhartsubstanz durch den Einfluss chemischer Prozesse ohne Beteiligung von Mikroorganismen
- **Karies:** akuter oder chronischer Zerfall der harten Substanz der Zähne

^ Quelle laut Praxis: Zusammenfassung des Artikels aus dem Swiss Dental Journal 07-08/2019, Zusammenfassung durch Dr. med. dent. HU Gabriella Molnar. Originalartikel von Jasmina Opacic, Alejandra Maldonado, Christoph A. Ramseier (Klinik für Parodontologie, Zahnmedizinische Kliniken der Universität Bern) und Oliver Laugisch (Philipps-Universität Marburg; ACTA Amsterdam). Korrespondenz: PD Dr. med. dent. Christoph A. Ramseier, MAS, Universität Bern.`, { breite: "schmal", bild: bild("schwangerschaft-2", "Dentalhygienikerin behandelt eine Patientin") }),
    aufruf({ titel: "Dentalhygiene- oder Beratungstermin", text: "Vereinbaren Sie noch heute Ihren Termin: 043 931 78 74 oder 076 460 38 10.", zweiterKnopf: { titel: "Kontakt", ziel: "/kontakt/" } }),
  ],
});

const knirschen = R({
  slug: "ratgeber/zahnknirschen", titel: "Zahnknirschen: Zahn- und Kieferschäden vermeiden", teaser: "Zähneknirschend oder -pressend durch die Nacht: Auswirkungen, Anzeichen und was Zahnschienen und Entspannung bringen.",
  einleitung: "Unser unbewusster Stressabbau erfolgt in der Nacht über den Kiefer – und wir wissen nichts davon. Zähneknirschen wird eher wahrgenommen als Pressen mit dem Kiefer. Das Pressen fügt den Zähnen Schaden zu, kann aber auch zu Verspannungen oder Schmerzen führen. Entspannungsübungen und eine Zahnschiene bringen Abhilfe.",
  seoTitel: "Zahnknirschen und Zähnepressen – Schäden vermeiden", seoBeschreibung: "Zahnknirschen und Pressen in der Nacht: Auswirkungen auf Zähne und Kiefer, Anzeichen, Zahnschienen, Physiotherapie und Entspannungsübungen. Ratgeber von WHITE SMYLE.",
  bild: bild("knirschen-2", "Mann fasst sich mit beiden Händen an den Kopf"), alteUrls: ["/zahnknirschen.html"], quelle: "whitesmyle.ch/zahnknirschen.html",
  bausteine: [
    text(`## Wie wirken sich Probleme auf unsere Zähne aus?

Der Spruch «etwas zähneknirschend zu machen» heisst oft, dass wir etwas ungern tun und unseren Unmut unterdrücken. Diese unterdrückten Dinge verarbeiten wir oft nachts über den Kiefer. Das Knirschen ist nicht so schlimm, ausser es hält über längere Zeiträume an. Hingegen schädigt das Pressen mit den Zähnen Zähne und Kiefergelenke und erzeugt Verspannungen.

## Am Morgen brummt der Kopf und der Nacken ist verspannt

Langfristig geht die nächtliche Kieferaktivität an die Zahnsubstanz. Beim Knirschen wird die oberste Zahnsubstanz weggerieben und legt das Dentin frei, eine weichere Zahnschicht, die wesentlich anfälliger für Karies und Folgeerscheinungen ist. Der ständige Druck durch Pressen kann in den Zähnen Risse verursachen und Verspannungen, die sich am Morgen durch Kopf-, Nacken- oder Schulterschmerzen bemerkbar machen. In speziellen Fällen kann sogar ein anhaltendes Ohrensausen (Tinnitus) ausgelöst werden; Schwindel, Migräne oder Augenprobleme können ebenfalls auftreten.

## Zahnschienen und Entspannungsübungen helfen

Gegen das Knirschen und Pressen helfen Zahnschienen, die individuell hergestellt werden müssen. Eine professionelle Aufbiss-Schiene (Michigan-Schiene) ist eine Kunststoffschiene, die nachts getragen wird, zur Entspannung beiträgt und Zahn- oder Kieferschäden verhindert. Abhilfe bei Verspannungen der Kiefergelenksmuskulatur schafft auch eine Physiotherapie: Dehn- und Lockerungsübungen lösen Verspannungen und entkrampfen die Muskeln. Mehrmals täglich den Mund weit öffnen dehnt die Muskulatur, und mit einer Selbstmassage der Kieferpartie relaxen die Kaumuskeln.

## Knirsche ich?

Wer herausfinden möchte, ob er nachts mit den Zähnen knirscht oder presst, kann sich beim Zahnarzt untersuchen lassen. Anzeichen sind Kopf-, Nacken- oder Kieferschmerzen sowie Schleifspuren an den Zähnen. Falls eine Nachtschiene notwendig ist, werden Abdrücke von Ober- und Unterkiefer genommen oder ein Scan mit dem Intraoralscanner gemacht, sodass eine Schiene im Zahnlabor hergestellt werden kann. Meist eine Woche danach kann die Schiene abgeholt werden; kleinere Anpassungen nimmt der Zahnarzt vor.

## Das Tragen einer Nachtschiene für die Erhaltung der Zähne

Der langfristige Schutz der Zähne ist durch eine Zahnschiene gewährleistet. Die ersten Tage ist es noch ungewohnt, aber nach einigen Tagen setzt der Gewohnheitseffekt ein und es fühlt sich ganz normal an. Schützen Sie Ihre Zähne nachts vor Pressen und Knirschen – es lohnt sich für Ihren Zahnerhalt.`, { bild: bild("knirschen-4", "Person setzt eine transparente Zahnschiene ein"), bildPosition: "rechts" }),
    hinweis(`Die Untersuchung auf Knirschen und die Anfertigung einer Schiene beschreibt die bisherige Website als zahnärztliche Leistung. Ob WHITE SMYLE die Schiene selbst anbietet oder an einen Zahnarzt verweist, ist dort nicht eindeutig – die Praxis gibt Auskunft. Die Dentalhygiene umfasst laut Praxis eine Beratung zur Vorbeugung bei Knirschen und Pressen.`, "info"),
    b("galerieBaustein", { titel: "Entspannung", bilder: [bild("knirschen-3", "Frau in entspannter Haltung mit geschlossenen Augen"), bild("knirschen-1", "Frau lächelt mit geschlossenen Augen")], hinweis: "Symbolbilder der bisherigen Website." }),
    aufruf({ titel: "Untersuchung vereinbaren", text: "Klären Sie ab, ob eine Knirschschiene für Sie in Frage kommt. Telefon 043 931 78 74; SMS, Telegram, Signal oder WhatsApp: 076 460 38 10.", zweiterKnopf: { titel: "Fragen zur Vorbereitung", ziel: "/tests/zahnknirsch-test/" } }),
  ],
});

const hilfsmittel = R({
  slug: "ratgeber/hilfsmittel", titel: "Hilfsmittel für die tägliche Dentalhygiene", teaser: "Zahnbürsten, Zahnpasta, Mundspülung, Zahnseide und Sticks: welche Hilfsmittel die Praxis empfiehlt und warum.",
  einleitung: "Welche Hilfsmittel braucht man für eine gute Dentalhygiene, und was sollen sie bewirken? Möchten Sie dauerhaft gesunde Zähne, ist die konsequente Mundhygiene eine Grundvoraussetzung: mindestens 1 Mal pro Jahr Dentalhygiene in der Praxis und die tägliche Pflege zuhause.",
  seoTitel: "Dentalhygiene-Hilfsmittel für den täglichen Gebrauch", seoBeschreibung: "Schall- und Ultraschallzahnbürsten, natürliche Zahnpasten, Mundspülung, Zahnseide und Sticks: Empfehlungen der Praxis für die tägliche Dentalhygiene.",
  bild: bild("hilfsmittel-splat", "Zahnpasta-Tube mit Minze und Orange"), alteUrls: ["/dentalhygiene-hilfsmittel.html"], quelle: "whitesmyle.ch/dentalhygiene-hilfsmittel.html",
  bausteine: [
    text(`Hierbei ist nicht nur die Anzahl des Zähneputzens von Bedeutung, sondern auch die Auswahl einer geeigneten Zahnbürste. Die Auswahl der richtigen Zahnpasta, Zahnseide sowie Mundspülung sind unentbehrlich für eine effektive Mundhygiene. Sie sollten mindestens am Morgen und Abend gründlich putzen.

## Zahnbürsten

Die führenden Technologien sind die Schall- und die Ultraschalltechnologie. Nach Darstellung der Praxis hat eine Universitätsstudie gezeigt, dass Bakterienketten, aus denen Plaque besteht, unter Anwendung von Ultraschall aufbrechen und dadurch unschädlich werden. MEGASONEX ist laut Praxis der führende Hersteller; das Herzstück der Bürste ist der Megacrystal, der mit einer medizinischen Frequenz von 1,6 MHz (96 Millionen Pulse pro Minute) arbeitet – typische Schallzahnbürsten haben 15 000–40 000 Schwingungen pro Minute. Die Ultraschalltechnologie sei in den frühen 1990er-Jahren von der amerikanischen FDA für die Nutzung in Zahnbürsten zugelassen worden.

**Sind Ultraschall-Zahnbürsten eine sinnvolle Investition?** Beim Putzen mit herkömmlichen Zahnbürsten – «Schrubben» wäre das passendere Wort – werden Zahnfleisch und Zahnschmelz häufig leicht verletzt; darunter leiden besonders Menschen mit empfindlichen Zähnen und Zahnfleisch. Der einzige Nachteil sind die Kosten, die sich laut Praxis durch die Langlebigkeit und im Vergleich zu Zahnersatz relativieren. Wer komfortabel putzen und gute Ergebnisse erzielen will, ist mit einer Schall- oder Ultraschall-Zahnbürste am besten bedient. Mehr im Ratgeber [Ultraschallzahnbürste](/ratgeber/ultraschallzahnbuerste/).

## Zahnpasta

Bei der Auswahl unterscheidet man hauptsächlich zwischen natürlich und chemisch hergestellten Zahnpasten. Natürliche Zahnpasten mit pflanzlichen Wirkstoffen für Zahnfleisch und Zähne und aus der Natur gewonnenen remineralisierenden Wirkstoffen vereinen laut Praxis die neuesten Technologien. Die Erfahrung der Praxis: Wer diese natürlichen Zahnpasten einmal verwendet hat, bleibt gerne dabei. Im externen [Zahnpastashop](https://www.zahnpastashop.ch/) werden mehrere davon vorgestellt.

## Mundspülung

Für eine optimale Mundgesundheit ist Zähneputzen wichtig, aber nicht immer ausreichend. Der Mundraum besteht zu ca. 25 % aus Zähnen, der Rest sind Weichteile: Zunge, Gaumen, Zahnfleisch, Zahnzwischenräume. Hier leben Bakterien – gute und schlechte. Die schlechten leben meist ohne Sauerstoff, verursachen Mundgeruch, Karies und Parodontose und sondern Schwefelverbindungen ab. Eine möglichst natürliche Mundspülung als Teil der täglichen Mundhygiene hilft, diese Bakterien im Gleichgewicht zu halten; zweimal am Tag verwendet, trägt sie zur Verhinderung und Reduktion von Zahnbelag bei. Die Praxis empfiehlt die natürliche Mundspülung von SPRY mit Xylitol (Birkenzucker), einem natürlichen Süssstoff mit remineralisierendem Effekt.

## Zahnseide und Zahnsticks

Die Effektivität der Zahnseide wurde laut Praxis durch Zahnärzte der New Yorker Universität nachgewiesen: Zahnseide befreit die Mundhöhle besser als Zahnpasta allein von gefährlichen Bakterien und senkt deren Zahl in kurzer Zeit deutlich (zweiwöchige Studie mit 51 Zwillingspaaren im Alter von 12 bis 21 Jahren, The Journal of Periodontology). Es wird empfohlen, Zahnseide jeden Abend zu verwenden.

Zahnseide wird auch mit Wirkstoffen versehen, zum Beispiel mit Chili-Extrakt: Aufgrund des Capsaicin-Gehalts soll die Durchblutung des Zahnfleisches verbessert werden; die Zahnseide ist hypoallergen mikrokristallin gewachst. Ätherisches Bergamotte-Öl erfrischt den Atem, ätherisches Kardamom-Öl hat laut Praxis entzündungshemmende und antiseptische Wirkung.

Sehr gut geeignet für unterwegs oder abends sind metallfreie Einweg-Interdentalbürsten mit weichen Gummiborsten (z. B. GUM Soft-Picks). Sie gleiten leicht zwischen die Zähne, entfernen Plaque und Speisereste, massieren das Zahnfleisch sanft und sind ideal bei kieferorthopädischen Apparaturen, Brücken oder Implantaten. Eine gute Alternative, wenn Sie nicht gerne Zahnseide verwenden.`),
    hinweis(`Die Produkt- und Studienangaben in diesem Ratgeber stammen von der bisherigen Website der Praxis und wurden für diese Demo nicht überprüft. Die genannten Produkte sind im externen Zahnpastashop der Praxisbetreiber erhältlich; Preise und Bedingungen dort.`, "info"),
    aufruf({ titel: "Persönliche Beratung zu Hilfsmitteln", text: "In der Dentalhygiene erhalten Sie eine individuelle Instruktion zu Putztechnik und Hilfsmitteln.", zweiterKnopf: { titel: "Zum Zahnpastashop (extern)", ziel: "https://www.zahnpastashop.ch/", extern: true } }),
  ],
});

const megasonex = R({
  slug: "ratgeber/ultraschallzahnbuerste", titel: "Ultraschallzahnbürste MEGASONEX M8", teaser: "Sanfte Tiefenreinigung für Zähne und Zahnfleisch: was die Praxis über die Ultraschallzahnbürste MEGASONEX M8 und M8S sagt.",
  einleitung: "Viele Menschen putzen regelmässig ihre Zähne und kämpfen trotzdem mit Zahnfleischbluten, Plaque, empfindlichen Zahnhälsen, Mundgeruch, Entzündungen oder Verfärbungen. Herkömmliche elektrische Zahnbürsten arbeiten oft mit starkem mechanischem Druck; die MEGASONEX M8 und M8S setzen zusätzlich auf Ultraschalltechnologie.",
  seoTitel: "Megasonex M8 Ultraschallzahnbürste – Ratgeber", seoBeschreibung: "Die Megasonex M8 und M8S Ultraschallzahnbürste laut WHITE SMYLE: sanfte Reinigung bei empfindlichem Zahnfleisch, Implantaten, Parodontitis. Herstellerangaben.",
  bild: bild("megasonex-interdental", "Ultraschallzahnbürste MEGASONEX"), alteUrls: ["/megasonex-ultraschall.html"], quelle: "whitesmyle.ch/megasonex-ultraschall.html, /aktuelle-dental-tipps.html",
  bausteine: [
    hinweis(`Dieser Ratgeber gibt Hersteller- und Praxisangaben zur MEGASONEX-Ultraschallzahnbürste wieder, die im externen Zahnpastashop der Praxisbetreiber verkauft wird. Die Angaben wurden für diese Demo nicht fachlich überprüft. Der Kauf erfolgt ausschliesslich im externen Shop.`, "info"),
    text(`## Warum eine Ultraschallzahnbürste?

Die Ultraschallzahnbürste eignet sich nach Angabe der Praxis besonders für Menschen mit empfindlichem Zahnfleisch oder sensiblen Zähnen. Vorteile der Megasonex M8 und M8S laut Praxis: besonders sanfte Reinigung, Ultraschalltechnologie (Millionen Ultraschallimpulse unterstützen die Reduktion von Bakterien und Plaque), weniger Druck beim Putzen, Unterstützung gesunder Zahnfleischpflege (beliebt bei Gingivitis oder Parodontitis), geeignet bei Implantaten und Kronen.

## Wie funktioniert die MEGASONEX Ultraschallzahnbürste?

MEGASONEX verwendet Ultraschalltechnologie, wie sie bei medizinischen Geräten eingesetzt wird: 96 Millionen Ultraschall-Impulse pro Minute plus bis zu 18 000 Schallbewegungen des Bürstenkopfes. Eine Studie der medizinischen und zahnmedizinischen Universität Tokio (Abteilung Präventive Zahnmedizin) fand laut Praxis heraus, dass Streptococcus mutans, eine Plaque verursachende Bakterienform, durch eine Ultraschallbehandlung von 1,6 MHz harmlos wird; die Bakterienketten werden beschädigt und ihre Anhangsmechanismen durchtrennt.

**Unterschied Ultraschall und Schall:** Ultraschall-Zahnbürste bedeutet bei MEGASONEX, dass 96 Millionen Ultraschall-Impulse zu den 18 000 Bürstenbewegungen pro Minute dazukommen. Schallzahnbürste bedeutet, dass sich die Borsten mit bis zu 42 000 Schwingungen pro Minute bewegen.

**Zahnpasta:** Mit der MEGASONEX brauchen Sie keine bestimmte Zahnpasta; die Praxis empfiehlt grundsätzlich möglichst natürliche Zahnpasten der neuen Generation, z. B. mit Enzymen oder Hydroxylapatit.

**Zungenreinigung:** Auf der Zunge sitzen die meisten Bakterien – in den Papillen nisten sich anaerobe Bakterien ein, die Schadstoffe absondern. Mit dem Zungenaufsatz werden laut Hersteller genau diese Bakterien unschädlich gemacht: weniger Mundgeruch, gesündere Zähne, straffes Zahnfleisch.

**Design und Qualität:** Eine Kooperation aus Kalifornien und Japan; 2 Jahre Garantie laut Hersteller. Präzisions-Bürstenköpfe und Ultraschall-Zungenreiniger ergänzen den 17-mm-Megacrystal; Twist-Lock-Verschluss für den Wechsel der Bürstenköpfe.

## Für wen eignet sich die Megasonex besonders?

Grundsätzlich für alle, die eine gründliche Mundhygiene bevorzugen. Speziell für Menschen mit empfindlichem Zahnfleisch, Zahnfleischentzündungen, Parodontitis, Implantaten, Brücken oder Kronen, empfindlichen Zahnhälsen, Mundgeruch, sensiblen Zähnen, starker Plaquebildung sowie für Spangenträgerinnen und -träger und für weissere Zähne bei Raucherinnen, Rauchern und Kaffeetrinkenden.

^ Studie laut Praxis: Shinada K, Hashizume L, Teraoka K, Kurosaki N. Effect of ultrasonic toothbrush on Streptococcus mutans. Japan J. Conserv. Dent. 1999; 42 (2): 410–417. Die Studie wurde mit der Originalversion der Ultima-Zahnbürste ohne zusätzliche Borstenbewegung durchgeführt; laut Praxis wurde keine Abweichung zur MEGASONEX festgestellt.`, { bild: bild("tipps-megasonex", "Grafik mit technischen Details der MEGASONEX-Zahnbürste"), bildPosition: "rechts" }),
    b("videoBaustein", { titel: "Herstellervideo", youtubeId: "bs4Tqt-Zh54", videoTitel: "MEGASONEX Ultraschallzahnbürste (YouTube, extern)", text: "Von der Praxis eingebettetes Video. Es wird erst nach Ihrer Zustimmung von YouTube geladen." }),
    b("aufrufBaustein", { variante: "karte", titel: "Megasonex M8 oder M8S bestellen", text: "Der Kauf erfolgt im externen Zahnpastashop der Praxisbetreiber. Für eine Beratung können Sie die Praxis kontaktieren: 043 931 78 74.", knopf: { titel: "Zum Zahnpastashop", ziel: "https://www.zahnpastashop.ch/megasonex-ultraschall.html", extern: true }, zweiterKnopf: { titel: "Ratgeber Hilfsmittel", ziel: "/ratgeber/hilfsmittel/" } }),
  ],
});

const tipps = R({
  slug: "ratgeber/dental-tipps", titel: "Ganzheitliche Dental-Tipps", teaser: "Zahngesundheit und Immunsystem, orale Bakterien und Fitness, Kaugummi und Säure, Süssigkeiten, Sport, Nuggi: die Tipps-Sammlung der Praxis.",
  einleitung: "Mit den Dental-Tipps möchte die Praxis umfassendes und ganzheitliches Wissen für Zahnpflege und Lebensstil weitergeben. Die Sammlung stammt von der bisherigen Website und gibt die Sicht der Praxis wieder.",
  seoTitel: "Dental-Tipps – Zahngesundheit, Immunsystem, Sport, Ernährung", seoBeschreibung: "Dental-Tipps von WHITE SMYLE: Zahngesundheit und Immunsystem, orale Bakterien und Fitness, Bleaching, Kaugummi und Säure, Süssigkeiten, Sport, Nuggi.",
  bild: bild("tipps-paar", "Paar läuft lachend am Strand"), alteUrls: ["/aktuelle-dental-tipps.html"], quelle: "whitesmyle.ch/aktuelle-dental-tipps.html", mitInhaltsverzeichnis: true,
  bausteine: [
    text(`## Wie hängen Zahngesundheit, Immunsystem und körperliche Gesundheit zusammen?

Zahngesundheit und Immunsystem sind eng miteinander verbunden. Probleme in der Mundgesundheit, insbesondere Zahnfleischerkrankungen (Parodontitis) oder Karies, können negative Auswirkungen auf das Immunsystem haben – und umgekehrt.

### Einfluss der Zahngesundheit auf das Immunsystem

- **Bakterielle Ausbreitung:** Bakterien im Mund, insbesondere bei Zahnfleischerkrankungen, können in den Blutkreislauf gelangen und Entzündungen in anderen Körperteilen auslösen – zum Beispiel Endokarditis (bakterielle Infektion der Herzinnenwand) oder Atemwegserkrankungen wie Lungenentzündung und COPD.
- **Schwangerschaftskomplikationen:** Schwangere mit Zahnfleischerkrankungen haben ein höheres Risiko für Frühgeburten und Babys mit geringem Geburtsgewicht.
- **Ernährung und Verdauung:** Gesunde Zähne sind notwendig, um Nahrung richtig zu kauen und zu verdauen. Karies oder Zahnverlust können die Nährstoffaufnahme beeinträchtigen.
- **Immunsystem und Stress:** Chronische Zahnfleischentzündungen setzen den Körper unter Dauerstress, was das Immunsystem schwächt und die Heilung nach Verletzungen oder Operationen verlangsamen kann.
- **Neurodegenerative Erkrankungen:** Es gibt laut Praxis zunehmend Hinweise, dass Zahnfleischerkrankungen mit einem höheren Risiko für Alzheimer und andere Demenzformen verbunden sein können.

### Lösungen zur Verbesserung der Zahngesundheit

Regelmässige Zahnpflege mit möglichst natürlichen Zahnpasten sowie Zahnseide oder Interdentalbürsten; Verzicht auf Rauchen (erhöht das Risiko für Zahnfleischerkrankungen und Mundkrebs erheblich und beeinträchtigt die Heilung); gesunde Ernährung mit wenig Zucker und verarbeiteten Lebensmitteln; antibakterielle Mundspülungen. Die Praxis nennt zudem Immunbooster mit Vitamin D3, K2, C, Zink und B-Vitaminen als Unterstützung des Immunsystems und verlinkt entsprechende Produkte im externen Shop fresh4life.shop.

### Die Rolle der regelmässigen Dentalhygiene

Plaque- und Zahnsteinentfernung, die zuhause nicht vollständig gelingt; Prävention von Parodontitis; Früherkennung von Problemen wie Karies oder Entzündungen. Fazit der Praxis: Gesunde Zahnpflege und regelmässige Dentalhygiene spielen eine entscheidende Rolle für die allgemeine Gesundheit und das Immunsystem.`, { anker: "immunsystem", titel: "Zahngesundheit und Immunsystem", bild: bild("tipps-immunsystem", "Grafik: Regenschirm schützt vor Viren; Schriftzug «Schütze dein Immunsystem»"), bildPosition: "rechts" }),
    hinweis(`Die Aussage der bisherigen Website, die Einnahme von Nahrungsergänzungsmitteln sei «heute unumgänglich geworden», wurde in dieser Demo nicht übernommen und ist von der Praxis fachlich zu prüfen. Die Produktlinks (fresh4life.shop) führen zu einem externen Shop.`, "medizinisch"),
    text(`## Wie weiss werden meine Zähne durch Bleaching?

Viele Bleaching-Kundinnen und -Kunden sagen erstaunlicherweise, dass sie keine zu weissen Zähne möchten. Das Wichtigste: Es gibt zwei Arten von Verfärbungen – Oberflächenverfärbungen und die in der Tiefe des Zahnschmelzes liegenden hartnäckigen Verfärbungen, die ohne Bleaching nicht zu beseitigen sind.

Der Zahnbelag, der sich täglich bildet, besteht aus Bakterien; wird er nicht gut beseitigt, entsteht Zahnstein. In Zahnbelag und Zahnstein bilden sich Oberflächenverfärbungen, die bei der täglichen Zahnpflege und bei der Dentalhygiene (Ultraschall, Handinstrumente, Airflow) entfernt werden. Danach kann das Bleaching-Gel die tiefen Verfärbungen beseitigen – meist nach einer Stunde sieht man das Endergebnis.

Extrem weisse Zähne bekommt man entweder von zu viel Zahnaufhellung in kurzen Abständen – wovon die Praxis dringend abrät – oder mit Veneers (Keramikschalen). Das oft künstlich aussehende Weiss der Keramikschalen schreckt viele davon ab, eine Zahnaufhellung zu machen; wer vernünftig bleicht, braucht diese Angst nicht zu haben.

Beim ersten Bleaching werden die Verfärbungen der letzten Jahre beseitigt – sozusagen ein «Zahn-Reset». Bei zu starken Verfärbungen braucht es eventuell eine zweite und dritte Sitzung. Das Aufrechterhalten benötigt meist alle 1–2 Jahre eine Auffrischung, die mit der Dentalhygiene im [Kombipaket](/kombipaket/) gemacht werden kann.`, { anker: "weiss", titel: "Wie weiss werden Zähne?", breite: "schmal" }),
    text(`## Orale Bakterien und die Auswirkungen auf Fitness und Gesundheit

Parodontitis wird heute als Erkrankung angesehen, die auf den gesamten Körper Auswirkungen hat. In einer gesunden Mundhöhle leben rund eine Billion Bakterien, die für eine gesunde Mundflora sorgen. Hygiene, Ernährung, Stress und andere Faktoren beeinflussen die Balance zwischen aufbauenden und aggressiven Bakterien.

Heute besteht laut Praxis weitgehend Einigkeit darin, dass chronische Entzündungsprozesse – Zahnfleischbluten oder eine unbehandelte Parodontitis – Stoffwechsel, Lunge und Gefässsystem dauernd belasten. Das Bakterium Fusobacterium nucleatum, das an Mikroorganismen im Plaque anhaftet, ist allein nicht krankheitserregend, aktiviert aber durch sein Anhaften an anderen Erregern bestimmte Vorgänge und produziert toxische Abbauprodukte; es findet sich nicht nur im Mund, sondern bei vielen Darmkrebspatientinnen und -patienten auch im Darm. Gelenkentzündungen, Atemwegserkrankungen und Herzinfarktrisiko können durch verbesserte Mundhygiene vermindert werden.

**Tägliche Mundpflege:** Ausschlaggebend sind Qualität und Häufigkeit der Pflegeprodukte. Möglichst natürliche Produkte fördern die pH-Balance; eine antibakterielle Mundspülung, am besten ohne Alkohol, hemmt das Plaque-Wachstum; eine zucker- und säurearme Ernährung trägt zur Gesunderhaltung bei. Rund 60 % aller oralen Organismen befinden sich auf der Zunge – nach dem Zähneputzen 2 Mal pro Tag mit einem Zungenschaber reinigen.

**Attraktivität:** Mit gepflegten und gesunden Zähnen verschönern Sie Ihr Erscheinungsbild. Beim Bleaching entsteht laut Praxis Sauerstoff, der die «schlechten» Bakterien beseitigt und so auch Mundgeruch vermindern soll.

> «Ich unterstütze Sie gerne mit einer wirklich guten Dentalhygiene und einer individuellen Beratung, damit Sie Ihre gesundheitlichen Ziele erreichen können.» – Tünde Obenauer`, { anker: "fitness", titel: "Orale Bakterien und Fitness", bild: bild("tuende-2", "Tünde Obenauer, Dentalhygienikerin"), bildPosition: "rechts" }),
    text(`## Ist Kaugummi kauen wirklich gesund?

Nicht nur süsse, sondern auch saure Lebensmittel können die Zähne angreifen. Säureschäden (Erosionen) entstehen durch die direkte Einwirkung von Säuren auf die Zahnoberfläche und führen zu nicht wiederherstellbarem Verlust von Zahnhartsubstanz – Bakterien sind daran nicht beteiligt, im Gegensatz zur Karies. Der Speichel neutralisiert die Säuren und stellt die Remineralisation der Zähne sicher. Deshalb empfiehlt sich eine regelmässige Stimulation des Speichelflusses: Je mehr Speichel fliesst, desto besser sind die Zähne geschützt.

**Massnahme:** zuckerfreie Kaugummis nach den Mahlzeiten oder zwischendurch. Kaugummis mit Birkenzucker (Xylitol) schützen laut Praxis noch effektiver, da sie die Bakterienvermehrung verhindern und so die Säureproduktion drastisch verringern.

**So werden die Zähne nicht sauer:** Besonders säurehaltig sind gekaufte Fruchtsäfte, Sportgetränke, Energy-Drinks, Limonaden, Hagebuttentee und Mineralwasser mit Geschmack, viele Früchte (Ananas, Kiwi, Orangen, Zitronen), Essig und saure Süssigkeiten. Tipps der Praxis: maximal 5 säurehaltige Lebensmittel pro Tag, Kontakt mit den Zähnen kurz halten (Strohhalm), bei bestehenden Säureschäden vor dem Verzehr saurer Lebensmittel putzen; wer keine Säureschäden hat, putzt nach dem Essen – das Kariesrisiko ist meist höher als das Erosionsrisiko. Neuere Studien hätten gezeigt, dass bei normalem Essverhalten das Warten von einer halben Stunde nach sauren Mahlzeiten nichts bringt.

## Zu viele Süssigkeiten – wie putze ich dann richtig?

Auf den Zuckerkonsum folgt die Attacke: Unzählige Bakterien bilden Säure, die die Zähne angreift. In den Zahnzwischenräumen bleiben nach Süssigkeiten besonders viele Rückstände – diese Stellen regelmässig mit Interdentalbürstchen und Zahnseide reinigen. Blutet das Zahnfleisch beim Beginn, in den nächsten Tagen weiterputzen; die Blutungen werden weniger und verschwinden.

Tipps der Praxis: 1–2 Mal pro Tag eine natürliche Mundspülung (z. B. SPRY mit Xylitol), einige Male am Tag kurz einen Kaugummi mit Xylitol kauen, nach Süssigkeiten die Zahnzwischenräume mit einer Interdentalbürste putzen, eine Zahnpasta verwenden, die dem Zahnfleisch hilft, sich zu regenerieren (z. B. SPLAT Blackwood, SPLAT Green Tea, ROCS Pro Fresh Mint).`, { anker: "kaugummi", titel: "Kaugummi, Säure, Süssigkeiten", bild: bild("tipps-xylitol", "Frau bläst eine Kaugummiblase; Schriftzug «Xylitol Kaugummi»"), bildPosition: "links" }),
    text(`## Zahngesundheit und Sport

Sport wirkt laut Praxis wie ein Jungbrunnen für den ganzen Körper. Bei Krafttraining sollte das Cardiotraining nicht vernachlässigt werden: weniger Ermüdung im Job, bessere Konzentration, Stressabbau. Ärzte sprechen von Anti-Aging, da die Durchblutung stärker ist. Ob Ausdauer- oder Kraftsport – es besteht laut Praxis ein direkter Zusammenhang mit der Zahn- und Mundgesundheit: Die verstärkte Durchblutung fördert die Mineralstoffversorgung im Mundbereich; unterstützend Zahnpasten mit durchblutungsfördernden Inhaltsstoffen (Ingwer, Brennnessel, Chili).

**Zahnfleischentzündung versus Sport:** Der deutsche Professor Jörg Eberhard konnte laut Praxis in einer Studie nachweisen, dass der positive Effekt des Sports fast nutzlos ist, wenn die Person mit entzündetem Zahnfleisch zu kämpfen hat: Die DNA verkürzt sich bei Sporttreibenden mit Parodontitis genauso schnell wie bei «Couch-Potatoes». Sportlich aktive Personen mit gesundem Zahnfleisch und tadelloser Mundhygiene haben den Vorteil, dass sie nicht nur gesund, sondern auch jung bleiben.

Die bisherige Website verlinkt zudem das Fitnesscenter basefit.ch als Empfehlung und weist darauf hin, dass viele Krankenkassen mit Zusatzversicherung einen Teil des Jahresbeitrags übernehmen.`, { anker: "sport", titel: "Sport", bild: bild("tipps-sport", "Frau joggt über eine Wiese"), bildPosition: "rechts" }),
    text(`## Was haben Herz-Kreislauf-Probleme oder Diabetes mit Zahnmedizin zu tun?

Allgemeine Krankheiten können laut der zitierten Quelle verringert werden: Herz-Kreislauf-Probleme, Atemwegserkrankungen, Diabetes/Blutzuckerspiegel, Gelenkentzündungen, Gefahr einer Frühgeburt.

**Herz-Kreislauf:** Eine Parodontitis erhöht das Risiko für Gefässveränderungen. Über die Blutbahn können Parodontitis-Bakterien und Entzündungsbotenstoffe im Körper zirkulieren, Gefässe verengen und das Herzinfarktrisiko steigern; mit einer schweren Parodontitis erhöht sich auch die Gefahr eines Schlaganfalls um das Zwei- bis Dreifache, vor allem bei Männern über 60. Bakteriämie ist die Hauptursache für Entzündungen der Herzinnenhaut (Endokarditis). Patientinnen und Patienten mit Herzfehlern sollten das zahnmedizinische Praxisteam informieren.

**Atemwegserkrankungen:** Keime im Mund werden in Rachen und Lunge eingeatmet und können bei geschwächtem Immunsystem Lungenentzündung, Bronchitis oder ein Lungenemphysem auslösen. Rauchende haben ein doppelt erhöhtes Risiko.

**Gelenkentzündung:** Menschen mit Parodontitis haben ein bis zu achtmal höheres Risiko für rheumatoide Arthritis. Das Parodontitis-Bakterium P. gingivalis bildet ein Enzym, das die Aminosäure Arginin in Citrullin umwandelt; das Immunsystem reagiert mit Antikörpern, die auch ein Symptom der rheumatoiden Arthritis sind. Parodontitis und Rheuma müssen parallel behandelt werden.

**Blutzuckerspiegel/Diabetes:** Entzündungsherde im Mund tragen dazu bei, dass die Zellen weniger auf Insulin ansprechen. Umgekehrt sind Diabetikerinnen und Diabetiker anfälliger für bakterielle Infektionen und haben ein höheres Risiko für Parodontitis und Karies; wer den Zuckerspiegel gut kontrolliert, hat kaum ein höheres Parodontitis-Risiko. Hohe Blutzuckerwerte und Medikamente können zu Mundtrockenheit führen – viel Wasser trinken oder zuckerfreie Kaugummis kauen. Wer an Diabetes leidet, sollte das Praxisteam informieren (Wundheilungsstörungen).

**Mundpflege senkt das Risiko:** Täglich mit Zahnbürste und Zahnpasta die Bakterienbeläge entfernen, auf eine zucker- und säurearme Ernährung achten und allenfalls eine antibakterielle Mundspülung verwenden.

^ Quelle laut Praxis: www.mundgesund.ch – eine Initiative der Schweizerischen Zahnärzte-Gesellschaft SSO und Swiss Dental Hygienists.`, { anker: "krankheiten", titel: "Herz, Lunge, Gelenke, Diabetes", bild: bild("tipps-koerper", "Grafik des menschlichen Körpers mit Blutkreislauf", "Die Vernetzung des körperlichen Systems"), bildPosition: "rechts" }),
    text(`## Tschüss Nuggi

Ein Nuggi ist eine gute Sache: Er beruhigt und hält Kinder davon ab, Daumen zu lutschen. Spätestens mit drei Jahren sollten sich Kinder schrittweise von ihrem «Beruhigungssauger» lösen, vor allem den Zähnen zuliebe. 80 % der Kinder haben das Bedürfnis zu saugen – am Nuggi, am Daumen, am Stofftier oder am Zipfel ihrer Decke; von all diesen Möglichkeiten sei der Nuggi die beste, weil er einfacher abgewöhnt werden kann. Je weniger Nuggi-Zeit, desto besser die Sprachentwicklung.

Warum abgewöhnen? Damit sich die Zähne nicht verschieben. Kieferfehlstellungen wie ein offener Biss, bei dem die Schneidezähne auseinanderklaffen, hängen mit den Sauggewohnheiten zusammen. Am besten vor dem Durchbruch der bleibenden Zähne aufhören. Acht Monate nach der Geburt ist das Saugbedürfnis nicht mehr so stark ausgeprägt, sodass die Nuggi-Zeit stetig vermindert werden kann; Eltern sollten den Nuggi nie von sich aus anbieten. Fachleute raten davon ab, den Nuggi einfach wegzunehmen. Methoden: den Nuggi mit eklig schmeckenden Gels bestreichen oder die Nuggi-Trennung feiern (Nuggi-Fee, Samichlaus, Osterhase). Je älter die Kinder, desto schwieriger wird die Abgewöhnung – und umso wichtiger.

^ Quelle laut Praxis: Zahninfo, Patientenzeitung der Schweizerischen Zahnärzte-Gesellschaft SSO Nr. 3/18.`, { anker: "nuggi", titel: "Nuggi", bild: bild("tipps-nuggi", "Schlafendes Baby mit Nuggi; Schriftzug «Tschüss Nuggi»"), bildPosition: "links" }),
    text(`## Pflanzenwirkstoffe auf dem Vormarsch

Zahnpasten mit möglichst natürlichen Inhaltsstoffen setzen sich laut Praxis am Schweizer Dentalmarkt immer mehr durch. Zahnärzte und Dentalhygienikerinnen empfehlen Menschen, die nach weniger chemischen Produkten suchen, SPLAT-Zahnpasten: Sie enthalten keine aggressiven Inhaltsstoffe wie Triclosan, Chlorhexidin oder Natriumlaurylsulfat (SLS); diese wurden durch pflanzliche Wirkstoffe wie Baikal-Helmkraut, Bergenie, Spirulina, Vitamine A und C ersetzt.

Das SPLAT-White-System beinhaltet natürliche Enzyme aus Papaya, Feige oder Ananas, die Proteine spalten und so Plaque auflösen. Manche handelsüblichen Zahnpasten enthalten hoch abrasive Inhaltsstoffe, die zu Zahnsensitivitäten führen können. SPLAT-Zahnpasten enthalten laut Hersteller bis zu 98,6 % organische Wirkstoffe, SPLAT-Mundspülungen bis zu 98 %. Erhältlich im externen [Zahnpastashop](https://www.zahnpastashop.ch/).`, { anker: "pflanzen", titel: "Pflanzenwirkstoffe", bild: bild("tipps-splat", "Zahnpasta-Tube SPLAT Silver"), bildPosition: "rechts" }),
    hinweis(`Nicht übernommen wurde der Abschnitt «Zahnarztpraxen zählen zu den Corona-sichersten Orten» (Stand 2020, mit SSO-Medienmitteilung vom August 2020): Er ist zeitgebunden und beschreibt zahnärztliche Massnahmen (Wurzelbehandlung), die nicht zum Dentalhygiene-Angebot passen. Die Praxis entscheidet, ob ein aktualisierter Hygiene-Hinweis gewünscht ist. Die Abschnitte zu Zahnknirschen, Schwangerschaft und Megasonex aus der alten Tipps-Sammlung stehen als eigene Ratgeber zur Verfügung.`, "info"),
    aufruf({ titel: "Ihre Dentalhygiene als Beitrag zur Gesundheit", text: "Regelmässige Dentalhygiene 1–2 Mal pro Jahr – buchen Sie online oder rufen Sie an.", zweiterKnopf: { titel: "Alle Ratgeber", ziel: "/ratgeber/" } }),
  ],
});

export default [mundgeruch, rauchen, cannabis, schwangerschaft, knirschen, hilfsmittel, megasonex, tipps];
