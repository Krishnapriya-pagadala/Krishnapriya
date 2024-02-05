import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import MyContext from './MyContext';
import { useNavigate } from 'react-router-dom';
import Hearder2 from './Hearder2';
import Footer from './Footer';
import { message } from 'antd';

export default function AmazonBrands() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const { proName, setIndProName } = useContext(MyContext);

  useEffect(() => {
    data();
  }, []);
  const data = () => {
    axios
      .get("http://localhost:8080/category/getCategory/AmazonBrands")
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setUser(response.data);
        }
      })

      .catch((error) => {
        message.error("error");
      });
  };

  return (
    <>
    <Hearder2/>
    <div className=" products">
    
      {user.map((item) => {
        return (
         
             
                <Card style={{ width: "17rem" }} className="crd"  onClick={() => {
                  setIndProName(item.productName);
                  navigate("/IndividualPro");
                }}>
                  <Card.Img
                    variant="top"
                    src={item.imgUrl}
                    width="225px"
                    height={"225px"}
                  />
                  <Card.Body>
                    <Card.Title>{item.productName} </Card.Title>
                    <Card.Text>
                      <p>
                        {" "}
                        <h6>
                          <b>RS.{item.price}</b> M.R.P{" "}
                          <strike> {item.offerPrice}</strike> ({item.discount}%
                          off){" "}
                        </h6>
                      </p>
                      <b>PRIME</b> Get it by Today, FREE Delivery by Amazon
                    </Card.Text>
                  </Card.Body>
                </Card>
            
           
        );
      })}
    </div>
    <Footer/>
    </>
  );
}
