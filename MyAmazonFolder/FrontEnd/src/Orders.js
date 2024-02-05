import { Col, Dropdown, Row } from "antd";
import React from "react";
import { Container, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hearder2 from "./Hearder2";

export function Orders() {
  return (
    <div>
    <Hearder2/>
      <Container>
        <Row>
          <Col>
            <h1>Your Orders</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Link to={"/Orders"}>Orders </Link>
          </Col>
          <Col xs={4}>
            <Link to={"/BuyAgain"}>Buy Again </Link>
          </Col>
          <Col xs={4}>
            <Link to={"/NotYetShipped"}>Not yet Shipped</Link>
          </Col>

          <Col xs={4}>
            <Link to={"/CancelledOrders"}>Cancelled Orders</Link>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col>
            <h6>Orders placed in</h6>
            </Col>
            {/* <Col>
            <Dropdown>
            <DropdownButton variant="outline-secondary" title="All" >
    <Dropdown.Item >last 30 days</Dropdown.Item>
    <Dropdown.Item >past 3 months</Dropdown.Item>
      <Dropdown.Item >2023</Dropdown.Item>
      <Dropdown.Item >2022 </Dropdown.Item>
    </DropdownButton>
    </Dropdown>
            </Col> */}
          
          
         
        </Row>
      </Container>
    </div>
  );
}
