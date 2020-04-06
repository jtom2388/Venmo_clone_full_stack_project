import React from 'react';
import { Link } from 'react-router-dom'
import TransactionIndexContainer from '../transactions/transaction_index_container';
import UserIndexContainer from '../user_friends/user_index_container';
import RequestIndexContainer from '../request/request_index_container';

class Homepage extends React.Component{
    
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = { hideUsers: true };
        this.toggleUsers = this.toggleUsers.bind(this);
    }

    handleLogout(){
        this.props.logout();
    }

    componentDidMount(){
        this.props.fetchAllUsers();
    }

    toggleUsers() {
        this.setState({ hideUsers: !this.state.hideUsers });
    }
    

    render() {

        return (
            <div className='homepage'>
                <div className='header'>
                    <div className='header-container'>
                        <div className='header-logo'>
                            <Link className='header-logo-a' to="/home">
                                PayUp
                            </Link>
                        </div>
                    </div>
                    <button className='logout-button' onClick={this.handleLogout}>Log Out</button>
                </div>
                <div className='float-right-content'>
                    <div className='current-user-container'>
                        <div className='user-photo'>

                        </div>
                        <div className='current-user'>
                            {this.props.currentUser.username}
                        </div>
                    </div>
                    <div className='balance-container'>
                        <div className='current-user-balance'>
                            Balance: ${this.props.currentUser.balance}
                        </div>
                    </div>
                    <div className='show-user-button'>
                        <button onClick={this.toggleUsers} className='collapsible'>Show Users</button>
                    </div>
                    <br/>
                    <div>
                        <UserIndexContainer hideUsers={this.state.hideUsers} />
                    </div>
                </div>
                
                <div>
                    <RequestIndexContainer />
                </div>

                <div>
                    <TransactionIndexContainer />
                </div>
            </div>
        )
        
    }
};

export default Homepage;