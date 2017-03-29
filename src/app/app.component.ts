import { ViewEncapsulation, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { RouterState, go } from "@ngrx/router-store";
import { Observable } from "rxjs/Observable";

import { AppState } from "../state";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.scss" ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    router: Observable<RouterState>;

    constructor(private store: Store<AppState>) {
        this.router = store.select("router");
    }

    onTest2() {
        this.store.dispatch(go(["test2"]));
    }
};
