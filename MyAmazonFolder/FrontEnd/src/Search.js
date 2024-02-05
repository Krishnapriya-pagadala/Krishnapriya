import axios from "axios";
import React, { useContext, useState } from "react";

import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import MyContext from "./MyContext";
import Link from "antd/es/typography/Link";
import { FaSearch } from "react-icons/fa";
import { message } from "antd";

export default function Search() {
  const navigate = useNavigate();

  const {
    input,
    setInput,
    proName,
    setProName,
    proMsg,
    setProMsg,
    indProName,
    setIndProName,
  } = useContext(MyContext);

  const [search, setSearch] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    if (input != "") {
      axios
        .get(`http://localhost:8080/category/getProduct/${input}`)
        .then((response) => {
          if (response.status === 200) {
            setSearch(response.data);
          }
        })
        .catch(() => {});
    }
  };

  const data = () => {
    axios
      .get(`http://localhost:8080/category/getProduct/${input}`)
      .then((response) => {
        if (response.status === 200) {
          navigate("/SearchPro");
          console.log(response.data);
          setProName(response.data);
          setProMsg(true);
          localStorage.setItem("product_id", response.data);
          if (response.data.length === 0) {
            setProMsg(false);
          }
        }
      })

      .catch((error) => {
        message.error("error");
      });
  };
  return (
    <div>
      <InputGroup className="mb-0.5 inputbox" style={{ width: 400 }}>
        <Form.Control
          type="text"
          className="input"
          name="productname"
          value={input}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setInput(e.target.value);
              data();
            }
          }}
        />

        <Button variant="warning" onClick={data}>
          <FaSearch size={25} />
        </Button>
      </InputGroup>

      {
        <div
          style={{
            zIndex: "1000",
            position: "absolute",
            overflow: "scroll",
            backgroundColor: "#232f3e",
            overflowX: "hidden",
          }}
        >
          {search.map((item) => {
            return (
              <div>
                <Link
                  onClick={() => {
                    setIndProName(item.productName);
                    navigate("/IndividualPro");
                  }}
                  style={{ color: "white" }}
                >
                  {item.productName}{" "}
                </Link>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}
