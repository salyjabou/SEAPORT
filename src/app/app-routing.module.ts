import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {RealisationsComponent} from "./realisations/realisations.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'realisations', component: RealisationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
