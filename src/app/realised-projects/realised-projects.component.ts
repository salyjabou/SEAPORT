import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-realised-projects',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './realised-projects.component.html',
  styleUrl: './realised-projects.component.scss'
})
export class RealisedProjectsComponent {

}
