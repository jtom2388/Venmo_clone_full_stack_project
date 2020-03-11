import React from 'react';
import { Link } from 'react-router-dom'
import TransactionIndexContainer from '../transactions/transaction_index_container';
import UserIndexContainer from '../user_friends/user_index_container';
import RequestIndexContainer from '../request/request_index_container';

class Homepage extends React.Component{
    
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.logout();
    }

    componentDidMount(){
        this.props.fetchAllUsers();
    }

    render() {

        return (
            <div className='homepage'>
                <Link to="/home">
                    <img className='payup-logo' src={window.pay_up} alt=""/>
                </Link>
                <div className='currentUser-info'>
                    <div className='welcome'>
                        Welcome {this.props.currentUser.username}
                        <button className='collapsible'>Users</button>
                    </div>
                    <div className='current-user-balance'>
                        balance: ${this.props.currentUser.balance}
                    </div>
                </div>
                <button className='logout-button' onClick={this.handleLogout}>Log Out</button>
                <div>
                    <UserIndexContainer />
                    <TransactionIndexContainer />
                    <RequestIndexContainer />
                </div>
            </div>
        )
        
    }
};

export default Homepage;