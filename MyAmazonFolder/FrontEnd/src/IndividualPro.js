import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import MyContext from "./MyContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { message } from "antd";
import { IoMdHeart } from "react-icons/io";
import { BiCartAdd } from "react-icons/bi";
import amazon from "./amazon.jpg";

export default function IndividualPro() {
  const id = localStorage.getItem("id");
  const [productname, setProductname] = useState([]);
  const [count, setCount] = useState(1);
  const { indProName } = useContext(MyContext);
  const [getCart, setGetCart] = useState([]);
  const navigate = useNavigate();
  const [ViewWishlistItem, setViewWishlistItem] = useState([]);
  const [reload, setReload] = useState(true);
  useEffect(() => {
    data();
  }, []);

  const data = () => {
    if (indProName !== null) {
      axios
        .get(`http://localhost:8080/category/getProduct/${indProName}`)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);

            setProductname(response.data);

            console.log(
              "idssssss",
              response.data.map((i) => i.product_id)
            );
          }
          localStorage.setItem(
            "productId",
            response.data.map((i) => i.product_id)
          );
        });
    }
    console.log("ind", indProName);
  };

  const cartItem = (pro) => {
    axios
      .post(`http://localhost:8080/Cart/add/${pro}/${id}/${count}`)
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data);
          message.success("Item added Successfully!");
        }
      })

      .catch(() => {
        message.error("Item existed in cart");
      });
  };
  console.log(localStorage.getItem("id"));

  const WishlistItem = (proId) => {
    axios
      .post(`http://localhost:8080/wishlist/add/${proId}/${id}`)
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data);
          message.success("Added to wishlist!");
        }
      })

      .catch(() => {
        message.error("This item was already present in Shopping List");
      });
  };

  useEffect(() => {
    ViewWishlist();
  }, [reload]);
  const ViewWishlist = () => {
    axios.get(`http://localhost:8080/wishlist/get/${id}`).then((response) => {
      if (response.status === 200) {
        console.log("wishlist", response.data);
        setViewWishlistItem(response.data);
        setReload(!reload);
      }
    });

    console.log({ id });
  };

  useEffect(() => {
    ViewCart();
  }, [reload]);
  const ViewCart = () => {
    axios.get(`http://localhost:8080/Cart/item/${id}`).then((response) => {
      if (response.status === 200) {
        if (response.data.length != 0) {
          console.log("ViewCart", response.data);
          setGetCart(response.data);

          setReload(!reload);
        }
      }
      localStorage.setItem(
        "CartItemID",
        response.data.map((i) => i.cart_item_id)
      );
    });

    console.log({ id });
  };

  console.log(localStorage.getItem("id"));
  console.log(localStorage.getItem("wishlistItemId"));

  return (
    <>
      <div style={{ marginLeft: "90%" }}>
        <img
          src={amazon}
          width={90}
          height={70}
          onClick={() => navigate("/Home")}
        />
      </div>
      <div className=" mt-2 mb-2, row row-cols">
        {console.log("pro", productname)}
        {console.log("proId", productname.product_id)}
        {console.log("id", localStorage.getItem("id"))}
        {console.log(
          "ViewWishlistItem",
          localStorage.getItem("ViewWishlistItem")
        )}

        {productname.map((item, index) => {
          return (
            <Container>
              <Row>
                <Col md={3}>
                  <img
                    className="d-block  w-75"
                    src={item.imgUrl}
                    alt="slide 1"
                  />
                </Col>
                <Col md={3} className="margin">
                  {" "}
                  <Card style={{ width: "22rem" }}>
                    <Card.Body>
                      <Card.Title>{item.description} </Card.Title>
                      <Card.Text>
                        <p>
                          {" "}
                          <h6>
                            <b>RS.{item.price}</b> M.R.P{" "}
                            <strike> {item.offerPrice}</strike> ({item.discount}
                            % off){" "}
                          </h6>
                        </p>
                        <b>PRIME</b> Get it by Today, FREE Delivery by Amazon
                      </Card.Text>
                      <Row>
                        <Col>
                          {getCart.some(
                            (cartlist) =>
                              cartlist.productDTO.product_id === item.product_id
                          ) ? (
                            <Button variant="secondary" disabled>
                              Added to cart
                            </Button>
                          ) : (
                            <Button
                              variant="warning"
                              onClick={() => cartItem(item.product_id)}
                            >
                              Add to Cart
                            </Button>
                          )}
                        </Col>
                        <Col>
                          {ViewWishlistItem.some(
                            (listitem) =>
                              listitem.productDTO.product_id === item.product_id
                          ) ? (
                            <Button variant="secondary" disabled>
                              wishlisted
                            </Button>
                          ) : (
                            <Button
                              variant="light"
                              onClick={() => WishlistItem(item.product_id)}
                            >
                              Add to Wishlist
                            </Button>
                          )}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={3} style={{
                  marginTop:"50px"
                }}>
                  <Card >
                    <Row style={{paddingLeft:"20px",paddingTop:"10px"}}>
                      <Col md={6}>
                        <BiCartAdd
                          size={50}
                          onClick={() => navigate("/ViewCart")}
                          color="orange"
                        />
                      </Col>
                      <Col md={6}>
                        <h5>view cart</h5>
                      </Col>
                      <Col></Col>
                    </Row>
                    <Row
                      style={{
                        paddingTop: "10px",paddingLeft:"20px"
                      }}
                    >
                      <Col md={6} style={{
                        paddingTop:"10px"
                      }}>
                        <h5>View Wishlist</h5>
                      </Col>
                      <Col  >
                        <center>
                          {" "}
                          <IoMdHeart
                            onClick={() => navigate("/Wishlist")}
                            size={50}
                            color="#e0218a"
                          />
                        </center>
                      </Col>
                      <Col></Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
    </>
  );
}
