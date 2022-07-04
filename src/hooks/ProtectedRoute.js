import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

export const ProtectedRoute = ({ children }) => {
  const { state } = useContext(AuthContext);

  if (!state.isLoggedIn && localStorage.getItem("user") === null) {
    return <Navigate to="/auth" />;
  }

  return children ? children : <Outlet />;
};
