import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AddEmployeeScreen from "./screens/AddEmployeeScreen";
import ProtectedRoute from "./api/ProtectedRoute";

import Header from "./screens/Header";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginScreen />} />
          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                <Header />
                <HomeScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addEmployee"
            element={
              <ProtectedRoute>
                <Header />
                <AddEmployeeScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees/:empId/"
            element={
              <ProtectedRoute>
                <Header />
                <AddEmployeeScreen />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
