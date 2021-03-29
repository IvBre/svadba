import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import MainComponent from "../translation";
import { TranslateContext } from '@denysvuika/preact-translate';
import {useContext} from "preact/hooks";

const Footer = () => {
	const {t} = useContext(TranslateContext);

	return (
		<footer>
			<p>For any further information you can contact us by phone/viber/whatsapp: +491702881385 or by email: petrovivana@gmail.com</p>
		</footer>
	);
};

export default Footer;
