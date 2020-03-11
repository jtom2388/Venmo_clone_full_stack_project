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
                            <p className='welcome-message'>No wallets or cards needed here. Join PayUp now!</p>
                            <Link to="/signup">
                                <button className='signup-button'>Sign Up</button>
                            </Link>
                        </div>
                    </div>
                    <br/>
                </div>
            )
    }
};

export default Greeting;