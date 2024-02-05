import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import MyContext from "./MyContext";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Hearder2 from "./Hearder2";
import Footer from "./Footer";

export default function SearchPro(props) {
  const { proName, setIndProName } = useContext(MyContext);
  const { proMsg } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div>
    <Hearder2/>
      {proMsg ? (
        <div className="products">
          {proName.map((item) => {
            return (
                <div >
                
                  <div >
                    <Card style={{ width: " 17rem", height: "25rem" }} onClick={() => {
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
                              <strike> {item.offerPrice}</strike> (
                              {item.discount}% off){" "}
                            </h6>
                          </p>
                          <b>PRIME</b> Get it by Today, FREE Delivery by Amazon
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    </div>
              
                </div>
       
            );
          })}
        </div>
      ) : (
        <h4>No products found</h4>
      )}
      <Footer/>
    </div>
  );
}
