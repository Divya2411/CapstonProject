import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width:'100%' ,height:'1000px',margin: 'auto'}}>
        <Grid className="landing-grid">
        
          <Cell col={12}>
            <div className = "banner-text">
            <h1>Effective Communication With Online Learning</h1>
            <hr/>
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
        
        
    
      </div>
    )
  }
}

export default Landing;