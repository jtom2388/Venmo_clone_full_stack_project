import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import AuthRoute from '../util/route_util';
import {Link} from 'react-router-dom'

const App = () => (
  <div>
    {/* <header> */}
      {/* <div className='logo_container'>

        

      </div> */}
      <GreetingContainer />
    {/* </header> */}
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;