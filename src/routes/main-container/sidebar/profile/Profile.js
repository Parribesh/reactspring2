import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../../../../context/AuthContextProvider";
import "./Profile.css";

export const Profile = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState();
  const { state } = useContext(AuthContext);

  const handleOnSubmit = () => {};
  return (
    <div className="Profile-main">
      <div className="Profile-img">
        <img
          style={{
            width: "150px",
            height: "150px",
            border: "3px solid grey",
            borderRadius: "50%",
          }}
          src={state.user.image}
        ></img>
      </div>
      <div className="Profile-form">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              defaultValue={state.user.username}
              placeholder="UserName"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              defaultValue={state.user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              defaultValue={state.user.email}
              placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              defaultValue={state.user.mobile}
              placeholder="Phone No."
              onChange={(e) => setUser({ ...user, mobile: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Choose an Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image"
              defaultValue={state.user.image}
              onChange={(e) => setUser({ ...user, image: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              defaultValue={state.user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="Gender"
              defaultValue={state.user.gender}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            />
          </Form.Group>

          <h4>{message}</h4>

          <div className="createUser-buttons">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
