import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";

import { AmbassadorEffects } from "./ambassador.effects";

@NgModule({
    imports: [
        EffectsModule.run(AmbassadorEffects)
    ],
    exports: [ EffectsModule ]
})
export class AppEffects { }

export * from "./ambassador.effects";
export default AppEffects;
