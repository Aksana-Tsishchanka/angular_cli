import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
    selector:    'app-root',
    templateUrl: './app.component.html',
    providers: [ AuthService ],
})

export class AppComponent {
  constructor(private authService: AuthService) {
  }

  public isAuth() {
    return this.authService.isAuthenticated();
  }

}
