import "./App.css";
import { Routes, Route } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="/employees" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
