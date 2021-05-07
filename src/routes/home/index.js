import style from './style.scss';
import { Link } from "preact-router/match";
import { TranslateContext } from '@denysvuika/preact-translate';
import {useContext} from "preact/hooks";

const Home = () => {
	const { t, lang } = useContext(TranslateContext);
	return (
		<div class="pageWrapper">
			<h1 class={style.IvanaAndKay}>
				{t("ivana")}
				<span class="ampersand">
				<span class="ampersandArrowLeft"></span>
				&
				<span class="ampersandArrowRight"></span>
			</span>
				{t("kay")}
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
				<h3 class="textAlignCenter">{t("kursalon_serbia")}</h3>

					{lang === "sr" ? (
						<p>Церемонија ће се одржати у <strong>17 часова</strong>, на горњој тераси Кур Салона.</p>
					) : lang === "de" ? (
						<p>The ceremony will happen at <strong>16h</strong>, at the upper balcony of the Kur Salon.</p>
					) : (
						<p>The ceremony will happen at <strong>16h</strong>, at the upper balcony of the Kur Salon.</p>
					)}
				<div class="frame">
					<div class="frameBody">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.0885908735054!2d19.154184315525825!3d44.51333877910117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475960c4281d7f37%3A0x9b6e72a9a7ad9b9c!2sKur-salon!5e0!3m2!1sen!2sde!4v1618772933613!5m2!1sen!2sde" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
					</div>
				</div>
				{lang === "sr" ? (
					<div>
						<p>Уколико желите да дођете у сватове молимо Вас да дођете на горе поменуту локацију у 13, најкасније 14 часова. Погледајте <Link href="/schedule">распоред</Link> за више детаља.</p>
						<p>Молимо Вас имајте у виду да ће сватови путовати неких 15км до <a href="https://www.google.com/maps/@44.4372553,19.1615533,243m/data=!3m1!1e3" target="_blank">Доње Борине</a> како би ”изели” младу. Тако да ако желите да будете у сватовима морате имати возача и ауто.</p>
					</div>
				) : lang === "de" ? (
					<div>
						<p>If you want to partake in <Link href="/tradition">the traditional serbian wedding activities</Link>, please arrive at the above location at <strong>13h, latest 14h</strong>. Please refer to <Link href="/schedule">the schedule</Link> for more details.</p>
						<p>Please keep in mind that we will drive some 15km to <a href="https://www.google.com/maps/@44.4372553,19.1615533,243m/data=!3m1!1e3" target="_blank">Donja Borina</a> to "pick up" the bride, so make sure you have a designated driver and a car.</p>
					</div>
				) : (
					<div>
						<p>If you want to partake in <Link href="/tradition">the traditional serbian wedding activities</Link>, please arrive at the above location at <strong>13h, latest 14h</strong>. Please refer to <Link href="/schedule">the schedule</Link> for more details.</p>
						<p>Please keep in mind that we will drive some 15km to <a href="https://www.google.com/maps/@44.4372553,19.1615533,243m/data=!3m1!1e3" target="_blank">Donja Borina</a> to "pick up" the bride, so make sure you have a designated driver and a car.</p>
					</div>
				)}
			</section>

			<p>{t("home.info_1")}<Link href="/tradition">{t("tradition")}</Link>{t("home.info_11")}</p>
		</div>
	)
};

export default Home;
