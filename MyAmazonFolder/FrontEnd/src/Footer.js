import { Button, Col, Dropdown, Row } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

export default function Footer() {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <hr />
      <center>
        <h6>See Personalized recommendations</h6>
        <Button
          className="homefooterButton"
          onClick={() => navigate("/LoginPageAmz")}
        >
          Sign in
        </Button>

        <br />
        <a>
          New customer?{" "}
          <Link to={"/"} className="links">
            Start here
          </Link>
        </a>
      </center>
      <hr />
      <Button variant="primary" className="footerButton" onClick={handleClick}>
        Back to top
      </Button>{" "}
      <div className="flex flex-column , foot, header2">
        <Row>
          <div>
            <Col className="d-flex flex-column align-item-start,foot">
              <h6 className="foot"> Get to Know Us</h6>

              <Link
                to="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer"
                className="foot"
              >
                About us
              </Link>
              <Link to={"/About us"} className="foot">
                Careers
              </Link>
              <Link to={"/About us"} className="foot">
                Press{" "}
              </Link>
              <Link to={"/About us"} className="foot">
                Releases
              </Link>
              <Link to={"/About us"} className="foot">
                Amazon Science
              </Link>
            </Col>
          </div>

          <div>
            <Col className="d-flex flex-column align-item-start">
              <h6 className="foot"> Connect with Us</h6>

              <Link to={"/Facebook"} className="foot">
                Facebook
              </Link>
              <Link to={"/Twitter"} className="foot">
                Twitter
              </Link>
              <Link to={"/Instagram"} className="foot">
                Instagram{" "}
              </Link>
            </Col>
          </div>

          <div>
            <Col className="d-flex flex-column align-item-start">
              <h6 className="foot"> Make Money with Us</h6>
              <Link to={"/Sell on Amazon"} className="foot">
                Sell on Amazon
              </Link>
              <Link to={"/Sell under Amazon Accelerator"} className="foot">
                Sell under Amazon Accelerator
              </Link>
              <Link to={"/Protect and Build Your Brand"} className="foot">
                Protect and Build Your Brand{" "}
              </Link>
              <Link to={"/Amazon Global Selling"} className="foot">
                Amazon Global Selling
              </Link>
              <Link to={"/Become an Affiliate"} className="foot">
                Become an Affiliate
              </Link>
              <Link to={"/Fulfilment by Amazon"} className="foot">
                BFulfilment by Amazon
              </Link>
              <Link to={"/Advertise Your Products"} className="foot">
                Advertise Your Products
              </Link>
              <Link to={"/Amazon Pay on Merchants"} className="foot">
                Amazon Pay on Merchants
              </Link>
            </Col>
          </div>

          <div>
            <Col className="d-flex flex-column align-item-start">
              {" "}
              <h6 className="foot"> Let Us Help You</h6>
              <Link to={"/Sell on Amazon"} className="foot">
                COVID-19 and Amazon
              </Link>
              <Link to={"/Sell under Amazon Accelerator"} className="foot">
                Your Account
              </Link>
              <Link to={"/Protect and Build Your Brand"} className="foot">
                Returns Centre{" "}
              </Link>
              <Link to={"/Amazon Global Selling"} className="foot">
                100% Purchase Protection
              </Link>
              <Link to={"/Become an Affiliate"} className="foot">
                Amazon App Download
              </Link>
              <Link to={"/Amazon Pay on Merchants"} className="foot">
                Help
              </Link>
            </Col>
          </div>
        </Row>
      </div>
      <hr/>
      
    </>
  );
}
