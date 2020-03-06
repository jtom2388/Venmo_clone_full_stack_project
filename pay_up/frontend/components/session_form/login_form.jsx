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
      this.handleDemo = this.handleDemo.bind(this);
    }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
      () => this.props.history.push('/home')
    )
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {username: 'demo', password: '123456'};
    this.props.processForm(user).then(
      () => this.props.history.push('/home')
    )
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
        <h1 className='login-title'>Log in to PayUp</h1>
        <br/>
        <div className='form'>
        <form onSubmit={this.handleSubmit}>
        {this.props.errors.map( (error, i) => (
            <li key={`${i}`}>{error}</li>
        ))}
          <fieldset className='inputs'>
              <label className='login-username'>Username:
                <input className='auth-form-input' onChange={this.updateUsername} type="text" name="username" value={this.state.username}/>
              </label>
              <br/>
              <label>Password:
                <input className='auth-form-input' onChange={this.handleInput('password')} type="password" name="password" value={this.state.password}/>
              </label>
              <br/>
              <input className='login-submit' type="submit" onClick={this.handleSubmit}/>
              <button onClick={this.handleDemo}>Demo User</button>
          </fieldset>
          <p>New to PayUp?
            <Link to="/signup">Create an account now!</Link>
          </p>
        </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;