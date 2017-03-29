import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Test2Component } from "./test2.component";

const test2Routes: Routes = [
    { path: "test2", component: Test2Component }
]

@NgModule({
    imports: [
        RouterModule.forChild(test2Routes)
    ],
    exports: [ RouterModule ]
})
export class Test2Routes {}
