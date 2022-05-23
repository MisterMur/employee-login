import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AddEmployeeScreen from "./screens/AddEmployeeScreen";
import Auth from "./api/Auth";
import PrivateRoute from "./api/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route
          path="/employees"
          element={
            <PrivateRoute>
              <HomeScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/addEmployee"
          element={
            <PrivateRoute>
              <AddEmployeeScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/employees/:empId/"
          element={
            <PrivateRoute>
              <AddEmployeeScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
