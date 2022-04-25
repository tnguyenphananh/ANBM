import React from "react";
import Home from "./pages/home/home/Home";
import Login from "./pages/home/login/Login";
import Register from "./pages/home/register/Register";
import Profile from "./pages/profile/profile";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;