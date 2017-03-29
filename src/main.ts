import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

declare var codePush: any;
declare var InstallMode: any;
const isDevice = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;

function onDeviceReady() {
    if(isDevice) { codePush.sync(null, { updateDialog: true, installMode: InstallMode.ON_NEXT_RESTART }); }
    if (process.env.ENV === 'production') { enableProdMode(); }
    platformBrowserDynamic().bootstrapModule(AppModule)
        .then(success => console.log("App Successfully Bootstrapped"))
        .catch(err => console.error(err));
};

if(isDevice) {
    console.log("We are on a device!");
    document.addEventListener("deviceready", onDeviceReady, false);
}
else {
    console.log("We are in the browser!");
    onDeviceReady();
}
