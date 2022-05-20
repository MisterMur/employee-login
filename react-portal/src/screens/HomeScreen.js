import React, { Component, useState } from "react";
import EmployeeApi from "../api/EmployeeApi";
import { Link, useNavigate } from "react-router-dom";

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
    return this.state.employees?.map((emp) => {
      return (
        <>
          <tr key={emp.id}>
            <td data-th="Name">
              {emp.first_name} {emp.last_name}
            </td>
            <td data-th="Email">
              <Link
                to={{
                  pathname: `/employees/${emp.id}`,
                  id: emp.id,
                  emp: emp,
                }}
                state={{ employee: emp }}
              >
                {emp.email}
              </Link>
            </td>
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
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{this.renderEmployeeRows()}</tbody>
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
