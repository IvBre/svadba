import React from 'react';
import { route } from 'preact-router';
import { GuestForm, GUEST_DEFAULT_OBJ } from './GuestForm';
import {useContext} from "preact/hooks";
import {TranslateContext} from "@denysvuika/preact-translate";
import {API_HOST} from "../app";

class RSVPForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { display: false, code: "", invitation: { email: "", maxGuests: 0, guests: [] } };
        this.state = this.props.state;

        this.translation = useContext(TranslateContext);

        this.handleAddMoreGuests = this.handleAddMoreGuests.bind(this);
        this.handleRemoveGuest = this.handleRemoveGuest.bind(this);
    }

    handleInvitationChange = (event) => {
        this.setState(
            {
                ...this.state,
                invitation: {
                    ...this.state.invitation,
                    [event.target.name]: event.target.value
                }
            }
        );
    }

    handleGuestChange = (index) => (event) => {
        console.log("GUEST CHANGE")

        let { name, value, type, checked } = event.target;

        if (type === "checkbox") value = checked;

        let guests = this.state.invitation.guests;

        guests[index] = {
            ...guests[index],
            [name.slice(0, -2)]: value
        };

        this.setState(
            {
                ...this.state,
                invitation: {
                    ...this.state.invitation,
                    guests: guests
                }
            }
        );
        console.log(this.state)
        console.log("FIELD CHANGE END")
    }

    handleAddMoreGuests = (event) => {
        console.log("ADD MORE");
        if (this.state.invitation.maxGuests > this.state.invitation.guests.length) {
            console.log("We can add more!")

            let guests = this.state.invitation.guests;
            let index = this.state.invitation.guests.length;

            if (typeof guests[index] === "undefined") {
                guests[index] = GUEST_DEFAULT_OBJ;
            }

            this.setState(
                {
                    ...this.state,
                    invitation: {
                        ...this.state.invitation,
                        guests: guests
                    }
                }
            );

            console.log(this.store);
        }

        event.preventDefault();
    }

    handleRemoveGuest = (index) => (event) => {
        console.log("REMOVE GUEST");

        let guests = this.state.invitation.guests;

        guests.splice(index, 1);

        this.setState(
            {
                ...this.state,
                invitation: {
                    ...this.state.invitation,
                    guests: guests
                }
            }
        );

        event.preventDefault();
    }

    handleSubmit = (event) => {
        console.log('A form was submitted: ');
        console.log(this.state);

        fetch(API_HOST + '/u/' + this.state.code, {
            method: 'POST',
            headers: {
                "Accept-Language": this.translation.lang
            },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state.invitation)
        })
            .then(response => response.json())
            .then(data => route('/r/' + this.state.code))
            .catch((error) => console.log(error));

        event.preventDefault();
    }

    render(props, state) {
        console.log("RENDER RSVP -------")
        console.log(this.state)
        console.log("RENDER RSVP END -------")

        if (!this.state.display) {
            return;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div class="box">
                    <div class="boxBody">
                        <label class="label" for="input-email">Email:</label>
                        <input id="input-email" name="input-email" class="inputText" type="email" value={this.state.invitation.email} onInput={this.handleInvitationChange} />
                    </div>
                </div>

                {this.state.invitation.guests && this.state.invitation.guests.map((guest, index) =>
                    <>
                    <GuestForm state={guest} onInput={this.handleGuestChange(index)} />
                    {guest.guestId === 0 ?
                        <button onClick={this.handleRemoveGuest(index)} class="buttonChoice">Remove guest</button> : ""
                    }
                    </>
                )}

                {this.state.invitation.maxGuests > this.state.invitation.guests.length ?
                    <button onClick={this.handleAddMoreGuests} class="buttonChoice">Add more guest(s)</button> : ""
                }

                <span class="centerX">
                    <button type="submit" class="buttonChoice">Submit</button>
                </span>
            </form>
        );
    }
}

export default RSVPForm;