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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login/>} />

        {/* Protected routes */}
        <Route path="/register" element={<PrivateRoute><Register/></PrivateRoute>} />
        <Route path="/republics" element={<PrivateRoute><Republics/></PrivateRoute>} />
        <Route path="/editprofile" element={<PrivateRoute><EditProfile/></PrivateRoute>} />
        <Route path="/republics/:id" element={<PrivateRoute><DetailsRepublic/></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
