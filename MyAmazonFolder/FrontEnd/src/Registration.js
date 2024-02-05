import React, { useState } from 'react'
import {  Container, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

import {  message } from 'antd';
import amazon from "./amazon.jpg"
function Registration() {

  const navigate = useNavigate();



    const [inputs,setInputs]=useState({
        userName:"",
        mobileNumber:"",
        email:"",
        password:""
    })
    const [msg,setMsg]=useState({})
    const handleChange=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
        setMsg({...msg,[e.target.name]:""})

    }
  






  const validate=()=>{
    let displaymsg={}
    
  var nameregex="^[A-Za-z _.-]+$"
  var mobileregex="[0-9]{10}"


  var passwordregex="^[a-zA-Z0-9]{6,}$"
    
    if (  inputs.userName.length==0) {
        displaymsg.userName="UserName field cannot be empty"
    } else if(!inputs.userName.match(nameregex)){
        displaymsg.userName="UserName incorrect"
    }

    if(inputs.mobileNumber.length==0){
        displaymsg.mobileNumber="mobileNumber field cannot be empty" 
    }
    
    else if(!inputs.mobileNumber.match(mobileregex)){
        displaymsg.mobileNumber="Mobile number should contain 10 digits"
    }
    if (inputs.password.length==0) {
        displaymsg.password="Password field should not be empty"
    
     
    } else if(  !inputs.password.match(passwordregex) ) {
        displaymsg.password="incorrect password"
        

        
    }
    setMsg(displaymsg)
    return Object.keys(displaymsg).length===0;
  }

  const saveUserData=()=>{
    if(validate()){

    
    axios.post("http://localhost:8080/registration/register",{
        userName:inputs.userName,
        mobileNumber:inputs.mobileNumber,
        email:inputs.email,
        password:inputs.password

        



    })
  
    .then((response)=>{
        if(response.status===201){
      message.success("registration successful!!")
            navigate("/LoginPageAmz")
            setInputs({
                userName:"",
                mobileNumber:"",
                email:"",
                password:""

            })
          
                
      }
      
    })

    .catch(error=>{
        alert('caugth an unexpected error');
    })
}
  }



  return (
    <div>
   
  
    <Container >
    
 
    <Form className='register'>
    
     <img src={amazon}  width={120}
    height={95} />
    <h1>Create Account</h1>

    <Form.Group className="mb-3" controlId="formBasicUserName" >
    <Form.Label >Your Name</Form.Label><br/>
    <Form.Control type="text" placeholder="First and last name" className='input' name='userName' value={inputs.userName}  onChange={handleChange} isInvalid={msg.userName}  required/>
     <Form.Control.Feedback type='invalid'>{msg.userName}</Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicMobileNumber">
    <Form.Label>Mobile number</Form.Label><br/>
    <Form.Control type="text" placeholder="Mobile number"  className='input' name='mobileNumber' value={inputs.mobileNumber}  onChange={handleChange} isInvalid={msg.mobileNumber} required/>
    <Form.Control.Feedback type='invalid'>{msg.mobileNumber}</Form.Control.Feedback>
  </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email(optional)</Form.Label><br/>
      <Form.Control type="email" className='input' name='email' value={inputs.email}  onChange={handleChange} isInvalid={msg.email} required />
      <Form.Control.Feedback type='invalid'>{msg.email}</Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label><br/>
      <Form.Control type="password" placeholder="At least 6 characters"  className='input' name='password' value={inputs.password} onChange={handleChange} isInvalid={msg.password} required/>
      <Form.Control.Feedback type='invalid'>{msg.password}</Form.Control.Feedback>
      <Form.Text >
      Passwords must be at least 6 characters.</Form.Text>
    </Form.Group>

   <Button variant='warning' onClick={saveUserData} >Create Account</Button>{' '}
   <a>  Already have an account?<Link to={'/LoginPageAmz'} style={{textDecorationLine:"none", color:"green"}}>Sign in</Link> </a>
   
     
  </Form>
  </Container>
  </div>
  )
}


export default Registration