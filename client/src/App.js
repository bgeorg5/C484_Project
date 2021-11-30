import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Forums from "./components/Forums.js";
import Weather from "./components/Weather.js";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
