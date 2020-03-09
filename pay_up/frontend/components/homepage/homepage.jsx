import React from 'react';
import { Link } from 'react-router-dom'
import TransactionIndex from '../transactions/transaction_index';
import UserIndex from '../user_friends/user_index';

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
                <div className='currentUser-info'>
                    <div className='welcome'>
                        Welcome {this.props.currentUser.username}
                    </div>
                    <div className='current-user-balance'>
                        balance: ${this.props.currentUser.balance}
                    </div>
                </div>
                <button className='logout-button' onClick={this.handleLogout}>Log Out</button>
                <div>
                    <UserIndex fetchAllUsers={this.props.fetchAllUsers} users={this.props.users}/>
                    <TransactionIndex fetchAllTransactions={this.props.fetchAllTransactions} transactions={this.props.transactions} />
                </div>
            </div>
        )
        
    }
};

export default Homepage;