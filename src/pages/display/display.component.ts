import { Component, OnInit } from "@angular/core";

import { ChatService } from "../../shared/services/chat.service";

// interface User {
//     fname: string;
//     lname: string;
//     email: string;
//     score: string;
// }

@Component({
    templateUrl: "display.component.html",
    styleUrls: [ "display.component.scss" ]
})


export class DisplayComponent implements OnInit {

    constructor (private chatService: ChatService) {}


    //
    userFname: string = "";
    userLname: string = "";
    userPlacement: string = "";
    userScore: string = "";
    // 
    // topUsers: Array<User>;
    // holdUser: User;


    ngOnInit() {



        this.chatService.messages.subscribe(msg => {
            console.log("START");
            console.log(msg);
            console.log(msg.topScores);

            // TODO: This is where my work from the original leader board needs to go!


            this.userFname = msg.fname;
            this.userLname = msg.lname;
            this.userPlacement = 'XX';
            this.userScore = msg.score;

            // for (var i= 0; i< msg.topScores.length; i++) {
            //      this.holdUser.fname = msg.topScores[i].fname;
            //
            // }

        })
    }
}
