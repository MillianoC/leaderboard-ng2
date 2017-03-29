import { NgModule } from "@angular/core";

import { AmbassadorModule }  from "./ambassador/ambassador.module";
import { DisplayModule } from "./display/display.module";
import { Test2Module } from "./test2/test2.module";

@NgModule({
  imports: [ AmbassadorModule, DisplayModule, Test2Module ]
})
export class PagesModule {}
