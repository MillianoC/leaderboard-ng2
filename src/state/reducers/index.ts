import { combineReducers } from "@ngrx/store";
import { RouterState, routerReducer as router } from "@ngrx/router-store";

import { FnameState, reducer as fname } from "./fname.reducer";
import { LnameState, reducer as lname } from "./lname.reducer";
import { EmailState, reducer as email } from "./email.reducer";
import { ScoreState, reducer as score } from "./score.reducer";

export interface AppState {
    fname: FnameState;
    lname: LnameState;
    email: EmailState;
    score: ScoreState;
    router: RouterState;
}

export const rootReducer = combineReducers({
    fname,
    lname,
    email,
    score,
    router
});

export default rootReducer;
