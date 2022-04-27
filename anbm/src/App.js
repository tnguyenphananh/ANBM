import React, { useContext } from "react";
import Home from "./pages/home/home/Home";
import Login from "./pages/home/login/Login";
import Register from "./pages/home/register/Register";
import Profile from "./pages/profile/profile";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AuthContext} from "./context/AuthContext";
import { Users } from "./dummyData";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={Users ? <Home/> : <Register />}/>
        <Route exact path="/login" element={Users ? <Redirect to="/"/> : <Login/>}/>
        <Route exact path="/register" element={Users ? <Redirect to="/" /> : <Register/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;