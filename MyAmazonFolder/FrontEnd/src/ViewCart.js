import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {  Card, Col,  Row } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Hearder2 from "./Hearder2";
import Footer from "./Footer";
import { BiCartAdd } from "react-icons/bi";

export default function ViewCart() {
  const navigate = useNavigate();
 
  const [cartItem, setCartItem] = useState([]);
  const [emptyCart, setEmptyCart] = useState(false);
  const [cartItemID, setCartItemID] = useState([]);
  const [reload, setReload] = useState(true);
const [newPrice,setNewPrice]=useState()
  const [newQuantity, setnewQuantity] = useState(1);
  const id = localStorage.getItem("id");
  useEffect(() => {
    data();
  }, [reload]);

  const data = () => {
    axios.get(`http://localhost:8080/Cart/item/${id}`).then((response) => {
      if (response.status === 200) {
        if (response.data.length != 0) {
          setEmptyCart(true);
          console.log(response.data);
          setCartItem(response.data);
        } else {
          setEmptyCart(false);
        }
      }
    });

    console.log({ id });
  };

  const deleteItem = (cartid) => {
    axios
      .delete(`http://localhost:8080/Cart/deleteItem/${cartid}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);

          message.success("Item deleted");
          setReload(!reload);
        }
      })
      .catch(() => {
      
      });
  };

  const updateQuantity = () => {
    axios
      .put(
        `http://localhost:8080/Cart/updateQuantity/${cartItemID}/${newQuantity}`
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setReload(!reload);
        }
      })
      .catch(() => {
   
      });
  };
  useEffect(() => {
    updateQuantity();
  }, [newQuantity]);

  

  return (
    <div style={{
      backgroundColor:"	#F5F5F5"
    }}>
      <Hearder2 />
      <h2>
        Shopping Cart <BiCartAdd size={40} color="orange" />
      </h2>
      {emptyCart ? (
        <div className="flex ">
          {console.log("item", cartItem.imgUrl)}
          {console.log("id", localStorage.getItem("id"))}

          {cartItem.map((item, index) => {
            return (
              

              <Card
                style={{
                  width: "750px",
                  height: "350px",
                  marginTop: "35px",
                 backgroundColor:"white"
                }}
              >
                <Row style={{ height: "350px", margin: "1rem 0px" }}>
                  <Col>
                    <img
                      src={item.productDTO.imgUrl}
                      alt="slide 1"
                      width={200}
                      onClick={()=>navigate('/IndividualPro')}
                    />
                  </Col>
                   
  {item.cart_price===item.productDTO.price}
  {console.log("Cartprice",item.cart_price)}
  {console.log("price",item.productDTO.price)}

                  <Col className="margin">
                    {" "}
                    <Card style={{ width: "350px" }}>
                      <Card.Body>
                        <Card.Title>{item.productDTO.description} </Card.Title>
                        <Card.Text>
                          <p>
                            {" "}
                            <h6>
                              <b>RS.{item.productDTO.price*newQuantity}</b> M.R.P{" "}
                              <strike> {item.productDTO.offerPrice}</strike> (
                              {item.productDTO.discount}% off){" "}
                            </h6>
                          </p>
                          <b>PRIME</b> Get it by Today, FREE Delivery by Amazon
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <p>
                      <h5>Quantity:{item.quantity}</h5>
                    </p>
                    <Row>
                      <Col>
                        <RiDeleteBin5Line
                          size={30}
                          onClick={() => deleteItem(item.cart_item_id)}
                        />
                      </Col>
                      <Col>
                      <select
                      value={newQuantity}
                      onChange={(e) => {
                        setnewQuantity(e.target.value);
                        setCartItemID(item.cart_item_id);
                        setNewPrice(item.productDTO.price);
                 
                        console.log("price",item.productDTO.price*newQuantity)
                      }}
                    >
                      <option value="1">quantity:1</option>
                      <option value="2">quantity:2</option>
                      <option value="3">quantity:3</option>
                      <option value="4">quantity:4</option>
                      <option value="5">quantity:5</option>
                    </select>
                      </Col>
                    </Row>
                    
                    <br />
                  </Col>
                  <Col></Col>
                </Row>
              </Card>
            );
          })}
        </div>
      ) : (
        <center>
          <h4>Your Cart is Empty</h4>
        </center>
      )}

      <Footer />
    </div>
  );
}
