import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Importando o contexto
import { ToastProvider } from "./components/Toast/ToastContainer"; // Importando o ToastProvider
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import EditProfile from "./pages/EditProfile/EditProfile";
import RepublicDetails from "./pages/RepublicDetails/RepublicDetails";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <ToastProvider> {/* O ToastProvider envolve toda a aplicação */}
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
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;