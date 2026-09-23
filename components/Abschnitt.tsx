/** Einheitlicher Abschnittsrahmen mit optionalem Titel (Orange-Strich) und Einleitung. */
export function Abschnitt({ id, titel, kurzzeile, einleitung, hintergrund = "papier", kinder, breite = "normal", titelGroesse = "titel-2" }: {
  id?: string;
  titel?: string;
  kurzzeile?: string;
  einleitung?: string;
  hintergrund?: "papier" | "emaille" | "apricot";
  kinder: React.ReactNode;
  breite?: "normal" | "schmal";
  titelGroesse?: "titel-2" | "titel-3";
}) {
  const bg = hintergrund === "emaille" ? "flaeche" : hintergrund === "apricot" ? "bg-apricot" : "";
  return (
    <section id={id} className={`abschnitt ${bg}`}>
      <div className={breite === "schmal" ? "behaelter-schmal" : "behaelter"}>
        {titel || einleitung ? (
          <div className="auftauchen mb-8 max-w-3xl sm:mb-10">
            {kurzzeile ? <p className="etikett mb-3">{kurzzeile}</p> : null}
            {titel ? <h2 className={`${titelGroesse} titel-strich`}>{titel}</h2> : null}
            {einleitung ? <p className="vorspann mt-4">{einleitung}</p> : null}
          </div>
        ) : null}
        {kinder}
      </div>
    </section>
  );
}
