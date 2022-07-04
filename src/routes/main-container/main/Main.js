import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./Main.css";
import { AuthContext } from "../../../context/AuthContextProvider";

export const Main = () => {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="Main-main">
      <div className="Main-header">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="Main-outlet">
        <Outlet />
      </div>
    </div>
  );
};
