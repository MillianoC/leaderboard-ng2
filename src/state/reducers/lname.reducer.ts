import { Action } from "@ngrx/store";

import { AmbassadorActions } from "../../pages/ambassador/ambassador.actions";


export type LnameState = string;
export const initialState: LnameState = "";
export function reducer(state: LnameState = initialState, action: Action): LnameState {
    switch(action.type) {
        case AmbassadorActions.SET_LNAME:
            return action.payload.lname;
        default:
            return state;
    }
}
