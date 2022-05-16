import React, { Component, useState } from "react";
import EmployeeApi from "../api/EmployeeApi";
import { useNavigate } from "react-router-dom";

import "./homeStyles.scss";

class HomeScreen extends Component {
  state = {
    employees: [],
  };

  // componentWillUnmount() {}
  componentDidMount() {
    EmployeeApi.getEmployees().then((employees) => {
      if (employees !== Error) this.setState({ employees });
    });
  }

  renderEmployeeRows() {
    return this.state.employees.map((emp) => {
      return (
        <>
          <tr key={emp.id}>
            <td data-th="First Name">{emp.firstName}</td>
            <td data-th="Last Name">{emp.lastName}</td>
            <td data-th="Email">{emp.email}</td>
          </tr>
        </>
      );
    });
  }
  // addEmployee() {
  //   this.history.push("/addEmployeeScreen");
  // }
  render() {
    return (
      <div>
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
        </table>
        <AddEmployee />
      </div>
    );
  }
}
function AddEmployee(props) {
  const history = useNavigate();
  function handleAddEmployee() {
    history("/addEmployee");
  }

  return (
    <>
      <button
        variant="primary"
        type="button"
        style={{ margin: "10px" }}
        onClick={handleAddEmployee}
      >
        Add Employee
      </button>
    </>
  );
}

export default HomeScreen;
