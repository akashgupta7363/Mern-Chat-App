import React from 'react'
import { Button, Form, FormControl,Row,Col } from 'react-bootstrap'

function MessageForm() {
function handleSubmit(e){
e.preventDefault();
}

  return <div className='message-outputs'>
   <Form onSubmit={handleSubmit}>
      <Row>
         <Col md={10}>
         <Form.Group>
            <FormControl type='text' placeholder='Your message'>
            </FormControl>
         </Form.Group>
         </Col>
         <Col md={2}> 
         <Button variant='primary' type="submit" style={{width:"100%", backgroundColor:"orange"}}><i className="fas fa-paper-plane"></i>
         </Button>
         </Col>
      </Row>

   </Form>

   </div>
}

export default MessageForm