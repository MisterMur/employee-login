import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AddEmployeeScreen from "./screens/AddEmployeeScreen";
import AuthenticatedRoute from "./api/AuthenticatedRoute";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="/employees" element={<HomeScreen />} />
        <Route exact path="/addEmployee" element={<AddEmployeeScreen />} />
        <Route
          exact
          path="/employees/:empId/"
          element={<AddEmployeeScreen />}
        />
      </Routes>
    </div>
  );
}

export default App;
