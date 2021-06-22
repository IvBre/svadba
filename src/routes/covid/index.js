import {useContext} from "preact/hooks";
import {TranslateContext} from "@denysvuika/preact-translate";

const Covid = () => {
    const {t, lang} = useContext(TranslateContext);
    return (
        <div class="pageWrapper">
            <h1>{t("covid_title")}</h1>
            {lang === "de" ? (
                <div>
                    <p>Wir werden auf dieser Seite versuchen, Euch mit den letzten Neuigkeiten über die Covid-19 Situation in Serbien zu versorgen. Aber bitte informiert Euch auch selbst ein wenig, um auf Nummer sicher zu gehen.</p>
                    <p>Zum jetzigen Zeitpunk (Mai 2021), habt ihr die Erlaubnis zur Einreise, wenn Ihr ein Vaccin bekommen habt, oder einen negativen PCR Test, welcher nicht älter als 48 Stunden ist, vorweisen könnt.<br />
                        Informiert Euch über die letzten Neuigkeiten <a href="https://www.mfa.gov.rs/en/citizens/travel-serbia/covid-19-entry-requirements" target="_blank">auf der offiziellen Seite der Regierung</a>.</p>
                    <p>Bars and Restaurants sind geöffnet.</p>
                    <p>Alle Geschäfte haben normal geöffnet.</p>
                    <p>Seit dem 18. Juni wird Serbien von der EU zum No-Risiko-Gebiet erklärt. Das bedeutet, dass Sie auf dem Rückweg nach Deutschland keinen Test benötigen.</p>
                </div>
            ) : (
                <div>
                    <p>We will try to provide you with the latest COVID-19 situation in Serbia on this page, but please double check your self if you want to make sure.</p>
                    <p>At the moment of writing this (mid June 2021), you are allowed to enter the country if you have received a vaccine or a negative PCR test not older then 48 hours.<br />
                        Check the latest entry regulations on <a href="https://www.mfa.gov.rs/en/citizens/travel-serbia/covid-19-entry-requirements" target="_blank">the official government page</a>.</p>
                    <p>Bars and restaurants are open, as are all the shops as well. The requirement of mask is only for inside of the buildings. </p>
                    <p>Celebrations are allowed up to 500 people indoor or outdoor, but festivals are not.</p>
                    <p>As of 18th of June, Serbia is declared as a no risk area by the EU. This means you will not need a test on the way back to Germany.</p>
                </div>
            )}

            <iframe src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&time=2020-03-01..latest&pickerSort=desc&pickerMetric=total_cases&hideControls=true&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=false&Align+outbreaks=false&country=SRB~DEU" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

            {lang === "de" ? (
                <p>Beinahe 50% der serbischen Bevölkerung ist gegen Covid-19 geimpft. In Belgrad sind es mehr als 50%. In unserem Ort der Hochzeit sind es 45%.</p>
            ) : (
                <p>Almost 50% of population in Serbia is vaccinated against COVID-19. Belgrade more then 50% and our wedding venue region almost 45%.</p>
            )}

            <iframe src="https://ourworldindata.org/grapher/covid-vaccination-doses-per-capita?region=Europe&country=SRB~DEU~USA~GBR" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

            <iframe src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&pickerSort=desc&pickerMetric=total_vaccinations&Metric=People+vaccinated&Interval=Cumulative&Relative+to+Population=true&Align+outbreaks=false&country=DEU~SRB~BIH~MNE&hideControls=true" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
        </div>
    )
};

export default Covid;