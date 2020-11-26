import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Testimonails extends Component {
    render() {
        return(
            <div style={{width: '100%',margin: 'auto'}}>
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
            </div>
        )
    }
}
export default Testimonails;