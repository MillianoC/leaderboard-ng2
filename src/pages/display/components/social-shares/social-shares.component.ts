import { Component, OnInit } from "@angular/core";

@Component ({
    selector: "social-shares",
    templateUrl: "social-shares.component.html",
    styleUrls: [ "social-shares.component.scss" ]
})

export class SocialSharesComponent implements OnInit {

    ngOnInit () {
        console.log("social share");
    }
}
