import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Container.css";

export const Container = () => {
  return (
    <div className="login-root">
      <div className="login-container">
        <Outlet />
      </div>
    </div>
  );
};
