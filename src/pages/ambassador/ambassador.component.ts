import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import "rxjs/add/observable/fromPromise";
import { ChatService } from "../../shared/services/chat.service";


import { AmbassadorActions } from "./ambassador.actions";
import { AppState } from "../../state/reducers";

interface FormModel {
    fname?: string;
    lname?: string;
    email?: string;
    score?: string;
}

@Component({
    templateUrl: "ambassador.component.html",
    styleUrls: [ "ambassador.component.scss" ]
})
export class AmbassadorComponent {
    model: FormModel = {};
    fname: Observable<string>;
    lname: Observable<string>;
    email: Observable<string>;
    score: Observable<string>;

    private message = {
        fname : '',
        lname: '',
        email: '',
        score: ''
    };

    constructor(
        private actions: AmbassadorActions,
        private store: Store<AppState>,
        private chatService: ChatService
    ) {
        this.fname = store.select("fname");
        this.lname = store.select("lname");
        this.email = store.select("email");
        this.score = store.select("score");
    }

    onSubmit() {

        // Send these inputs to the reducer
        this.store.dispatch(this.actions.setFname(this.model.fname));
        this.store.dispatch(this.actions.setLname(this.model.lname));
        this.store.dispatch(this.actions.setEmail(this.model.email));
        this.store.dispatch(this.actions.setScore(this.model.score));

        // Set the display user update message
        this.message.fname = this.model.fname;
        this.message.lname = this.model.lname;
        this.message.email = this.model.email;
        this.message.score = this.model.score;
        this.chatService.messages.next(this.message);


        // Clear message inputs
        this.message.fname = '';
        this.message.lname = '';
        this.message.email = '';
        this.message.score = '';
    }

}
