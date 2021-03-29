	import { h } from 'preact';
import style from './style.css';
	import {Link} from "preact-router/match";

const Transportation = () => (
	<div class={style.home}>
		<h1>Transportation</h1>
		<p>Coming from outside of Serbia it is best to come with the airplane to Belgrade.<br />
			There is also an airport in Tuzla in Bosnia, but due to travel restrictions in Bosnia it could produce problems for you on the border. <br />
			Please check the latest regulations for entering <a href="https://www.mfa.gov.rs/gradjani/ulazak-u-srbiju/covid-19-uslovi-za-ulazak" target="_blank">Serbia</a>.
		</p>
		<p>We recommend spending 2-3 days in Belgrade if you haven’t been there before. The city is famous for it's history and fortress in the city center but also for it's very vivid nightlife.<br />
		Please check out our <Link href="/interesting">Things to do</Link> page for more details what to do in Belgrade.

		</p>
		<p>From Belgrade to Banja Koviljača you can take the bus from <a href="http://www.bas.rs/en/" target="_blank">the main bus station</a> in the Belgrade city center.<br />
			Usually there is a bus every hour that goes to Loznica, from which you can take a taxi to Banja.<br />
			You can also take the direct bus to Banja, but <a href="http://www.bas.rs/en/" target="_blank">check for the schedule beforehand</a>.
		</p>
		<p>Besides the bus you can also take the train. The train goes once per day so it might be tricky to arrange yourself,
			but the ride is very enjoyable since not so many people use it. <br />
			The main train station in Belgrade is moved to <a href="https://goo.gl/maps/NKFs2xao1nYPBPrB8" target="_blank">Prokop</a> which is not in the city center <br />
			so you would need to take a taxi and calculate some extra time to get there.<br />
			Instead of going to Prokop, you can also go to the next station which is on <a href="https://goo.gl/maps/Vkeg11fbDxy2joZf9" target="_blank">New Belgrade</a>.<br />
			You can check the train timetable here: <a href="https://www.srbvoz.rs/en/timetable/" target="_blank">srbvoz.rs</a>
		</p>
		<p>Note that if there are no ticket boots on the station, you can also get a ticket directly in the train/bus from the conductor or the driver.</p>
		<p>You can also rent a car in Belgrade and drive to Banja. This is specifically recommended because there will be one part of the wedding ceremony where you would need a car.<br />
			Check the <Link href="/tradition">Tradition</Link> page for more details on that.<br />
			It's best to rent the car on the airport. <a href="https://beg.aero/eng/parking_access/transport/car_rental" target="_blank">The list of rental companies you can find on the airport website.</a>

		</p>
		<p><b>Important warning #1!</b> Once you land at the airport, never in any circumstances take a taxi from people who are asking you if you need a taxi.<br />
			There are a lot of fake taxi drivers that will try to rip you off. So once you leave the gate you will see a booth next to the exit from the airport building where it says something like “taxi vouchers”.<br />
			You need to go there and tell them where you need to go and they will give you a voucher on which the real price for that destination is written.<br />
			You will then go outside of the building and look for the line of taxi vehicles on the left.<br />
			The taxi driver will ask you for the voucher to show it. Only enter in vehicles where the driver is asking for this voucher.<br />
			No matter what the taxi driver says, you are obliged only to pay the amount written on this voucher, no more.<br />
			I never had problems with these taxi vouchers, but if you encounter some problems there is a number on the voucher that you can call.
		</p>
		<p><b>Important warning #2!</b> Never enter in a taxi on the street. Always call the taxi service instead.<br />
			There are a lot of wild fake taxis that will try to rip you off especially when they realize you are a foreigner.<br />
		</p>
		<p>
			The numbers of Belgrade taxi call centers can be found here: <a href="https://zovitaxi.com/beograd_e.html" target="_blank">zovitaxi.com</a><br />
			We would recommend, Pink, Lux or Beogradski taxi.<br />
			If you don't feel comfortable calling by phone, you can also use some of the apps:
			<ul>
				<li>Pink taxi - <a href="https://play.google.com/store/apps/details?id=com.netinformatika.pinkbeograd&hl=en&gl=US" target="_blank">Android</a> and <a href="https://apps.apple.com/us/app/pink-taxi-beograd/id1446423607" target="_blank">iOS</a></li>
				<li>Beogradski taxi - <a href="https://play.google.com/store/apps/details?id=com.netinformatika.beogradskitaxi&hl=sr" target="_blank">Android</a> and <a href="https://apps.apple.com/si/app/beogradski-19801-taxi/id1371331709" target="_blank">iOS</a></li>
			</ul>
		</p>
		<p>
			You can also use the <a href="https://appcargo.com/en/cargo-2/" target="_blank">car::go</a> app which is like a Serbian Uber. <br />
			It is cheaper then taxi, but be aware that sometimes you need to wait a bit longer to find the driver in the near of you.<br />
			But if you're in the city center then there will always be some drivers ready to pick you up. <br />
			Everything is calculated and paid by the app, so you don't need to give any money to the driver.<br />
			Make sure to create the account and add your credit card, to be able to use it when you need it.
		</p>

		<h2>Internet</h2>
		<p>Without internet it would be hard for you to navigate around, so make sure the moment you see a kiosk to get one pre-paid sim card.<br />
		Almost every kiosk sells these.</p>
		<img src="https://www.bcgroup-online.com/upload/b/38832-vip-sim-prepaid-kartica.jpg" alt="vip-mobile" width="600" />
		<p>We usually use VIP mobile provider, since they have nice starting package. Last time we each got 21 GB that you can use for a month.<br />
			And you would pay only 300 dinars, which is like 2.5 euro.<br />
			Make sure not to take "the special sim card for foreigners". They also offer this, not sure why would anyone buy this, it's way less GBs and you pay ~30 euros.</p>
		<p>
			The instruction to activate the sim card are not in English, unfortunately, but it is easy. <br />
			You need to call once `0601234` number, and then activate the "Bonus" package by calling `*123#` and choosing the correct option, usually by replying with 1.<br />
			Sometimes it takes some minutes for the GBs to be activated so be patient. <br />
			If it still doesn't work, restart your phone, or google translate the instructions. <br />
			Don't be desperate, usually in every caffe, restaurant etc. there is a complimentary WiFi that you could use, <br />just ask the waiter for the password if it's not open.<br />
			Or just ask someone to help you. Usually younger people speak English.
		</p>
	</div>
);

export default Transportation;
