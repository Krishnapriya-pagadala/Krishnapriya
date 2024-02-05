
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

export  function Security() {
  const id=localStorage.getItem("id");
  const [user, setUser]=useState({})

  useEffect(() => {
    secure();
  }, []);
  const secure = () => {
    axios.get(`http://localhost:8080/registration/getUserById/${id}`).then((response) => {
      if (response.status === 200) {
  
          console.log("response", response.data);
          setUser(response.data)

      
       
    
   } });

    // console.log({ id });
  };
  return (

    <div><h5>Login & Security</h5>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
       <h6>Name</h6>
       {user.userName}
       
      </Card.Body>
    </Card>
    </div>
  )
}
