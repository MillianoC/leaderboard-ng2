import { Action } from "@ngrx/store";

import { AmbassadorActions } from "../../pages/ambassador/ambassador.actions";


export type FnameState = string;
export const initialState: FnameState = "";
export function reducer(state: FnameState = initialState, action: Action): FnameState {
    switch(action.type) {
        case AmbassadorActions.SET_FNAME:
            return action.payload.fname;
        default:
            return state;
    }
}
