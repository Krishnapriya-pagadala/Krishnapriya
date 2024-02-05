import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import Hearder2 from "./Hearder2";
import { IoMdHeart } from "react-icons/io";
import Footer from "./Footer";


export default function Wishlist() {
  const [WishlistItem, setWishlistItem] = useState([]);
  const [count, setCount] = useState(1);
  const id = localStorage.getItem("id");
  const productId=localStorage.getItem("productId");
  const [emptyList, setemptyList] = useState(false);
  const [getCart, setGetCart] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    data();
  }, []);

  const data = () => {
    axios.get(`http://localhost:8080/wishlist/get/${id}`).then((response) => {
      if (response.status === 200) {
        if(response.data.length!=0){
          setemptyList(true);
        console.log(response.data);
        setWishlistItem(response.data);
// setReload(!reload)
        }
        else{
          setemptyList(false);
  
         
        }
      }
     
   
    });

    console.log({ id });
  };



  const deleteItem = (wishlist_item_id) => {
    axios
      .delete(`http://localhost:8080/wishlist/deleteItem/${wishlist_item_id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);

          message.success("Item deleted");
          setReload(!reload);
        }
      })
      .catch(() => {
        message.error("error");
      });
  };



  const cartItem = () => {
    axios
      .post(`http://localhost:8080/Cart/add/${productId}/${id}/${count}`)
      .then((response) => {
        if (response.status === 201) {
          console.log("cart",response.data);
          setReload(!reload);
          message.success("Item added Successfully!");
        }
      })

      .catch(() => {
        message.error("Item existed in cart");
      });
  };

  useEffect(() => {
    ViewCart();
  }, [reload]);
  const ViewCart = () => {
    axios.get(`http://localhost:8080/Cart/item/${id}`).then((response) => {
      if (response.status === 200) {
        if (response.data.length != 0) {
          console.log("ViewCart", response.data);
          setReload(!reload);
          setGetCart(response.data);
          
     
        }
      }
    });
  };

  return (
    <div style={{
      backgroundColor:"#F5F5F5"
    }}>
      <Hearder2 />

      <h2>
      Shopping List <IoMdHeart size={40} color="#e0218a" />
      </h2>
      {emptyList?(
      <Container>
        {WishlistItem.map((item) => {
          return (
            <Card
              style={{
                width: "705px",
                height: "350px",
                marginTop: "35px",
                backgroundColor:"white"
              }}
            >
              <Row style={{ height: "300px", margin: "1rem 0px" }}>
                <Col>
                  <img
               
                    src={item.productDTO.imgUrl}
                    alt="slide 1"
                    width={200}
                  />
                </Col>
                <Col className="margin">
                  {" "}
                  <Card style={{ width: "300px" }}>
                    <Card.Body>
                      <Card.Title>{item.productDTO.description} </Card.Title>
                      <Card.Text>
                        <div></div>
                        <div>
                          <p>
                            {" "}
                            <h6>
                              <b>RS.{item.productDTO.price}</b> M.R.P{" "}
                              <strike> {item.productDTO.offerPrice}</strike> (
                              {item.productDTO.discount}% off){" "}
                            </h6>
                          </p>
                          <b>PRIME</b> Get it by Today, FREE Delivery by Amazon
                        </div>
                        <Row>
                          <Col md={10}>
                          {getCart.some(
                            (cartlist) =>
                              cartlist.productDTO.product_id === item.productDTO.product_id
                          )?(<Button variant="secondary" disabled>Added to Cart</Button>):(<Button variant="warning" onClick={cartItem}>Add to Cart</Button>
                            
                          )}
                          </Col>
                          <Col md={2}>
                            <RiDeleteBin5Line
                              size={30}
                              onClick={() => deleteItem(item.wishlist_item_id)}
                            />
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                 
                </Col>
                <Col></Col>
              </Row>
            </Card>
          );
        })}
      </Container>
      ):(
        <center>
        <h4>Your Wishlist is Empty</h4>
        </center>

      )}
      <Footer />
    </div>
  );
}
