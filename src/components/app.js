import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Rsvp from '../routes/rsvp';
import Location from '../routes/location';
import Transportation from '../routes/transportation';
import Tradition from '../routes/tradition';
import Interesting from '../routes/interesting';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Rsvp path="/rsvp/" />
			<Rsvp path="/r/:code" />
			<Location path="/location" />
			<Transportation path="/transportation" />
			<Tradition path="/tradition" />
			<Interesting path="/interesting" />
		</Router>
	</div>
)

export const AUTH_HASH = "76dC782d964895AE07735c0FE3aDf1063dB7aD1D84ADD04D3b1A5B8FD4b27B37";

export default App;
