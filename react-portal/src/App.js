import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AddEmployeeScreen from "./screens/AddEmployeeScreen";
import ProtectedRoute from "./api/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route
          path="/employees"
          element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addEmployee"
          element={
            <ProtectedRoute>
              <AddEmployeeScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employees/:empId/"
          element={
            <ProtectedRoute>
              <AddEmployeeScreen />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
