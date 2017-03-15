import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onLogin(): void {
    this.authService.login().subscribe(() => this.redirect());
  }

  onLogout(): void {
    this.authService.logout();
  }

  get loggedIn() {
    return this.authService.isLoggedIn;
  }

  private redirect(): void {
    const redirectUrl = this.authService.redirectUrl;
    if (redirectUrl) {
      this.router.navigateByUrl(this.authService.redirectUrl);
      this.authService.redirectUrl = undefined;
    }
  }

}
