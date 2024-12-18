import "./styles/reset.css";
import "./styles/colors.css";
import "./styles/typography.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Republics from "./pages/Republics/Republics";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RepublicDetails from "./pages/RepublicDetails/RepublicDetails";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Republics/>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/republic-details" element={<RepublicDetails></RepublicDetails>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;