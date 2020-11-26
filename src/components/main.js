import React from 'react';
import { Switch, Route } from 'react-router-dom';


import BecomeaTutor from './becomeatutor';
import PricingPlan from './pricingplan';
import Testimonails from './testimonails';
import ContactUs from './contactus';
import SignUp from './signup';

const Main = () => (
    <Switch>
        
/      <Route path="/becomeatutor" component={BecomeaTutor} />
        <Route path="/pricingplan" component={PricingPlan} />
        <Route path="/testimonails" component={Testimonails} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/signup" component={SignUp} />
    </Switch>
)

export default Main;