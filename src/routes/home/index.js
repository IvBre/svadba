import style from './style.scss';
import SearchInvitationForm from '../../components/invitation/index';
import {Link} from "preact-router/match";

const Home = () => (
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
					Date:
					<span class="ampersandArrowRight" />
				</span>
			</h2>
			<h3 class="textAlignCenter"><strong>12th of June, 2021</strong></h3>
		</section>
		
		<section class={style.infoSection}>
			<h2 class="marginBottomNone">
				<span class="ampersand">
					<span class="ampersandArrowLeft" />
					Location:
					<span class="ampersandArrowRight" />
				</span>
			</h2>
			<h3 class="textAlignCenter">Kur Salon - Banja Koviljača, Serbia</h3>
			<p>The ceremony will happen at <strong>16h</strong>, at the upper balcony of the Kur Salon.</p>
			<div class={style.frame}>
				<div class={style.frameBody}>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.0885908735054!2d19.154184315525825!3d44.51333877910117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475960c4281d7f37%3A0x9b6e72a9a7ad9b9c!2sKur-salon!5e0!3m2!1sen!2sde!4v1618772933613!5m2!1sen!2sde" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
				</div>
			</div>
			<p>If you want to partake in <Link href="/tradition">the traditional serbian wedding activities</Link>, please arrive at the above location at <strong>13h, latest 14h</strong>. Please refer to <Link href="/schedule">the schedule</Link> for more details.</p>
			<p>Please keep in mind that we will drive some 15km to <a href="https://www.google.com/maps/@44.4372553,19.1615533,243m/data=!3m1!1e3" target="_blank">Donja Borina</a> to "pick up" the bride, so make sure you have a designated driver and a car.</p>
		</section>

		<p>For more details on these activities check out our <Link href="/tradition">Tradition</Link> page. </p>
	</div>
);

export default Home;
