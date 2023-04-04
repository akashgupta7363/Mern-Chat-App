import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col,Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./Signup.css";
import Pimg from "../assets/bot.jpg" 

function validateImg(){

}
function Signup() {
  return (
    <Container>
      <Row>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column" >
  
      <Form style={{width:'80%',maxWidth:500}}>
        <h1 className='text-center'>Create your account</h1>
        <div className='signup_profile_pic_container'>
          <img className="signup_profile_pic" src={Pimg}></img>
           <label className='img-upload' htmlFor='image-upload'>
            <i className="fas fa-plus-circle add-picture-icon"></i>
           </label>
           <input type="file" id="image-upload" hidden accept="image/jpg,image/jpeg, image/png" onChange={validateImg}/>

        </div>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
         Create Account
        </Button>
        <div className='py-4'>
          <p className='text-center'>Already have an account ?<Link to="/login">Login</Link></p>
  
        </div>
      </Form>
        </Col>
       <Col md={5} className="signup_bg"></Col>
      </Row>
      </Container>
      );
}

export default Signup