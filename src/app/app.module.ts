import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {RealisationsComponent} from "./realisations/realisations.component";
import {ContactComponent} from "./contact/contact.component";
import {MenuComponent} from "./menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RealisationsComponent,
    ContactComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
