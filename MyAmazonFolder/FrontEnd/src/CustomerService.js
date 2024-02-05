import React from "react";
import Alert from "react-bootstrap/Alert";
import { TiWarning } from "react-icons/ti";
import security from "./security.png";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import orders from "./orders.jpg";
import acclocation from "./acclocation.png";
import prime from "./prime.jpg";
import Hearder2 from "./Hearder2";
import Footer from "./Footer";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
export default function CustomerService() {
  const navigate = useNavigate();
  return (
    <div>
      <Hearder2 />
      <Alert variant="warning">
        <TiWarning size={25} color="orange " />
        <b> Important:</b> Rs. 2,000 notes will no longer be accepted for Cash
        on Delivery (COD) payments or Cashloads.
      </Alert>
      <Alert variant="warning">
        <TiWarning size={25} color="orange " />
        For information on our live sale events, including promotions, deals,
        cashbacks, and quick solutions, refer to our Help page.
      </Alert>
      <h2>Hello. What can we help you with?</h2>
      <hr size="5" color="grey" />
      <h3>Some things you can do here</h3>

      <div className="yourAccount">
        <div className="box">
          <div>
            <img
              variant="top"
              src={acclocation}
              width="150px"
              height="140px"
            ></img>
          </div>
          <div>
            <Card style={{ width: "18rem" }} border="info">
              <Card.Body>
                <Card.Title>Your Address</Card.Title>
                <Card.Text>Edit address for orders and gifts</Card.Text>
                <Button
                  variant="warning"
                  onClick={() => navigate("/AddAddress")}
                >
                  View page
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="box">
          <div>
            <img
              variant="top"
              src={security}
              width="150px"
              height="140px"
            ></img>
          </div>
          <div>
            <Card style={{ width: "18rem" }} border="info">
              <Card.Body>
                <Card.Title>Login & Security</Card.Title>
                <Card.Text>Edit login, name & mobile number</Card.Text>
                <Button
                  variant="warning"
                  onClick={() => navigate("/LoginPageAmz")}
                >
                  View page
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="box">
          <div>
            <img variant="top" src={orders} width="150px" height="140px"></img>
          </div>
          <div>
            <Card style={{ width: "18rem" }} border="info">
              <Card.Body>
                <Card.Title>Your Orders</Card.Title>
                <Card.Text>Tract, return or buy things again</Card.Text>
                <Button variant="warning" onClick={() => navigate("/Orders")}>
                  View page
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="box">
          <div>
            <img variant="top" src={prime} width="150px" height="140px"></img>
          </div>
          <div>
            <Card style={{ width: "18rem" }} border="info">
              <Card.Body>
                <Card.Title>Prime</Card.Title>
                <Card.Text>View benifits and payment settings</Card.Text>
                <Button
                  variant="warning"
                  onClick={() => navigate("/PrimeMembership")}
                >
                  View page
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <hr />
      <h3>Help Topics</h3>
      <Card>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Card
                style={{
                  backgroundColor: "#f3f3f3",
                  color: "white",
                  textDecorationColor: "orange",
                  width: "260px",
                }}
              >
                {" "}
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Amazon Prime</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Shipping & Delivery</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Amazon Pay</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Returns, Refunds</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Ordering</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="sixth">Amazon Business</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="seventh">Help</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h4>Amazon Prime and Prime Lite Membership Benefits.</h4>
                  Amazon Prime and Prime Lite membership offers many exclusive
                  benefits, based on your chosen membership plan.{" "}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h4>Shipping Speeds and Charges</h4>
                  We display shipping speeds and charges based on the items in
                  your cart and the delivery address.
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h4>Amazon Pay Wallet - FAQs</h4>
                  Frequently asked questions about Amazon Pay Wallet. This
                  feature is only available on mobile app and mobile website.
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h4>Returns and Refunds</h4>
                  Amazon provides you easy option of return and refund if you
                  are not satisfied with your order. Below are some useful links
                  to get more information on the common issues around return.
                  Please note, items can only be returned during the return
                  period{" "}
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <h4>Cancel Items and Orders</h4>
                  You can cancel physical items or orders that haven't entered
                  the shipping process yet. You can cancel items or orders by
                  visiting the Your Orders section in Your Account.
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <h4>Get started with your business account</h4>
                  Amazon Business provides purchasing solutions that allow
                  registered businesses and their employees to shop for business
                  supplies on Amazon. You can customize your business account to
                  suit your business needs
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <h4>Seller Fulfilled Orders</h4>
                  Seller fulfilled orders contain items that are sold and
                  dispatched by third-party sellers. These items have the
                  message "Sold and fulfilled by (seller name)" on the product
                  detail page.
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Card>

      <Footer />
    </div>
  );
}
