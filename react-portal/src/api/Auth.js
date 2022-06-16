let baseUrl = window.location.href.split("/")[2].split(":")[0] + ":8081";

class Auth {
  setToken(token) {
    localStorage.setItem("jwt", token);
  }

  logout(history) {
    localStorage.clear();
    history("/");
  }
  async login(loginData, history) {
    const res = await fetch("http://localhost:8081/login/submit-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    }).then((res) => res);
    if (res.status === 202) {
      await res.text().then(this.setToken);
      history("/employees");
    } else {
      alert("Login Error.");
    }
  }
  async register(registerData) {
    const res = await fetch("http://localhost:8081/login/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: registerData,
      mode: "no-cors",
    }).then((res) => res);
    if (res.status === 202) {
      await res.text().then(this.setToken);
    } else {
      alert("Login Error.");
    }
  }
  async create(registerData) {
    const res = await fetch("http://localhost:8081/login/create", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: registerData,
    }).then((res) => res);
    if (res.status === 202) {
      await res.text().then(this.setToken);
    } else {
      alert("Login Error.");
    }
  }

  async validateJWTToken() {
    const res = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: sessionStorage.getItem("jwt") }),
    });
    return res.status === 200 ? res.json() : this.removeToken();
  }

  isUserLoggedIn() {
    let user = localStorage.getItem("jwt");
    return user;
  }
}
export default new Auth();
