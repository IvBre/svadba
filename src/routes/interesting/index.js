import {useContext} from "preact/hooks";
import {TranslateContext} from "@denysvuika/preact-translate";

const Interesting = () => {
	const { t, lang } = useContext(TranslateContext);
	return (
		<div class="pageWrapper">
			<h1>{t("interesting_title")}</h1>
			<h2>{t("interesting_belgrade")}</h2>
			<div class="frame">
				<div class="frameBody">
					<img src="/assets/interesting/Upoznajte-Beograd.jpeg" alt="beograd" width="600" />
				</div>
			</div>
			<p>{t("interesting_intro_1")}</p>
			<p>
				{t("interesting_intro_2")}<br />
				<ul>
					<li><a href="https://www.beogradnocu.com/en/" target="_blank">BeogradNocu.Com</a></li>
					<li><a href="https://www.kudaveceras.rs/belgrade-night-life/" target="_blank">KudaVeceras.Rs</a></li>
				</ul>
				{t("interesting_intro_3")}<br />
				{t("interesting_intro_4")}
			</p>
			<p>
				{t("interesting_intro_5")}
				<ul>
					<li>{t("interesting_intro_6")}<a href="http://www.serbia.com/visit-serbia/cultural-attractions/palaces-and-fortresses/belgrade-fortress-follow-the-paths-of-history/" target="_blank">{t("interesting_intro_61")}</a>.</li>
					<li>{t("interesting_intro_7")}<a href="https://www.tripadvisor.com/Attraction_Review-g294472-d550326-Reviews-Knez_Mihailova-Belgrade.html" target="_blank">{t("interesting_intro_71")}</a>{t("interesting_intro_72")}<br />
						{t("interesting_intro_73")}</li>
					<li>{t("interesting_intro_8")}<a href="https://www.tripadvisor.com/Attraction_Review-g294472-d536408-Reviews-Skadarlija-Belgrade.html" target="_blank">{t("interesting_intro_81")}</a>. <br />
						{t("interesting_intro_82")}</li>
					<li>{t("interesting_intro_9")} <a href="https://nikolateslamuseum.org/en/" target="_blank">{t("interesting_intro_91")}</a>.</li>
					<li>{t("interesting_intro_10")}<a href="https://en.wikipedia.org/wiki/Church_of_Saint_Sava" target="_blank">{t("interesting_intro_11")}</a>{t("interesting_intro_12")}</li>
					<li>{t("interesting_intro_11_1")}<a href="https://www.adaciganlija.rs/en/" target="_blank">{t("interesting_intro_11_2")}</a>{t("interesting_intro_11_3")}<br />
						{t("interesting_intro_11_4")}</li>
					<li>{t("interesting_intro_12_1")}<br />
						{t("interesting_intro_12_2")}<a href="https://www.tripadvisor.com/Attraction_Review-g1898555-d4945034-Reviews-Zemunski_kej-Zemun_Belgrade.html" target="_blank">{t("interesting_intro_12_3")}</a>{t("interesting_intro_12_4")}</li>
				</ul>
			</p>

			<h2>{t("interesting_banja")}</h2>
			{lang === "sr" ? (
				<div>
					<p>
						Баља Ковиљача је позната по својим исцељујућим термалним водама и блатом где су Римљани направили прво купатило.<br />
						Поново је обновљено током Отоманског царства у 17-ом веку.<br />
						Прва хемијска анализа воде је урађена 1855-те године након чега је и прва гостиона направљена. Убрзо након тога држава ју је заштитила као националну баштину, и радови на проширењу су започети током владавине Обреновића и завршени током Карађорђевић династије.<br />
						Део бањског комплекса је и место нашег венчања ”Кур салон” који је изграђен по наређењу краља Александра Првог Карађорђевића 1932. године, по узору на сличне ”Кур Салоне” тада у Бечу.<br />
						Кур Салон је постало популарно место за разне свечаности и балове тадашње српске елите. Такође је било прво место у читавом Балкану где су се одражавале вечери коцкарнице. Место је било толико популарно да су извођачи плаћали како би ту свирали.<br />
						Након пада СФР Југославије, Кур Салон постаје рушевина.<br />
						Коначно, 2016-те године држава га реновира и враћа у претходну славу. Након тога место постаје популарно за разне догађаје и свечаности, са одличним рестораном у приземљу, где музика свира скоро свако вече.<br />
						Бањски комплекс се данас састоји од великог парка и фонтаном у средини, окружена са неколико рехабилитационих центара, велнес хотелом и горе поменутим Кур Салоном.<br />
						Надамо се да ћете уживати у овом месту колико и ми уживамо сваки пут кад дођемо у Србију!<br />
					</p>
					
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/banja-koviljaca.jpeg" alt="banjski-park-fontana" width="600" />
						</div>
					</div>
					<p>
						Пошто је Бања место пре свега за људе који долазе да се лече, нема неких додатних активности у којима можете уживати сем опуштања у велнесу или шетња по парку. <br />
						Али ако имате нешто времена, можете отићи у комплекс <a href="https://suncanareka.rs/" target="_blank">Сунчана река</a>, неких 10 мин вожње од Бање. Деца би посебно уживала јер комплекс има прилично разних домаћих животиња.<br />
					</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>
						Banja Koviljača is famous for its healing thermal mineral springs where Romans were the first to create a bath for.<br />
						It was again rebuilt in the 17th century by the Turks during the Ottoman Empire.<br />
						The first chemical analysis of the water was performed in 1855 after which the first guest house was built. It was soon after protected by the state and expanded during the reigns of the Obrenović dynasty and Karadjordjević after them.<br />
						Part of the spa complex is our wedding venue “Kur-Salon” which was built by the king Aleksandar I Karadjordjević in 1932, who was heavily inspired by similar “Kur-Salon” buildings in Vienna of that time.<br />
						Kur-Salon was a popular place for festivities organized by the noble class in forms of balls and galas. It was also the first gambling hole in the entire Balkans. It was so popular that musicians paid to play there.<br />
						After the collapse of Yugoslavia, Kur-Salon was not maintained and soon became a ruin.<br />
						Finally, it was reinstated to its previous glory in 2016. And since then it has become a popular venue for events with also a restaurant that has live traditional music almost every night and superb food.<br />
						The Banja’s spa complex today consists of a big park with a fountain in the middle, surrounded by several rehabilitation centers, wellness hotels and the above mentioned “Kur-Salon”.<br />
						We hope you will enjoy this place as much as we enjoy it every time we are in Serbia!<br />
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/banja-koviljaca.jpeg" alt="banjski-park-fontana" width="600" />
						</div>
					</div>
					<p>
						Since Banja is a spa center, there is nothing much to do except relaxing in a spa and in the surrounding park.<br />
						But if you do have some spare time, you could check out the <a href="https://suncanareka.rs/" target="_blank">Sunčana reka</a> (translation: Sunny River) complex, some 10min drive from Banja. Kids would enjoy there very much because the complex has a lot of domesticated animals to pet.<br />
					</p>
				</div>
			) : (
				<div>
					<p>
						Banja Koviljača is famous for its healing thermal mineral springs where Romans were the first to create a bath for.<br />
						It was again rebuilt in the 17th century by the Turks during the Ottoman Empire.<br />
						The first chemical analysis of the water was performed in 1855 after which the first guest house was built. It was soon after protected by the state and expanded during the reigns of the Obrenović dynasty and Karadjordjević after them.<br />
						Part of the spa complex is our wedding venue “Kur-Salon” which was built by the king Aleksandar I Karadjordjević in 1932, who was heavily inspired by similar “Kur-Salon” buildings in Vienna of that time.<br />
						Kur-Salon was a popular place for festivities organized by the noble class in forms of balls and galas. It was also the first gambling hole in the entire Balkans. It was so popular that musicians paid to play there.<br />
						After the collapse of Yugoslavia, Kur-Salon was not maintained and soon became a ruin.<br />
						Finally, it was reinstated to its previous glory in 2016. And since then it has become a popular venue for events with also a restaurant that has live traditional music almost every night and superb food.<br />
						The Banja’s spa complex today consists of a big park with a fountain in the middle, surrounded by several rehabilitation centers, wellness hotels and the above mentioned “Kur-Salon”.<br />
						We hope you will enjoy this place as much as we enjoy it every time we are in Serbia!<br />
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/banja-koviljaca.jpeg" alt="banjski-park-fontana" width="600" />
						</div>
					</div>
					<p>
						Since Banja is a spa center, there is nothing much to do except relaxing in a spa and in the surrounding park.<br />
						But if you do have some spare time, you could check out the <a href="https://suncanareka.rs/" target="_blank">Sunčana reka</a> (translation: Sunny River) complex, some 10min drive from Banja.  Kids would enjoy there very much because the complex has a lot of domesticated animals to pet.<br />
					</p>
				</div>
			)}

			<h2>{t("interesting_cabin")}</h2>
			{lang === "sr" ? (
				<div>
					<p>As some of you might now we have built a log house in Serbia, and it's not that far from Banja, aprox. 40min drive. <br />
						If any of you would like to go see it, please let us know, because we're planing to go there the day after the wedding.</p>
					<p><a href="https://www.google.com/maps/@44.2927168,19.2098925,428m/data=!3m1!1e3"  target="_blank">The house</a> is located in a village called "Velika Reka" (translation: Big River). <br />
						It is at the entrance to this village, in the direction from Mali Zvornik and Banja. <br />
						The moment you see the sign for "Velika Reka", after some 300m on your right you will see a sign "Vila na Drini", right across that sign is a little hill and under that hill you will see the cabin.<br />
						It is the only wooden cabin made out of logs in this area, so it is really hard to miss, and if you would ask the locals in the village, they could explain you where it is.
					</p>
					<p>
						On this spot the Drina river transforms slowly into a lake, so the river is deep and clean, but not super fast.<br />
						Next to the house is a little stream, and behind is a forest. We can grill there and go for a swim in Drina.
					</p>
					<p>The house has space for only 6 people but there are places in the area that you could rent.
						Places in the close proximity from the cabin:
					</p>
						<ul>
							<li><a href="http://vilanadrini.rs/" target="_blank">Vila na Drini</a></li>
							<li><a href="http://www.drinskaoaza.com/" target="_blank">Drinska Oaza</a></li>
							<li><a href="http://www.drinskisan.com/en/smestaj-velika-reka/" target="_blank">Drinski san</a></li>
							<li><a href="http://www.jezero-drina.com/en/" target="_blank">Dragovic House</a></li>
						</ul>
					<p>
						If you have problems booking these, let us know and we can help you.<br />
						In any case <b>you can also camp</b> in our yard, we have a lot of space. We also have some tents, but keep in mind that these are limited, so we will hand them out with the system first come, first serve.
					</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>As some of you might now we have built a log house in Serbia, and it's not that far from Banja, aprox. 40min drive. <br />
						If any of you would like to go see it, please let us know, because we're planing to go there the day after the wedding.</p>
					<p><a href="https://www.google.com/maps/@44.2927168,19.2098925,428m/data=!3m1!1e3"  target="_blank">The house</a> is located in a village called "Velika Reka" (translation: Big River). <br />
						It is at the entrance to this village, in the direction from Mali Zvornik and Banja. <br />
						The moment you see the sign for "Velika Reka", after some 300m on your right you will see a sign "Vila na Drini", right across that sign is a little hill and under that hill you will see the cabin.<br />
						It is the only wooden cabin made out of logs in this area, so it is really hard to miss, and if you would ask the locals in the village, they could explain you where it is.
					</p>
					<p>
						On this spot the Drina river transforms slowly into a lake, so the river is deep and clean, but not super fast.<br />
						Next to the house is a little stream, and behind is a forest. We can grill there and go for a swim in Drina.
					</p>
					<p>The house has space for only 6 people but there are places in the area that you could rent.
						Places in the close proximity from the cabin:
					</p>
						<ul>
							<li><a href="http://vilanadrini.rs/" target="_blank">Vila na Drini</a></li>
							<li><a href="http://www.drinskaoaza.com/" target="_blank">Drinska Oaza</a></li>
							<li><a href="http://www.drinskisan.com/en/smestaj-velika-reka/" target="_blank">Drinski san</a></li>
							<li><a href="http://www.jezero-drina.com/en/" target="_blank">Dragovic House</a></li>
						</ul>
					<p>
						If you have problems booking these, let us know and we can help you.<br />
						In any case <b>you can also camp</b> in our yard, we have a lot of space. We also have some tents, but keep in mind that these are limited, so we will hand them out with the system first come, first serve.
					</p>
				</div>
			) : (
				<div>
					<p>As some of you might now we have built a log house in Serbia, and it's not that far from Banja, aprox. 40min drive. <br />
						If any of you would like to go see it, please let us know, because we're planing to go there the day after the wedding.</p>
					<p><a href="https://www.google.com/maps/@44.2927168,19.2098925,428m/data=!3m1!1e3"  target="_blank">The house</a> is located in a village called "Velika Reka" (translation: Big River). <br />
						It is at the entrance to this village, in the direction from Mali Zvornik and Banja. <br />
						The moment you see the sign for "Velika Reka", after some 300m on your right you will see a sign "Vila na Drini", right across that sign is a little hill and under that hill you will see the cabin.<br />
						It is the only wooden cabin made out of logs in this area, so it is really hard to miss, and if you would ask the locals in the village, they could explain you where it is.
					</p>
					<p>
						On this spot the Drina river transforms slowly into a lake, so the river is deep and clean, but not super fast.<br />
						Next to the house is a little stream, and behind is a forest. We can grill there and go for a swim in Drina.
					</p>
					<p>The house has space for only 6 people but there are places in the area that you could rent.
						Places in the close proximity from the cabin:
					</p>
						<ul>
							<li><a href="http://vilanadrini.rs/" target="_blank">Vila na Drini</a></li>
							<li><a href="http://www.drinskaoaza.com/" target="_blank">Drinska Oaza</a></li>
							<li><a href="http://www.drinskisan.com/en/smestaj-velika-reka/" target="_blank">Drinski san</a></li>
							<li><a href="http://www.jezero-drina.com/en/" target="_blank">Dragovic House</a></li>
						</ul>
					<p>
						If you have problems booking these, let us know and we can help you.<br />
						In any case <b>you can also camp</b> in our yard, we have a lot of space. We also have some tents, but keep in mind that these are limited, so we will hand them out with the system first come, first serve.
					</p>
				</div>
			)}

			<h2>{t("interesting_other")}</h2>
			{lang === "sr" ? (
				<div>
					<p>
						If you want to explore more of Serbia, we can recommend you some other places in the area that we find interesting.
					</p>
					<p>
						If you continue driving from the cabin, in the direction of Tara and Bajina Bašta city you will see right before the entrance to Bajina Bašta,<br />
						a famous House on the Drina river, which appeared on the front cover of the National Geographic magazine as the best picture taken of that month.<br />
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/kucica-na-drini.jpeg" alt="kucica-na-drini" width="600"/>
						</div>
					</div>
					<p>
						And it is quite interesting to see it. It's a house built on a natural rock in the middle of the river. This river is very wild, and every year there is a risk of floods.<br />
						Naturally, this house was swooshed by the river several times. But that didn't stop the owner to rebuild it every time. Last time he made it so that when the river is high, the water can go through the house,<br />
						instead of having the house there as a form of resistance to the river. Which allowed his house to survive for the last several years.
					</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>
						If you want to explore more of Serbia, we can recommend you some other places in the area that we find interesting.
					</p>
					<p>
						If you continue driving from the cabin, in the direction of Tara and Bajina Bašta city you will see right before the entrance to Bajina Bašta,<br />
						a famous House on the Drina river, which appeared on the front cover of the National Geographic magazine as the best picture taken of that month.<br />
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/kucica-na-drini.jpeg" alt="kucica-na-drini" width="600"/>
						</div>
					</div>
					<p>
						And it is quite interesting to see it. It's a house built on a natural rock in the middle of the river. This river is very wild, and every year there is a risk of floods.<br />
						Naturally, this house was swooshed by the river several times. But that didn't stop the owner to rebuild it every time. Last time he made it so that when the river is high, the water can go through the house,<br />
						instead of having the house there as a form of resistance to the river. Which allowed his house to survive for the last several years.
					</p>
				</div>
			) : (
				<div>
					<p>
						If you want to explore more of Serbia, we can recommend you some other places in the area that we find interesting.
					</p>
					<p>
						If you continue driving from the cabin, in the direction of Tara and Bajina Bašta city you will see right before the entrance to Bajina Bašta,<br />
						a famous House on the Drina river, which appeared on the front cover of the National Geographic magazine as the best picture taken of that month.<br />
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/kucica-na-drini.jpeg" alt="kucica-na-drini" width="600"/>
						</div>
					</div>
					<p>
						And it is quite interesting to see it. It's a house built on a natural rock in the middle of the river. This river is very wild, and every year there is a risk of floods.<br />
						Naturally, this house was swooshed by the river several times. But that didn't stop the owner to rebuild it every time. Last time he made it so that when the river is high, the water can go through the house,<br />
						instead of having the house there as a form of resistance to the river. Which allowed his house to survive for the last several years.
					</p>
				</div>
			)}

			<h3>{t("interesting_other_tara")}</h3>
			{lang === "sr" ? (
				<div>
					<p>
						<a href="http://www.tara-planina.com/home_eng.html" target="_blank">This mountain</a> is located some 2h drive from the cabin, towards south. <br />
						Part of this mountain is also a national park, famous for its rare plants and animals species.<br />
						If you like nature we would definitely recommend you to visit this place because it is quite preserved and has nice hiking trails.
					</p>
					<p>
						We recommend you to stay there for at least one night, since the air is quite rejuvenating.<br />
						Best location to stay would be "Kaludjerske bare", if you search for it online you will find many different hotels and country houses for rent.<br />
						This place is the only place on the top that has some restaurants, shops and a gas station.
					</p>
					<p>
						There is a famous viewpoint "Banjska stena" where you can see the massive canyon of Tara and Drina.
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/Tara_Vidikovac_Banjska_Stena_01.jpeg" alt="vidikovac-tara" width="600" />
						</div>
					</div>
					<p>
						There is a lake underneath this mountain called "Perućac" and there is another lake on the top called "Zaovinsko". Both of them are artificial lakes. <br />
						Zaovine lake is an accumulative reversible lake, meaning that in the times of electricity shortage on the national level it can become almost empty. <br />
						Although in summer times this barely ever happens, since the demand of electricity is not as high as in the winter.
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/zaovinsko_jezero_aps_341442240.jpeg" alt="zaovisnko-jezero" width="600" />
						</div>
					</div>
					<p>
						Never the less it is an interesting place to see, since it's surrounded by forest. It is in the middle of a national park so construction of solid houses is forbidden.<br />
						You can also swim there if you wish, and also camp. Be aware that since it's a national park zone there are no restaurants, bars or any kind of shops. So please bring the stuff you need with you.<br />
						The lake is about 20km from Kaludjerske bare, so be sure you have enough gasoline, since you will go mostly in 2nd or 3rd gear - there are a lot of curves.
					</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>
						<a href="http://www.tara-planina.com/home_eng.html" target="_blank">This mountain</a> is located some 2h drive from the cabin, towards south. <br />
						Part of this mountain is also a national park, famous for its rare plants and animals species.<br />
						If you like nature we would definitely recommend you to visit this place because it is quite preserved and has nice hiking trails.
					</p>
					<p>
						We recommend you to stay there for at least one night, since the air is quite rejuvenating.<br />
						Best location to stay would be "Kaludjerske bare", if you search for it online you will find many different hotels and country houses for rent.<br />
						This place is the only place on the top that has some restaurants, shops and a gas station.
					</p>
					<p>
						There is a famous viewpoint "Banjska stena" where you can see the massive canyon of Tara and Drina.
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/Tara_Vidikovac_Banjska_Stena_01.jpeg" alt="vidikovac-tara" width="600" />
						</div>
					</div>
					<p>
						There is a lake underneath this mountain called "Perućac" and there is another lake on the top called "Zaovinsko". Both of them are artificial lakes. <br />
						Zaovine lake is an accumulative reversible lake, meaning that in the times of electricity shortage on the national level it can become almost empty. <br />
						Although in summer times this barely ever happens, since the demand of electricity is not as high as in the winter.
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/zaovinsko_jezero_aps_341442240.jpeg" alt="zaovisnko-jezero" width="600" />
						</div>
					</div>
					<p>
						Never the less it is an interesting place to see, since it's surrounded by forest. It is in the middle of a national park so construction of solid houses is forbidden.<br />
						You can also swim there if you wish, and also camp. Be aware that since it's a national park zone there are no restaurants, bars or any kind of shops. So please bring the stuff you need with you.<br />
						The lake is about 20km from Kaludjerske bare, so be sure you have enough gasoline, since you will go mostly in 2nd or 3rd gear - there are a lot of curves.
					</p>
				</div>
			) : (
				<div>
					<p>
						<a href="http://www.tara-planina.com/home_eng.html" target="_blank">This mountain</a> is located some 2h drive from the cabin, towards south. <br />
						Part of this mountain is also a national park, famous for its rare plants and animals species.<br />
						If you like nature we would definitely recommend you to visit this place because it is quite preserved and has nice hiking trails.
					</p>
					<p>
						We recommend you to stay there for at least one night, since the air is quite rejuvenating.<br />
						Best location to stay would be "Kaludjerske bare", if you search for it online you will find many different hotels and country houses for rent.<br />
						This place is the only place on the top that has some restaurants, shops and a gas station.
					</p>
					<p>
						There is a famous viewpoint "Banjska stena" where you can see the massive canyon of Tara and Drina.
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/Tara_Vidikovac_Banjska_Stena_01.jpeg" alt="vidikovac-tara" width="600" />
						</div>
					</div>
					<p>
						There is a lake underneath this mountain called "Perućac" and there is another lake on the top called "Zaovinsko". Both of them are artificial lakes. <br />
						Zaovine lake is an accumulative reversible lake, meaning that in the times of electricity shortage on the national level it can become almost empty. <br />
						Although in summer times this barely ever happens, since the demand of electricity is not as high as in the winter.
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/zaovinsko_jezero_aps_341442240.jpeg" alt="zaovisnko-jezero" width="600" />
						</div>
					</div>
					<p>
						Never the less it is an interesting place to see, since it's surrounded by forest. It is in the middle of a national park so construction of solid houses is forbidden.<br />
						You can also swim there if you wish, and also camp. Be aware that since it's a national park zone there are no restaurants, bars or any kind of shops. So please bring the stuff you need with you.<br />
						The lake is about 20km from Kaludjerske bare, so be sure you have enough gasoline, since you will go mostly in 2nd or 3rd gear - there are a lot of curves.
					</p>
				</div>
			)}

			<h3>{t("interesting_other_mokra_gora")}</h3>
			{lang === "sr" ? (
				<div>
					<p>
						More specifically <a href="https://goo.gl/maps/5jugj5R82XPhJvay5" target="_blank">Drvengrad</a> or WoodenCity which is built like a small traditional village, <br />
						where one can see how were the old Serbian houses looking until the industrial era.<br />
						These kind of "etno" villages exist everywhere throughout the country but this one is different because it was built by our famous film producer <a href="https://en.wikipedia.org/wiki/Emir_Kusturica" target="_blank">Emir Kusturica</a>.<br />
						You will probably remember him by the film <a href="https://www.imdb.com/title/tt0118843/?ref_=nv_sr_srsg_0" target="_blank">White cat, black cat</a>, or <a href="https://www.imdb.com/title/tt0106307/?ref_=nm_knf_t2" target="_blank">Arizona dream</a> starring Johnny Depp. <br />
						Anyways, needless to say this "village" has a lot of movie memorabilia as well, it's own alternative movies cinema, restaurant etc. <br />
						It happened more often then not that some famous move stars would visit Kusturice here.
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/Drvengrad.jpeg" alt="drvengrad" width="600" />
						</div>
					</div>
					
					<p>While you're there you could also have a ride with the <a href="https://www.srbvoz.rs/en/nostalgija-2/" target="_blank">Nostalgia</a> steam train around the mountains.</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>
						More specifically <a href="https://goo.gl/maps/5jugj5R82XPhJvay5" target="_blank">Drvengrad</a> or WoodenCity which is built like a small traditional village, <br />
						where one can see how were the old Serbian houses looking until the industrial era.<br />
						These kind of "etno" villages exist everywhere throughout the country but this one is different because it was built by our famous film producer <a href="https://en.wikipedia.org/wiki/Emir_Kusturica" target="_blank">Emir Kusturica</a>.<br />
						You will probably remember him by the film <a href="https://www.imdb.com/title/tt0118843/?ref_=nv_sr_srsg_0" target="_blank">White cat, black cat</a>, or <a href="https://www.imdb.com/title/tt0106307/?ref_=nm_knf_t2" target="_blank">Arizona dream</a> starring Johnny Depp. <br />
						Anyways, needless to say this "village" has a lot of movie memorabilia as well, it's own alternative movies cinema, restaurant etc. <br />
						It happened more often then not that some famous move stars would visit Kusturice here.
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/Drvengrad.jpeg" alt="drvengrad" width="600" />
						</div>
					</div>
					
					<p>While you're there you could also have a ride with the <a href="https://www.srbvoz.rs/en/nostalgija-2/" target="_blank">Nostalgia</a> steam train around the mountains.</p>
				</div>
			) : (
				<div>
					<p>
						More specifically <a href="https://goo.gl/maps/5jugj5R82XPhJvay5" target="_blank">Drvengrad</a> or WoodenCity which is built like a small traditional village, <br />
						where one can see how were the old Serbian houses looking until the industrial era.<br />
						These kind of "etno" villages exist everywhere throughout the country but this one is different because it was built by our famous film producer <a href="https://en.wikipedia.org/wiki/Emir_Kusturica" target="_blank">Emir Kusturica</a>.<br />
						You will probably remember him by the film <a href="https://www.imdb.com/title/tt0118843/?ref_=nv_sr_srsg_0" target="_blank">White cat, black cat</a>, or <a href="https://www.imdb.com/title/tt0106307/?ref_=nm_knf_t2" target="_blank">Arizona dream</a> starring Johnny Depp. <br />
						Anyways, needless to say this "village" has a lot of movie memorabilia as well, it's own alternative movies cinema, restaurant etc. <br />
						It happened more often then not that some famous move stars would visit Kusturice here.
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/Drvengrad.jpeg" alt="drvengrad" width="600" />
						</div>
					</div>
					
					<p>While you're there you could also have a ride with the <a href="https://www.srbvoz.rs/en/nostalgija-2/" target="_blank">Nostalgia</a> steam train around the mountains.</p>
				</div>
			)}

			<h3>{t("interesting_other_zlatibor")}</h3>
			{lang === "sr" ? (
				<div>
					<p>
						Right after Tara, stands a mountainous region called Zlatibor. There is a famous song "Zlatibore pitaj Taru": <br />
						<iframe width="560" height="315" src="https://www.youtube.com/embed/6TzOX4SgHbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<br />Lyrics go something like: "Zlatibor ask Tara, does she remember the old love", it is about a guy from Zlatibor in-loved with a girl from Tara.
					</p>
					<p>
						In the middle of it is a town also called "Zlatibor" that became a bit more urban then intended but still interesting to see, if you're missing a bit of society.<br />
						This town has a little lake in the middle of it, and a nice park/forest area were you can go for a walk.
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/slika-zlatibor-1.jpeg" alt="zlatibor-lake" width="600" />
						</div>
					</div>
					<p>
						There is a mountain top in the near were you can have a nice view of the area, called <a href="https://goo.gl/maps/sHscMfpazoMdPpGJA" target="_blank">Crni Vrh</a> (translation: Black Peak), <br />
						but we would recommend taking a car or a bus at least until some part. <br />
					</p>
					<p>
						If you want to explore the area a bit more, we recommend visiting <a href="https://goo.gl/maps/tXLfsTkgUDFPSo2M8" target="_blank">Zlatiborska jezera</a> establishment. On the way there you will see the nice fields with sheep.
					</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>
						Right after Tara, stands a mountainous region called Zlatibor. There is a famous song "Zlatibore pitaj Taru": <br />
						<iframe width="560" height="315" src="https://www.youtube.com/embed/6TzOX4SgHbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<br />Lyrics go something like: "Zlatibor ask Tara, does she remember the old love", it is about a guy from Zlatibor in-loved with a girl from Tara.
					</p>
					<p>
						In the middle of it is a town also called "Zlatibor" that became a bit more urban then intended but still interesting to see, if you're missing a bit of society.<br />
						This town has a little lake in the middle of it, and a nice park/forest area were you can go for a walk.
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/slika-zlatibor-1.jpeg" alt="zlatibor-lake" width="600" />
						</div>
					</div>
					<p>
						There is a mountain top in the near were you can have a nice view of the area, called <a href="https://goo.gl/maps/sHscMfpazoMdPpGJA" target="_blank">Crni Vrh</a> (translation: Black Peak), <br />
						but we would recommend taking a car or a bus at least until some part. <br />
					</p>
					<p>
						If you want to explore the area a bit more, we recommend visiting <a href="https://goo.gl/maps/tXLfsTkgUDFPSo2M8" target="_blank">Zlatiborska jezera</a> establishment. On the way there you will see the nice fields with sheep.
					</p>
				</div>
			) : (
				<div>
					<p>
						Right after Tara, stands a mountainous region called Zlatibor. There is a famous song "Zlatibore pitaj Taru": <br />
						<iframe width="560" height="315" src="https://www.youtube.com/embed/6TzOX4SgHbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<br />Lyrics go something like: "Zlatibor ask Tara, does she remember the old love", it is about a guy from Zlatibor in-loved with a girl from Tara.
					</p>
					<p>
						In the middle of it is a town also called "Zlatibor" that became a bit more urban then intended but still interesting to see, if you're missing a bit of society.<br />
						This town has a little lake in the middle of it, and a nice park/forest area were you can go for a walk.
					</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/slika-zlatibor-1.jpeg" alt="zlatibor-lake" width="600" />
						</div>
					</div>
					<p>
						There is a mountain top in the near were you can have a nice view of the area, called <a href="https://goo.gl/maps/sHscMfpazoMdPpGJA" target="_blank">Crni Vrh</a> (translation: Black Peak), <br />
						but we would recommend taking a car or a bus at least until some part. <br />
					</p>
					<p>
						If you want to explore the area a bit more, we recommend visiting <a href="https://goo.gl/maps/tXLfsTkgUDFPSo2M8" target="_blank">Zlatiborska jezera</a> establishment. On the way there you will see the nice fields with sheep.
					</p>
				</div>
			)}

			<h2>{t("interesting_other_bih")}</h2>
			{lang === "sr" ? (
				<div>
					<h3>Višegrad</h3>
					<p>If the restrictions are lifted by then, you could visit Višegrad on the way back from Zlatibor. It is a city in Bosnia and Herzegovina, right on the river Drina, <br />
						some 20km from the border.</p>
					<p>In this city you can see the ancient bridge on Drina built by the famous Grand Vizier of the Ottoman Empire - Mehmed Paša Sokolović</p>
					<p>Mehmed Paša was actually Serbian by birth, and was taken at an early age to become a Janissar - an elite infantry unit back then.<br />
						He rose through the ranks of the Ottoman Empire, eventually becoming the Grand Vizier.</p>
					<p>Even though he was taken to become a Turk, he never forgot his roots. So when he had an opportunity he helped his people back home as much as he could.<br />
						One of these things he did is also building this bridge on the Drina river.</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/na-drini-cuprija.jpeg" alt="na-drini-cuprija" width="600" />
						</div>
					</div>
					<p>This bridge also inspired our Nobelist writer Ivo Andrić in writing his master piece "Na Drini Ćuprija".</p>
					<p>Fun fact for trivago folks: One of our ex. colleagues is actually Paša's grand-grand-grand... daughter, Olus Sevilmis. <br />
						It was very interesting finding this out, accidentally, on a team event.</p>
				</div>
			) : lang === "de" ? (
				<div>
					<h3>Višegrad</h3>
					<p>If the restrictions are lifted by then, you could visit Višegrad on the way back from Zlatibor. It is a city in Bosnia and Herzegovina, right on the river Drina, <br />
						some 20km from the border.</p>
					<p>In this city you can see the ancient bridge on Drina built by the famous Grand Vizier of the Ottoman Empire - Mehmed Paša Sokolović</p>
					<p>Mehmed Paša was actually Serbian by birth, and was taken at an early age to become a Janissar - an elite infantry unit back then.<br />
						He rose through the ranks of the Ottoman Empire, eventually becoming the Grand Vizier.</p>
					<p>Even though he was taken to become a Turk, he never forgot his roots. So when he had an opportunity he helped his people back home as much as he could.<br />
						One of these things he did is also building this bridge on the Drina river.</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/na-drini-cuprija.jpeg" alt="na-drini-cuprija" width="600" />
						</div>
					</div>
					<p>This bridge also inspired our Nobelist writer Ivo Andrić in writing his master piece "Na Drini Ćuprija".</p>
					<p>Fun fact for trivago folks: One of our ex. colleagues is actually Paša's grand-grand-grand... daughter, Olus Sevilmis. <br />
						It was very interesting finding this out, accidentally, on a team event.</p>
				</div>
			) : (
				<div>
					<h3>Višegrad</h3>
					<p>If the restrictions are lifted by then, you could visit Višegrad on the way back from Zlatibor. It is a city in Bosnia and Herzegovina, right on the river Drina, <br />
						some 20km from the border.</p>
					<p>In this city you can see the ancient bridge on Drina built by the famous Grand Vizier of the Ottoman Empire - Mehmed Paša Sokolović</p>
					<p>Mehmed Paša was actually Serbian by birth, and was taken at an early age to become a Janissar - an elite infantry unit back then.<br />
						He rose through the ranks of the Ottoman Empire, eventually becoming the Grand Vizier.</p>
					<p>Even though he was taken to become a Turk, he never forgot his roots. So when he had an opportunity he helped his people back home as much as he could.<br />
						One of these things he did is also building this bridge on the Drina river.</p>
					
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/na-drini-cuprija.jpeg" alt="na-drini-cuprija" width="600" />
						</div>
					</div>
					<p>This bridge also inspired our Nobelist writer Ivo Andrić in writing his master piece "Na Drini Ćuprija".</p>
					<p>Fun fact for trivago folks: One of our ex. colleagues is actually Paša's grand-grand-grand... daughter, Olus Sevilmis. <br />
						It was very interesting finding this out, accidentally, on a team event.</p>
				</div>
			)}

			<h2>{t("interesting_other_montenegro")}</h2>
			{lang === "sr" ? (
				<div>
					<p>We are not that far from Montenegro nether. 400km to be exact. It's obviously not super close, but also not super far.<br />
						So if you have another week to spear then we would recommend you to visit it, if you haven't did so before.</p>
					<p>The road through Bosnia is actually better, has less curves, so if it's possible take that route, and go straight to "Herceg Novi" city.</p>
					
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/herceg-novi-slider.jpeg" alt="herceg novi" width="600" />
						</div>
					</div>
					<p>From there you can explore the "Boka Kotorska" bay, and the old city "Kotor". After that you can continue east, towards Budva and other bigger cities.</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>We are not that far from Montenegro nether. 400km to be exact. It's obviously not super close, but also not super far.<br />
						So if you have another week to spear then we would recommend you to visit it, if you haven't did so before.</p>
					<p>The road through Bosnia is actually better, has less curves, so if it's possible take that route, and go straight to "Herceg Novi" city.</p>
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/herceg-novi-slider.jpeg" alt="herceg novi" width="600" />
						</div>
					</div>
					<p>From there you can explore the "Boka Kotorska" bay, and the old city "Kotor". After that you can continue east, towards Budva and other bigger cities.</p>
				</div>
			) : (
				<div>
					<p>We are not that far from Montenegro nether. 400km to be exact. It's obviously not super close, but also not super far.<br />
						So if you have another week to spear then we would recommend you to visit it, if you haven't did so before.</p>
					<p>The road through Bosnia is actually better, has less curves, so if it's possible take that route, and go straight to "Herceg Novi" city.</p>
					
					<div class="frame">
						<div class="frameBody">
							<img src="/assets/interesting/herceg-novi-slider.jpeg" alt="herceg novi" width="600" />
						</div>
					</div>
					<p>From there you can explore the "Boka Kotorska" bay, and the old city "Kotor". After that you can continue east, towards Budva and other bigger cities.</p>
				</div>
			)}

			<div class="frame">
				<div class="frameBody">
					<img src="/assets/interesting/site_0125_0025-750-0-20151105143925.jpeg" alt="kotor" width="600" />
				</div>
			</div>

		</div>
	)
};

export default Interesting;
