import React, { useState } from "react";
import MyContext from "./MyContext";

export default function ContextProvider(props) {
  const [proName, setProName] = useState([]);
  const [input, setInput] = useState("");
  const [proMsg, setProMsg] = useState(false);

  const [indProName, setIndProName] = useState("");
  return (
    <div>
      <MyContext.Provider
        value={{
          proName: proName,
          setProName: setProName,
          input: input,
          setInput: setInput,
          proMsg: proMsg,
          setProMsg: setProMsg,
          indProName: indProName,
          setIndProName: setIndProName,
        }}
      >
        {props.children}
      </MyContext.Provider>
    </div>
  );
}
