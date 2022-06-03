import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "../api/Auth";
import "./loginStyles.scss";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "login",
    };
  }

  toggleMode() {
    var newMode = this.state.mode === "login" ? "signup" : "login";
    this.setState({ mode: newMode });
  }

  render() {
    return (
      <div className="login-screen">
        <div
          className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`}
        ></div>
        <section className={`form-block form-block--is-${this.state.mode}`}>
          <header className="form-block__header">
            <h1>{this.state.mode === "login" ? "Welcome back!" : "Sign up"}</h1>
            <div className="form-block__toggle-block">
              <span>
                {this.state.mode === "login" ? "Don't" : "Already"} have an
                account? Click here &#8594;
              </span>
              <input
                id="form-toggler"
                type="checkbox"
                onClick={this.toggleMode.bind(this)}
              />
              <label htmlFor="form-toggler"></label>
            </div>
          </header>
          <LoginForm mode={this.state.mode} />
        </section>
      </div>
    );
  }
}
function LoginForm(props) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    fullname: "",
    emailRegister: "",
    passwordRegister: "",
  });

  const history = useNavigate();

  const { fullname, emailRegister, passwordRegister } = registerData;
  const { email, password } = loginData;

  const onLoginTextChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const onRegisterTextChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const emailValid = (emailstr) => {
    // super long regex taken from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailstr !== "") {
      if (!re.test(emailstr.trim())) {
        return false;
      }
    }
    return true;
  };
  const passwordValid = (passwordStr) => {
    if (passwordStr !== "") {
      if (
        (passwordStr.length < 8 || passwordStr.length > 35) &&
        !/[^a-zA-Z0-9()]/.test(passwordStr)
      ) {
        return false;
      }
    }
    return true;
  };
  const onLoginSubmit = (e) => {
    e.preventDefault();

    Auth.removeToken();
    Auth.login(loginData, history);
    // .then(() => {
    //   history("/employees");
    // });
  };
  const onSignupSubmit = (e) => {
    e.preventDefault();
    const registrationJson = {
      email: emailRegister,
      password: passwordRegister,
    };
    Auth.register(registrationJson).then(() => {
      this.props.history.push("/employees");
    });
  };
  const isButtonDisabled = () => {
    if (props.mode === "login") {
      return (
        !emailValid(email) ||
        !passwordValid(password) ||
        email === "" ||
        password === ""
      );
    }
    return (
      !emailValid(emailRegister) ||
      !passwordValid(passwordRegister) ||
      emailRegister === "" ||
      passwordRegister === ""
    );
  };
  return (
    <form className="form-wrapper" onSubmit={props.onSubmit}>
      <div className="form-block__input-wrapper">
        <div className="form-group">
          <div className="form-group form-group--login">
            <Input
              type="text"
              id="email"
              label="email"
              name="email"
              value={email}
              onChange={onLoginTextChange}
              disabled={props.mode === "signup"}
            />

            <Input
              type="password"
              id="password"
              label="password"
              name="password"
              value={password}
              onChange={onLoginTextChange}
              disabled={props.mode === "signup"}
            />
          </div>
          <div className="form-group form-group--signup">
            <Input
              type="text"
              id="fullname"
              name="fullname"
              label="full name"
              value={fullname}
              onChange={onRegisterTextChange}
              disabled={props.mode === "login"}
            />
            <Input
              type="text"
              id="emailRegister"
              name="emailRegister"
              label="email"
              value={emailRegister}
              onChange={onRegisterTextChange}
              disabled={props.mode === "login"}
            />
            <Input
              type="password"
              id="createpasswordRegister"
              label="password"
              name="passwordRegister"
              value={passwordRegister}
              onChange={onRegisterTextChange}
              disabled={props.mode === "login"}
            />
          </div>
        </div>
      </div>
      {emailValid(email) ? null : (
        <>
          <p style={{ color: "red" }}>Must be a valid Email</p>
        </>
      )}
      {passwordValid(password) ? null : (
        <>
          <p style={{ color: "red" }}>
            Password must be between 8 and 35 characters alphanumeric
          </p>
        </>
      )}
      <button
        className="button button--primary full-width"
        disabled={isButtonDisabled()}
        onClick={props.mode === "login" ? onLoginSubmit : onSignupSubmit}
        type="submit"
      >
        {props.mode === "login" ? "Log In" : "Sign Up"}
      </button>
    </form>
  );
}
const Input = ({ id, type, label, value, onChange, disabled, name }) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={label}
    disabled={disabled}
  />
);
export default LoginComponent;
