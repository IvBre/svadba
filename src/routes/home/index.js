import style from './style.scss';
import { Link } from "preact-router/match";
import { TranslateContext } from '@denysvuika/preact-translate';
import {useContext} from "preact/hooks";

const Home = () => {
	const { t } = useContext(TranslateContext);
	return (
		<div class="pageWrapper">
			<h1 class={style.IvanaAndKay}>
				Ivana
				<span class="ampersand">
				<span class="ampersandArrowLeft"></span>
				&
				<span class="ampersandArrowRight"></span>
			</span>
				Kay
			</h1>

			<section class={style.infoSection}>
				<h2 class="marginBottomNone">
				<span class="ampersand">
					<span class="ampersandArrowLeft" />
					{t("date")}:
					<span class="ampersandArrowRight" />
				</span>
				</h2>
				<h3 class="textAlignCenter"><strong>{t("date.actual")}</strong></h3>
			</section>

			<section class={style.infoSection}>
				<h2 class="marginBottomNone">
				<span class="ampersand">
					<span class="ampersandArrowLeft" />
					{t("location")}:
					<span class="ampersandArrowRight" />
				</span>
				</h2>
				<h3 class="textAlignCenter">Kur Salon - Banja Koviljača, {t("serbia")}</h3>
				<p>{t("home.location.intro")}</p>
				<div class="frame">
					<div class="frameBody">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.0885908735054!2d19.154184315525825!3d44.51333877910117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475960c4281d7f37%3A0x9b6e72a9a7ad9b9c!2sKur-salon!5e0!3m2!1sen!2sde!4v1618772933613!5m2!1sen!2sde" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
					</div>
				</div>
				<p>{t("home.location.intro.2")}<Link href="/tradition">{t("home.location.intro.21")}</Link>{t("home.location.intro.22")}<Link href="/schedule">{t("home.location.intro.23")}</Link>{t("home.location.intro.24")}</p>
				<p>{t("home.location.intro.3")}<a href="https://www.google.com/maps/@44.4372553,19.1615533,243m/data=!3m1!1e3" target="_blank">Donja Borina</a>{t("home.location.intro.31")}</p>
			</section>

			<p>{t("home.location.intro.4")}<Link href="/tradition">{t("tradition")}</Link>{t("home.location.intro.41")}</p>
		</div>
	)
};

export default Home;
