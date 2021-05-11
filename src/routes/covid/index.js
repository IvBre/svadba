import {useContext} from "preact/hooks";
import {TranslateContext} from "@denysvuika/preact-translate";

const Covid = () => {
    const {t, lang} = useContext(TranslateContext);
    return (
        <div class="pageWrapper">
            <h1>{t("covid_title")}</h1>
            <p>Wir werden auf dieser Seite versuchen, Euch mit den letzten Neuigkeiten über die Covid-19 Situation in Serbien zu versorgen. Aber bitte informiert Euch auch selbst ein wenig, um auf Nummer sicher zu gehen.</p>
            <p>Zum jetzigen Zeitpunk (Mai 2021), habt ihr die Erlaubnis zur Einreise, wenn Ihr ein Vaccin bekommen habt, oder einen negativen PCR Test, welcher nicht älter als 48 Stunden ist, vorweisen könnt.<br />
            Informiert Euch über die letzten Neuigkeiten <a href="https://www.mfa.gov.rs/en/citizens/travel-serbia/covid-19-entry-requirements" target="_blank">auf der offiziellen Seite der Regierung</a>.</p>
            <p>Bars and Restaurants sind geöffnet, jedoch nur bis 22:00 Uhr geöffnet.</p>
            <p>Alle Geschäfte haben normal geöffnet.</p>
            <iframe src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&time=2020-03-01..latest&pickerSort=desc&pickerMetric=total_cases&hideControls=true&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=false&Align+outbreaks=false&country=SRB~DEU" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

            <p>Beinahe 30% der serbischen Bevölkerung ist gegen Covid-19 geimpft. In Belgrad sind es mehr als 40%. In unserem Ort der Hochzeit sind es 30%.</p>
            <iframe src="https://ourworldindata.org/grapher/covid-vaccination-doses-per-capita?region=Europe&country=SRB~DEU~USA~GBR" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
        </div>
    )
};

export default Covid;