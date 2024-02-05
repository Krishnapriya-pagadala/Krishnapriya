import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './Login.css'
import AmazonIn from './AmazonIn.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { message } from 'antd'
import axios from 'axios'


function LoginPassword() {

  const navigate = useNavigate();
  const [inputs,setInputs]=useState({

    password:""
   
})
const [msg,setMsg]=useState({})

const handleChange=(e)=>{
  const { name, value } = e.target;
    setInputs({...inputs,[e.target.name]:e.target.value})
    setMsg({...msg,[e.target.name]:" "})

}

const validateForm = () => {
  let newErrors = {};
  if (inputs.password.length===0) {
      newErrors.password = 'password is required to login';
  }
 
  setMsg(newErrors);
  return Object.keys(newErrors).length === 0;
};

const getdata=()=>{

  if (validateForm()) {

  

  axios.get(`http://localhost:8080/registration/getUserByEmail/${inputs.email}`,{
  
    password:inputs.password,
      
  
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
}
    
  })
  .then((response)=>{
      if(response.status===200|| response.status===201){
      
       message.success("Login Succeessful!")
          navigate("/Home")
       
      }  
      
    
  })
  .catch(error=>{
      alert('invalid password');
  })
}
}


  



  return (
    <Container>
    <div className='password'>
    <img src={AmazonIn}  width={120}
    height={120} />
    <Form>
    <h1>Sign in</h1>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="warning" type="submit" onClick={getdata}>
      click here to sign in to your account
    </Button>
      
    <hr ></hr>
    <h6>Do you want to sign out?</h6>
      <Button variant="warning" type="submit"><Link to={'/AmazonLoginPage'}> click here to sign out</Link>
    
    </Button>
    </Form>
    </div>
    </Container>
  )
}

export default LoginPassword