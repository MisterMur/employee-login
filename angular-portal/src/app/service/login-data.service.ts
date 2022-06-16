import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class LoginDataService {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  async handleLoginData(email: any, password: any) {
    const res = await fetch(environment.loginUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then((res) => res);
    if (res.status === 202) {
      await res.text().then(this.authenticationService.handleToken);
      this.router.navigate(['emplist']);
    } else {
      alert('An error has occured. \nTry login credentials again.');
    }
  }
}
