import React from 'react';
import {Link} from 'react-router-dom'

class SignupForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateUsername = this.updateUsername.bind(this);
      this.handleInput = this.handleInput.bind(this);
      
    }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  updateUsername(e) {
    e.preventDefault();
    this.setState({username: e.target.value})
  }

  handleInput(inputType) {
    return e => this.setState({[inputType]: e.target.value})
  }

  componentWillUnmount() {
    this.props.clearSessionErrors()
  }

  render() {
    return (
      <div>
        <Link to="/">
          <img className='payup-logo' src={window.pay_up} alt=""/>
        </Link>
        <h1 className='signup-title'>Join PayUp Now</h1>
        <br/>
        <div className='form'>
        <form onSubmit={this.handleSubmit}>
        {this.props.errors.map( (error, i) => (
            <li key={`${i}`}>{error}</li>
        ))}
          <fieldset className='inputs'>
            <label>Username:
              <input className='auth-form-input' onChange={this.updateUsername} type="text" name="username" value={this.state.username}/>
            </label>
            <label>Password:
              <input className='auth-form-input' onChange={this.handleInput('password')} type="password" name="password" value={this.state.password}/>
            </label>
        <br/>
            <input type="submit" value={this.props.formtype}/>   
          </fieldset>
        <p>Already have an account?
          <Link to="/login">Log in now!</Link>
        </p>
        </form>
        </div>
      </div>
    )
  }
}

export default SignupForm;