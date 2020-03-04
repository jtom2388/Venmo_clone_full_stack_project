import React from 'react';

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

  render() {
    return (
      <div>
        {this.props.errors.map( (error, i) => (
            <li key={`${i}`}>{error}</li>
        ))}
        <h1>{this.props.formtype}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input onChange={this.updateUsername} type="text" name="username" value={this.state.username}/>
          </label>
          <label>Password:
            <input onChange={this.handleInput('password')} type="password" name="password" value={this.state.password}/>
          </label>
          <input type="submit" value={this.props.formtype}/>   
        </form>
      </div>
    )
  }
}

export default SignupForm;