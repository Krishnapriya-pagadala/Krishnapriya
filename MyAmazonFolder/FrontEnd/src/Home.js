import React from "react";
import {
  Card,
  Carousel,
  CarouselItem,
} from "react-bootstrap";

import "./App.css";
import headphones from "./headphones.png";
import Appliances from "./Appliances.png";
import HomeDecor from "./HomeDecor.png";
import needs from "./needs.png";

import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import image3 from "./image3.png";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image4 from "./image4.png";
import {  useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <hr size="20" color="lightgreen"></hr>
      <Carousel controls indicators>
        <CarouselItem>
          <img className="d-block w-100" src={img1} alt="slide 1" />
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={img2} alt="slide 1" />
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={img3} alt="slide 1" />
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={img4} alt="slide 1" />
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={img5} alt="slide 1" />
        </CarouselItem>
      </Carousel>
      <hr size="20" color="lightpink"></hr>
      <div
        className="d-flex mt-2 mb-2 ml-4 gap-4"
        style={{ paddingLeft: "1%" }}
      >
        <Card
          style={{ width: "18rem" }}
          onClick={() => navigate("/Headphones")}
        >
          <Card.Img
            variant="top"
            src={headphones}
            width="225px"
            height={"225px"}
          />
          <Card.Body>
            <Card.Title>Headphones</Card.Title>
            <Card.Text>
              <p>
                {" "}
                <b>50-70% OFF</b>
              </p>
              Shop Now
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          onClick={() => navigate("/Appliances")}
        >
          <Card.Img
            variant="top"
            src={Appliances}
            width="225px"
            height={"225px"}
          />
          <Card.Body>
            <Card.Title>Appliances</Card.Title>
            <Card.Text>
              <p>
                {" "}
                <b>40-80% OFF</b>
              </p>
              Shop Now
            </Card.Text>
          </Card.Body>
        </Card>{" "}
        <Card style={{ width: "18rem" }} onClick={() => navigate("/HomeDecor")}>
          <Card.Img
            variant="top"
            src={HomeDecor}
            width="225px"
            height={"225px"}
          />
          <Card.Body>
            <Card.Title>Home Decor</Card.Title>
            <Card.Text>
              <p>
                {" "}
                <b>40-70% OFF</b>
              </p>
              Shop Now
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} onClick={() => navigate("/HomeNeeds")}>
          <Card.Img variant="top" src={needs} width="225px" height={"225px"} />
          <Card.Body>
            <Card.Title>Home improvement needs</Card.Title>
            <Card.Text>
              <p>
                {" "}
                <b>30-80% OFF</b>
              </p>
              Shop Now
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <hr size="20" color="lightpink"></hr>

      <div className="d-flex mt-2 mb-2 gap-4 " style={{ paddingLeft: "1%" }}>
        <Card
          style={{ width: "18rem" }}
          onClick={() => navigate("/AmazonBrands")}
        >
          <Card.Img variant="top" src={image1} width="225px" height={"225px"} />
          <Card.Body>
            <Card.Title>AmazonBrands</Card.Title>
            <Card.Text>
              <p>
                {" "}
                <b>30-80% OFF</b>
              </p>
              see all deals
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} onClick={() => navigate("/TVs")}>
          <Card.Img variant="top" src={image2} width="225px" height={"225px"} />
          <Card.Body>
            <Card.Title>TVs starting...</Card.Title>
            <Card.Text>
              <p>
                {" "}
                <b>30-80% OFF</b>
              </p>
              See all offers
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          onClick={() => navigate("/FriendlyFashion")}
        >
          <Card.Img variant="top" src={image4} width="225px" height={"225px"} />
          <Card.Body>
            <Card.Title>Friendly Fashion</Card.Title>
            <Card.Text>
              <p>
                {" "}
                <b>30-80% OFF</b>
              </p>
              End of sale
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          onClick={() => navigate("/Automotive")}
        >
          <Card.Img variant="top" src={image3} width="225px" height={"225px"} />
          <Card.Body>
            <Card.Title>Women Clothing</Card.Title>
            <Card.Text>
              <p>
                {" "}
                <b>30-80% OFF</b>
              </p>
              End of sale
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
