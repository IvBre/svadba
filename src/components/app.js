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

export default App;
