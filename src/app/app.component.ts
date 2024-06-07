import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    // Add languages
    translate.addLangs(['en', 'fr']);
    // Set default language
    translate.setDefaultLang('en');
    // Use the default language initially
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
