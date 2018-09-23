import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit, AfterViewInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from '@app/container'; // Bootsrap Component
import { HeaderComponent } from '@app/layout/pixeladmin/header/app'; // Layout Component
import { FooterComponent } from '@app/layout/pixeladmin/footer/app'; // Layout Component

import { routing } from '@routes/index';
import { HomeComponent } from '@modules/home/app';
import { AboutComponent } from '@modules/about/app';
import { ServiceComponent } from '@modules/service/app';
import { TeamComponent } from '@modules/team/app';
import { PortfolioComponent } from '@modules/portfolio/app';

/**
 * Global module initialization, define import module, define declaration module
 * adding new modules to your hole apps, dont make any useless module
 */
@NgModule({
  imports: [BrowserModule, HttpModule, routing],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    TeamComponent,
    PortfolioComponent,
    FooterComponent,
  ],
})
export class AppModule {}
