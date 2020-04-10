import React from 'react';
import { Link } from 'react-router-dom';
import UserIndexContainer from '../user_friends/user_index_container';

class Profile extends React.Component{

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
            <div className='profile'>
                <div className='profile-header'>
                    <div className='profile-header-container'>
                        <div className='profile-header-logo'>
                            <Link className='profile-header-logo-a' to="/home">
                                PayUp
                            </Link>
                        </div>
                        <button className='profile-logout-button' onClick={this.handleLogout}>Log Out</button>
                    </div>
                </div>

                <div className='profile-main'>
                    <div className='profile-main-container'>
                        <div className="profile-main-left">
                            {/* <TransactionIndexContainer /> */}
                        </div>
                        <div className="profile-main-right">
                            <div className='profile-user-container'>
                                <div className='profile-user-photo'>

                                </div>
                                <div className='profile-user'>
                                    {this.props.currentUser.username}
                                </div>
                            </div>
                            <div className='profile-balance-container'>
                                <div className='profile-user-balance'>
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
                    </div>
                </div>


            </div>
        )
        
    }
}

export default Profile;