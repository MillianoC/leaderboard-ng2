import { NgModule } from "@angular/core";

import { DisplayComponent } from "./display.component";
import { DisplayRoutes } from "./display.routes";

import { PersonalScoreComponent } from "./components/personal-score/personal-score.component";
import { TopScoresComponent } from "./components/top-scores/top-scores.component";
import { SocialSharesComponent } from "./components/social-shares/social-shares.component";

@NgModule({
    imports: [ DisplayRoutes ],
    declarations: [
        DisplayComponent,
        PersonalScoreComponent,
        TopScoresComponent,
        SocialSharesComponent
    ],
    exports: [ DisplayComponent ]
})
export class DisplayModule {}
