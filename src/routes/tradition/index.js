import {Link} from "preact-router/match";
import { TranslateContext } from '@denysvuika/preact-translate';
import {useContext} from "preact/hooks";

const Tradition = () => {
	const { t, lang } = useContext(TranslateContext);
	return (
		<div class="pageWrapper">
			<h1>{t("tradition_title")}</h1>
			<div class="textImagePair textImagePairAli">
				<div class="frame">
					<div class="frameBody">
						<img src="/assets/tradition/Svatovi-i-obicaji-mladenaca6.jpeg" alt="stari-obicaji" width="600" />
					</div>
				</div>
				<p>{t("tradition_disclaimer")}</p>
			</div>

			{lang === "sr" ? (
				<div>
					<p>On serbian weddings there are two types of guests, regular guests and "svatovi". </p>
					<p>Svatovi are the guests that go together with the groom to take the bride from her parents.</p>
					<p>They are gathered some hours before the actual ceremony, usually to get a bit tipsy and in the mood.</p>
					<p>Also, they are distinguished from regular guests by a little flower garnish placed on their right side by the flower girls.</p>
					<p>This will be done during <Link href="/schedule">the cocktail hour explained in the schedule</Link>, between 13 and 14h.</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>On serbian weddings there are two types of guests, regular guests and "svatovi". </p>
					<p>Svatovi are the guests that go together with the groom to take the bride from her parents.</p>
					<p>They are gathered some hours before the actual ceremony, usually to get a bit tipsy and in the mood.</p>
					<p>Also, they are distinguished from regular guests by a little flower garnish placed on their right side by the flower girls.</p>
					<p>This will be done during <Link href="/schedule">the cocktail hour explained in the schedule</Link>, between 13 and 14h.</p>
				</div>
			) : (
				<div>
					<p>On serbian weddings there are two types of guests, regular guests and "svatovi". </p>
					<p>Svatovi are the guests that go together with the groom to take the bride from her parents.</p>
					<p>They are gathered some hours before the actual ceremony, usually to get a bit tipsy and in the mood.</p>
					<p>Also, they are distinguished from regular guests by a little flower garnish placed on their right side by the flower girls.</p>
					<p>This will be done during <Link href="/schedule">the cocktail hour explained in the schedule</Link>, between 13 and 14h.</p>
				</div>
			)}

			<div class="textImagePair textImagePairAli">
				<div class="frame">
					<div class="frameBody">
						<img src="/assets/tradition/kako-se-pravilno-kite-svatovi.jpeg" alt="kicenje-svatova" width="600" />
					</div>
				</div>
				<p>{t("tradition_text_1")}</p>
			</div>

			{lang === "sr" ? (
				<div>
					<p>Then together with the groom and his best man they will go to the bride's parents house.</p>
					<p>You will notice that svatovi's cars will also be decorated. But the car with the most decoration is the one that will take the groom with his best man and later on the bride.</p>
					<p>Other cars should follow the main car behind, in a column of cars, and be heavy on the horns and loud music so that the bride's family could hear them from a far.</p>
					<p>Once svatovi arrive at the bride's house, they will have some time to get to know the family of the bride,
						dance and have a drink.</p>
					<p>Think of svatovi as the groom's, and later on bride's as well, entourage.</p>
					<p>Groom and his best man will go to the house to get the bride. </p>
					<p>Bride is hiding in her room, and she is being protected by her horde of siblings and cousins, who will give a hard time to the groom and his best man.</p>
					<p>The groom needs to convince the cousins that he will treat her nice, and only then will he be allowed to take the bride outside of the house.</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>Then together with the groom and his best man they will go to the bride's parents house.</p>
					<p>You will notice that svatovi's cars will also be decorated. But the car with the most decoration is the one that will take the groom with his best man and later on the bride.</p>
					<p>Other cars should follow the main car behind, in a column of cars, and be heavy on the horns and loud music so that the bride's family could hear them from a far.</p>
					<p>Once svatovi arrive at the bride's house, they will have some time to get to know the family of the bride,
						dance and have a drink.</p>
					<p>Think of svatovi as the groom's, and later on bride's as well, entourage.</p>
					<p>Groom and his best man will go to the house to get the bride. </p>
					<p>Bride is hiding in her room, and she is being protected by her horde of siblings and cousins, who will give a hard time to the groom and his best man.</p>
					<p>The groom needs to convince the cousins that he will treat her nice, and only then will he be allowed to take the bride outside of the house.</p>
				</div>
			) : (
				<div>
					<p>Then together with the groom and his best man they will go to the bride's parents house.</p>
					<p>You will notice that svatovi's cars will also be decorated. But the car with the most decoration is the one that will take the groom with his best man and later on the bride.</p>
					<p>Other cars should follow the main car behind, in a column of cars, and be heavy on the horns and loud music so that the bride's family could hear them from a far.</p>
					<p>Once svatovi arrive at the bride's house, they will have some time to get to know the family of the bride,
						dance and have a drink.</p>
					<p>Think of svatovi as the groom's, and later on bride's as well, entourage.</p>
					<p>Groom and his best man will go to the house to get the bride. </p>
					<p>Bride is hiding in her room, and she is being protected by her horde of siblings and cousins, who will give a hard time to the groom and his best man.</p>
					<p>The groom needs to convince the cousins that he will treat her nice, and only then will he be allowed to take the bride outside of the house.</p>
				</div>
			)}

			<div class="textImagePair textImagePairAli">
				<div class="frame">
					<div class="frameBody">
						<img src="/assets/tradition/trubacki-orkestar-2.jpeg" alt="trubaci" width="600" />
					</div>
				</div>
				<p>{t("tradition_text_2")}</p>
			</div>

			{lang === "sr" ? (
				<div>
					<p>Once the Kolo is done and future spouses are ready to leave, the best man would sit in the middle between the bride and the groom.</p>
					<p>This is so that one's virtue is protected from the other. Also to make sure none of them escape ;)</p>
					<p>During the ride back to the wedding place, svatovi again need to follow the main car and press the horn often.</p>
					<p>Now usually this is the part where everybody would go to the church for the wedding, but since Kay is an Anti-Christ we will just do the municipality wedding at the balcony of Kur Salon :D</p>
					<p>Once everybody arrives at Kur Salon and settles at their tables the wedding ceremony can start.</p>
					<p>After the ceremony is done, and the wedding bouquet thrown all guests can go to the main celebration hall and start enjoying the food, drinks and the music.</p>
					<p>After the lunch is done, the big wedding cake will be rolled out on wheels, while the orchestra sings a nice tune. After we get some cake then others can also have some :D</p>
					<p>Usually after the cake is when the party starts, until late hours so bring your comfortable shoes.</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>Once the Kolo is done and future spouses are ready to leave, the best man would sit in the middle between the bride and the groom.</p>
					<p>This is so that one's virtue is protected from the other. Also to make sure none of them escape ;)</p>
					<p>During the ride back to the wedding place, svatovi again need to follow the main car and press the horn often.</p>
					<p>Now usually this is the part where everybody would go to the church for the wedding, but since Kay is an Anti-Christ we will just do the municipality wedding at the balcony of Kur Salon :D</p>
					<p>Once everybody arrives at Kur Salon and settles at their tables the wedding ceremony can start.</p>
					<p>After the ceremony is done, and the wedding bouquet thrown all guests can go to the main celebration hall and start enjoying the food, drinks and the music.</p>
					<p>After the lunch is done, the big wedding cake will be rolled out on wheels, while the orchestra sings a nice tune. After we get some cake then others can also have some :D</p>
					<p>Usually after the cake is when the party starts, until late hours so bring your comfortable shoes.</p>
				</div>
			) : (
				<div>
					<p>Once the Kolo is done and future spouses are ready to leave, the best man would sit in the middle between the bride and the groom.</p>
					<p>This is so that one's virtue is protected from the other. Also to make sure none of them escape ;)</p>
					<p>During the ride back to the wedding place, svatovi again need to follow the main car and press the horn often.</p>
					<p>Now usually this is the part where everybody would go to the church for the wedding, but since Kay is an Anti-Christ we will just do the municipality wedding at the balcony of Kur Salon :D</p>
					<p>Once everybody arrives at Kur Salon and settles at their tables the wedding ceremony can start.</p>
					<p>After the ceremony is done, and the wedding bouquet thrown all guests can go to the main celebration hall and start enjoying the food, drinks and the music.</p>
					<p>After the lunch is done, the big wedding cake will be rolled out on wheels, while the orchestra sings a nice tune. After we get some cake then others can also have some :D</p>
					<p>Usually after the cake is when the party starts, until late hours so bring your comfortable shoes.</p>
				</div>
			)}

		</div>
	)
};

export default Tradition;
