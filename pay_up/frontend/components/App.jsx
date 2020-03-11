import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Link} from 'react-router-dom'
import Greeting from './greeting/greeting';
import HomepageContainer from './homepage/homepage_container';
import Modal from './modal/modal';
import CreateTransactionContainer from './transactions/create_transaction_container';

const App = () => (
  <div>
    <Modal />
    
    <Route exact path="/" component={GreetingContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/home" component={HomepageContainer} />
  </div>
);

export default App;