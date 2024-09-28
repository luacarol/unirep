import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/reset.css'
import './styles/colors.css'
import './styles/typography.css'
import './styles/global.css'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Republics from './pages/Republics/Republics';
import EditProfile from './pages/EditProfile/EditProfile';
import DetailsRepublic from './pages/Republics/DetailsRepublic/DetailsRepublic';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/republics" element={<Republics/>} />
        <Route path="/editprofile" element={<EditProfile/>} />
        <Route path="/republics/:id" element={<DetailsRepublic/>} />
      </Routes>
    </Router>
  );
}

export default App;
