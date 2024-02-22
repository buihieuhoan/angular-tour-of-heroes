import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";

import { HeroesComponent } from "./heroes/heroes.component";
import { AppComponent } from "./app.component";

@NgModule ({
    declarations: [
        AppComponent,
        HeroesComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        FormsModule,
        BrowserModule,
        HeroesComponent
    ]
})

export class AppModule { }