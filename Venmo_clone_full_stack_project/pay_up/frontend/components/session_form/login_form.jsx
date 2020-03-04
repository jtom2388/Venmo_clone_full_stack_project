import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {
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

  render() {
    return (
      <div>
        {this.props.errors.map( (error, i) => (
            <li key={`${i}`}>{error}</li>
        ))}
        <Link to="/">
          <img className='resize' src={window.pay_up} alt=""/>
        </Link>
        <h1>Log in to PayUp</h1>
        <div className='form'>
        <form onSubmit={this.handleSubmit}>
            <fieldset className='inputs'>
            <label>Username:
              <input className='auth-form-input' onChange={this.updateUsername} type="text" name="username" value={this.state.username}/>
            </label>
            <br/>
            <label>Password:
              <input onChange={this.handleInput('password')} type="password" name="password" value={this.state.password}/>
            </label>
            <input type="submit" value={this.props.formtype}/>
          </fieldset>   
        </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;