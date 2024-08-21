import React, { Component } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home"
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*">PAGE NOT FOUND</Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
