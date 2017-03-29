// Angular Imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { StoreModule } from "@ngrx/store";
import { RouterStoreModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

// Custom Common Imports
import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routes";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";

// Custom Project Specific Imports
import { PagesModule } from "../pages/pages.module";
import { AppEffects } from "../state";
import { rootReducer } from "../state";

// Websocket Imports
import { ChatService } from "../shared/services/chat.service";
import { WebSocketService } from "../shared/services/websocket.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,
        SharedModule,
        PagesModule,
        AppRoutes,
        AppEffects,
        StoreModule.provideStore(rootReducer),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 5
        })
    ],
    declarations: [ AppComponent ],
    providers: [
        ChatService,
        WebSocketService
    ],
    exports: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {};
