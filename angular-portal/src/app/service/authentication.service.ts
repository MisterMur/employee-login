import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  handleToken(token: any) {
    sessionStorage.setItem(environment.tokenKey, token);
  }

  static async validateJWTToken() {
    const res = await fetch(environment.validateJWTUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: sessionStorage.getItem(environment.tokenKey),
      }),
    });
    return res.status === 200
      ? res.json()
      : sessionStorage.removeItem(environment.tokenKey);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(environment.tokenKey);
    return !(user === null);
  }

  isLoggedOut() {
    sessionStorage.removeItem(environment.tokenKey);
    // this.route.navigate(['']);
  }
}
