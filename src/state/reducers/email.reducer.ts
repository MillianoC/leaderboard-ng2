import { Action } from "@ngrx/store";

import { AmbassadorActions } from "../../pages/ambassador/ambassador.actions";


export type EmailState = string;
export const initialState: EmailState = "";
export function reducer(state: EmailState = initialState, action: Action): EmailState {
    switch(action.type) {
        case AmbassadorActions.SET_EMAIL:
            return action.payload.email;
        default:
            return state;
    }
}
