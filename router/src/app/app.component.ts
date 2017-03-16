import { AuthService } from './core/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Hero Agency';

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  get loggedIn() {
    return this.authService.isLoggedIn;
  }
}
