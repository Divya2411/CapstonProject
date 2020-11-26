import React, { Component } from 'react';
import './contact.css';
import { Button, Form, Col} from 'react-bootstrap'; 

class ContactUs extends Component {
  render() {
      return(

        <div className="containerbox">
         
        <div className="head">
          <h1 >Get In Touch</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
          </div>
          <div className="inputs">
          
    
          <Form>
            <Form.Row>
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Message" rows={2} />
                </Form.Group>
                <Button variant="primary" type="submit">
      Submit
    </Button>
          </Form>
      
                
       
           
       </div>   
      </div> 
      
      );
  }
}

export default ContactUs;

