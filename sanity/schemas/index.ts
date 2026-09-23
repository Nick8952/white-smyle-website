import { adresseTyp, bildTyp, linkTyp, navGruppeTyp, oeffnungszeitTyp, richTextTyp } from "./objekte";
import { bausteine } from "./bausteine";
import { aktionTyp, downloadTyp, einstellungenTyp, fragebogenTyp, kombinationTyp, kundenmeinungTyp, leistungTyp, medienstimmeTyp, rechtstextTyp, seiteTyp, teammitgliedTyp, texteTyp, zahlungsartTyp } from "./dokumente";

export const schemaTypes = [
  bildTyp, linkTyp, navGruppeTyp, richTextTyp, adresseTyp, oeffnungszeitTyp,
  ...bausteine,
  einstellungenTyp, texteTyp, seiteTyp, leistungTyp, kombinationTyp, aktionTyp, teammitgliedTyp, kundenmeinungTyp, medienstimmeTyp, fragebogenTyp, downloadTyp, zahlungsartTyp, rechtstextTyp,
];
