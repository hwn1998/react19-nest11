import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/login/login.tsx";
import Register from "./views/register/register.tsx";
import Navigation from "./views/navigation/navigation.tsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
