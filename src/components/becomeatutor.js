import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class BecomeaTutor extends Component {
    render() {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
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
      </div>      
        )
    }
}
export default BecomeaTutor;