import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import EditProfile from './components/pages/EditProfile';
import Republics from './components/pages/Republics';
import Republic from './components/pages/Republic';
import ItemsToPay from './components/pages/ItemsToPay';
import Members from './components/pages/Members';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/republics" element={<Republics />} />
        <Route path="/republic" element={<Republic />} />
        <Route path="/itemstopay" element={<ItemsToPay />} />
        <Route path="/members" element={<Members />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
