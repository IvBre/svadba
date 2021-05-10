import React from 'react';

export class GuestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = GUEST_DEFAULT_OBJ;
    }

    render({ onInput, state }) {
        return (
            <>
                <input type="hidden" name="guestId[]" value={state.guestId} />
                <div class="box">
                    <div class="boxBody">
                        <label>
                            <span class="label">{t("name")}:</span>
                            <input name="name[]" type="text" value={state.name} onInput={onInput} class="inputText" />
                        </label>

                        <div class="layout">
                            <label class="labelWrapperInline marginLeftNone">
                                <span class="label labelInline">{t("are_u_joining")}</span>
                                <input name="isComing[]" type="checkbox" defaultChecked={state.isComing} onInput={onInput} class="inputCheckbox" />
                            </label>

                            <label class="labelWrapperInline">
                                <span class="label labelInline">{t("are_u_vegetarian")}</span>
                                <input name="isVegetarian[]" type="checkbox" defaultChecked={state.isVegetarian} onInput={onInput} class="inputCheckbox" />
                            </label>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export const GUEST_DEFAULT_OBJ = { guestId: 0, name: "", isComing: false, isVegetarian: false };