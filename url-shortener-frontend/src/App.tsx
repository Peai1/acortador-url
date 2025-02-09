import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { AboutPage } from "./components/AboutPage";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
