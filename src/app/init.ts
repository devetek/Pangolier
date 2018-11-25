import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from '@app/container'; // Bootsrap Component
import { HeaderComponent } from '@app/layout/pixeladmin/header/app'; // Layout Component
import { HomeModule } from '@modules/home/module';
import { FooterComponent } from '@app/layout/pixeladmin/footer/app'; // Layout Component

/**
 * Additional/custom modules, create yours or import third party here to use global
 */
import { ApiService } from '@app/services';
import { RoutesModule } from '@routes/index';

/**
 * Global module initialization, define import module, define declaration module
 * adding new modules to your hole apps, dont make any useless module
 */
@NgModule({
  imports: [BrowserModule, HttpClientModule, RoutesModule, HomeModule],
  declarations: [HeaderComponent, AppComponent, FooterComponent],
  bootstrap: [AppComponent], // Bootstrap initial component
  providers: [ApiService], // Define your custom global services
})
export class AppModule {}
