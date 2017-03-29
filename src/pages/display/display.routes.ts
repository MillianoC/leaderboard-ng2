import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DisplayComponent } from "./display.component";

const displayRoutes: Routes = [
    { path: "display", component: DisplayComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(displayRoutes)
    ],
    exports: [ RouterModule ]
})
export class DisplayRoutes {}
