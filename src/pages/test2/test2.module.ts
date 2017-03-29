import { NgModule } from "@angular/core";

import { Test2Component } from "./test2.component";
import { Test2Routes } from "./test2.routes";

@NgModule({
    imports: [ Test2Routes ],
    declarations: [ Test2Component ],
    exports: [ Test2Component ]
})
export class Test2Module {}
