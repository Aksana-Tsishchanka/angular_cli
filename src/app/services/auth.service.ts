import { Injectable } from '@angular/core';
import { hasLocalStorageItem, setLocalStorageItem, deleteLocalStorageItem } from './../../utils/localstorage';

const AUTH_TOKEN_NAME = 'AUTH_TOKEN_NAME';
const AUTH_TOKEN_VALUE = '123token';
const USER_LOGIN = 'USER_LOGIN';

const user = {
  userLogin: 'admin',
  userPass: 'admin'
};

@Injectable()
export class AuthService {
  private isUserAuthenticated = this.checkLocalStorage();
  private userLogin = this.checkLogin();
  private userPass = '';

  private checkLocalStorage() {
    if (hasLocalStorageItem(USER_LOGIN) && hasLocalStorageItem(AUTH_TOKEN_NAME)) {
      return  window.localStorage.getItem(AUTH_TOKEN_NAME) === AUTH_TOKEN_VALUE;
    }
    return false;
  }
  private checkLogin() {
    if (hasLocalStorageItem(USER_LOGIN)) {
      this.userLogin = window.localStorage.getItem(USER_LOGIN);
    }
    return '';
  }

  public login(login, pass): boolean {
    const { userLogin, userPass } = user;
    if (login === userLogin && pass === userPass ) {
      this.isUserAuthenticated = true;
      if (!hasLocalStorageItem(USER_LOGIN)) {
        setLocalStorageItem(USER_LOGIN, login);
        setLocalStorageItem(AUTH_TOKEN_NAME, AUTH_TOKEN_VALUE);
      }
    }
    return this.isUserAuthenticated;
  }
  public logout(): void {
    this.userLogin = '';
    this.userPass = '';
    this.isUserAuthenticated = false;
    deleteLocalStorageItem(USER_LOGIN);
    deleteLocalStorageItem(AUTH_TOKEN_NAME);
  }
  public getUserInfo(): string {
    if (this.isUserAuthenticated) {
      return this.userLogin;
    }
  }
  public isAuthenticated(): boolean {
    return this.isUserAuthenticated;
  }

}

