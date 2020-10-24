import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Ivana & Kay - bibi hochzeit </h1>
		<nav>
			<Link activeClassName={style.active} href="/">About</Link>
			<Link activeClassName={style.active} href="/rsvp">RSVP</Link>
			<Link activeClassName={style.active} href="/location">Location</Link>
			<Link activeClassName={style.active} href="/transportation">Transportation</Link>
			<Link activeClassName={style.active} href="/tradition">Tradition</Link>
			<Link activeClassName={style.active} href="/interesting">Interesting things to do in Serbia</Link>
		</nav>
	</header>
);

export default Header;
