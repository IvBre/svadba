import { useContext } from 'preact/hooks';
import React, { useState, useEffect } from 'react';
import { Link } from 'preact-router/match';
import style from './style.scss';
import MainComponent from "../translation";
import useWindowDimensions from "../customHooks";
import { TranslateContext } from '@denysvuika/preact-translate';

const Header = () => {
	const {t} = useContext(TranslateContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	/* Toggling the toggleButton's class when menu is open/closed */
	const isToggleButtonActive = isMenuOpen ? `${style.toggleButtonActive}` : '';
	const toggleButtonClasses = `${style.toggleButton} ${isToggleButtonActive}`;

	/* Toggling the body tag's class when menu is open/closed */
	const bodyTag = document.querySelector('body');
	isMenuOpen ? bodyTag.classList.add('bodyMenuOpen') : bodyTag.classList.remove('bodyMenuOpen');

	/* Reading the current width of the window object */
	const { width, height } = useWindowDimensions();
	const screenMedium = 900;

	/* Providing a onClick behavior for the toggleButton and the links inside the navigation */
	const setToggleBehavior = () => width < screenMedium ? setIsMenuOpen(isOpen => !isOpen) : '';

	const listClasses = `marginBottomNone ${style.list}`;

	return (
		<header class={style.header}>
			<h1 class={style.headerLogo}>{t("title")} - {t("subtitle")} </h1>

			<MainComponent />
			
			{ width < screenMedium &&
				<button type="button" class={ toggleButtonClasses } onClick={() => setIsMenuOpen(isOpen => !isOpen)}>	
					<span class="visuallyHidden">
						{ isMenuOpen ? 'Close Menu' : 'Open Menu'}
					</span>
					<span class={style.burger}>
						<span class={style.burgerOne} />
						<span class={style.burgerTwo} />
						<span class={style.burgerThree} />
					</span>
				</button>
			}
			
			{ (isMenuOpen || (width >= screenMedium)) &&
				<nav class={style.navigation}>
					<ul class={listClasses}>
						<li class={style.listItem}>
							<Link activeClassName="navLinkActive" href="/" onClick={setToggleBehavior}>
								<span class="listItemBackground">
									{t("home")}
								</span>
							</Link>
						</li>
						<li class={style.listItem}>
							<Link activeClassName="navLinkActive" href="/location" onClick={setToggleBehavior}>
								<span class="listItemBackground">
									{t("location")}
								</span>
							</Link>
						</li>
						<li class={style.listItem}>
							<Link activeClassName="navLinkActive" href="/transportation" onClick={setToggleBehavior}>
								<span class="listItemBackground">
									{t("transportation")}
								</span>
							</Link>
						</li>
						<li class={style.listItem}>
							<Link activeClassName="navLinkActive" href="/schedule" onClick={setToggleBehavior}>
								<span class="listItemBackground">
									{t("schedule")}
								</span>
							</Link>
						</li>
						<li class={style.listItem}>
							<Link activeClassName="navLinkActive" href="/tradition" onClick={setToggleBehavior}>
								<span class="listItemBackground">
									{t("tradition")}
								</span>
							</Link>
						</li>
						<li class={style.listItem}>
							<Link activeClassName="navLinkActive" href="/interesting" onClick={setToggleBehavior}>
								<span class="listItemBackground">
									{t("interesting")}
								</span>
							</Link>
						</li>
					</ul>
				</nav>
			}
		</header>
	);
	
};

export default Header;