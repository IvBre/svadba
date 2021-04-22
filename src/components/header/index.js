import { h, render } from 'preact';
import { useContext } from 'preact/hooks';
import React, { useState } from 'react';
import { Link } from 'preact-router/match';
import style from './style.css';
import MainComponent from "../translation";
import { TranslateContext } from '@denysvuika/preact-translate';

const Header = () => {
	const {t} = useContext(TranslateContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	return (
		<header class={style.header}>
			<h1>{t("title")} - {t("subtitle")} </h1>
			
			<button type="button" class={ style.toggleButton } onClick={() => setIsMenuOpen(isOpen => !isOpen)}>Open navigation</button>
			{ isMenuOpen &&
				<nav>
					<Link activeClassName={style.active} href="/">{t("about")}</Link>
					<Link activeClassName={style.active} href="/location">{t("location")}</Link>
					<Link activeClassName={style.active} href="/transportation">{t("transportation")}</Link>
					<Link activeClassName={style.active} href="/schedule">{t("schedule")}</Link>
					<Link activeClassName={style.active} href="/tradition">{t("tradition")}</Link>
					<Link activeClassName={style.active} href="/interesting">{t("interesting")}</Link>
				</nav>
			}
			<MainComponent />
		</header>
	);
	
};

export default Header;