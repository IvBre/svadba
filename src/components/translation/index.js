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

    let listClasses = classNames({
        'translationList': true,
    });

    return (
        <section class={style.translation}>
            <h3>Language: {lang}</h3>
            <ul class={listClasses}>
                <li><button onClick={() => setCookieLang('en')}>EN</button></li>
                <li><button onClick={() => setCookieLang('sr')}>SR</button></li>
                <li><button onClick={() => setCookieLang('de')}>DE</button></li>                
            </ul>
        </section>
    );
}