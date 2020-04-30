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
            <>
            <div className='main'>
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
                        <div className='content-image-container'>
                            <img className='content-image' src={window.content} alt=""/>
                        </div>
                        <div className='signup'>
                            <p className='welcome-message'>Pay on the go or from any computer. Join PayUp now!</p>
                            <Link className='signup-a' to="/signup">
                                <button className='signup-button'>Sign Up Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
            
            <div className='footer'>
                <div className='icons-wrapper'>
                    <div className='icons-container'>
                        <div className='icons'>
                            <a href="https://github.com/jtom2388/Venmo_clone_full_stack_project/tree/master/pay_up">
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
            </div>
            </>
        )
    }
};

export default Greeting;