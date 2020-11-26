import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class PricingPlan extends Component {
    render() {
        return(
            <div style={{width: '100%',margin: 'auto'}}>
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
            </div>
        )
    }
}
export default PricingPlan;