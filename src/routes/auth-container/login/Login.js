import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../../context/AuthContextProvider";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

export const Login = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  if (state.isLoggedIn) {
    return <Navigate to="/home/main" />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    await fetch("http://localhost/auth/login", {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setErrorMessage("Wrong Informations!! Please Try Again!");
          throw Error(res.statusText);
        }
      })
      .then((data) => {
        if (data.username !== null) {
          dispatch({
            type: "LOGIN",
            payload: { user: data, isLoggedIn: true },
          });
        } else {
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <div className="login-logo-container">
          <img
            style={{ width: "100px", height: "50px", borderRadius: "50px" }}
            src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg"
          />
          <div className="login-circle-1"></div>
          <div className="login-circle-2"></div>
          <div className="login-circle-3"></div>
        </div>
        <h1>School Management System</h1>
      </div>

      <div className="login-form">
        <div className="login-form-main">
          <Form onSubmit={handleLogin}>
            <Form.Group className="login-form-group">
              <Form.Label>Username: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="login-form-group">
              <Form.Label>Password: </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <span style={{ color: "red" }}>{errorMessage}</span>
            <br />
            <Button type="submit" className="login-button">
              Submit
            </Button>
          </Form>
          <div className="login-footer">
            Do Not have an Accout?{" "}
            <a href="/auth/register" className="login-register-button ">
              {" "}
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
