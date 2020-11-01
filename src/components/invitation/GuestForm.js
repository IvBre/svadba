import React from 'react';

export class GuestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = GUEST_DEFAULT_OBJ;
    }

    render({ onInput, state }) {
        console.log("RENDER GuestForm")
        console.log(state)
        return (
            <>
                <input type="hidden" name="guestId[]" value={state.guestId} />
                <div class="row">
                    <label>
                        Name:
                        <input name="name[]" type="text" value={state.name} onInput={onInput} />
                    </label>
                </div>
                <div class="row">
                    <label>
                        Are you joining us?
                        <input name="isComing[]" type="checkbox" defaultChecked={state.isComing} onInput={onInput} />
                    </label>
                </div>
                <div class="row">
                    <label>
                        Are you a vegetarian?
                        <input name="isVegetarian[]" type="checkbox" defaultChecked={state.isVegetarian} onInput={onInput} />
                    </label>
                </div>
            </>
        );
    }
}

export const GUEST_DEFAULT_OBJ = { guestId: 0, name: "", isComing: false, isVegetarian: false };