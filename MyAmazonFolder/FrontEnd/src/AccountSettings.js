import React from 'react'
import { Container, Dropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


export  function AccountSettings() {


  return (
    
    <Container>
 
    <div><Dropdown.Item href="#"><h6>Your Account</h6></Dropdown.Item>
    <Dropdown.Item href="#">
    <Link to={'/YourAccount'} className="links">YourAccount</Link>
  
    </Dropdown.Item>
  <Dropdown.Item href="#">
  <Link to={'/Orders'} className="links">YourOrders</Link>

  </Dropdown.Item>
    <Dropdown.Item href="#">

    <Link to={'/Wishlist'} className="links">Your wishlist</Link>
   </Dropdown.Item>
    <Dropdown.Item href="#"><Link to={'/PrimeMembership'}  className='links'>Prime membership</Link>  </Dropdown.Item></div>
    <Dropdown.Item href="#">
    
     <Link to={'/LoginPageAmz'} className="links">sign out</Link>

     </Dropdown.Item>
    </Container>
  )
}
