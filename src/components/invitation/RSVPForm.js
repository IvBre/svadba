import React from 'react';
import GuestForm from './GuestForm';

class RSVPForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { display: false, addMore: false, code: "", invitation: { email: "", maxGuests: 0, guests: [] } };
        this.state = this.props.state;

        this.handleAddMoreGuests = this.handleAddMoreGuests.bind(this);
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
        )
    }

    handleGuestChange = (index) => (event) => {
        console.log("GUEST CHANGE")

        let { name, value, checked } = event.target

        if (checked === true) value = true
        else if (checked === false) value = false

        console.log(name)
        console.log(value)
        let guests = this.state.invitation.guests;

        guests[index] = {
            ...guests[index],
            [name.slice(0, -2)]: value
        }

        console.log(guests)

        this.setState(
            {
                ...this.state,
                invitation: {
                    ...this.state.invitation,
                    guests: guests
                }
            }
        )
        console.log(this.state)
        console.log("FIELD CHANGE END")
    }

    handleNewGuestChange = (index) => (event) => {
        console.log("NEW GUEST CHANGE")

        let { name, value, checked } = event.target

        if (checked === true) value = true
        else if (checked === false) value = false

        console.log(name)
        console.log(value)
        let guests = this.state.invitation.guests;

        guests[index] = {
            ...guests[index],
            [name.slice(0, -2)]: value
        }

        console.log(guests)

        this.setState(
            {
                ...this.state,
                invitation: {
                    ...this.state.invitation,
                    guests: guests
                }
            }
        )
        console.log(this.state)
        console.log("NEW GUEST CHANGE END")
    }

    handleAddMoreGuests() {
        console.log("ADD MORE");
        if (this.state.invitation.maxGuests > this.state.invitation.guests.length) {
            this.setState(
                {
                    ...this.state,
                    addMore: true
                }
            )

            console.log(this.store);
        }
    }

    handleSubmit = (event) => {
        console.log('A form was submitted: ');
        console.log(this.state);

        fetch('http://localhost:5000/u/' + this.state.code, {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state.invitation)
        }).then(response => {
            console.log(response)
            return response.json();
        }).then(data => console.log(data));

        event.preventDefault();
    }

    render(props, state) {
        console.log("RENDER RSVP -------")
        console.log(this.state)
        console.log(this.props)
        console.log(this.state.invitation.maxGuests)
        console.log(this.state.invitation.guests.length)
        console.log("RENDER RSVP END -------")

        if (!this.state.display) {
            return;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div class="row">
                    <label>
                        Email:
                        <input type="email" value={this.state.invitation.email} name="email" onInput={this.handleInvitationChange} />
                    </label>
                </div>

                {this.state.invitation.guests && this.state.invitation.guests.map((guest, index) =>
                    <GuestForm state={guest} onInput={this.handleGuestChange(index)} />
                )}

                {this.state.invitation.maxGuests > this.state.invitation.guests.length ?
                    <button onClick={this.handleAddMoreGuests}>Add more guest(s)</button> : ""
                }

                {this.state.addMore ?
                    <GuestForm state={} onInput={this.handleNewGuestChange(this.state.invitation.guests.length + 1)} />
                    : ""
                }

                <div class="row">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

export default RSVPForm;