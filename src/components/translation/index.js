import { useContext } from 'preact/hooks';
import React from 'react';
import { TranslateContext } from '@denysvuika/preact-translate';
import style from './style.css';
import Cookies from 'js-cookie'

export const AllowedLanguages = ["en", "de", "sr"];
export const LanguageHeaderName = "language";
export default class TranslationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { translation: {}, classToggle: "" };
        this.state.translation = useContext(TranslateContext);
    }


    setCookieLang(lang) {
        if (!AllowedLanguages.includes(lang)) return;

        Cookies.set(LanguageHeaderName, lang);
        this.state.translation.setLang(lang);
    }

    openTransList() {
        if (this.state.classToggle == "") {
            this.setState({ classToggle: `${ style.translationListOpen }` });
        } else {
            this.setState({ classToggle: "" });
        }
    }

    render() {
        return (
            <section class={ style.translation }>
                <button type="button" class="js-toggleTransList" onClick={ () => this.openTransList() }>Language: {this.state.translation.lang}</button>
                <ul class={ `${ style.translationList } js-translationList ${ this.state.classToggle }`}>
                    <li><button onClick={() => this.setCookieLang('en')}>English</button></li>
                    <li><button onClick={() => this.setCookieLang('sr')}>Српски</button></li>
                    <li><button onClick={() => this.setCookieLang('de')}>Deutsch</button></li>                
                </ul>
            </section>
        );
    }
}