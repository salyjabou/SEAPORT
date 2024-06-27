import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {ServicesComponent} from "./services/services.component";
import {ContactComponent} from "./contact/contact.component";
import {MenuComponent} from "./menu/menu.component";
import {FooterComponent} from "./footer/footer.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RealisationsComponent} from "./realisations/realisations.component";
import {AppRoutingModule} from "./app-routing.module";
import {RealisedProjectsComponent} from "./realised-projects/realised-projects.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent,
    RealisationsComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        RealisedProjectsComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
