import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import orders from './orders.jpg'
import acclocation from './acclocation.png'
import prime from './prime.jpg'
import security from './security.png'
import {  useNavigate } from 'react-router-dom'
import Hearder2 from './Hearder2'
import Footer from './Footer'
export  function YourAccount() {
  const navigate=useNavigate();
  return (
    <>
    <Hearder2/>
    <Container flex >
  
    <h3>YourAccount</h3>
    <hr/>
    <div className='yourAccount'>

<div className='box'>

<div>
<img variant="top" src={acclocation} width='150px' height='140px'></img>
</div>
<div>
<Card style={{ width: '18rem' }} border="info">
<Card.Body>
<Card.Title>Your Address</Card.Title>
<Card.Text>
Edit address for orders and gifts
</Card.Text>
<Button variant='warning' onClick={()=>navigate('/AddAddress')}>View page</Button>
</Card.Body>
</Card>
</div>

</div>

<div className='box'>

<div>
<img variant="top" src={security} width='150px' height='140px'></img>
</div>
<div>
<Card style={{ width: '18rem' }} border="info">
<Card.Body>

<Card.Title>Login & Security</Card.Title>
<Card.Text>
Edit login, name & mobile number
</Card.Text>
<Button variant='warning' onClick={()=>navigate('/Security')}>View page</Button>
</Card.Body>
</Card>
</div>

</div>

<div className='box'>
<div>
<img variant="top" src={orders} width='150px' height='140px'></img>
</div>
<div>
<Card style={{ width: '18rem' }} border="info">
<Card.Body>
<Card.Title>Your Orders</Card.Title>
<Card.Text>
Tract, return or buy things again
</Card.Text>
<Button variant='warning' onClick={()=>navigate('/Orders')}>View page</Button>
</Card.Body>
</Card>
</div>
</div>

<div className='box'>

<div>
<img variant="top" src={prime} width='150px' height='140px'></img>
</div>
<div>
<Card style={{ width: '18rem' }} border="info">
<Card.Body>
<Card.Title>Prime</Card.Title>
<Card.Text>
View benifits and payment settings
</Card.Text>
<Button variant='warning' onClick={()=>navigate('/PrimeMembership')}>View page</Button>
</Card.Body>
</Card>
</div>

</div>

</div>
    </Container>
    <Footer/>
    </>
  )
}
