import React, { useRef } from 'react'
import {  Container, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import AmazonIn from './AmazonIn.jpg'

function LoginPage() {

  const emailreference=useRef()
    var emailregex="^[a-zA-Z0-9+_.-]+@[a-zA-Z.-]+.[a-z]+$"
    const passwordreference =useRef()
    var passwordregex="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"
    
    const validateEmail=()=>{
      if(emailreference.current.value.match(emailregex)){
          document.getElementById("userEmail").textContent=""
      }
      else{
          document.getElementById("userEmail").textContent="Email incorrect"

      }
  }
  const validatePassword=()=>{
      if (passwordreference.current.value.match(passwordregex)) {
          document.getElementById("userPassword").textContent=""
          
      } else {
          document.getElementById("userPassword").textContent="Password Invalid"
      }
    }
  return (
    <div>login
    <Container>
    <Form >
    <img src={AmazonIn}  width={120}
    height={120} />

    <h1>Create Account</h1>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email(optional)</Form.Label><br/>
      <Form.Control type="email" ref={emailreference} onChange={validateEmail} required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label><br/>
      <Form.Control type="password" placeholder="At least 6 characters"  ref={passwordreference} onChange={validatePassword}required/>
      <Form.Text >
      Passwords must be at least 6 characters.</Form.Text>
    </Form.Group>

   <Button variant='warning' >Create Account</Button>{' '}
   <Form.Group>
   <Form.Text>
   Already have an account? Sign in</Form.Text>
   </Form.Group>
     
  </Form>
  </Container>
    </div>
  )
}


export default LoginPage