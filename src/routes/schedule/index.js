import {Link} from "preact-router/match";
import style from './style.css';

const Schedule = () => (
	<div class={style.home}>
		<h1>Wedding day schedule</h1>
		<ul>
			<li>13:00 - Cocktail for the guests (svatovi) at the top balcony of Kur-salon.</li>
			<li>14:00 - Svatovi are going with the groom to Donja Borina to get his future bride.</li>
			<li>14:30 - Arrival at the house of the brides parents. There will be drinks and music.</li>
			<li>15:30 - Going with the bride back to Kur-Salon.</li>
			<li>16:00 - Guests can enter the wedding hall, and sit on their designated tables. <br />Please ask at the door where you need to sit.</li>
			<li>17:00 - Wedding ceremony at the top balcony of Kur-Salon.</li>
			<li>18:30 - The wedding cake ceremony.</li>
			<li>- Party - no end. Actually there is an end at midnight, but if we want we can prolong it.</li>
		</ul>
	</div>
);

export default Schedule;
