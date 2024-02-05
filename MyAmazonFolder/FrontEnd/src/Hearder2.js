import React from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AccountSettings } from "./AccountSettings";
import Search from "./Search";
import { CiLocationOn } from "react-icons/ci";
import { BiCartAdd } from "react-icons/bi";
import AmazonIn from "./AmazonIn.jpg";
export default function () {
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  let lan = ["Language", "English", "Telugu", "Hindi", "Kanada", "Tamil"];
  return (
    <div>

      <Row className="header1">
        <Col>
          <img
            src={AmazonIn}
            width={90}
            height={50}
            onClick={() => navigate("/Home")}
          />
        </Col>

        <Col>
          <CiLocationOn
            size={45}
            color="white"
            style={{ paddingTop: "10px" }}
            onClick={() => navigate("/AddAddress")}
          />
        </Col>
        <Col
          xs={5}
          style={{
            paddingTop: "10px",
          }}
        >
          <InputGroup className="mb-3">
            <DropdownButton variant="secondary" title="All">
              <Dropdown.Item href="#" onClick={() => navigate("/TVs")}>
                TV's
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={() => navigate("/FriendlyFashion")}
              >
                Fashion
              </Dropdown.Item>

              <Dropdown.Item href="#" onClick={() => navigate("/Appliances")}>
                Appliances
              </Dropdown.Item>

              <Dropdown.Item href="#" onClick={() => navigate("/Headphones")}>
                Headphones
              </Dropdown.Item>

              <Dropdown.Item href="#" onClick={() => navigate("/HomeDecor")}>
                Home Decor
              </Dropdown.Item>

              <Dropdown.Item href="#" onClick={() => navigate("/HomeNeeds")}>
                Home Needs
              </Dropdown.Item>
              <Dropdown.Item href="#" onClick={() => navigate("/AmazonBrands")}>
                Amazon Brands
              </Dropdown.Item>
              <Dropdown.Item href="#" onClick={() => navigate("/Automotive")}>
                Women Clothing
              </Dropdown.Item>
            </DropdownButton>
            <Search />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className="mb-5 inputbox">
            <DropdownButton variant="dark" bg="light" title="Lan">
              {lan.map((lanitems) => (
                <Dropdown.Item href="#">{lanitems}</Dropdown.Item>
              ))}
            </DropdownButton>
          </InputGroup>
        </Col>
        <Col>
          {" "}
          <InputGroup className="mb-3">
            <DropdownButton variant="dark" title="signin Accounts">
              <AccountSettings />
            </DropdownButton>
            {userName}
          </InputGroup>
        </Col>
        <Col>
          <Row>
            <h6>Returns</h6>
          </Row>
          <Row>
            <h6>& Orders</h6>
          </Row>
        </Col>
        <Col>
          <Link to={"/ViewCart"} style={{ color: "white" }}>
            <BiCartAdd size={50} />
          </Link>
        </Col>
      </Row>
    </div>
  );
}
