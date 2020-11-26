import React, { Component } from 'react';
import './App.css';
import Main from './components/main';

import { Link } from 'react-router-dom';
import { Button, Form, Col} from 'react-bootstrap';
import { Header,Navigation, Content,Footer,FooterDropDownSection,FooterLinkList,FooterSection } from 'react-mdl';
import { Grid, Cell } from 'react-mdl';

class App extends Component {
  render() {
  return (
    <div style={{height:'1000px',width:'100%'}}>
  
  <Header className="header-color" title="TutorMe" >
       
            <Navigation>
                <Link to = "/becomeatutor">Become a Tutor</Link>
                <Link to ="/pricingplan">Pricing Plan</Link>
                <Link to ="/testimonails">Testimonails</Link>
                <Link to ="/contactus">Contant Us</Link>
                <Link to ="/signup" >SignUp</Link>
            </Navigation>     
       </Header>

        <Content>

          <div className ="page-content" /> 

        </Content>
        <Main/>
          
<Grid className="landing-grid">
        
          <Cell col={12}>
            <div className = "banner-text">
            <h1>Effective Communication With Online Learning</h1>
            
            <p>Online Tutoring Session 24hrs a Day</p>
            </div>
               
         
            
          </Cell>
          
          <Cell col={4}>
          <div className = "subtitle">
            
            <h5> Flexible Hours</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "subtitle">
            
            <h5>Live-Video Tutoring</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "subtitle">
            
            <h5> Fast Response</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>
            
        
        </Grid>
    
        <hr/>
        <section class="becomeatutor" id="becomeatutor">
        <Grid className="stepstofollow">
        <Cell col={12}>
        <div className= "title-text">
            <h1>3 Simple Steps to Start!</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "steps">
            
            <h5>1.Create a Account</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "steps">
            
            <h5>2.Tutor Request Session</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "steps">
            
            <h5>3.Meet and Solve</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>
    </Grid>
    </section>
    <hr/>
    <Grid className="levels">
        
          <Cell col={12}>
            <div className = "subject-text">
            <h1>All Grade Levels Syllabus Covered</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            
            </div>
            </Cell>
            
          <Cell col={4}>
              <div className = "subjectname">
                  <h6>Science</h6>
                      </div>
          </Cell>
          <Cell col={4}>
              <div className = "subjectname">
                  <h6>Mathematics</h6>
                      </div>
          </Cell>
          <Cell col={4}>
              <div className = "subjectname">
                  <h6>English</h6>
                      </div>
          </Cell>
          <Cell col={4}>
              <div className = "subjectname">
                  <h6>ExamsPrep</h6>
                      </div>
          </Cell>
          <Cell col={4}>
              <div className = "subjectname">
                  <h6>French</h6>
                      </div>
          </Cell>
          <Cell col={4}>
              <div className = "subjectname">
                  <h6>SocialScience</h6>
                      </div>
          </Cell>
          
            </Grid>
        <hr/>
        <Grid className="testing">
        
          <Cell col={12}>
            <div className = "test-level">
            <h1>Testimonails</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            
            </div>
            </Cell>
            <Cell col={4}>
          <div className = "stepslevel">
            

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "stepslevel">
            
            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "stepslevel">
            
            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
            </div>
            </Cell>
            </Grid>
        <hr/>

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
     <div>   
    </div> 
    
    <hr/>

       <Footer size="mega">
    <FooterSection type="middle">
        <FooterDropDownSection title="Features">
            <FooterLinkList>
                <a href="#">About</a>
                <a href="#">Terms</a>
                <a href="#">Partners</a>
                <a href="#">Updates</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Details">
            <FooterLinkList>
                <a href="#">Specs</a>
                <a href="#">Tools</a>
                <a href="#">Resources</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Technology">
            <FooterLinkList>
                <a href="#">How it works</a>
                <a href="#">Patterns</a>
                <a href="#">Usage</a>
                <a href="#">Products</a>
                <a href="#">Contracts</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="FAQ">
            <FooterLinkList>
                <a href="#">Questions</a>
                <a href="#">Answers</a>
                <a href="#">Contact Us</a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
     
    
</div>
 
  );
}
}

export default App;
