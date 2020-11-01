import { useContext } from 'preact/hooks';
import { TranslateContext } from '@denysvuika/preact-translate';
import style from './style.css';
import Cookies from 'js-cookie'

export const AllowedLanguages = ["en", "de", "sr"];
export const LanguageHeaderName = "language";

export default function TranslationComponent() {
    const { setLang, t, lang } = useContext(TranslateContext);

    function setCookieLang(lang) {
        if (!AllowedLanguages.includes(lang)) return;

        Cookies.set(LanguageHeaderName, lang);
        setLang(lang)
    }

    return (
        <div class={style.translation}>
            <div>Lang: {lang}</div>
            <div>
                <button onClick={() => setCookieLang('en')}>EN</button>
                <button onClick={() => setCookieLang('sr')}>SR</button>
                <button onClick={() => setCookieLang('de')}>DE</button>
            </div>
        </div>
    );
}