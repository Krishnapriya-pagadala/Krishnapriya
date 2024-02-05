import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { CgProfile } from "react-icons/cg";
import { SiAmazonprime } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
export default function Profile() {
  const id = localStorage.getItem("id");
  const [user, setUser] = useState({});
  const navigate=useNavigate();
  useEffect(() => {
    data();
  }, []);
  const data = () => {
    axios
      .get(`http://localhost:8080/registration/getUserById/${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setUser(response.data);
        }
      })

      .catch(() => {
   
      });
  };
  return (
    <div style={{paddingLeft:"28%"}}>
    
      <SiAmazonprime
           size={150}
            onClick={() => navigate("/PrimeMembership")}
            style={{
           marginLeft:"100px",
              color: "blue",
              
            }}/>
   
   

     <Row >
      <Col md={2}>
      <CgProfile  size={130} style={{marginTop:"10px"}} />
      </Col>
      <Col md={10}>
      <Card style={{
              width:"45%",
              marginTop:"10px",
              marginLeft:"2%",
              backgroundColor:"#f3f3f3",
              paddingLeft:"2%",
             paddingTop:"2%",
   
             

            }}>
            <Row className='mb-2'>
              <Col>
                <h6>User Name</h6>
              </Col>
              <Col>{user.userName}</Col>
            </Row>
            <Row className='mb-2'>
              <Col><h6>Mobile Number</h6></Col>
              <Col>{user.mobileNumber}</Col>
            </Row >
            <Row className='mb-2'>
              <Col><h6>Email</h6></Col>
              <Col>{user.email}</Col>
            </Row>
            </Card>
      </Col>
     </Row>
    
           
        
      
    </div>
  )
}
