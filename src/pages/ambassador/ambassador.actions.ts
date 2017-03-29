import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

@Injectable()
export class AmbassadorActions {
    constructor() {}

    static SET_FNAME: string = "SET_FNAME";
    setFname(fname: string): Action {
        return {
            type: AmbassadorActions.SET_FNAME,
            payload: { fname }
        }
    }

    static SET_LNAME: string = "SET_LNAME";
    setLname(lname: string): Action {
        return {
            type: AmbassadorActions.SET_LNAME,
            payload: { lname }
        }
    }

    static SET_EMAIL: string = "SET_EMAIL";
    setEmail(email: string): Action {
        return {
            type: AmbassadorActions.SET_EMAIL,
            payload: { email }
        }
    }

    static SET_SCORE: string = "SET_SCORE";
    setScore(score: string): Action {
        return {
            type: AmbassadorActions.SET_SCORE,
            payload: { score }
        }
    }


}
