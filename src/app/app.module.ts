import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";

import { HeroesComponent } from "./heroes/heroes.component";
import { AppComponent } from "./app.component";

@NgModule ({
    imports: [
        FormsModule,
        BrowserModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }