import { Component, OnInit } from '@angular/core';

@Component ({
    selector: "top-scores",
    templateUrl: "top-scores.component.html",
    styleUrls: ["top-scores.component.scss"]
})

export class TopScoresComponent implements OnInit {

    ngOnInit () {
        console.log("top scores component");
    }
}
