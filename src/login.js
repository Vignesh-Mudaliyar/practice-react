import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import data from "./json/login.json";

// import {Link, useHistory} from 'react-router-dom'

export default function Login({ setIsLoggedIn }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();
  const [validation, setValidation] = useState("");
  const [passValidation, setPassValidation] = useState("");
  const [valiClass, setValiClass] = useState("");
  const [passValiClass, setPassValiClass] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePassword = (e) => {
    let val = e.target.value;
    if (val.length < 8) {
      setPassValidation("please enter strong password");
      setPassValiClass("is-invalid");
    } else {
      setPassValidation("");
      setPassValiClass("is-valid");
    }
  };
  const handleInput = (e) => {
    let value = e.target.value;
    if (
      value.includes("@") &&
      value.includes(".") &&
      value[value.length - 1] != "." &&
      value[value.length - 2] != "."
    ) {
      setValidation("");
      setValiClass("is-valid");
    } else if (value.length == 0) {
      setValidation("please enter email");
      setValiClass("is-invalid");
    } else {
      setValidation("Enter valid Email");
      setValiClass("is-invalid");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);

    if ( emailRef.current.value == data.username &&passwordRef.current.value == data.password) {
      console.log("success");
      setError("");
      setIsLoggedIn(true);
    } else {
      setError("Your Email or Password is wrong");
    }

  };
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <Card style={{ borderRadius: "10px" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  className={valiClass}
                  ref={emailRef}
                  onChange={(e) => handleInput(e)}
                  required
                />
                <Form.Label style={{ color: "red" }}>{validation}</Form.Label>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  className={passValiClass}
                  ref={passwordRef}
                  onChange={(e) => handlePassword(e)}
                  required
                />
                <Form.Label style={{ color: "red" }}>
                  {passValidation}
                </Form.Label>
              </Form.Group>

              <Button disabled={loading} type="submit" className="w-100 my-4">
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
