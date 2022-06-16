import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginDataService } from './../service/login-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  mode = 'login';
  invalidLogin = false;

  constructor(private loginData: LoginDataService) {}

  ngOnInit(): void {}

  handleLogin(loginForm: NgForm) {
    let { username, password } = loginForm.value;

    this.loginData.handleLoginData(username, password);
  }

  handleToggle() {
    if (this.mode === 'login') {
      this.mode = 'register';
    } else {
      this.mode = 'login';
    }
  }
}
