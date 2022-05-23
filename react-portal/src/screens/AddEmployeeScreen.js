import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";

// import {Dropdown} from 'react-bootstrap';

import "./addEmployeeStyles.scss";
import EmployeeApi from "../api/EmployeeApi";

export default function AddEmployeeScreen() {
  const location = useLocation();

  const { employee } = location.state ? location.state : { employee: null };

  const mode = employee ? "edit" : "add";

  return (
    <div className="add-employee-screen">
      <div
        className={`form-block-wrapper form-block-wrapper--is-addemployee`}
      ></div>
      <section className={`form-block form-block--is-addemployee`}>
        <header className="form-block__header">
          <h1>{mode === "add" ? "Add New Employee" : "Edit Employee"}</h1>
          <div className="form-block__toggle-block">
            <span>Enter all required fields to continue &#8594;</span>
          </div>
        </header>
        <EmployeeForm employee={employee} mode={mode} />
      </section>
    </div>
  );
}
function EmployeeForm(props) {
  const initState =
    props.mode === "add"
      ? {
          first_name: "",
          last_name: "",
          address: "",
          state: "",
          city: "",
          zip: "",
          cell_phone: "",
          home_phone: "",
          email: "",
          user_id: "",
        }
      : {
          id: props.employee.id,
          first_name: props.employee.first_name,
          last_name: props.employee.last_name,
          address: props.employee.address,
          state: props.employee.state,
          city: props.employee.city,
          zip: props.employee.zip,
          cell_phone: props.employee.cell_phone,
          home_phone: props.employee.home_phone,
          email: props.employee.email,
          user_id: props.employee.user_id,
        };
  const [employeeData, setEmployeeData] = useState(initState);
  const history = useNavigate();
  const {
    first_name,
    last_name,
    address,
    state,
    city,
    zip,
    cell_phone,
    home_phone,
    email,
    user_id,
  } = employeeData;
  const checkValid = () => {
    return (
      firstNameValid() &&
      lastNameValid() &&
      addressValid() &&
      cityValid() &&
      zipValid() &&
      cellValid() &&
      homeValid()
    );
  };

  const onTextChange = (e) => {
    if (e.target.validity.valid) {
      setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
    }
    checkValid();
  };
  const isInputsEmpty = () => {
    if (
      first_name === "" ||
      last_name === "" ||
      address === "" ||
      state === "" ||
      city === "" ||
      zip === "" ||
      cell_phone === "" ||
      home_phone === "" ||
      email === "" ||
      user_id === ""
    ) {
      return true;
    }

    return false;
  };

  const isNumeric = (value) => {
    const re = /^\d+$/;
    if (!re.test(value.trim())) {
      return false;
    }
    return true;
  };
  const firstNameValid = () => {
    if (first_name !== "") {
      if (
        (first_name.length < 2 || first_name.length > 35) &&
        !/[^a-zA-Z()]/.test(first_name)
      ) {
        return false;
      }
    }
    return true;
  };
  const lastNameValid = () => {
    if (last_name !== "") {
      if (
        (last_name.length < 2 || last_name.length > 35) &&
        !/[^a-zA-Z()]/.test(last_name)
      ) {
        return false;
      }
    }
    return true;
  };
  const addressValid = () => {
    if (address !== "") {
      if (
        (address.length < 10 || address.length > 50) &&
        !/[^a-zA-Z0-9()]/.test(address)
      ) {
        return false;
      }
    }
    return true;
  };
  const cityValid = () => {
    if (city !== "") {
      if ((city.length < 5 || city.length > 50) && !/[^a-zA-Z()]/.test(city)) {
        return false;
      }
    }
    return true;
  };
  const zipValid = () => {
    if (zip !== "") {
      if ((zip.length < 5 || zip.length > 9) && isNumeric(zip)) {
        return false;
      }
    }
    return true;
  };
  const cellValid = () => {
    if (cell_phone !== "") {
      if (cell_phone.length !== 10 && isNumeric(cell_phone)) {
        return false;
      }
    }
    return true;
  };
  const homeValid = () => {
    if (home_phone !== "") {
      if (home_phone.length !== 10 && isNumeric(home_phone)) {
        return false;
      }
    }
    return true;
  };
  const validateEmail = () => {
    // super long regex taken from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email !== "") {
      if (!re.test(email.trim())) {
        return false;
      }
    }
    return true;
  };
  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (checkValid()) {
      if (props.mode === "add") {
        EmployeeApi.addEmployee(employeeData).then(() => {
          history("/employees");
        });
      } else if (props.mode === "edit") {
        EmployeeApi.editEmployee(employeeData).then(() => {
          history("/employees");
        });
      }
    }
  };
  const handleCancel = () => {
    setEmployeeData(initState);

    history("/employees");
  };

  return (
    <form>
      <div className="form-block-addemployee">
        <div className="form-group-addemployee">
          <input
            className="form-groupinput"
            type="text"
            id="user_id"
            placeholder="User ID"
            name="user_id"
            value={user_id}
            onChange={onTextChange}
          />
          <input
            className="form-groupinput"
            type="text"
            id="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onTextChange}
          />
          {validateEmail() ? null : (
            <>
              <p style={{ color: "red" }}>Must be a valid Email</p>
            </>
          )}
          <input
            className="form-groupinput"
            type="text"
            id="first_name"
            placeholder="First Name"
            name="first_name"
            value={first_name}
            onChange={onTextChange}
          />
          {firstNameValid() ? null : (
            <>
              <p style={{ color: "red" }}>
                First Name must be a minimum of 2 and maximum of 35 alpha
                characters
              </p>
            </>
          )}
          <input
            className="form-groupinput"
            type="text"
            id="last_name"
            placeholder="Last Name"
            name="last_name"
            value={last_name}
            onChange={onTextChange}
          />
          {lastNameValid() ? null : (
            <>
              <p style={{ color: "red" }}>
                Last Name must be a minimum of 2 and maximum of 35 alpha
                characters
              </p>
            </>
          )}
          <input
            className="form-groupinput"
            type="text"
            id="address"
            placeholder="Address"
            name="address"
            value={address}
            onChange={onTextChange}
          />
          {addressValid() ? null : (
            <>
              <p style={{ color: "red" }}>
                Address must be between 10 and 50 characters alphanumeric
              </p>
            </>
          )}
          <input
            className="form-groupinput"
            type="text"
            id="state"
            placeholder="State"
            name="state"
            value={state}
            onChange={onTextChange}
          />
          <input
            className="form-groupinput"
            type="text"
            id="city"
            placeholder="City"
            name="city"
            value={city}
            onChange={onTextChange}
          />
          {cityValid() ? null : (
            <>
              <p style={{ color: "red" }}>
                City must be between 5 and 50 letters
              </p>
            </>
          )}
          <input
            className="form-groupinput"
            type="text"
            id="zip"
            placeholder="Zipcode"
            name="zip"
            value={zip}
            pattern="[0-9]*"
            onChange={onTextChange}
          />
          {zipValid() ? null : (
            <>
              <p style={{ color: "red" }}>
                Zipcode must be between 5 and 9 numbers
              </p>
            </>
          )}
          <input
            className="form-groupinput"
            type="text"
            id="home_phone"
            placeholder="Home Phone"
            name="home_phone"
            value={home_phone}
            pattern="[0-9]*"
            onChange={onTextChange}
          />
          {homeValid() ? null : (
            <>
              <p style={{ color: "red" }}>Home Phone must be 10 numbers</p>
            </>
          )}
          <input
            className="form-groupinput"
            type="text"
            id="cell_phone"
            placeholder="Cell Phone"
            name="cell_phone"
            value={cell_phone}
            pattern="[0-9]*"
            onChange={onTextChange}
          />
          {cellValid() ? null : (
            <>
              <p style={{ color: "red" }}>Cell Phone must be 10 numbers</p>
            </>
          )}
        </div>
        <div className="buttonwrapper">
          <button
            className="buttonaddemployee button--primary full-width"
            onClick={handleAddEmployee}
            type="submit"
            disabled={!checkValid() || isInputsEmpty()}
          >
            Save
          </button>
          <button
            className="buttonaddemployee button--primary full-width"
            onClick={handleCancel}
            type="submit"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
