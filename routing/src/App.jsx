import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { Landing } from "./pages/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashborad
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
    </div>
  );
}

export default App;
