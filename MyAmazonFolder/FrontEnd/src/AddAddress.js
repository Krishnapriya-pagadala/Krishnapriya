import { message } from "antd";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Hearder2 from "./Hearder2";
export function AddAddress() {
  const [user, setUser] = useState([]);
  const id = localStorage.getItem("id");
  const [add, setAdd] = useState(false);
  const [addressId, setAddressId] = useState(0);

  const handleClose = () => {
    setAdd(false);
  };
  const navigate = useNavigate();

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

  const [reload, setReload] = useState(true);

  useEffect(() => {
    data();
  }, [reload]);
  const changeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const data = () => {
    axios
      .get(`http://localhost:8080/address/getUser/${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("res", response.data);
          setUser(response.data);
        }
      })

      .catch((error) => {
        // message.error("error");
      });
  };

  const deleteAddress = (addr_Id) => {
    axios
      .delete(`http://localhost:8080/address/DeleteUser/${addr_Id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);

          message.success("Address deleted");
          setReload(!reload);
        }
      })
      .catch(() => {
        // message.error("error");
      });
  };

  useEffect(() => {
    UpdateAddress();
  }, [reload]);
  const UpdateAddress = () => {
    axios
      .put(`http://localhost:8080/address/update/${addressId}`, {
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
        if (response.status === 200) {
          console.log(response.data);
          console.log(addressId);
          setAdd(false);
          setReload(!reload)
        }
      })
      .catch(() => {
        // message.error("error");
      });
  };

  const address = (add) => {
    axios
      .get(`http://localhost:8080/address/getAddress/${add}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setInputs({
            country: response.data.country,
            name: response.data.name,
            mobileNumber: response.data.mobileNumber,
            pincode: response.data.pincode,
            address1: response.data.address1,
            address2: response.data.address2,
            landmark: response.data.landmark,
            city: response.data.city,
            state: response.data.state,
          });
          setAddressId(response.data.id);
        }
      })

      .catch(() => {});
  };

  return (
    <div>
      <Hearder2 />
      <div>
        <h4 style={{ marginLeft: "34%" }}>ADDRESS</h4>

        {user.map((item) => {
          return (
            <>
              <Card className="profiledetails">
                <div className="flex flex-column">
                  <Row className="mb-2">
                    <Col md={4}>Country</Col> <Col md={2}>:</Col>
                    <Col md={6}>{item.country}</Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={4}>Full Name</Col> <Col md={2}>:</Col>
                    <Col md={6}>{item.name}</Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={4}>Mobile Number</Col>
                    <Col md={2}>:</Col> <Col md={6}>{item.mobileNumber}</Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={4}>Pincode</Col> <Col md={2}>:</Col>
                    <Col md={6}>{item.pincode}</Col>
                  </Row>
                  <Row className="mb-2">
                    <Col md={4}>Address1</Col>
                    <Col md={2}>:</Col> <Col md={6}>{item.address1}</Col>{" "}
                  </Row>
                  <Row className="mb-2">
                    <Col md={4}>Address2</Col>
                    <Col md={2}>:</Col> <Col md={6}>{item.address2}</Col>{" "}
                  </Row>
                  <Row className="mb-2">
                    <Col md={4}>Landmark</Col>
                    <Col md={2}>:</Col> <Col md={6}>{item.landmark}</Col>{" "}
                  </Row>
                  <Row className="mb-2">
                    <Col md={4}>Town/City</Col>
                    <Col md={2}>:</Col>
                    <Col md={6}>{item.city}</Col>{" "}
                  </Row>
                  <Row className="mb-2">
                    <Col md={4}>State</Col>
                    <Col md={2}>:</Col>
                    <Col md={6}>{item.state}</Col>{" "}
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Button
                        variant="light"
                        onClick={() => deleteAddress(item.id)}
                      >
                        Delete
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button
                        className="ml-2"
                        variant="light"
                        onClick={() => {
                          address(item.id);
                          setAdd(true);
                        }}
                      >
                        Edit
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>

              <Modal show={add} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="India"
                        name="country"
                        value={inputs.country}
                        onChange={changeInput}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="name"
                        name="name"
                        value={inputs.name}
                        onChange={changeInput}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="1234567890"
                        name="mobileNumber"
                        value={inputs.mobileNumber}
                        onChange={changeInput}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="123456"
                        name="pincode"
                        value={inputs.pincode}
                        onChange={changeInput}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Address1</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="address1"
                        value={inputs.address1}
                        onChange={changeInput}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Address2</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="address2"
                        value={inputs.address2}
                        onChange={changeInput}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Landmark</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="landmark"
                        value={inputs.landmark}
                        onChange={changeInput}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Town/City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="city"
                        value={inputs.city}
                        onChange={changeInput}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="state"
                        value={inputs.state}
                        onChange={changeInput}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={() => UpdateAddress()}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
        })}
      </div>
      <Button
        variant="warning"
        onClick={() => navigate("/Address")}
        style={{ marginLeft: "33%" }}
      >
        Add New Address
      </Button>
    </div>
  );
}
