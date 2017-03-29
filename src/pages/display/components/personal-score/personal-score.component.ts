import { Component, OnInit, Input } from "@angular/core";

@Component ({
    selector: "personal-score",
    templateUrl: "personal-score.component.html",
    styleUrls: ["personal-score.component.scss"]
})

export class PersonalScoreComponent implements OnInit {


    private _userFname = '';
    private _userLname = '';
    private _userPlacement = '';
    private _userScore = '';


    @Input('userFname')
    set userFname(userFname: string) {
      this._userFname = (userFname);
    }
    get userFname(): string { return this._userFname; }


    @Input('userLname')
    set userLname(userLname: string) {
      this._userLname = (userLname);
    }
    get userLname(): string { return this._userLname; }


    @Input('userPlacement')
    set userPlacement(userPlacement: string) {
      this._userPlacement = (userPlacement);
    }
    get userPlacement(): string { return this._userPlacement; }


    @Input('userScore')
    set userScore(userScore: string) {
      this._userScore = (userScore);
    }
    get userScore(): string { return this._userScore; }


    ngOnInit() {
        console.log("personal score component");
    }
}
