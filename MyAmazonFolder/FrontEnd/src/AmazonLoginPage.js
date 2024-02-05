import React, { useRef, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import AmazonIn from './AmazonIn.jpg'
import './Login.css'
import { Link } from 'react-router-dom'
import LoginPassword from './LoginPassword'
import Registration from './Registration'
import axios from 'axios'
import { useNavigate } from 'react-router';


function AmazonLoginPage() {
  const navigate = useNavigate();


  const [inputs,setInputs]=useState({

    mobileNumber:"",
    email:""
   
})
const [msg,setMsg]=useState({})
const handleChange=(e)=>{
  const { name, value } = e.target;
    setInputs({...inputs,[e.target.name]:e.target.value})
    setMsg({...msg,[e.target.name]:" "})

}
const validateForm = () => {
  let newErrors = {};
  if (!inputs.email.trim()) {
      newErrors.email = 'email is required';
  }
 
  setMsg(newErrors);
  return Object.keys(newErrors).length === 0;
};

const saveUserData=(e)=>{
  e.preventDefault();
  if (validateForm()) {

  

  axios.get(`http://localhost:8080/registration/getUserByEmail/${inputs.email}`,{
    mobileNumber:inputs.mobileNumber,
    email:inputs.email,
      
  
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
}
    
  })
  .then((response)=>{
      if(response.status===200|| response.status===201){
          navigate("/LoginPassword")
       
      }  
  })
  .catch(error=>{
      alert('invalid mail id');
  })
}
}


  

 

  return (
   
    <Container>
   
    <div className='login'>
  
    

    <img src={AmazonIn}  width={120}
    height={120} />
    <Form>
   
    <h1>Sign in</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email </Form.Label><br/>
      <Form.Control type="email" className='input' name='email' value={inputs.email}  onChange={handleChange} isInvalid={msg.email}  required />
      <Form.Control.Feedback type="invalid">{msg.email}</Form.Control.Feedback>
    </Form.Group>

    <Button variant='warning' onClick={saveUserData} >Continue to sign in</Button>{' '}
    <br/>

   <a>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</a>
    <hr></hr>
<h6>Buying for work?</h6>
<a>Shop on Amazon Business</a>
    </Form>

    <br></br>
    <div>  <a>New to Amazon?</a>
    <div><button ><Link to={'/'}>Create your Amazon account</Link></button></div></div>
   
    
    </div>
   
    </Container>
   
  )
}


export default AmazonLoginPage