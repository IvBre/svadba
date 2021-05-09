import { Link } from "preact-router/match";
import { TranslateContext } from '@denysvuika/preact-translate';
import {useContext} from "preact/hooks";

const Transportation = () => {
	const { t, lang } = useContext(TranslateContext);
	return (
		<div class="pageWrapper">
			<h1>{t("transportation_title")}</h1>
			{lang === "sr" ? (
				<div>
					<p>Ако долазите ван Србије онда је најбоље да дођете авионом у Београд.<br />
						Постоји такође аеродром у Тузли у Босни, али због Ковид рестрикција у Босни може се десити да Вас неће пустити на граници. <br />
						Молимо проверите последње регулације за улазак у <a href="https://www.mfa.gov.rs/gradjani/ulazak-u-srbiju/covid-19-uslovi-za-ulazak" target="_blank">Србију</a> током Ковид-19 пандемије.
					</p>
					<p>Напомена за људе који долазе из СРВ: Постоји директан лет из Дизелдорфа са <a href="https://www.airserbia.com/" target="_blank">AirSerbia</a> али је то најскупљи превозник.<br />
						<a href="https://wizzair.com/" target="_blank">WizzAir</a> је јефтинији и лети исто у Београд али из аеродрома у Дизелдорф Weeze и из Дортмунда.
					</p>
					<p>Препоручујемо да проведете бар 2-3 дана у Београду ако већ нисте били раније. Град је познат по својој историји и тврђави у центру града, али и по свом шароликом ноћном животу.<br />
						Молимо погледајте нашу <Link href="/interesting">Занимљивости</Link> страницу за више детаља.
					</p>
					<p>Из Београда до Бање Ковиљаче можете кренути аутобусом са <a href="http://www.bas.rs/en/" target="_blank">главне аутобуске станице</a> у центру Београда.<br />
						Аутобуси обично иду сваког сата за Лозницу, одакле можете узети 10-минутну вожњу таксијем до Бање.<br />
						Можете такође узети и директан бус до Бање, али <a href="http://www.bas.rs/en/" target="_blank">проверите распоред вожње пре тога</a>.
					</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>Coming from outside of Serbia it is best to come with the airplane to Belgrade.<br />
						There is also an airport in Tuzla in Bosnia, but due to travel restrictions in Bosnia it could produce problems for you on the border. <br />
						Please check the latest regulations for entering <a href="https://www.mfa.gov.rs/en/citizens/travel-serbia/covid-19-entry-requirements" target="_blank">Serbia</a> due to COVID-19.
					</p>
					<p>Note for people from NRW: There is a direct flight from Düsseldorf with <a href="https://www.airserbia.com/" target="_blank">AirSerbia</a> but it is the most expensive one.<br />
						<a href="https://wizzair.com/" target="_blank">WizzAir</a> is cheaper and it also flies to Belgrade but from Düsseldorf Weeze and Dortmund airports.
					</p>
					<p>We recommend spending 2-3 days in Belgrade if you haven’t been there before. The city is famous for it's history and the fortress in the city center but also for it's very vivid nightlife.<br />
						Please check out our <Link href="/interesting">Things to do</Link> page for more details what to do in Belgrade.
					</p>
					<p>From Belgrade to Banja Koviljača you can take the bus from <a href="http://www.bas.rs/en/" target="_blank">the main bus station</a> in the Belgrade city center.<br />
						Usually there is a bus every hour that goes to Loznica, from which you can take a 10 min drive taxi to Banja.<br />
						You can also take the direct bus to Banja, but <a href="http://www.bas.rs/en/" target="_blank">check for the schedule beforehand</a>.
					</p>
				</div>
			) : (
				<div>
					<p>Coming from outside of Serbia it is best to come with the airplane to Belgrade.<br />
						There is also an airport in Tuzla in Bosnia, but due to travel restrictions in Bosnia it could produce problems for you on the border. <br />
						Please check the latest regulations for entering <a href="https://www.mfa.gov.rs/en/citizens/travel-serbia/covid-19-entry-requirements" target="_blank">Serbia</a> due to COVID-19.
					</p>
					<p>Note for people from NRW: There is a direct flight from Düsseldorf with <a href="https://www.airserbia.com/" target="_blank">AirSerbia</a> but it is the most expensive one.<br />
						<a href="https://wizzair.com/" target="_blank">WizzAir</a> is cheaper and it also flies to Belgrade but from Düsseldorf Weeze and Dortmund airports.
					</p>
					<p>We recommend spending 2-3 days in Belgrade if you haven’t been there before. The city is famous for it's history and the fortress in the city center but also for it's very vivid nightlife.<br />
						Please check out our <Link href="/interesting">Things to do</Link> page for more details what to do in Belgrade.
					</p>
					<p>From Belgrade to Banja Koviljača you can take the bus from <a href="http://www.bas.rs/en/" target="_blank">the main bus station</a> in the Belgrade city center.<br />
						Usually there is a bus every hour that goes to Loznica, from which you can take a 10 min drive taxi to Banja.<br />
						You can also take the direct bus to Banja, but <a href="http://www.bas.rs/en/" target="_blank">check for the schedule beforehand</a>.
					</p>
				</div>
			)}

			<div class="textImagePair textImagePairAli">
				<div class="frame">
					<div class="frameBody">
						<img src="/assets/transportation/zeleznicka_stanica_prokop_2_foto_srbijadanassasa_dzambic_10.jpeg" alt="zeleznicka-stanica" width="600" />
					</div>
				</div>
				{lang === "sr" ? (
					<p>
						Поред аутобусе можете доћи и возом. Воз иде једном дневно тако да може бити мало незгодно за организацију,
						али вожња је врло удобна јер нема много људи и возови су чисти. <br />
						Главна железничка станица у Београду је померена у <a href="https://goo.gl/maps/NKFs2xao1nYPBPrB8" target="_blank">Прокоп</a> што није директно у центру града.<br />
						Требало би онда да узмете такси или градским превоз, свакако рачунајте додатно време за то.<br />
						Уместо да идете на Прокоп, можете ухватити воз на другој станици после главне, што је на <a href="https://goo.gl/maps/Vkeg11fbDxy2joZf9" target="_blank">Новом Београду</a>.<br />
						Проверите ред вожње воза овде: <a href="https://www.srbvoz.rs/en/timetable/" target="_blank">srbvoz.rs</a>
					</p>
				) : lang === "de" ? (
					<p>
						Besides the bus you can also take the train. The train goes once per day so it might be tricky to arrange yourself,
						but the ride is very enjoyable since not so many people use it. <br />
						The main train station in Belgrade is moved to <a href="https://goo.gl/maps/NKFs2xao1nYPBPrB8" target="_blank">Prokop</a> which is not in the city center <br />
						so you would need to take a taxi and calculate some extra time to get there.<br />
						Instead of going to Prokop, you can also go to the next station which is on <a href="https://goo.gl/maps/Vkeg11fbDxy2joZf9" target="_blank">New Belgrade</a>.<br />
						You can check the train timetable here: <a href="https://www.srbvoz.rs/en/timetable/" target="_blank">srbvoz.rs</a>
					</p>
				) : (
					<p>
						Besides the bus you can also take the train. The train goes once per day so it might be tricky to arrange yourself,
						but the ride is very enjoyable since not so many people use it. <br />
						The main train station in Belgrade is moved to <a href="https://goo.gl/maps/NKFs2xao1nYPBPrB8" target="_blank">Prokop</a> which is not in the city center <br />
						so you would need to take a taxi and calculate some extra time to get there.<br />
						Instead of going to Prokop, you can also go to the next station which is on <a href="https://goo.gl/maps/Vkeg11fbDxy2joZf9" target="_blank">New Belgrade</a>.<br />
						You can check the train timetable here: <a href="https://www.srbvoz.rs/en/timetable/" target="_blank">srbvoz.rs</a>
					</p>
				)}
			</div>

			{lang === "sr" ? (
				<div>
					<p>Напомињемо да ако нема шалтера за продају карата на станици, можете узети карту директно у возу/бусу код кондуктера или возача.<br />
					Цена карте ѕа бус или воз је обично око 10 еура.</p>
					<p>Поред тога, можете и изнајмити ауто у Београду и тако отићи у Бању. Ово је посебно препоручљиво ако хоћете да идете у сватове.<br />
						Погледајте <Link href="/tradition">Традиција</Link> страницу за више детаља о сватовима.<br />
						Најбоље је да изнајмите кола на аеродрому. <a href="https://beg.aero/eng/parking_access/transport/car_rental" target="_blank">Листа компанија за изнајмљивање аута можете наћи на сајту аеродрома.</a>
					</p>
					<p><b>Important warning #1!</b> Once you land at the airport, don't take a taxi from the people who are asking you if you need a taxi.<br />
						There are a lot of fake taxi drivers that will try to rip you off. So once you leave the gate you will see a booth next to the exit from the airport building where it says something like “taxi vouchers”.<br />
						You need to go there and tell them where you need to go and they will give you a voucher on which the real price for that destination is written.<br />
						You will then go outside of the building and look for the line of taxi vehicles on the left.<br />
						The taxi driver will ask you for the voucher to show it. Only enter in a vehicle where the driver is asking for this voucher.<br />
						No matter what the taxi driver says, you are obliged only to pay the amount written on this voucher, no more.<br />
						I never had problems with these taxi vouchers, but if you encounter some problems there is a number on the voucher that you can call.<br />
						UPDATE: The taxi voucher booth has been removed because of Corona and the fact that there was not so many passengers.<br />
						But there is still a line of taxi's in front of the building that you can take. <br />
						Take a look if the driver has an ID displayed on the front console of his car (this means the taxi is legit), otherwise you might end up paying 40e instead of 15e for a drive to the city.
					</p>
					<p><b>Important warning #2!</b> Never enter in a taxi on the street. Always call the taxi service instead.<br />
						There are a lot of wild fake taxis that will try to rip you off especially when they realize you are a foreigner.<br />
					</p>
					<p>
						The numbers of Belgrade taxi call centers can be found here: <a href="https://zovitaxi.com/beograd_e.html" target="_blank">zovitaxi.com</a><br />
						We would recommend, Pink, Lux or Beogradski taxi.<br />
						If you don't feel comfortable calling by phone, you can also use some of the apps:
					</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>Note that if there are no ticket boots on the station, you can also get a ticket directly in the train/bus from the conductor or the driver.<br />
					Ticket price for the bus or the train is around 10 euros.</p>
					<p>You can also rent a car in Belgrade and drive to Banja. This is specifically recommended because there will be one part of the wedding ceremony where you would need a car.<br />
						Check the <Link href="/tradition">Tradition</Link> page for more details on that.<br />
						It's best to rent the car on the airport. <a href="https://beg.aero/eng/parking_access/transport/car_rental" target="_blank">The list of rental companies you can find on the airport website.</a>

					</p>
					<p><b>Important warning #1!</b> Once you land at the airport, don't take a taxi from the people who are asking you if you need a taxi.<br />
						There are a lot of fake taxi drivers that will try to rip you off. So once you leave the gate you will see a booth next to the exit from the airport building where it says something like “taxi vouchers”.<br />
						You need to go there and tell them where you need to go and they will give you a voucher on which the real price for that destination is written.<br />
						You will then go outside of the building and look for the line of taxi vehicles on the left.<br />
						The taxi driver will ask you for the voucher to show it. Only enter in a vehicle where the driver is asking for this voucher.<br />
						No matter what the taxi driver says, you are obliged only to pay the amount written on this voucher, no more.<br />
						I never had problems with these taxi vouchers, but if you encounter some problems there is a number on the voucher that you can call.<br />
						UPDATE: The taxi voucher booth has been removed because of Corona and the fact that there was not so many passengers.<br />
						But there is still a line of taxi's in front of the building that you can take. <br />
						Take a look if the driver has an ID displayed on the front console of his car (this means the taxi is legit), otherwise you might end up paying 40e instead of 15e for a drive to the city.
					</p>
					<p><b>Important warning #2!</b> Never enter in a taxi on the street. Always call the taxi service instead.<br />
						There are a lot of wild fake taxis that will try to rip you off especially when they realize you are a foreigner.<br />
					</p>
					<p>
						The numbers of Belgrade taxi call centers can be found here: <a href="https://zovitaxi.com/beograd_e.html" target="_blank">zovitaxi.com</a><br />
						We would recommend, Pink, Lux or Beogradski taxi.<br />
						If you don't feel comfortable calling by phone, you can also use some of the apps:
					</p>
				</div>
			) : (
				<div>
					<p>Note that if there are no ticket boots on the station, you can also get a ticket directly in the train/bus from the conductor or the driver.<br />
						Ticket price for the bus or the train is around 10 euros.</p>
					<p>You can also rent a car in Belgrade and drive to Banja. This is specifically recommended because there will be one part of the wedding ceremony where you would need a car.<br />
						Check the <Link href="/tradition">Tradition</Link> page for more details on that.<br />
						It's best to rent the car on the airport. <a href="https://beg.aero/eng/parking_access/transport/car_rental" target="_blank">The list of rental companies you can find on the airport website.</a>

					</p>
					<p><b>Important warning #1!</b> Once you land at the airport, don't take a taxi from the people who are asking you if you need a taxi.<br />
						There are a lot of fake taxi drivers that will try to rip you off. So once you leave the gate you will see a booth next to the exit from the airport building where it says something like “taxi vouchers”.<br />
						You need to go there and tell them where you need to go and they will give you a voucher on which the real price for that destination is written.<br />
						You will then go outside of the building and look for the line of taxi vehicles on the left.<br />
						The taxi driver will ask you for the voucher to show it. Only enter in a vehicle where the driver is asking for this voucher.<br />
						No matter what the taxi driver says, you are obliged only to pay the amount written on this voucher, no more.<br />
						I never had problems with these taxi vouchers, but if you encounter some problems there is a number on the voucher that you can call.<br />
						UPDATE: The taxi voucher booth has been removed because of Corona and the fact that there was not so many passengers.<br />
						But there is still a line of taxi's in front of the building that you can take. <br />
						Take a look if the driver has an ID displayed on the front console of his car (this means the taxi is legit), otherwise you might end up paying 40e instead of 15e for a drive to the city.
					</p>
					<p><b>Important warning #2!</b> Never enter in a taxi on the street. Always call the taxi service instead.<br />
						There are a lot of wild fake taxis that will try to rip you off especially when they realize you are a foreigner.<br />
					</p>
					<p>
						The numbers of Belgrade taxi call centers can be found here: <a href="https://zovitaxi.com/beograd_e.html" target="_blank">zovitaxi.com</a><br />
						We would recommend, Pink, Lux or Beogradski taxi.<br />
						If you don't feel comfortable calling by phone, you can also use some of the apps:
					</p>
				</div>
			)}

			<ul>
				<li>Pink taxi - <a href="https://play.google.com/store/apps/details?id=com.netinformatika.pinkbeograd&hl=en&gl=US" target="_blank">Android</a> and <a href="https://apps.apple.com/us/app/pink-taxi-beograd/id1446423607" target="_blank">iOS</a></li>
				<li>Beogradski taxi - <a href="https://play.google.com/store/apps/details?id=com.netinformatika.beogradskitaxi&hl=sr" target="_blank">Android</a> and <a href="https://apps.apple.com/si/app/beogradski-19801-taxi/id1371331709" target="_blank">iOS</a></li>
			</ul>

			{lang === "sr" ? (
				<div>
					<p>
						You can also use the <a href="https://appcargo.com/en/cargo-2/" target="_blank">car::go</a> app which is like a Serbian Uber. <br />
						It is cheaper then taxi, but be aware that sometimes you need to wait a bit longer to find the driver in the near of you.<br />
						But if you're in the city center then there will always be some drivers ready to pick you up. <br />
						Everything is calculated and paid by the app, so you don't need to give any money to the driver.<br />
						Make sure to create the account and add your credit card, to be able to use it when you need it.
					</p>
					<p>
						Public transportation in Belgrade doesn't have metro, so you would need to use buses, trams or trolleybuses.<br />
						The system for tickets is called "Bus Plus", and a ticket price for 90min drive is 90 RSD.<br />
						There are several types of tickets you can get:</p>
						<ul>
							<li>The one time ticket at the driver, which costs a bit more, around 150 RSD</li>
							<li>The non-personalised ticket card that you can buy at the kiosk for 250 RSD and then recharge it with as much tickets as you want.</li>
							<li>The daily ticket for 1, 3 or 5 days, which costs 40 RSD plus additional tickets you need. This card you need to "read" on the ticket reader every time you switch buses during the 90min of your ride.</li>
							<li>MasterCard - if you have it you can just place it on the ticket reader in the bus and you got a 90min ticket for one person. If you switch buses you need to place it on the reader again.</li>
						</ul>

					<p>You can get these tickets on almost any kiosk you see, just ask for "Bus Plus".<br />
						Read more about the types of tickets on <a href="https://www2.busplus.rs/lt/vrste-karata" target="_blank">the Bus Plus website</a></p>

					<h2>Internet</h2>
					<p>Without internet it would be hard for you to navigate around, so make sure the moment you see a kiosk to get one pre-paid sim card.<br />
						Almost every kiosk sells these.</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>
						You can also use the <a href="https://appcargo.com/en/cargo-2/" target="_blank">car::go</a> app which is like a Serbian Uber. <br />
						It is cheaper then taxi, but be aware that sometimes you need to wait a bit longer to find the driver in the near of you.<br />
						But if you're in the city center then there will always be some drivers ready to pick you up. <br />
						Everything is calculated and paid by the app, so you don't need to give any money to the driver.<br />
						Make sure to create the account and add your credit card, to be able to use it when you need it.
					</p>

					<p>
						Public transportation in Belgrade doesn't have metro, so you would need to use buses, trams or trolleybuses.<br />
						The system for tickets is called "Bus Plus", and a ticket price for 90min drive is 90 RSD.<br />
						There are several types of tickets you can get:</p>
					<ul>
						<li>The one time ticket at the driver, which costs a bit more, around 150 RSD</li>
						<li>The non-personalised ticket card that you can buy at the kiosk for 250 RSD and then recharge it with as much tickets as you want.</li>
						<li>The daily ticket for 1, 3 or 5 days, which costs 40 RSD plus additional tickets you need. This card you need to "read" on the ticket reader every time you switch buses during the 90min of your ride.</li>
						<li>MasterCard - if you have it you can just place it on the ticket reader in the bus and you got a 90min ticket for one person. If you switch buses you need to place it on the reader again.</li>
					</ul>

					<p>You can get these tickets on almost any kiosk you see, just ask for "Bus Plus".<br />
						Read more about the types of tickets on <a href="https://www2.busplus.rs/lt/vrste-karata" target="_blank">the Bus Plus website</a></p>

					<h2>Internet</h2>
					<p>Without internet it would be hard for you to navigate around, so make sure the moment you see a kiosk to get one pre-paid sim card.<br />
						Almost every kiosk sells these.</p>
				</div>
			) : (
				<div>
					<p>
						You can also use the <a href="https://appcargo.com/en/cargo-2/" target="_blank">car::go</a> app which is like a Serbian Uber. <br />
						It is cheaper then taxi, but be aware that sometimes you need to wait a bit longer to find the driver in the near of you.<br />
						But if you're in the city center then there will always be some drivers ready to pick you up. <br />
						Everything is calculated and paid by the app, so you don't need to give any money to the driver.<br />
						Make sure to create the account and add your credit card, to be able to use it when you need it.
					</p>

					<p>
						Public transportation in Belgrade doesn't have metro, so you would need to use buses, trams or trolleybuses.<br />
						The system for tickets is called "Bus Plus", and a ticket price for 90min drive is 90 RSD.<br />
						There are several types of tickets you can get:</p>
					<ul>
						<li>The one time ticket at the driver, which costs a bit more, around 150 RSD</li>
						<li>The non-personalised ticket card that you can buy at the kiosk for 250 RSD and then recharge it with as much tickets as you want.</li>
						<li>The daily ticket for 1, 3 or 5 days, which costs 40 RSD plus additional tickets you need. This card you need to "read" on the ticket reader every time you switch buses during the 90min of your ride.</li>
						<li>MasterCard - if you have it you can just place it on the ticket reader in the bus and you got a 90min ticket for one person. If you switch buses you need to place it on the reader again.</li>
					</ul>

					<p>You can get these tickets on almost any kiosk you see, just ask for "Bus Plus".<br />
					Read more about the types of tickets on <a href="https://www2.busplus.rs/lt/vrste-karata" target="_blank">the Bus Plus website</a></p>

					<h2>Internet</h2>
					<p>Without internet it would be hard for you to navigate around, so make sure the moment you see a kiosk to get one pre-paid sim card.<br />
						Almost every kiosk sells these.</p>
				</div>
			)}

			<div class="frame">
				<div class="frameBody">
					<img src="/assets/transportation/38832-vip-sim-prepaid-kartica.jpeg" alt="vip-mobile" width="600" />
				</div>
			</div>

			{lang === "sr" ? (
				<div>
					<p>We usually use VIP mobile provider, since they have a nice starting package. Last time we each got 21 GB that you can use for a month.<br />
						And you would pay only 300 dinars, which is like 2.5 euro.<br />
						Last time we were in Serbia we saw that they changed their brand name to <a href="https://a1.rs/privatni" target="_blank">A1.</a><br />
						Make sure not to take "the special sim card for foreigners". They also offer this, not sure why would anyone buy this, it's way less GBs and you pay ~30 euros.</p>
					<p>
						The instructions to activate the sim card are sometimes not in English, unfortunately, but it is easy. <br />
						You need to call once `0611234` number, and then activate the "Bonus" package by calling `*123#` and choosing the correct option, usually by replying with 1.<br />
						Sometimes it takes some minutes for the GBs to be activated so be patient. <br />
						If it still doesn't work, restart your phone, or google translate the instructions. <br />
						Don't be desperate, usually in every caffe, restaurant etc. there is a complimentary WiFi that you could use, just ask the waiter for the password if it's not open.<br />
						Or just ask someone to help you. Usually younger people speak English.
					</p>

					<h2>Money</h2>
					<p>Official currency in Serbia is Dinar, short RSD, or DIN. 1 Euro is about ~120 RSD.</p>
				</div>
			) : lang === "de" ? (
				<div>
					<p>We usually use VIP mobile provider, since they have a nice starting package. Last time we each got 21 GB that you can use for a month.<br />
						And you would pay only 300 dinars, which is like 2.5 euro.<br />
						Make sure not to take "the special sim card for foreigners". They also offer this, not sure why would anyone buy this, it's way less GBs and you pay ~30 euros.</p>
					<p>
						The instructions to activate the sim card are not in English, unfortunately, but it is easy. <br />
						You need to call once `0601234` number, and then activate the "Bonus" package by calling `*123#` and choosing the correct option, usually by replying with 1.<br />
						Sometimes it takes some minutes for the GBs to be activated so be patient. <br />
						If it still doesn't work, restart your phone, or google translate the instructions. <br />
						Don't be desperate, usually in every caffe, restaurant etc. there is a complimentary WiFi that you could use, just ask the waiter for the password if it's not open.<br />
						Or just ask someone to help you. Usually younger people speak English.
					</p>

					<h2>Money</h2>
					<p>Official currency in Serbia is Dinar, short RSD, or DIN. 1 Euro is about ~120 RSD.</p>
				</div>
			) : (
				<div>
					<p>We usually use VIP mobile provider, since they have a nice starting package. Last time we each got 21 GB that you can use for a month.<br />
						And you would pay only 300 dinars, which is like 2.5 euro.<br />
						Make sure not to take "the special sim card for foreigners". They also offer this, not sure why would anyone buy this, it's way less GBs and you pay ~30 euros.</p>
					<p>
						The instructions to activate the sim card are not in English, unfortunately, but it is easy. <br />
						You need to call once `0601234` number, and then activate the "Bonus" package by calling `*123#` and choosing the correct option, usually by replying with 1.<br />
						Sometimes it takes some minutes for the GBs to be activated so be patient. <br />
						If it still doesn't work, restart your phone, or google translate the instructions. <br />
						Don't be desperate, usually in every caffe, restaurant etc. there is a complimentary WiFi that you could use, just ask the waiter for the password if it's not open.<br />
						Or just ask someone to help you. Usually younger people speak English.
					</p>

					<h2>Money</h2>
					<p>Official currency in Serbia is Dinar, short RSD, or DIN. 1 Euro is about ~120 RSD.</p>
				</div>
			)}

			<div class="textImagePair textImagePairAli">
				<div class="frame">
					<div class="frameBody">
						<img src="/assets/transportation/dinari_081117_tw1024.jpeg" alt="srpski-dinari" width="600" />
					</div>
				</div>
				{lang === "sr" ? (
					<p class="paragraph">
						We would recommend you to exchange your money in an exchange office the moment you see one.<br />
						Usually they are stationed like little booths or kiosks and you can find them on every corner. <br />
						Serbian name for an exchange office is "Menjačnica" or "Мењачница" in Cyrillic. <br />
						There are also some exchange offices on the airport so make sure you exchange some before you enter a taxi.<br />
						People in taxis or stores sometimes accept paper euros, but keep in mind that the exchange rate will not be in your favour, so better have some dinars with you.
					</p>
				) : lang === "de" ? (
					<p class="paragraph">
						We would recommend you to exchange your money in an exchange office the moment you see one.<br />
						Usually they are stationed like little booths or kiosks and you can find them on every corner. <br />
						Serbian name for an exchange office is "Menjačnica" or "Мењачница" in Cyrillic. <br />
						There are also some exchange offices on the airport so make sure you exchange some before you enter a taxi.<br />
						People in taxis or stores sometimes accept paper euros, but keep in mind that the exchange rate will not be in your favour, so better have some dinars with you.
					</p>
				) : (
					<p class="paragraph">
						We would recommend you to exchange your money in an exchange office the moment you see one.<br />
						Usually they are stationed like little booths or kiosks and you can find them on every corner. <br />
						Serbian name for an exchange office is "Menjačnica" or "Мењачница" in Cyrillic. <br />
						There are also some exchange offices on the airport so make sure you exchange some before you enter a taxi.<br />
						People in taxis or stores sometimes accept paper euros, but keep in mind that the exchange rate will not be in your favour, so better have some dinars with you.
					</p>
				)}

			</div>

		</div>
	)
};

export default Transportation;
