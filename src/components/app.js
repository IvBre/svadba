import React, { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Location from '../routes/location';
import Transportation from '../routes/transportation';
import Tradition from '../routes/tradition';
import Interesting from '../routes/interesting';
import InvitationPage from "../routes/invitation";
import {TranslateProvider} from "@denysvuika/preact-translate";
import TranslationComponent, {AllowedLanguages, LanguageHeaderName} from "./translation";
import Cookies from 'js-cookie';

const App = () => (
	<TranslateProvider root="/assets/i18n" lang={getDefaultLang()}>
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<InvitationPage path="/u/:code" />
			<InvitationPage path="/v/:code" />
			<Location path="/location" />
			<Transportation path="/transportation" />
			<Tradition path="/tradition" />
			<Interesting path="/interesting" />
		</Router>
		<TranslationComponent />
	</div>
	</TranslateProvider>
);

export const getInvitationCall = (code) => {
	return fetch('http://localhost:5000/v/' + code, {
		method: 'GET',
		headers: {
			"Accept-Language": getDefaultLang()
		}
	}).then(response => response.json());
};

function getDefaultLang() {
	let cookieLang = Cookies.get(LanguageHeaderName);

	if (cookieLang && AllowedLanguages.includes(cookieLang)) return cookieLang;

	let userLang = navigator.language.substring(0, 2);

	if (!AllowedLanguages.includes(userLang)) return "en";

	return userLang;
}

export default App;
