import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector:    'app-login',
  template: `
        <div class="container">
            <div *ngIf="showLoginError()" class="error">Credentials are wrong! Try admin/admin</div>
            <div class="login">
              <label for="login">Login:</label>
              <input #login class="loginInp" type="text" (blur)="setLogin(login.value)">
            </div>
            <div class="pass">
              <label for="pass">Password:</label>
              <input #pass type="password" (blur)="setPass(pass.value)">
            </div>
            <div class="btnContainer">
              <app-common-button [title]="'Login'" [type]="'submit'" (click)="logIn()"></app-common-button>
            </div>
        </div>
    `,
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  private userLogin: string;
  private userPass: string;
  private isLoginFailed = false;
  constructor(private authService: AuthService) {
  }
  public logIn() {
    if (!this.authService.login(this.userLogin, this.userPass)) {
      this.isLoginFailed = true;
    }
  }

  public setLogin(value) {
    this.userLogin = value;
  }
  public setPass(value) {
    this.userPass = value;
  }
  public showLoginError() {
    return this.isLoginFailed;
  }
}
