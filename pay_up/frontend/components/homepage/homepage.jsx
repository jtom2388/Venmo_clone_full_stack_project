import React from 'react';
import { Link } from 'react-router-dom'

class Homepage extends React.Component{
    
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.logout();
    }

    render() {

        return (
            <div>
                <Link to="/home">
                    <img className='payup-logo' src={window.pay_up} alt=""/>
                </Link>
                <h1>Welcome {this.props.currentUser.username}</h1>
                <button onClick={this.handleLogout}>Log Out</button>
            </div>
        )
        
    }
};

export default Homepage;