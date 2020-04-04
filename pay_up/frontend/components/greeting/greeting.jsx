import React from 'react';
import { Link } from 'react-router-dom'

class Greeting extends React.Component{
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.logout();
    }

    render() {
        return(
            <div className='main'>
                <div className='header'>
                    <Link to="/">
                        <img className='payup-logo' src={window.pay_up} alt=""/>
                    </Link>
                    <div className='login'>
                        <Link to="/login">
                            <button className='login-button'>Log In</button>
                        </Link>
                    </div>
                </div>

                <div className='content'>
                    <div className='image'>
                        <img className='content-image' src={window.content} alt=""/>
                    </div>
                    <div className='signup'>
                        <p className='welcome-message'>Pay on the go or from any available computer. Join PayUp now!</p>
                        <Link to="/signup">
                            <button className='signup-button'>Sign Up</button>
                        </Link>
                    </div>
                </div>
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
                <br/>
            </div>
        )
    }
};

export default Greeting;