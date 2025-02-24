import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { AboutPage } from "./components/AboutPage";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { RegisterPage } from "./components/RegisterPage";
import { Login } from "./components/LoginPage";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import { ShortenUrlPage } from "./components/ShortenUrlPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./components/ErrorPage";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>

        <Route path="/register" element={ <PrivateRoute publicPage={false}> <RegisterPage /> </PrivateRoute>}></Route>
        <Route path="/login" element={ <PrivateRoute publicPage={false}> <Login /> </PrivateRoute>}></Route>

        <Route path="/dashboard" element={ <PrivateRoute publicPage={false}> <DashboardLayout /> </PrivateRoute>}></Route>

        <Route path="/error" element={<ErrorPage message="ERROR"/>} />
        <Route path="*" element={<ErrorPage message="The page you're looking for doesn't exists"/>} />
      </Routes>
      <Footer />
    </>
  );
};

export const SubDomainRouter = () => {
  return (
    <Routes>
      <Route path="/:url" element={<ShortenUrlPage />}></Route>
    </Routes>
  );
};
