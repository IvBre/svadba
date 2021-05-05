import { Link } from "preact-router/match";

const Location = () => (
	<div class="pageWrapper">
		<h1>Venue and acco&shy;mmoda&shy;tion</h1>
		<p>The wedding venue is in the grand hall of <strong>“Kur salon”</strong> in a little town called Banja Koviljača in the west of Serbia.</p>
		
		<div class="textImagePair textImagePairAli">
			<div class="frame">
				<div class="frameBody">
					<img src="./routes/location/img/kur_salon_banja_koviljaca1.jpeg" alt="kur-salon" width="600" />
				</div>
			</div>
			<p class="paragraph">The building is part of the complex of an old rehabilitation hospital and a spa center in the central park in Banja.</p>
		</div>
		
		<div class="textImagePair textImagePairBenny">
			<div class="frame">
				<div class="frameBody">
					<img src="./routes/location/img/banjski-park.jpeg" alt="banja-koviljaca-park" width="600" />
				</div>
			</div>
			<p class="paragraph">
				Here's how this park looks like from the birds perspective. <br />
				In the middle of it you can see a big fountain, and if you turn towards west you will see Kur Salon.<br />
				Other buildings that you can see are specialized rehabilitation hospital and a wellness center "Kovilje".
			</p>
		</div>

		{/* 
		<img src="htdcdtps://banjakoviljaca.rs/img/banja-koviljaca/banja-koviljaca.jpg" alt="banjski-park-fontana" width="600" />
		*/}
		<div class="textImagePair textImagePairAli">
			<div class="frame">
				<div class="frameBody">
					<img src="./routes/location/img/kur_salon_banja_koviljaca9.jpeg" alt="kur-salon-king-petar" width="600" />
				</div>
			</div>
			<p class="paragraph">The ceremony will be performed on the upper balcony of “King Petar I Karadjordjevic” hall in Kur-Salon, overlooking the park and the fountain.</p>
		</div>
		
		{/* 
			<img src="https://www.kursalon.rs/img/kur_salon_banja_koviljaca17.jpg" alt="kur-salon-balcony" width="600" />
		*/}

		<h2>Accommodation in Banja Koviljaca</h2>
		<p>Banja is a touristic place, so you will find many hotels and apartments for rent in the near.</p>
		
		<div class="textImagePair textImagePairMicha">
			<div class="frame">
				<div class="frameBody">
					<img src="./routes/location/img/kovilje.png" alt="kovilje-welness-hotel" width="600" />
				</div>
			</div>
			<p class="paragraph">We recommend the hotel “<a href="https://www.google.com/travel/hotels/s/N3xqb" target="_blank">Kovilje wellness center</a>” which is in the very close vicinity of Kur Salon.</p>
		</div>
		
		<div class="textImagePair textImagePairJerome">
			<div class="frame">
				<div class="frameBody">
					<img src="./routes/location/img/royal-spa.png" alt="banja-koviljaca-royal-spa" width="600" />
				</div>
			</div>
			<div class="paragraph-wrapper">
				<p class="paragraph">A slightly cheaper but also very nice hotel is “<a href="http://www.royalspa.rs/smestaj_en.php" target="_balnk">Royal Spa</a>” which is right next to the park.</p>
				<p class="paragraph">For the Royal Spa we can have a discount if more people would like to book there. Unfortunatelly we can't know the amount of this discount until we know how many people would be interested.</p>
				<p class="paragraph">If you are one of the interested please let us know asap at: <a href="mailto:petrovivana@gmail.com">petrovivana@gmail.com</a></p>
			</div>
		</div>
		<p>You can check <a href="https://www.trivago.de/?aDateRange%5Barr%5D=2021-08-06&aDateRange%5Bdep%5D=2021-08-08&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=418308%2F200&hasList=1&hasMap=1&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=20000&address=&addressGeoCode=&offset=0&ra=&overlayMode=" target="_blank">trivago</a> for more accommodations, just keep in mind that you want to be within walking distance from the Banja’s central park.</p>

		<h2>Accommodation in Loznica</h2>
		<p>
			Loznica is the next bigger city to the wedding venue. If you want you can also book accommodation there,
			but then you would have to take a 10min ride with a taxi to Banja. Don't worry taxi's in Loznica are very cheap.
			Although we have to warn you, beside more restaurants and bars, Loznica doesn't have much else to offer regarding activities.
		</p>

		<h2>Accommodation in Belgrade</h2>
		<p>If you are coming with the airplane you will arrive to the one and only airport in Belgrade: Airport <span lang="rs">Nicola Tesla</span>. </p>
		<p>Yes, Tesla was Serbian and don't worry we didn't forgot about our other wordly known Serbian, AirSerbia's airplanes are named by <span lang="sr">Novak Djokovic</span> ;) </p>
		<p>We would recommend you, if you have time, to take a couple of days to check out the city.</p>
		<p>Usually in 2-3 days you can see most of the stuff, but if you are a party animal then take some days more.
			Party days are from Thursday until Saturday. Although in August there will be parties on other days as well, especially on the river and the beach.</p>
		<p>Yes, Belgrade has a beach! But its a sweat water lake beach, called <span lang="sr">"Ada Ciganlija"</span> and has a bunch of beach bars, beer garden etc.
			For more information on activities in Belgrade check our <Link href="/interesting">Things to do</Link> page.</p>
		<p>For accommodation, you can find really a lot online. We would recommend to take an AirBnB apartment, since they are quite cheaper then hotels, and are mostly central.</p>
		<p>This is where you want to be basically, in the old town. You can also try New Belgrade (other side of the river) but keep in mind that for every trip to the city center you need to take a tram/bus/taxi.</p>
		{/* <img src="./routes/location/img/old-town-stari-grad-belgrade.png" alt="old-town-belgrade" width="600" /> */}
		
		<div class="frame">
			<div class="frameBody">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11320.446911395979!2d20.45356569991093!3d44.819288436256784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab51ce20e1d%3A0x25ea809ecfd66a1a!2z0KHRgtCw0YDQuCDQs9GA0LDQtCwgQmVsZ3JhZGUsIFNlcmJpYQ!5e0!3m2!1sen!2sde!4v1619890328396!5m2!1sen!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
			</div>
		</div>
		<p>If you really want to indulge your self and get a taste of how the upper class was living in Serbia in the early 1900s you can check out the famous <a href="https://hotelmoskva.rs/" target="_blank">Hotel Moskva</a>.
			It is one of the rare buildings in Belgrade surviving both world wars, and was a witness to many diplomatic strategies and negotiations,
			inspirational artists, Nobel Price winner writers, royal events, all night long conversations, so as you can image this building walls heard many secrets during the last century of its existence.</p>
	
		<div class="textImagePair textImagePairAli">
			<div class="frame">
				<div class="frameBody">
					<img src="./routes/location/img/moskva.jpeg" alt="hotel-moskva-belgrade" width="600" />
				</div>
			</div>
		</div>

	</div>
);

export default Location;
