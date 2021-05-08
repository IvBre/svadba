import { Link } from "preact-router/match";
import { TranslateContext } from '@denysvuika/preact-translate';
import {useContext} from "preact/hooks";

const Location = () => {
	const { t, lang } = useContext(TranslateContext);
	return (
		<div class="pageWrapper">
			<h1>{t("location_title")}</h1>
			{lang === "sr" ? (
				<p>Церемонија венчања је у великој сали <strong>“Кур Салона”</strong> у малом месту званом Бања Ковиљача, у западној Србији.</p>
			) : lang === "de" ? (
				<p>The wedding venue is in the grand hall of <strong>“Kur salon”</strong> in a little town called Banja Koviljača in the west of Serbia.</p>
			) : (
				<p>The wedding venue is in the grand hall of <strong>“Kur salon”</strong> in a little town called Banja Koviljača in the west of Serbia.</p>
			)}

			<div class="textImagePair textImagePairAli">
				<div class="frame">
					<div class="frameBody">
						<img src="/assets/location/kur_salon_banja_koviljaca1.jpeg" alt="kur-salon" width="600" />
					</div>
				</div>
				<p class="paragraph">{t("location_intro")}</p>
			</div>

			<div class="textImagePair textImagePairBenny">
				<div class="frame">
					<div class="frameBody">
						<img src="/assets/location/banjski-park.jpeg" alt="banja-koviljaca-park" width="600" />
					</div>
				</div>
				{lang === "sr" ? (
					<p class="paragraph">
						Овако изгледа парк из птичије перспекитве.<br />
						У средини се може видети фонтана, и ако се од ње окренете ка западу видећете Кур Салон.<br />
						Остале зграде које се виде су рехабилитациона болница и велнес ”Ковиље”.
					</p>
				) : lang === "de" ? (
					<p class="paragraph">
						Here's how this park looks like from the birds perspective. <br />
						In the middle of it you can see a big fountain, and if you turn towards west you will see Kur Salon.<br />
						Other buildings that you can see are specialized rehabilitation hospital and a wellness center "Kovilje".
					</p>
				) : (
					<p class="paragraph">
					Here's how this park looks like from the birds perspective. <br />
					In the middle of it you can see a big fountain, and if you turn towards west you will see Kur Salon.<br />
					Other buildings that you can see are specialized rehabilitation hospital and a wellness center "Kovilje".
					</p>
				)}

			</div>

			{/*
		<img src="htdcdtps://banjakoviljaca.rs/img/banja-koviljaca/banja-koviljaca.jpg" alt="banjski-park-fontana" width="600" />
		*/}
			<div class="textImagePair textImagePairAli">
				<div class="frame">
					<div class="frameBody">
						<img src="/assets/location/kur_salon_banja_koviljaca9.jpeg" alt="kur-salon-king-petar" width="600" />
					</div>
				</div>
				<p class="paragraph">{t("location_text_1")}</p>
			</div>

			{/*
			<img src="https://www.kursalon.rs/img/kur_salon_banja_koviljaca17.jpg" alt="kur-salon-balcony" width="600" />
		*/}

			<h2>{t("location_accommodation_banja")}</h2>
			<p>{t("location_accommodation_banja_intro")}</p>

			<div class="textImagePair textImagePairMicha">
				<div class="frame">
					<div class="frameBody">
						<img src="/assets/location/kovilje.png" alt="kovilje-welness-hotel" width="600" />
					</div>
				</div>
				{lang === "sr" ? (
					<p class="paragraph">Препоручујемо Вам хотел “<a href="https://www.google.com/travel/hotels/s/N3xqb" target="_blank">Ковиље wellness центар</a>” који је одмах до Кур Салона.</p>
				) : lang === "de" ? (
					<p class="paragraph">We recommend the hotel “<a href="https://www.google.com/travel/hotels/s/N3xqb" target="_blank">Kovilje wellness center</a>” which is in the very close vicinity of Kur Salon.</p>
				) : (
					<p class="paragraph">We recommend the hotel “<a href="https://www.google.com/travel/hotels/s/N3xqb" target="_blank">Kovilje wellness center</a>” which is in the very close vicinity of Kur Salon.</p>
				)}
			</div>

			<div class="textImagePair textImagePairJerome">
				<div class="frame">
					<div class="frameBody">
						<img src="/assets/location/royal-spa.png" alt="banja-koviljaca-royal-spa" width="600" />
					</div>
				</div>
				<div class="paragraph-wrapper">
					{lang === "sr" ? (
						<div>
							<p class="paragraph">Мало јефтинији али исто фин хотел је и “<a href="http://www.royalspa.rs/smestaj_en.php" target="_balnk">Royal Spa</a>” који је одмах поред парка.</p>
							<p class="paragraph">За Royal Spa можемо добити попуст ако се више људи пријави за смештај. Нажалост не знамо износ попуста док не сазнамо колико људи би узело по собу. </p>
							<p class="paragraph">Ако сте заинтересовани за овај хотел, јавите нам што пре на: <a href="mailto:petrovivana@gmail.com">petrovivana@gmail.com</a></p>
						</div>
					) : lang === "de" ? (
						<div>
							<p class="paragraph">A slightly cheaper but also very nice hotel is “<a href="http://www.royalspa.rs/smestaj_en.php" target="_balnk">Royal Spa</a>” which is right next to the park.</p>
							<p class="paragraph">For the Royal Spa we can have a discount if more people would like to book there. Unfortunatelly we can't know the amount of this discount until we know how many people would be interested.</p>
							<p class="paragraph">If you are one of the interested please let us know asap at: <a href="mailto:petrovivana@gmail.com">petrovivana@gmail.com</a></p>
						</div>
					) : (
						<div>
							<p class="paragraph">A slightly cheaper but also very nice hotel is “<a href="http://www.royalspa.rs/smestaj_en.php" target="_balnk">Royal Spa</a>” which is right next to the park.</p>
							<p class="paragraph">For the Royal Spa we can have a discount if more people would like to book there. Unfortunatelly we can't know the amount of this discount until we know how many people would be interested.</p>
							<p class="paragraph">If you are one of the interested please let us know asap at: <a href="mailto:petrovivana@gmail.com">petrovivana@gmail.com</a></p>
						</div>
					)}
				</div>
			</div>
			<p>{t("location_accommodation_trivago_1")}<a href="https://www.trivago.de/?aDateRange%5Barr%5D=2021-08-06&aDateRange%5Bdep%5D=2021-08-08&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=418308%2F200&hasList=1&hasMap=1&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=20000&address=&addressGeoCode=&offset=0&ra=&overlayMode=" target="_blank">trivago</a>{t("location_accommodation_trivago_2")}</p>

			<h2>{t("location_accommodation_loznica")}</h2>
			<p>{t("location_accommodation_loznica_intro")}</p>

			<h2>{t("location_accommodation_belgrade")}</h2>
			{lang === "sr" ? (
				<div>
					<p>Ако долазите авионом слетећете на аеродром ”Никола Тесла” у Београду. </p>
					<p>Да, Никола Тесла је био србин, и не брините се нисмо заборавили и нашег другог светски познатом србина, авиони AirSerbia-е су названи по <span lang="sr">Новаку Ђоковићу</span> ;) </p>
					<p>Препоручили би смо Вам, ако имате времена, да одвојите неколико дана за Београд.</p>
					<p>Обично у 2-3 дана може да се обиђу најпознатија места, али ако волите журке онда узмите мало више дана.<br />
						Журке су обично од четвртка до суботе, додуше лети журке су сваки дан, поготово на плажи и поред реке.</p>
					<p>Да, Београд има плажу! Али плажа слатководног језера, зове се <span lang="sr">"Ада Циганлија"</span> и има доста бич барова, башти пива итд. <br />
					За више детаља око активности у Београду, погледајте нашу <Link href="/interesting">Занимљивости</Link> страницу.</p>
					<p>Што се тиче смештаја, наћете стварно много што шта на интернету. Ми препоручујемо да узмете AirBnB апартман, јер су прилично јефтинији од хотела и већином су у центру града.</p>
					<p>У центру је најбоље да се стационирате, у старом делу поготово. Можете пробати Нови Београд (преко реке Саве), али имахте у виду да сваки пут кад хоћете до центра морате ићи градским превозом или таксијем.</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>If you are coming with the airplane you will arrive to the one and only airport in Belgrade: Airport <span lang="rs">Nicola Tesla</span>. </p>
					<p>Yes, Tesla was Serbian and don't worry we didn't forgot about our other wordly known Serbian, AirSerbia's airplanes are named by <span lang="sr">Novak Djokovic</span> ;) </p>
					<p>We would recommend you, if you have time, to take a couple of days to check out the city.</p>
					<p>Usually in 2-3 days you can see most of the stuff, but if you are a party animal then take some days more.<br />
						Party days are from Thursday until Saturday. Although in August there will be parties on other days as well, especially on the river and the beach.</p>
					<p>Yes, Belgrade has a beach! But its a sweat water lake beach, called <span lang="sr">"Ada Ciganlija"</span> and has a bunch of beach bars, beer garden etc. <br />
						For more information on activities in Belgrade check our <Link href="/interesting">Things to do</Link> page.</p>
					<p>For accommodation, you can find really a lot online. We would recommend to take an AirBnB apartment, since they are quite cheaper then hotels, and are mostly central.</p>
					<p>This is where you want to be basically, in the old town. You can also try New Belgrade (other side of the river) but keep in mind that for every trip to the city center you need to take a tram/bus/taxi.</p>
				</div>
			) : (
				<div>
					<p>If you are coming with the airplane you will arrive to the one and only airport in Belgrade: Airport <span lang="rs">Nicola Tesla</span>. </p>
					<p>Yes, Tesla was Serbian and don't worry we didn't forgot about our other wordly known Serbian, AirSerbia's airplanes are named by <span lang="sr">Novak Djokovic</span> ;) </p>
					<p>We would recommend you, if you have time, to take a couple of days to check out the city.</p>
					<p>Usually in 2-3 days you can see most of the stuff, but if you are a party animal then take some days more.<br />
						Party days are from Thursday until Saturday. Although in August there will be parties on other days as well, especially on the river and the beach.</p>
					<p>Yes, Belgrade has a beach! But its a sweat water lake beach, called <span lang="sr">"Ada Ciganlija"</span> and has a bunch of beach bars, beer garden etc. <br />
						For more information on activities in Belgrade check our <Link href="/interesting">Things to do</Link> page.</p>
					<p>For accommodation, you can find really a lot online. We would recommend to take an AirBnB apartment, since they are quite cheaper then hotels, and are mostly central.</p>
					<p>This is where you want to be basically, in the old town. You can also try New Belgrade (other side of the river) but keep in mind that for every trip to the city center you need to take a tram/bus/taxi.</p>
				</div>
			)}

			{/* <img src="./routes/location/img/old-town-stari-grad-belgrade.png" alt="old-town-belgrade" width="600" /> */}

			<div class="frame">
				<div class="frameBody">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11320.446911395979!2d20.45356569991093!3d44.819288436256784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab51ce20e1d%3A0x25ea809ecfd66a1a!2z0KHRgtCw0YDQuCDQs9GA0LDQtCwgQmVsZ3JhZGUsIFNlcmJpYQ!5e0!3m2!1sen!2sde!4v1619890328396!5m2!1sen!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
				</div>
			</div>
			{lang === "sr" ? (
				<p>Ако баш желите да себи удовољите и осетите како је живела елита почетком прошлог века можете преноћити у познатом <a href="https://hotelmoskva.rs/" target="_blank">Хотелу Москва</a>.
					То је једна од ретких зграда у Београду која је преживела оба светска рата, и која је била сведок многих дипломатских стратегија, преговарања, утицајних уметника, носиоцима Нобелове награде,
					краљевским догађајима, дано-ноћним разговорима, тако да можете претпоставити да су зидови ове зграде чули мноштво разних тајни током својих 100 година постојања.</p>
			) : lang === "de" ? (
				<p>If you really want to indulge your self and get a taste of how the upper class was living in Serbia in the early 1900s you can check out the famous <a href="https://hotelmoskva.rs/" target="_blank">Hotel Moskva</a>.
					It is one of the rare buildings in Belgrade surviving both world wars, and was a witness to many diplomatic strategies and negotiations,
					inspirational artists, Nobel Price winner writers, royal events, all night long conversations, so as you can image this building walls heard many secrets during the last century of its existence.</p>
			) : (
				<p>If you really want to indulge your self and get a taste of how the upper class was living in Serbia in the early 1900s you can check out the famous <a href="https://hotelmoskva.rs/" target="_blank">Hotel Moskva</a>.
					It is one of the rare buildings in Belgrade surviving both world wars, and was a witness to many diplomatic strategies and negotiations,
					inspirational artists, Nobel Price winner writers, royal events, all night long conversations, so as you can image this building walls heard many secrets during the last century of its existence.</p>
			)}

			<div class="textImagePair textImagePairAli">
				<div class="frame">
					<div class="frameBody">
						<img src="/assets/location/moskva.jpeg" alt="hotel-moskva-belgrade" width="600" />
					</div>
				</div>
			</div>

		</div>
	)
};

export default Location;
