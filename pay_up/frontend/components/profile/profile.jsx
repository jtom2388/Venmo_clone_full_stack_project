import React from 'react';
import { Link } from 'react-router-dom';
import UserIndexContainer from '../user_friends/user_index_container';
import TransactionIndexContainer from '../transactions/transaction_index_container';


class Profile extends React.Component{

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = { hideUsers: true };
        this.toggleUsers = this.toggleUsers.bind(this);
        this.handleFile = this.handleFile.bind(this);
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

    async handleFile(e){
        e.preventDefault();
        const file = e.currentTarget.files[0];
        // console.log(file, "file")
        // console.log(this.props.currentUser, "current-user-data")
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            // this.setState({ imageURL: fileReader.result, imageFile: file});
            let user = Object.assign({}, this.props.currentUser);
            // console.log(user, "user-2")
            // user[photoURL] = file;
            
        }
        if(file){ 
            await fileReader.readAsDataURL(file);
            const formData = new FormData();
            await formData.append('user[id]', this.props.currentUser.id);
            await formData.append('user[username]', this.props.currentUser.username);
            await formData.append('user[balance]', this.props.currentUser.balance);
            await formData.append('user[profile_photo]', file);
            console.log(formData.get('user[id]'), "formData")
            // let user = Object.assign({}, this.props.currentUser);
            // user['photoURL'] = file;
            this.props.updateImage(formData).then( (user) => {
                console.log(user, "result-user")
            })
        }
        console.log(file, "file-result")
        // console.log(formData, "formData-2")
        // let user = Object.assign({}, this.props.currentUser);
        // this.props.updateImage(user)
    }

    render() {

        return (
            <div className='profile'>
                <div className='profile-header'>
                    <div className='profile-header-container'>
                        <div className='profile-header-left'>
                            <div className='profile-header-logo'>
                                <Link className='profile-header-logo-a' to="/home">
                                    PayUp
                                </Link>
                            </div>
                            <div className='profile-search-container'>
                                <input type="text" className='profile-search' placeholder='Search People'/>
                            </div>
                            <div className='profile-to-homepage-container'>
                                <Link className='profile-to-homepage' to="/home">
                                    <p className='profile-homepage-link'>Home</p>
                                </Link>
                            </div>
                        </div>
                        <div className='profile-header-right'>
                            <div className='profile-link-container'>
                                <Link className='profile-link' to="/profile">{this.props.currentUser.username}</Link>
                            </div>
                            <div className='profile-logout-button-container'>
                                <button className='profile-logout-button' onClick={this.handleLogout}>Log Out</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='profile-main'>
                    <div className='profile-main-container'>
                        <div className="profile-main-left">
                            <div className='profile-user-transactions'>
                                {/* <div className='transaction-title-container'>
                                    <p className='transaction-title'>Your Payments</p>
                                </div> */}
                                <TransactionIndexContainer />
                            </div>
                        </div>
                        <div className="profile-main-right">
                            <div className='profile-user-container'>
                                <div className='profile-user-photo'>
                                    <img className='user-photo' src={this.props.currentUser.photoURL} alt=""/>
                                </div>
                                <div className='profile-user-wrapper'>
                                    <div className='profile-user'>
                                        {this.props.currentUser.username}
                                    </div>
                                    <div>
                                        <label className='photo-label'>
                                            <p className='add-photo'>Add Photo</p>
                                            
                                            <input className='photo-file' 
                                            onChange={this.handleFile}
                                            // {...preview}
                                            id='photo-upload'
                                            type="file"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='profile-balance-container'>
                                <div className='profile-user-balance'>
                                    Balance: ${this.props.currentUser.balance}
                                </div>
                            </div>
                            <div className='show-user-button'>
                                <button onClick={this.toggleUsers} className='collapsible'>{this.state.hideUsers ? "Show Users" : "Hide Users"}</button>
                            </div>
                            <br/>
                            <div>
                                <UserIndexContainer hideUsers={this.state.hideUsers} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='homepage-footer'>
                    <div className='homepage-icons-wrapper'>
                        <div className='homepage-icons-container'>
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
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Profile;