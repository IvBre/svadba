import React from 'react';
import style from './style.css';
import {useContext, useEffect, useState} from "preact/hooks";
import {getInvitationCall} from "../../components/app";
import {TranslateContext} from "@denysvuika/preact-translate";
import RSVPForm from "../../components/invitation/RSVPForm";

const ViewInvitation = ({code, invitation}) => {
	const { t } = useContext(TranslateContext);

	return (
		<div class={style.viewInvitation}>
			<p>{t("view_invitation_summary")}:</p>
			<div class="row">
				E-mail: {invitation.email}
			</div>
			{invitation.guests && invitation.guests.map((guest, index) =>
				<div class="row">
					<p>{t("name")}: {guest.name}</p>
					<p>{t("is_coming")}: {guest.isComing ? t("yes") : t("no")}</p>
					<p>{t("is_vegetarian")}: {guest.isVegetarian ? t("yes") : t("no")}</p>
				</div>
			)}
			<a href={"/u/" + code}>{t("edit_invitation")}</a>

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
		<div class={style.invitation}>
			<h1>{t("your_invitation")}: {code}</h1>

			{invitation ?
				(path === "/r/:code" ? <ViewInvitation code={code} invitation={invitation} /> :
				<RSVPForm state={{ code: code, display: true, invitation: invitation}} />) :
				error ? <div class="error">{error}</div> : <p>{t("loading_invitation")}</p>}
		</div>
	);
}

export default InvitationPage;
