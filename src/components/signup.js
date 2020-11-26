import React, { Component } from 'react';
import { Button,Form, Col,Tab,Tabs, Row,Card, Accordion } from 'react-bootstrap';

class SignUp extends Component {
    render() {
        return(


            <div className = "container" >
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="Signup" title="signup">
  
  <Accordion defaultActiveKey="0"> 
<Row>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        student
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Form>
              
<Form.Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
  
  <br/>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGriddateofbirth">
      
      <Form.Control type="dateofbirth" placeholder="DOB" />
    </Form.Group>
  </Form.Row>
  
  <Form.Group controlId="formGridprogram">
    
    <Form.Control placeholder="Program Name" />
  </Form.Group>
<Form.Row>
    <Form.Group as={Col} controlId="formGridpassword">
      
      <Form.Control type="password" placeholder="password" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridconfirmpassword">
      
      <Form.Control type="confirmpassword" placeholder="confirm password" />
    </Form.Group>
  </Form.Row>
  

    
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Tutor
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
     <Form>
<Form.Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
  
  <br/>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridlocation">
      
      <Form.Control type="location" placeholder="Location" />
    </Form.Group>
  </Form.Row>
  
  <Form.Group controlId="formGridprogram">
    
    <Form.Control placeholder="Program Speciality" />
  </Form.Group>
<Form.Row>
    <Form.Group as={Col} controlId="formGridpassword">
      
      <Form.Control type="password" placeholder="password" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridconfirmpassword">
      
      <Form.Control type="confirmpassword" placeholder="confirm password" />
    </Form.Group>
  </Form.Row>
  

    
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </Accordion.Collapse>
  </Card>
  </Row>
 
</Accordion>
</Tab>



  
  <Tab eventKey="Login" title="LogIn">
  <Accordion defaultActiveKey="0"> 
<Row>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        student
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Tutor
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">      
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </Accordion.Collapse>
  </Card>
  </Row>
 
</Accordion>
</Tab>


  
  
</Tabs>

            
      
      
      
         
          </div>   
            
            
        )     
    
    }
}
export default SignUp;