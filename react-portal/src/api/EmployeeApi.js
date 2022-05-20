import axios from "axios";

class EmployeeApi {
  // getEmployees() {
  //   return axios.get("http://localhost:8082/employee/employees");
  // }
  async getEmployees() {
    return fetch(`http://localhost:8082/employee/employees`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.status === 200 ? res.json() : new Error("request failed");
      })
      .then((res) => {
        return res;
      })
      .catch(console.log);
  }

  addEmployee(employee) {
    return fetch("http://localhost:8082/employee/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(employee),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      })
      .catch(console.log);
  }

  editEmployee(employee) {
    return axios.put("http://localhost:8082/employee/update", employee);
  }
}
export default new EmployeeApi();
