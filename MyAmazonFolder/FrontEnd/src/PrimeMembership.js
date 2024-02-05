import React, { useEffect, useState } from "react";
import { Alert, Card, Col, Row } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { FaCircleInfo } from "react-icons/fa6";
import { SiAmazongames } from "react-icons/si";
import { MdPayment } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { ImClock2 } from "react-icons/im";
import { MdSavings } from "react-icons/md";
import { FaBlackTie } from "react-icons/fa";
import { BsFillBoxFill } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
import { BsFillFileEarmarkMusicFill } from "react-icons/bs";
import axios from "axios";
import Hearder2 from "./Hearder2";
import Footer from "./Footer";

export default function PrimeMembership() {

  const id=localStorage.getItem("id");

  const userName = localStorage.getItem("userName");
  const [primeMember, setPrimeMember]=useState({

   })
  
  const navigate = useNavigate();
  useEffect(() => {
    UserDetails();
  }, []);
  const UserDetails = () => {
    axios.get(`http://localhost:8080/registration/getUserById/${id}`).then((response) => {
      if (response.status === 200) {
        setPrimeMember(response.data)
        console.log("res", response.data);
      
    
      }
    });

    console.log({ id });
  };

  return (
    <div>
<Hearder2/>
      <Card style={{ backgroundColor: "#f3f3f3" }}>
        <Row className="mb-2">
          <Col md={1}>
            {" "}
            <CgProfile onClick={() => navigate("/Profile")} size={100} />
          </Col>
          <Col md={10}>
            <h3>{userName}</h3>
          
          {primeMember.primeMember}
          </Col>
        </Row>
      </Card>
      <Alert variant="info">
        <Row className="mb-2">
          <Col md={1}>
            {" "}
            <FaCircleInfo size={25} color="#007791 " />{" "}
          </Col>
          <Col md={10}>
            <Alert.Heading>Important Message:</Alert.Heading>
            {primeMember.primeMember=="you are a prime member"?(
              <div>
                You can enjoy the prime benifits now
              </div>
            ):(
              <div>
              You are currently not a member of Amazon Prime.<Link to={'/JoinPrime'} style={{textDecoration:"none", color:"blueviolet"} }>join Prime</Link>
              </div>
            )}
        
          </Col>
        </Row>
      </Alert>
      <Card style={{width:"100%"}}>
        <Card style={{ width: "98%", marginLeft:"10px",marginTop:"10px"}}>
          <h6 style={{ color: "orange" }}>Prime members enjoy:</h6>
        </Card>
        <Row className="mb-4">
          <Col md={2}>
            <BsFillBoxFill size={50} color="#007791" />
          </Col>
          <Col>
            <h6>Free 1-day delivery</h6>
            Unlimited one-day delivery on 40 lac+ products - start shopping
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={2}>
            <SiYoutubemusic size={50} color="#4CBB17" />
          </Col>
          <Col>
            <h6>Prime Video</h6>
            Unlimited streaming of exclusive Indian and US blockbuster movies,
            TV shows and Amazon Originals on PrimeVideo.com
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={2}>
            {" "}
            <BsFillFileEarmarkMusicFill size={50} color="#FF7F50" />
          </Col>
          <Col>
            <h6>Prime Music</h6>
            100 million songs, ad-free and over 15 million podcast episodes with
            unlimited offline downloads.
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={2}>
            <MdPayment size={50} enableBackground={FaBlackTie} />
          </Col>
          <Col>
            <h6>Unlimited 5% back on shopping</h6>
            Eligible Prime members earn unlimited 5% back on purchases on
            Amazon.in using the Amazon Pay ICICI Bank credit card. Currently
            available in 35 cities.
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={2}>
            <FaBookOpen size={50} color="#318CE7" />
          </Col>
          <Col>
            <h6>Prime Reading</h6>
            Read as much as you want from hundreds of eligible eBooks, comics
            and more.
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={2}>
            <SiAmazongames size={50} color="voilet" />
          </Col>
          <Col>
            <h6>Gaming is better with Prime</h6>
            Access to free downloadable games every month
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={2}>
            {" "}
            <ImClock2 size={50} color="orange" />
          </Col>
          <Col>
            <h6>Prime Early Access</h6>
            30-minute early access to Lightning Deals.
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={2}>
            <MdSavings size={50} color="#00FFFF" />
          </Col>
          <Col>
            <h6>More savings for your family</h6>
            Prime members save an additional 10% on diaper subscriptions and get
            exclusive discounts and recommendations.
          </Col>
        </Row>
      </Card>
      <Footer/>
    </div>
  );
}
