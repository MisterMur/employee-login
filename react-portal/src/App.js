import "./App.css";
import { Routes, Route } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;
