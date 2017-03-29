import { Action } from "@ngrx/store";

import { AmbassadorActions } from "../../pages/ambassador/ambassador.actions";


export type ScoreState = string;
export const initialState: ScoreState = "";
export function reducer(state: ScoreState = initialState, action: Action): ScoreState {
    switch(action.type) {
        case AmbassadorActions.SET_SCORE:
            return action.payload.score;
        default:
            return state;
    }
}
