import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { Observable } from "rxjs";
import "rxjs/add/operator/ignoreElements";
import "rxjs/add/operator/map";

import { AmbassadorActions } from "../../pages/ambassador/ambassador.actions";

@Injectable()
export class AmbassadorEffects {
    constructor(
        private actions: AmbassadorActions,
        private actionStream: Actions
    ) {}


    @Effect({dispatch: false})
    setFname = this.actionStream
        .ofType(AmbassadorActions.SET_FNAME)
        .map(action => action.payload)
        .ignoreElements();


    @Effect({dispatch: false})
    setLname = this.actionStream
        .ofType(AmbassadorActions.SET_LNAME)
        .map(action => action.payload)
        .ignoreElements();


    @Effect({dispatch: false})
    setEmail = this.actionStream
        .ofType(AmbassadorActions.SET_EMAIL)
        .map(action => action.payload)
        .ignoreElements();


    @Effect({dispatch: false})
    setScore = this.actionStream
        .ofType(AmbassadorActions.SET_SCORE)
        .map(action => action.payload)
        .ignoreElements();

}
