import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import amazon from "./amazon.jpg";
import "./App.css";
function LoginPageAmz() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    mobileNumber: "",
    password: "",
  });
  const [msg, setMsg] = useState({});
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    let newErrors = {};
    if (inputs.mobileNumber.length == 0) {
      newErrors.mobileNumber = "mobile number is required";
    }
    if (inputs.password.length == 0) {
      newErrors.password = "Password is required";
    }

    setMsg(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveUserData = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .get(
          `http://localhost:8080/registration/getUserByMobile/${inputs.mobileNumber}`,
          {
            mobileNumber: inputs.mobileNumber,
            password: inputs.password,

            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Headers": "Content-Type",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            if (response.data.password === inputs.password) {
              localStorage.setItem("userName", response.data.userName);
              localStorage.setItem("id", response.data.id);

       
              navigate("/Home");
            } else {
              message.error("invalid password");
              setMsg({ ...msg, [msg.password]: "invalid password" });
            }
          }
        })
        .catch(() => {
          message.error("invalid mobile number");
          setMsg({ ...msg, [msg.mobileNUmber]: "invalid mobile number" });
        });
    }
  };

  return (
    <div>
      <Container style={{width:"70%"}}>
        <div className="login">
          <img src={amazon} width={120} height={95} />
          <Form>
            <h1>Sign in</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile Number </Form.Label>
              <br />
              <Form.Control
                type="text"
                placeholder="Mobile number"
                className="input"
                name="mobileNumber"
                value={inputs.mobileNumber}
                onChange={handleChange}
                isInvalid={msg.mobileNumber}
                required
              />
              <Form.Control.Feedback type="invalid">
                {msg.mobileNumber}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>password </Form.Label>
              <br />
              <Form.Control
                type="password"
                placeholder="Password"
                className="input"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                isInvalid={msg.password}
                required
              />
              <Form.Control.Feedback type="invalid">
                {msg.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="warning" onClick={saveUserData}>
              sign in
            </Button>{" "}
            <br />
            <a>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </a>
            <hr></hr>
            <h6>Buying for work?</h6>
            <a>Shop on Amazon Business</a>
          </Form>

          <br></br>
          <div>
            {" "}
            <a>New to Amazon?</a>
            <div>
              <button onClick={() => navigate("/")}>
                Create your Amazon account
              </button>
            </div>
          </div>

       
        </div>
      </Container>
    </div>
  );
}

export default LoginPageAmz;
