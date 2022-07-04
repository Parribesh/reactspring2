import React, { useContext } from "react";
import "./Sidebar.css";
import { Link, Outlet } from "react-router-dom";
import { Dashboard } from "./dashboard/Dashboard";
import { Profile } from "./profile/Profile";
import { Academics } from "./academics/Academics";
import { Finance } from "./finance/Finance";
import { Settings } from "./settings/Settings";
import { AuthContext } from "../../../context/AuthContextProvider";

export const Sidebar = () => {
  const { state } = useContext(AuthContext);
  console.log(state);

  return (
    <div className="Sidebar-main">
      <div className="Sidebar-header-profile">
        <img
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            marginTop: "20px",
          }}
          src={state.user.image}
        />
        <span>{state.user.username}</span>
      </div>
      <nav className="Sidebar-nav">
        <span className="Sidebar-item Sidebar-dashboard">
          <Link
            to="main/dashboard"
            style={{ textDecoration: "none", color: "black" }}
          >
            Dashboard
          </Link>
        </span>
        <span className="Sidebar-item Sidebar-profile">
          <Link
            to="main/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            Profile
          </Link>
        </span>
        <span className="Sidebar-item Sidebar-academics">
          <Link
            to="main/academics"
            style={{ textDecoration: "none", color: "black" }}
          >
            Academics
          </Link>
        </span>
        <span className="Sidebar-item Sidebar-finance">
          <Link
            to="main/finance"
            style={{ textDecoration: "none", color: "black" }}
          >
            Finance
          </Link>
        </span>
        <span className="Sidebar-item Sidebar-settings">
          <Link
            to="main/settings"
            style={{ textDecoration: "none", color: "black" }}
          >
            Settings
          </Link>
        </span>
      </nav>

      <div>
        <span className="Sidebar-company">@Powered By Neupane Inc.</span>
        <div className="Sidebar-logo-container">
          <img
            style={{ width: "", height: "50px", borderRadius: "50px" }}
            src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg"
          />
          <span>School Management System</span>
        </div>
      </div>

      {/* <div>
        <Dashboard />
      </div>
      <div>
        <Profile />
      </div>
      <div>
        <Academics />
      </div>
      <div>
        <Finance />
      </div>
      <div>
        <Settings />
      </div> */}
    </div>
  );
};
