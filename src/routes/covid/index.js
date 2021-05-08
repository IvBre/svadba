import {useContext} from "preact/hooks";
import {TranslateContext} from "@denysvuika/preact-translate";

const Covid = () => {
    const {t, lang} = useContext(TranslateContext);
    return (
        <div class="pageWrapper">
            <h1>{t("covid_title")}</h1>
            <p>We will try to provide you with the latest COVID-19 situation in Serbia on this page, but please double check your self if you want to make sure.</p>

        </div>
    )
};

export default Covid;