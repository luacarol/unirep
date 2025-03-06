import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Importando o contexto
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import EditProfile from "./pages/EditProfile/EditProfile";
import "./App.css";
import RepublicDetails from "./pages/RepublicDetails/RepublicDetails";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/republic-details" element={<RepublicDetails />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
