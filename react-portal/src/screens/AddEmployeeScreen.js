import { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addEmployeeStyles.scss";
import EmployeeApi from "../api/EmployeeApi";

export default class AddEmployeeScreen extends Component {
  state = {
    mode: "",
  };
  render() {
    return (
      <div className="add-employee-screen">
        <div
          className={`form-block-wrapper form-block-wrapper--is-addemployee`}
        ></div>
        <section className={`form-block form-block--is-addemployee`}>
          <header className="form-block__header">
            <h1>Add New Employee</h1>
            <div className="form-block__toggle-block">
              <span>Enter all required fields to continue &#8594;</span>
            </div>
          </header>
          <EmployeeForm />
        </section>
      </div>
    );
  }
}
function EmployeeForm() {
  const initState = {
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    city: "",
    zipcode: "",
    cellPhone: "",
    homePhone: "",
    email: "",
    userId: "",
  };
  const [employeeData, setEmployeeData] = useState(initState);
  const history = useNavigate();
  const {
    firstName,
    lastName,
    address,
    state,
    city,
    zipcode,
    cellPhone,
    homePhone,
    email,
    userId,
  } = employeeData;

  const onTextChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };
  const handleAddEmployee = () => {
    EmployeeApi.addEmployee(employeeData).then(() => {
      console.log("in handleaddemployee");
      history("/employees");
    });
  };
  const handleCancel = () => {
    setEmployeeData(initState);

    history("/employees");
  };

  return (
    <form onSubmit={handleAddEmployee}>
      <div className="form-block-addemployee">
        <div className="form-group-addemployee">
          <Input
            type="text"
            id="userId"
            label="User ID"
            name="userId"
            value={userId}
            onChange={onTextChange}
          />
          <Input
            type="text"
            id="email"
            label="Email"
            name="email"
            value={email}
            onChange={onTextChange}
          />
          <Input
            type="text"
            id="firstName"
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={onTextChange}
          />
          <Input
            type="text"
            id="lastName"
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={onTextChange}
          />
          <Input
            type="text"
            id="address"
            label="Address"
            name="address"
            value={address}
            onChange={onTextChange}
          />
          <Input
            type="text"
            id="state"
            label="State"
            name="state"
            value={state}
            onChange={onTextChange}
          />
          <Input
            type="text"
            id="city"
            label="City"
            name="city"
            value={city}
            onChange={onTextChange}
          />
          <Input
            type="text"
            id="zipcode"
            label="Zipcode"
            name="zipcode"
            value={zipcode}
            onChange={onTextChange}
          />
          <Input
            type="text"
            id="homePhone"
            label="Home Phone"
            name="homePhone"
            value={homePhone}
            onChange={onTextChange}
          />
          <Input
            type="text"
            id="cellPhone"
            label="Cell Phone"
            name="cellPhone"
            value={cellPhone}
            onChange={onTextChange}
          />
        </div>
        <div className="buttonwrapper">
          <button
            className="buttonaddemployee button--primary full-width"
            onClick={handleAddEmployee}
            type="submit"
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
const Input = ({
  id,
  type,
  label,
  value,
  onChange,
  disabled = false,
  name,
}) => (
  <input
    className="form-groupinput"
    type={type}
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={label}
    disabled={disabled}
  />
);
