import "./App.css";
import { Routes, Route } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AddEmployeeScreen from "./screens/AddEmployeeScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="/employees" element={<HomeScreen />} />
        <Route exact path="/addEmployee" element={<AddEmployeeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
