import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AmbassadorComponent } from "./ambassador.component";

const ambassadorRoutes: Routes = [
    { path: "ambassador", component: AmbassadorComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(ambassadorRoutes) ],
    exports: [ RouterModule ]
})
export class AmbassadorRoutes {}
