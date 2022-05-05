let baseUrl = window.location.href.split("/")[2].split(":")[0] + ":8081";

export default class Auth {
  setToken(token) {
    localStorage.setItem("jwt", token);
  }
  removeToken() {
    localStorage.clear();
  }
  async handleLoginData(email, password) {
    const res = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
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
    let user = sessionStorage.getItem("jwt");
    return !(user === null);
  }
}
