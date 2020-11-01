import React from 'react';
import RSVPForm from './RSVPForm';
import {getInvitationCall} from "../app";

class SearchInvitationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { code: '', invitation: {}, display: false };
    }

    handleCodeChange = (event) => {
        this.setState({ ...this.state, code: event.target.value });
    }

    handleSubmit = (event) => {
        getInvitationCall(this.state.code).then(response => {
            console.log(response)
            this.setState({ ...this.state, invitation: response.data, display: true });
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

        event.preventDefault();
    }

    render(props, state) {
        let rsvpForm;
        if (this.state.display) {
            rsvpForm = <RSVPForm state={ this.state } />
        }

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div class="row">
                        <label>
                            Name:
                            <input type="text" value={this.state.value} name="code" onInput={this.handleCodeChange} />
                        </label>
                    </div>
                    <div class="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                {rsvpForm}
            </>
        );
    }
}

export default SearchInvitationForm;