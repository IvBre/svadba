import {useContext} from "preact/hooks";
import {TranslateContext} from "@denysvuika/preact-translate";

const Covid = () => {
    const {t, lang} = useContext(TranslateContext);
    return (
        <div class="pageWrapper">
            <h1>{t("covid_title")}</h1>
            <p>We will try to provide you with the latest COVID-19 situation in Serbia on this page, but please double check your self if you want to make sure.</p>
            <p>At the moment of writing this (May 2021), you are allowed to enter the country if you have received a vaccine or a negative PCR test not older then 48 hours.</p>
            <p>Bars and restaurants are open, but with limited working hours until 22h.</p>
            <p>All other stores are open as usual.</p>
            <iframe src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&time=2020-03-01..latest&pickerSort=desc&pickerMetric=total_cases&hideControls=true&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=false&Align+outbreaks=false&country=SRB~DEU~USA" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>

            <iframe src="https://ourworldindata.org/grapher/covid-vaccination-doses-per-capita?region=Europe&country=SRB~DEU~USA~GBR" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
        </div>
    )
};

export default Covid;