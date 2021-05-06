import style from './style.scss';

const Schedule = () => (
	<div class="pageWrapper">
		<h1>Wedding day schedule</h1>
		<ul>
			<li class={style.listItem}><time datetime="13:00+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>13:00<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>Cocktail for the guests <span lang="sr">(svatovi)</span> at the top balcony of Kur-salon.</span></li>
			<li class={style.listItem}><time datetime="14:00+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>14:00<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>The <span lang="sr">svatovi</span> are going with the groom to Donja Borina to get his future bride.</span></li>
			<li class={style.listItem}><time datetime="14:30+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>14:30<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>Arrival at the house of the bride's parents. There will be drinks and music.</span></li>
			<li class={style.listItem}><time datetime="15:30+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>15:30<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>Going back to Kur-Salon together with the bride.</span></li>
			<li class={style.listItem}><time datetime="16:00+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>16:00<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>Guests can enter the wedding hall, and sit on their designated tables. <br />Please ask at the door where you need to sit.</span></li>
			<li class={style.listItem}><time datetime="17:00+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>17:00<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>Wedding ceremony at the top balcony of Kur-Salon.</span></li>
			<li class={style.listItem}><time datetime="18:30+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>18:30<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>The wedding cake ceremony.</span></li>
			<li class={style.listItem}><span><span class={style.time}>Party</span><strong class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>open end<span class="ampersandArrowRight"></span></strong><span class={style.listItemText}>Actually there is an end at midnight, but if we want we can prolong it.</span></span></li>
		</ul>
	</div>
);

export default Schedule;
