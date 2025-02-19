import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { AboutPage } from "./components/AboutPage";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { RegisterPage } from "./components/RegisterPage";
import { Login } from "./components/LoginPage";
import DashboardLayout from "./components/Dashboard/DashboardLayout";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<DashboardLayout />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
