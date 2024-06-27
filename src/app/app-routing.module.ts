import { NgModule } from '@angular/core';
import {ServicesComponent} from "./services/services.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {RealisationsComponent} from "./realisations/realisations.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'realisations', component: RealisationsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
