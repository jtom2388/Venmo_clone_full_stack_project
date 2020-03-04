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
                <div className='test'>
                    <Link to="/">
                        <img className='resize' src={window.pay_up} alt=""/>
                    </Link>
                    <div className='signup'>New to Payup?
                        <Link to="/signup">Sign Up</Link>
                    </div>
                    <div className='login'>
                        <Link to="/login">Log In</Link>
                    </div>
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