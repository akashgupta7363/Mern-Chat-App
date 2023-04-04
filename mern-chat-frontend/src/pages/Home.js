import React from 'react';
import {Row, Col,Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';


function Home() {
  return <Row>
    <Col md={6} className="d-flex flex-direction-column align-items-centre justify-content-centre">
      <div >
        <h1 >Share the joy with your friends </h1>
        <p >Chat app let you connect with the world and friends</p>
        <LinkContainer to="/chat">
        <Button variant="success" size='lg'>Get Started
        <i className="fa-solid fa-comments home-message-icon" />
        </Button>
        
        </LinkContainer>
      </div>
    </Col>
    <Col md={6} className="home__bg"></Col>
    </Row>
}

export default Home