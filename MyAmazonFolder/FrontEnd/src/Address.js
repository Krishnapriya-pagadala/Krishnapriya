import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AddAddress } from "./AddAddress";

export function Address() {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  const [msg, setMsg] = useState({});
  const [addAdress,SetAddAdress]=useState(false);
  const [inputs, setInputs] = useState({
    country: "",
    name: "",
    mobileNumber: "",
    pincode: "",
    address1: "",
    address2: "",
    landmark: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setMsg({ ...msg, [e.target.name]: "" });
  };

  const validate = () => {
    let displaymsg = {};
    var countryregex = "^[A-Za-z _.-]+$";
    var nameregex = "^[A-Za-z _.-]+$";
    var mobileregex = "[0-9]{10}";
    var address1regex = "^[A-Za-z _.-]+$";
    var address2regex = "^[A-Za-z _.-]+$";
    var landmarkregex = "^[A-Za-z _.-]+$";
    var cityregex = "^[A-Za-z _.-]+$";
    var stateregex = "^[A-Za-z _.-]+$";

    var pincoderegex = "^[a-zA-Z0-9]{6,}$";

    if (inputs.country.length == 0) {
      displaymsg.country = "country field cannot be empty";
    } else if (!inputs.country.match(countryregex)) {
      displaymsg.country = "country incorrect";
    }

    if (inputs.name.length == 0) {
      displaymsg.name = "UserName field cannot be empty";
    } else if (!inputs.name.match(nameregex)) {
      displaymsg.name = "UserName incorrect";
    }

    if (inputs.mobileNumber.length == 0) {
      displaymsg.mobileNumber = "mobileNumber field cannot be empty";
    } else if (!inputs.mobileNumber.match(mobileregex)) {
      displaymsg.mobileNumber = "Mobile number should contain 10 digits";
    }

    if (inputs.pincode.length == 0) {
      displaymsg.pincode = "pincode field should not be empty";
    } else if (!inputs.pincode.match(pincoderegex)) {
      displaymsg.pincode = "incorrect pincode";
    }

    if (inputs.address1.length == 0) {
      displaymsg.address1 = "address1 field should not be empty";
    } else if (!inputs.address1.match(address1regex)) {
      displaymsg.address1 = " incorrect address1 ";
    }

    if (inputs.address2.length == 0) {
      displaymsg.address2 = "address1 field should not be empty";
    } else if (!inputs.address2.match(address2regex)) {
      displaymsg.address2 = "incorrect address2 ";
    }

    if (inputs.landmark.length == 0) {
      displaymsg.landmark = "landmark field should not be empty";
    } else if (!inputs.landmark.match(landmarkregex)) {
      displaymsg.landmark = " incorrect landmark  ";
    }
    if (inputs.city.length == 0) {
      displaymsg.city = "city field should not be empty";
    } else if (!inputs.city.match(cityregex)) {
      displaymsg.city = " incorrect city  ";
    }
    if (inputs.state.length == 0) {
      displaymsg.state = "state field should not be empty";
    } else if (!inputs.state.match(stateregex)) {
      displaymsg.state = " incorrect state  ";
    }

    setMsg(displaymsg);
    return Object.keys(displaymsg).length === 0;
  };

  const setUserAddress = () => {
    if(addAdress==false){
      if (validate()) {
        axios
          .post(`http://localhost:8080/address/save/${id}`, {
            country: inputs.country,
            name: inputs.name,
            mobileNumber: inputs.mobileNumber,
            pincode: inputs.pincode,
            address1: inputs.address1,
            address2: inputs.address2,
            landmark: inputs.landmark,
            city: inputs.city,
            state: inputs.state,
          })
  
          .then((response) => {
            if (response.status === 201) {
              message.success("address added successfully!!");
  
              navigate("/AddAddress");
              setInputs({
                country: "",
                name: "",
                mobileNumber: "",
                pincode: "",
                address1: "",
                address2: "",
                landmark: "",
                city: "",
                state: "",
              });
             // localStorage.setItem('address_id',response.data.address_id);
            }
            SetAddAdress(true)
          })
  
          .catch((error) => {
            // message.error("error");
          });
      }

    }
   
  };

  if(addAdress==true){
  

  }


  return (
    <div>
      <Container>
        <h2>Add a new address</h2>
        <Form className="login">
          <Form.Group>
            <Form.Label>Country/Region</Form.Label>

            <Form.Control
              type="text"
              onChange={handleChange}
              className="input"
              name="country"
              value={inputs.country}
              isInvalid={msg.country}
            />
            <Form.Control.Feedback type="invalid">
              {msg.country}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              className="input"
              name="name"
              value={inputs.name}
              isInvalid={msg.name}
            />
            <Form.Control.Feedback type="invalid">
              {msg.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>MobileNumber</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              className="input"
              name="mobileNumber"
              value={inputs.mobileNumber}
              isInvalid={msg.mobileNumber}
            />
            <Form.Control.Feedback type="invalid">
              {msg.mobileNumber}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="number"
              minLength={6}
              maxLength={6}
              placeholder="Pincode"
              onChange={handleChange}
              className="input"
              name="pincode"
              value={inputs.pincode}
              isInvalid={msg.pincode}
            />
            <Form.Control.Feedback type="invalid">
              {msg.pincode}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Flat, House no., Building, Company, Apartment
            </Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              className="input"
              name="address1"
              value={inputs.address1}
              isInvalid={msg.address1}
            />
            <Form.Control.Feedback type="invalid">
              {msg.address1}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Area, Street, Sector, Village</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              className="input"
              name="address2"
              value={inputs.address2}
              isInvalid={msg.address2}
            />
            <Form.Control.Feedback type="invalid">
              {msg.address2}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Landmark</Form.Label>
            <Form.Control
              type="text"
              placeholder="Eg: near apollo hospital"
              onChange={handleChange}
              className="input"
              name="landmark"
              value={inputs.landmark}
              isInvalid={msg.landmark}
            />
            <Form.Control.Feedback type="invalid">
              {msg.landmark}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Town/City</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              className="input"
              name="city"
              value={inputs.city}
              isInvalid={msg.city}
            />
            <Form.Control.Feedback type="invalid">
              {msg.city}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="input" name="state" value={inputs.state}>
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              className="input"
              name="state"
              value={inputs.state}
              isInvalid={msg.state}
            />
            <Form.Control.Feedback type="invalid">
              {msg.state}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="warning" onClick={setUserAddress}>
            AddAddress
          </Button>
        </Form>
      </Container>
      <hr />
    </div>
  );
}
