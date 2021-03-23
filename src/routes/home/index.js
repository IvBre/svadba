import style from './style.css';
import SearchInvitationForm from '../../components/invitation/index';
import {Link} from "preact-router/match";

const Home = () => (
	<div class={style.home}>
		<h1>Ivana & Kay</h1>
		<h2>Location: <a href="https://g.page/Kursalonbanjakoviljaca?share" target="_blank">Kur Salon - Banja Koviljača, Serbia</a></h2>
		<h2>Date: 12th of June, 2021</h2>
		<h2>Time: The ceremony will happen at 16h, at the upper balcony of <a href="https://g.page/Kursalonbanjakoviljaca?share" target="_blank">Kur Salon</a>.</h2>
		<p>If you want to partake in <Link href="/tradition">the traditional serbian wedding activities</Link>, please arrive at the above location
		at 13h, latest 14h. Please refer to <Link href="/schedule">the schedule</Link> for more details.</p>
		<p>Keep in mind that we will drive some 15km to <a href="https://www.google.com/maps/@44.4372553,19.1615533,243m/data=!3m1!1e3" target="_blank">Donja Borina</a>
			 to "pick up" the bride, so make sure you have a designated driver and a car.</p>
		<p>For more details on these activities check out our <Link href="/tradition">Tradition</Link> page. </p>

		<h3>If you need to respond to the invitation you can type in the following box the code you received on your invitation slip.</h3>
		<SearchInvitationForm />
	</div>
);

export default Home;
