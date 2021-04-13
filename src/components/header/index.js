import { h, render } from 'preact';
import React from 'react';
import { Link } from 'preact-router/match';
import style from './style.css';
import MainComponent from "../translation";
import { TranslateContext } from '@denysvuika/preact-translate';
import { useContext } from 'preact/hooks';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { translation: {}, classToggle: "" };
		let {t} = useContext(TranslateContext);
		this.state.translation = t
		console.log(t);
	}

	render() {
		return (
			<header class={style.header}>
				<h1>{this.state.translation.t("title")} - {this.state.translation.t("subtitle")} </h1>
				<nav>
					<button type="button" class={ style.toggleButton }>Open navigation</button>
					<Link activeClassName={style.active} href="/">{this.state.translation.t("about")}</Link>
					<Link activeClassName={style.active} href="/location">{this.state.translation.t("location")}</Link>
					<Link activeClassName={style.active} href="/transportation">{this.state.translation.t("transportation")}</Link>
					<Link activeClassName={style.active} href="/schedule">{this.state.translation.t("schedule")}</Link>
					<Link activeClassName={style.active} href="/tradition">{this.state.translation.t("tradition")}</Link>
					<Link activeClassName={style.active} href="/interesting">{this.state.translation.t("interesting")}</Link>
				</nav>
				<MainComponent />
			</header>
		);
	}
};
