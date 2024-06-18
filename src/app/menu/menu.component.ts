import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
    activeLink: string = 'home';

    setActiveLink(link: string) {
        this.activeLink = link;
    }
}
