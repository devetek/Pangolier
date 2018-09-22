import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppComponent } from "@app/container"; // Bootsrap Component
import { HeaderComponent } from "@app/layout/pixeladmin/header/app"; // Layout Component
import { FooterComponent } from "@app/layout/pixeladmin/footer/app"; // Layout Component

import { HomeComponent } from "@modules/home/app";
import { AboutComponent } from "@modules/about/app";
import { routing } from "@routes/index";

/**
 * This files is your module initialization, like define initial state, set initial global variables
 * adding new context to your hole apps, dont make any useless variables here
 * it will decrease our apps peformances, it will be impact to all apps context
 */
@NgModule({
  imports: [BrowserModule, HttpModule, routing],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent
  ]
})
export class AppModule {
  constructor() {
    // pass
  }
}
