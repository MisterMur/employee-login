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
  onSubmit() {
    console.log("submit");
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
          <LoginForm mode={this.state.mode} onSubmit={this.onSubmit} />
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
  const onLoginSubmit = (e) => {
    e.preventDefault();
    // const isValid = this.validateInputs();

    // if (!isValid) {
    //   return false;
    // } else {
    console.log("in handle login submit");
    Auth.removeToken();
    console.log(window.location.href.split("/")[2].split(":")[0] + ":8081");
    Auth.login(loginData).then(() => {
      console.log("pushing employee history");
      history("/employees");
    });
    //   return true;
    // }
  };
  const onSignupSubmit = (e) => {
    console.log(props.mode);
    e.preventDefault();
    console.log("in registration submit");
    const registrationJson = {
      email: emailRegister,
      password: passwordRegister,
    };
    Auth.register(registrationJson).then(() => {
      this.props.history.push("/employees");
    });
  };
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-block__input-wrapper">
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
      <button
        className="button button--primary full-width"
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
