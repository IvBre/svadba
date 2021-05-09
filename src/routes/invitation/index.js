import React from 'react';
import style from './style.scss';
import {useContext, useEffect, useState} from "preact/hooks";
import {getInvitationCall} from "../../components/app";
import {TranslateContext} from "@denysvuika/preact-translate";
import RSVPForm from "../../components/invitation/RSVPForm";

const ViewInvitation = ({code, invitation}) => {
	const { t } = useContext(TranslateContext);

	return (
		<div class={style.viewInvitation}>
			<h2>{t("view_invitation_summary")}:</h2>
			<div class="box">
				<div class="boxBody">
					<em class="label">E-mail:</em>
					<p class="answeredField">{invitation.email}</p>
				</div>
			</div>
			{invitation.guests && invitation.guests.map((guest, index) =>
				<div class="box">
					<div class="boxBody">
						<em class="label">{t("name")}: </em>
						<p class="answeredField">{guest.name}</p>
						
						<em class="label">{t("is_coming")}:</em>
						<p class="answeredField">{guest.isComing ? t("yes") : t("no")}</p>
						
						<em class="label">{t("is_vegetarian")}:</em>
						<p class="answeredField">{guest.isVegetarian ? t("yes") : t("no")}</p>
					</div>	
				</div>
			)}

			<span class="centerX">
				<a href={"/u/" + code} class="buttonChoice">{t("edit_invitation")}</a>
			</span>

		</div>
	);
}

// Note: `code` comes from the URL, courtesy of our router
const InvitationPage = ({ code, path }) => {
	const { t } = useContext(TranslateContext);

	const [invitation, setInvitation] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		getInvitationCall(code)
			.then(response => {
				console.log(response)
				if (response.status === "error") {
					setError(response.message)
				} else {
					setInvitation(response.data);
				}
			});
	}, [])

	return (
		<div class="pageWrapper">
			<h1>{t("your_invitation")}: {code}</h1>

			{invitation ?
				(path === "/r/:code" ? <ViewInvitation code={code} invitation={invitation} /> :
				<RSVPForm state={{ code: code, display: true, invitation: invitation}} />) :
				error ? <div class="error"><strong>{error}</strong></div> : <p>{t("loading_invitation")}</p>}
		</div>
	);
}

export default InvitationPage;
