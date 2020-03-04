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
        if(this.props.currentUser === undefined){
            return(
                <div className='main'>
                    <div className='header'>
                        <Link to="/">
                            <img className='resize' src={window.pay_up} alt=""/>
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

                        <div className='signup'>New to Payup?
                            <Link to="/signup">
                                <button className='signup-button'>Sign Up</button>
                            </Link>
                        </div>
                    </div>
                    <br/>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Welcome {this.props.currentUser.username}</h1>
                    <button onClick={this.handleLogout}>Log Out</button>
                </div>
            )
        }
    }
};

export default Greeting;