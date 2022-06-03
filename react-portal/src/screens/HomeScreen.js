import React, { Component, Fragment } from "react";
import EmployeeApi from "../api/EmployeeApi";
import { Link, useNavigate } from "react-router-dom";

import "./homeStyles.scss";

class HomeScreen extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    EmployeeApi.getEmployees().then((employees) => {
      if (employees !== Error) this.setState({ employees });
    });
  }

  renderEmployeeRows() {
    return this.state.employees
      ?.sort(function (a, b) {
        return a.first_name + a.last_name < b.first_name + b.last_name ? 1 : -1;
      })
      .map((emp) => {
        return (
          <Fragment key={emp.id}>
            <tr>
              <td data-th="Name">
                <Link
                  to={{
                    pathname: `/employees/${emp.id}`,
                    id: emp.id,
                    emp: emp,
                  }}
                  state={{ employee: emp }}
                >
                  {emp.first_name} {emp.last_name}
                </Link>
              </td>
              <td data-th="Email">{emp.email}</td>
            </tr>
          </Fragment>
        );
      });
  }

  render() {
    return (
      <div className={`form-block-wrapper form-block-wrapper--is-homescreen`}>
        <div className="tablecontainer">
          <h1>Employee Screen</h1>
          <table className="rwd-table">
            <thead>
              <tr>
                <th>
                  <h3>Name</h3>
                </th>
                <th>
                  <h3>Email</h3>
                </th>
              </tr>
            </thead>
            <tbody>{this.renderEmployeeRows()}</tbody>
          </table>
          <AddEmployee />
        </div>
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
        className="buttonaddemployee button--primary full-width"
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
