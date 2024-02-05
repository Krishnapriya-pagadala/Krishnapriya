import React, { useContext, useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { SiAmazonprime } from "react-icons/si";
import AmazonIn from "./AmazonIn.jpg";
import axios from "axios";
import { message } from "antd";

export default function JoinPrime() {
  const id = localStorage.getItem("id");

  const navigate = useNavigate();
  const [radio, setRadio] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(true);
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
    setRadio(true);
  };

  const handleButton = () => {
    if (radio == true) {
      axios
        .put(`http://localhost:8080/registration/updatePrime/${id}`)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);

            navigate("/PrimeMembership");
          }
        })

        .catch(() => {
          message.error("error");
        });
    }
  };

  return (
    <div>
      {click ? (
        <div>
          <Card style={{ backgroundColor: "#f3f3f3" }}>
            <h5>Prime</h5>
            <Row>
              <Col md={1}>you pay:</Col>
              <Col md={10}>
                {" "}
                <h6>₹1499 for 12 months</h6>
              </Col>
              <Col md={1}>
                {" "}
                <img
                  src={AmazonIn}
                  width={80}
                  height={50}
                  onClick={() => navigate("/Home")}
                />
              </Col>
            </Row>
          </Card>

          <hr size="5" color="grey" />
          <h4>Select a payment method</h4>
          <hr size="5" color="grey" />

          <h5>Payment method</h5>

          <Form>
            <Form.Group>
              <Col>
                <InputGroup>
                  <InputGroup.Radio
                    name="paymentMethod"
                    value="creditCard"
                    checked={selectedPaymentMethod === "creditCard"}
                    onChange={handlePaymentMethodChange}
                  />
                  <span className="ml-2">Credit Card</span>
                </InputGroup>
              </Col>

              <Col>
                <InputGroup>
                  <InputGroup.Radio
                    name="paymentMethod"
                    value="paypal"
                    checked={selectedPaymentMethod === "paypal"}
                    onChange={handlePaymentMethodChange}
                  />
                  <span className="ml-2">PayPal</span>
                </InputGroup>
              </Col>

              <Col>
                <InputGroup>
                  <InputGroup.Radio
                    name="paymentMethod"
                    value="bankTransfer"
                    checked={selectedPaymentMethod === "bankTransfer"}
                    onChange={handlePaymentMethodChange}
                  />
                  <span className="ml-2">Bank Transfer</span>
                </InputGroup>
              </Col>
            </Form.Group>

            <Button onClick={handleButton}>Submit</Button>
          </Form>
        </div>
      ) : (
        <div>
          <SiAmazonprime
            size={120}
            onClick={() => navigate("/Home")}
            style={{
              marginLeft: "5%",
              color: "blue",
            }}
          />
          <h3 style={{}}>FREE 1-day delivery, videos, music & more</h3>
          <h4>One membership, many benefits. Join now.</h4>
          <Row>
            <Col>
              <Card
                style={{
                  backgroundColor: "#89CFF0",
                  width: "40%",
                  marginTop: "10%",
                  marginLeft: "5%",
                  height: "65%",
                  paddingTop: "25px",
                  paddingLeft: "4%",
                  paddingBottom: "25px",
                }}
              >
                <h5>Prime yearly</h5>
                <Button
                  variant="warning"
                  style={{ width: "80%" }}
                  onClick={handleClick}
                >
                  {" "}
                  Rs.1499 per year
                </Button>
                Pay by all electronic methods.{" "}
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </div>
      )}
    </div>
  );
}
