import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import MainComponent from "../translation";
import { TranslateContext } from '@denysvuika/preact-translate';
import {useContext} from "preact/hooks";

const Header = () => {
	const {t} = useContext(TranslateContext);

	return (
		<header class={style.header}>
			<h1>{t("title")} - {t("subtitle")} </h1>
			<nav>
				<Link activeClassName={style.active} href="/">{t("about")}</Link>
				<Link activeClassName={style.active} href="/location">{t("location")}</Link>
				<Link activeClassName={style.active} href="/transportation">{t("transportation")}</Link>
				<Link activeClassName={style.active} href="/tradition">{t("tradition")}</Link>
				<Link activeClassName={style.active} href="/interesting">{t("interesting")}</Link>
			</nav>
			<MainComponent />
		</header>
	);
};

export default Header;
