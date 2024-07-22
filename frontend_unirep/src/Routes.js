import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import EditProfile from './components/pages/EditProfile';
import Republics from './components/pages/Republics';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/republics" element={<Republics />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
