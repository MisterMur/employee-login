import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
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
  loginForm: FormGroup = new FormGroup({});

  constructor(private loginData: LoginDataService) {
    this.loginForm = new FormGroup({
      username: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(35),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(35),
        ])
      ),
    });
  }

  ngOnInit(): void {}

  handleLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    let { username, password } = this.loginForm.value;

    this.loginData.handleLoginData(username, password);
  }
  get f() {
    return this.loginForm.controls;
  }

  handleToggle() {
    if (this.mode === 'login') {
      this.mode = 'register';
    } else {
      this.mode = 'login';
    }
  }
}
