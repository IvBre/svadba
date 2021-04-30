import React, { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

import './app.scss';

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
import Schedule from "../routes/schedule";
import Footer from "./footer";

const App = () => (
	<TranslateProvider root="/assets/i18n" lang={getDefaultLang()}>
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<InvitationPage path="/u/:code" />
			<InvitationPage path="/r/:code" />
			<Location path="/location" />
			<Transportation path="/transportation" />
			<Tradition path="/tradition" />
			<Interesting path="/interesting" />
			<Schedule path="/schedule" />
		</Router>
		<Footer />
	</div>
	</TranslateProvider>
);

export const getInvitationCall = (code) => {
	return fetch(API_HOST + '/r/' + code, {
		method: 'GET',
		headers: {
			"Accept-Language": getDefaultLang()
		}
	}).then(response => response.json());
};

function getDefaultLang() {
	let cookieLang = Cookies.get(LanguageHeaderName);

	if (cookieLang && AllowedLanguages.includes(cookieLang)) return cookieLang;

	let userLang;
	if (typeof window !== "undefined") {
		userLang = navigator.language.substring(0, 2);
	}

	if (!AllowedLanguages.includes(userLang)) return "en";

	return userLang;
}

export const API_HOST = "http://api.svad.ba"

export default App;
