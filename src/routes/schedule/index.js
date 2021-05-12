import style from './style.scss';
import { TranslateContext } from '@denysvuika/preact-translate';
import {useContext} from "preact/hooks";

const Schedule = () => {
	const { t } = useContext(TranslateContext);
	return (
		<div class="pageWrapper">
			<h1>{t("schedule_title")}</h1>
			<ul class="noBullets">
				<li class={style.listItem}><time datetime="13:00+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>13:00<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>{t("schedule_1")}</span></li>
				<li class={style.listItem}><time datetime="14:00+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>14:00<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>{t("schedule_2")}</span></li>
				<li class={style.listItem}><time datetime="14:30+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>14:30<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>{t("schedule_3")}</span></li>
				<li class={style.listItem}><time datetime="15:30+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>15:30<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>{t("schedule_4")}</span></li>
				<li class={style.listItem}><time datetime="16:00+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>16:00<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>{t("schedule_5")}<br />{t("schedule_51")}</span></li>
				<li class={style.listItem}><time datetime="17:00+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>17:00<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>{t("schedule_6")}</span></li>
				<li class={style.listItem}><time datetime="18:30+02:00" class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>18:30<span class="ampersandArrowRight"></span></time> <span class={style.listItemText}>{t("schedule_7")}</span></li>
				<li class={style.listItem}><span><span class={style.time}>Party</span><strong class={`${style.time} ampersand`}><span class="ampersandArrowLeft"></span>open end<span class="ampersandArrowRight"></span></strong><span class={style.listItemText}>{t("schedule_8")}</span></span></li>
			</ul>
		</div>
	)
};

export default Schedule;
