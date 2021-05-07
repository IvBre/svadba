import { useContext } from 'preact/hooks';
import React, {useState} from 'react';
import style from './style.scss';
import Cookies from 'js-cookie'
import { TranslateContext } from '@denysvuika/preact-translate';

export const AllowedLanguages = ["en", "de", "sr"];
export const LanguageHeaderName = "language";

const TranslationComponent = () => {
    const {t, lang, setLang} = useContext(TranslateContext);
    const [isLangSelectionVisible, setLangSelectionVisibility] = useState(false);

    const setCookieLang = (lang) => {
        if (!AllowedLanguages.includes(lang)) return;

        Cookies.set(LanguageHeaderName, lang);
        setLang(lang);
        setLangSelectionVisibility(isLangSelectionVisible => !isLangSelectionVisible);
    }
    
    return (
        <div class={ style.translationWrapper }>
            <section class={ style.translation }>
                <button type="button" 
                        class={`js-toggleTransList ${style.toggleTransList} icon-${lang}`} 
                        onClick={() => setLangSelectionVisibility(isLangSelectionVisible => !isLangSelectionVisible)}>
                            {t("language")}: {t(lang)}
                </button>
                { isLangSelectionVisible &&
                    <div class={style.translationListWrapper}>
                        <ul class={ `${ style.translationList } js-translationList` }>
                            <li class={style.listItem}><button class={style.buttonChoice} type="button" onClick={() => setCookieLang('en')}>English</button></li>
                            <li class={style.listItem}><button class={style.buttonChoice} type="button" onClick={() => setCookieLang('sr')}>Српски</button></li>
                            <li class={style.listItem}><button class={style.buttonChoice} type="button" onClick={() => setCookieLang('de')}>Deutsch</button></li>                
                        </ul>
                    </div>
                }
            </section>
        </div>
    );
}

export default TranslationComponent;