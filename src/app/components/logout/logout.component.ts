import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector:    'app-logout',
  template: `
        <div *ngIf="isUserAuthenticated()" class="logout">
            <a (click)="logOut()">Log Out</a>
        </div>
    `,
  styleUrls: ['./logout.component.css'],
})

export class LogoutComponent {
  constructor(private authService: AuthService) {
  }

  public logOut(): void {
    this.authService.logout();
    console.log('user exits');
  }
  public isUserAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}

