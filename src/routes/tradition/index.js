import {Link} from "preact-router/match";
import style from './style.css';

const Tradition = () => (
	<div class={style.home}>
		<h1>Serbian wedding traditions</h1>
		<p>Disclaimer: There are many more traditions on Serbian weddings but we decided to do just some of them that we find interesting or fun. Also some parts we amended to our liking.</p>
		<p>On serbian weddings there are two types of guests, regular guests and "svatovi". </p>
		<p>Svatovi are the guests that go together with the groom to take the bride from her parents.</p>
		<p>They are gathered some hours before the actual ceremony, usually to get a bit tipsy and in the mood.</p>
		<p>Also, they are distinguished from regular guests by a little flower garnish placed on their right side by the flower girls.</p>
		<p>This will be done during <Link href="/schedule">the cocktail hour explained in the schedule</Link>, between 13 and 14h.</p>
		<p>It is a custom to put a little money in the basket that the flower girls will carry around with the flower garnishes.</p>
		<p>Then together with the groom and his best man they will go to the bride's parents house.</p>
		<p>You will notice that svatovi's cars will also be decorated. But cars with the most decoration are the ones that will take the groom with his best man and later on the bride.</p>
		<p>Other cars should follow the main two cars behind, in a column of cars, and be heavy on the horns and loud music so that the bride family could hear them from far.</p>
		<p>Before entering the bride's parents house, groom needs to prove him self to be a good food provider, by shooting
		an apple from a tall wooden stick, placed in front of the yard.</p>
		<p>If he manages this challenge he would be allowed to proceed to the house.</p>
		<p>Bride is hiding in her room, and she is being protected by her horde of siblings and cousins, who will give a hard time to the groom and his best man.</p>
		<p>The groom needs to convince the cousins that he will treat her nice, and only then will he be allowed to take the bride outside of the house.</p>
		<p>Once outside everybody will celebrate, by dancing, most commonly Kolo.</p>
		<p>Usually the groom and the best man would organize a wondering orchestra to play for everybody.</p>
		<p>After the bride said her goodbyes to her family, the best man would go with her in one car and her best girl will go with the groom to the other car.</p>
		<p>This is so that one is protected from the other, and that they both keep their virtue. Also to make sure none of them escape ;)</p>
		<p>During the ride back to the wedding place, svatovi again need to follow the two cars and press the horn often.</p>
		<p>Now usually this is the part where everybody would go to the church for the wedding, but since Kay is an Anti-Christ we will just do the municipality wedding at the Kur Salon balcony.</p>
		<p>After the ceremony is done, and the wedding bouquet thrown all guests can go to the main celebration hall and start enjoying the food, drinks and the music.</p>
		<p>After lunch is done, the big wedding cake will be rolled out on wheels, while the orchestra sings a nice tune. After we get some cake then others can also have some :D</p>
		<p>Usually after the cake is when the party starts, until late hours so bring your comfortable shoes.</p>
	</div>
);

export default Tradition;
