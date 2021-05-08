import { useContext } from 'preact/hooks';
import React, {useState} from 'react';
import style from './style.css';
import Cookies from 'js-cookie'
import { TranslateContext } from '@denysvuika/preact-translate';

export const AllowedLanguages = ["en", "de", "sr"];
export const LanguageHeaderName = "language";

const TranslationComponent = () => {
    const {t, lang, setLang} = useContext(TranslateContext);
    const [isLangSelectionVisible, setLangSelectionVisibility] = useState(false);
    let buttonElement;
    if (typeof document !== "undefined") {
        buttonElement = document.querySelector('.js-toggleTransList');
    }

    const setCookieLang = (lang) => {
        if (!AllowedLanguages.includes(lang)) return;

        Cookies.set(LanguageHeaderName, lang);
        setLang(lang);

        console.log(buttonElement);
    }

    console.log('setCookieLang is: ', LanguageHeaderName);
    
    return (
        <section class={ style.translation }>
            <button type="button" 
                    class={`js-toggleTransList ${style.toggleTransList} icon-${lang}`} 
                    onClick={() => setLangSelectionVisibility(isLangSelectionVisible => !isLangSelectionVisible)}>
                {t("language")}: {t(lang)}
            </button>
            { isLangSelectionVisible &&
                <ul class={ `${ style.translationList } js-translationList` }>
                    <li><button onClick={() => setCookieLang('en')}>English</button></li>
                    <li><button onClick={() => setCookieLang('sr')}>Српски</button></li>
                    <li><button onClick={() => setCookieLang('de')}>Deutsch</button></li>                
                </ul>
            }
        </section>
    );
}

export default TranslationComponent;