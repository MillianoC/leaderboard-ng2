import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AmbassadorRoutes } from "./ambassador.routes";
import { AmbassadorComponent } from "./ambassador.component";
import { AmbassadorActions } from "./ambassador.actions";

@NgModule({
    imports: [ FormsModule, CommonModule, AmbassadorRoutes ],
    declarations: [ AmbassadorComponent ],
    exports: [ AmbassadorComponent ],
    providers: [ AmbassadorActions ]
})
export class AmbassadorModule {}
