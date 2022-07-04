import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./routes/auth-container/login/Login";
import { Signup } from "./routes/auth-container/signup/Signup";
import { Container } from "./routes/auth-container/Container";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { ProtectedRoute } from "./hooks/ProtectedRoute";
import { Dashboard } from "./routes/main-container/sidebar/dashboard/Dashboard";
import { Profile } from "./routes/main-container/sidebar/profile/Profile";
import { Academics } from "./routes/main-container/sidebar/academics/Academics";
import { Finance } from "./routes/main-container/sidebar/finance/Finance";
import { Settings } from "./routes/main-container/sidebar/settings/Settings";
import { Main } from "./routes/main-container/main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Container />}>
            <Route index element={<Login />}></Route>
            <Route path="register" element={<Signup />}></Route>
            <Route path="login" element={<Login />}></Route>
          </Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/home" element={<App />}>
              <Route path="main" element={<Main />}>
                <Route index element={<Dashboard />}></Route>
                <Route path="dashboard" element={<Dashboard />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="academics" element={<Academics />}></Route>
                <Route path="finance" element={<Finance />}></Route>
                <Route path="Settings" element={<Settings />}></Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
