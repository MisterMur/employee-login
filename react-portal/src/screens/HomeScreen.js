import React from "react";
import EmployeeApi from "../api/EmployeeApi";

import "./homeStyles.scss";

class HomeScreen extends React.Component {
  state = {
    employees: [
      {
        firstname: "",
        lastname: "",
      },
    ],
  };
  componentWillUnmount() {}
  componentDidMount() {
    EmployeeApi.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  // getEmployees(userId) {
  //   fetch(`http://localhost:8082/employee/all`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ userId }),
  //   })
  //     .then((res) => {
  //       return res.status === 200
  //         ? res.employees.json()
  //         : new Error("request failed");
  //     })
  //     .then((employees) => {
  //       this.setState({ employees });
  //     })
  //     .catch(console.log);
  // }
  renderEmployeeRows() {
    return this.state.employees.map((emp) => {
      return (
        <>
          <tr key={emp.id.toString()}>
            <td data-th="First Name">{emp.firstName}</td>
            <td data-th="Last Name">{emp.lastName}</td>
            <td data-th="Email">{emp.email}</td>
          </tr>
        </>
      );
    });
  }
  render() {
    return (
      <>
        hi
        <h1>Employee Screen</h1>
        <h1>RWD List to Table</h1>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-th="First Name">First Name</td>
              <td data-th="Last Name">Last Name</td>
              <td data-th="Email">Email</td>
            </tr>
            {this.renderEmployeeRows()}
          </tbody>
          <button
            variant="primary"
            type="button"
            style={{ margin: "10px" }}
            onClick={this.addEmployee}
          >
            Add Employee
          </button>
        </table>
      </>
    );
  }
}

export default HomeScreen;
