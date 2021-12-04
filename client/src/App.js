import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar"
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Forums from "./components/pages/Forums";
import Weather from "./components/pages/Weather";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";
import Error404 from "./components/pages/Error404";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
