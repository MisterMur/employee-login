import React, { useState } from "react";
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
      <div>
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
  const { fullname, emailRegister, passwordRegister } = registerData;
  const { email, password } = loginData;

  const onLoginTextChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: [e.target.value] });
  };
  const onRegisterTextChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: [e.target.value] });
  };
  const onLoginSubmit = () => {
    // const isValid = this.validateInputs();

    // if (!isValid) {
    //   return false;
    // } else {
    Auth.handleLoginData(this.state.username, this.state.password).then(() => {
      this.props.history.push("/employees");
    });
    //   return true;
    // }
  };
  const onSignupSubmit = () => {};
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-block__input-wrapper">
        <div className="form-group form-group--login">
          <Input
            type="text"
            id="email"
            label="email"
            value={email}
            onChange={onLoginTextChange}
            disabled={props.mode === "signup"}
          />
          <Input
            type="password"
            id="password"
            label="password"
            value={password}
            onChange={onLoginTextChange}
            disabled={props.mode === "signup"}
          />
        </div>
        <div className="form-group form-group--signup">
          <Input
            type="text"
            id="fullname"
            label="full name"
            value={fullname}
            onChange={onRegisterTextChange}
            disabled={props.mode === "login"}
          />
          <Input
            type="text"
            id="emailRegister"
            label="email"
            value={emailRegister}
            onChange={onRegisterTextChange}
            disabled={props.mode === "login"}
          />
          <Input
            type="password"
            id="createpasswordRegister"
            label="password"
            value={passwordRegister}
            onChange={onRegisterTextChange}
            disabled={props.mode === "login"}
          />
        </div>
      </div>
      <button
        className="button button--primary full-width"
        onClick={"login" ? onLoginSubmit : onSignupSubmit}
        type="submit"
      >
        {props.mode === "login" ? "Log In" : "Sign Up"}
      </button>
    </form>
  );
}
const Input = ({ id, type, label, value, onChange, disabled }) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    placeholder={label}
    disabled={disabled}
  />
);
export default LoginComponent;
