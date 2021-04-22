import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import MainComponent from "../translation";
import { TranslateContext } from '@denysvuika/preact-translate';
import {useContext} from "preact/hooks";

const Footer = () => {
	const {t} = useContext(TranslateContext);

	return (
		<footer class={style.footer}>
			<h4 class={style.footerHeadline}>For any further information you can contact us by:</h4>
			<ul>
				<li class={style.listItemLabelIcon}>
					<span class={ `${style.icon} ${style.iconMessenger}` }>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
						</svg>
					</span>
					<span>
						<em class={style.labelIcon}>
							<span class={style.label}>Phone, Viber or Whatsapp:</span>
						</em>&nbsp;<a href="tel:+491702881385" class={style.link}>+49 170 / 28 81 385</a>
					</span>
				</li>	
				<li class={style.listItemLabelIcon}>
					<span class={ `${style.icon} ${style.iconEmail}` }>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490"><path d="M490 72.737H0v344.527h490V72.737zM162.945 241.302l74.086 45.133a15.306 15.306 0 0015.983-.015l74.271-45.596 116.767 145.818H46.561l116.384-145.34zM30.621 357.572V160.691l105.964 64.553L30.621 357.572zm322.957-132.89l105.801-64.953v197.077L353.578 224.682zm105.801-121.324v20.44L244.97 255.418 30.621 124.831v-21.473h428.758z"/></svg>
					</span>
					<span>
						<em class={style.labelIcon}>
							<span class={style.label}>Email:</span>
						</em>&nbsp;<a href="mailto:petrovivana@gmail.com" class={style.link}>petrovivana@gmail.com</a>
					</span>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
