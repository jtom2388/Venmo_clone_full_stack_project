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
      <>
      <div className='login-main'>
        {/* <Link to="/">
          <img className='payup-logo' src={window.pay_up} alt=""/>
        </Link> */}
        <div className='header'>
            <div className='header-container'>
                <div className='header-logo'>
                    <Link className='header-logo-a' to="/">
                        {/* <img className='payup-logo' src={window.pay_up} alt=""/> */}
                        PayUp
                    </Link>
                </div>
                <div className='login'>
                    <Link to="/login">
                        {/* <button className='login-button'>Log In</button> */}
                        <div className='login-div'>Log In</div>
                    </Link>
                </div>
            </div>
        </div>
        <div className='content'>
            <div className='content-container'>
              <h1 className='login-title'>Log in to PayUp</h1>
              <div className='form'>
                <form className='login-form' onSubmit={this.handleSubmit}>
                {this.props.errors.map( (error, i) => (
                    <li className='error-text' key={`${i}`}>{error}</li>
                ))}
                  <fieldset className='inputs'>
                      <label className='login-username'>Username:
                        <input className='auth-form-input' onChange={this.updateUsername} type="text" name="username" value={this.state.username}/>
                      </label>
                      <br/>
                      <label className='login-password'>Password:
                        <input className='auth-form-input' onChange={this.handleInput('password')} type="password" name="password" value={this.state.password}/>
                      </label>
                      <p className='message'>
                        <span>
                          New to PayUp?
                        </span>
                          <Link to="/signup">Create an account</Link>
                      </p>
                      <br/>
                      <div className='login-buttons'>
                        <input className='login-submit' type="submit" onClick={this.handleSubmit}/>
                        {/* <br/> */}
                        <button className='demo-button' onClick={this.handleDemo}>Demo User</button>
                      </div>
                  </fieldset>
                </form>
              </div>
            </div>
        </div>

      </div>

      <div className='footer'>
          <div className='icons-container'>
              <div className='icons'>
                  <a href="https://github.com/jtom2388/Venmo_clone_full_stack_project">
                      <i className="fab fa-github-alt"></i>
                  </a>
              </div>
              <div className='icons'>
                  <a href="https://angel.co/u/jordan-philip-tom">
                      <i className="fab fa-angellist"></i>
                  </a>
              </div>
              <div className='icons'>
                  <a href="https://www.linkedin.com/in/jordanphiliptom/">
                      <i className="fab fa-linkedin-in"></i>
                  </a>
              </div>
          </div>
      </div>
      </>
    )
  }
}

export default LoginForm;