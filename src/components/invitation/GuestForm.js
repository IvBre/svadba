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
                <div class="box">
                    <div class="boxBody">
                        <label>
                            <span class="label">Name:</span>
                            <input name="name[]" type="text" value={state.name} onInput={onInput} class="inputText" />
                        </label>

                        <div class="layout">
                            <label class="labelWrapperInline marginLeftNone">
                                <span class="label labelInline">Are you joining us?</span>
                                <input name="isComing[]" type="checkbox" defaultChecked={state.isComing} onInput={onInput} class="inputCheckbox" />
                                <span class="pinoeppel"></span>
                            </label>

                            <label class="labelWrapperInline">
                                <span class="label labelInline">Are you a vegetarian?</span>
                                <input name="isVegetarian[]" type="checkbox" defaultChecked={state.isVegetarian} onInput={onInput} class="inputCheckbox" />
                                <span class="pinoeppel"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export const GUEST_DEFAULT_OBJ = { guestId: 0, name: "", isComing: false, isVegetarian: false };