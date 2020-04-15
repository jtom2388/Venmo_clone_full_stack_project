import React from 'react';
import { Link } from 'react-router-dom'
import TransactionIndexContainer from '../transactions/transaction_index_container';
import UserIndexContainer from '../user_friends/user_index_container';
import RequestIndexContainer from '../request/request_index_container';
import 'babel-polyfill';

class Homepage extends React.Component{
    
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = { hideUsers: true, imageURL: null, imageFile: null };
        this.toggleUsers = this.toggleUsers.bind(this);
        this.handleFile = this.handleFile.bind(this);
        // this.submitImage = this.submitImage.bind(this);
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

    // submitImage(e){
    //     e.preventDefault();
    //     let user = Object.assign({}, this.props.currentUser);
    //     user[imageFile] = this.state.imageFile;
    //     const formData = new FormData();
    //     formData.append('user[profile_photo]', this.state.imageFile);
    //     this.props.updateImage(user)
    // }

    render() {
        const preview = this.state.imageURL ? <img src={this.state.imageURL} /> : null;

        return (
            <div className='homepage'>
                <div className='header'>
                    <div className='header-container'>
                        <div className='header-logo'>
                            <Link className='header-logo-a' to="/home">
                                PayUp
                            </Link>
                        </div>
                        <button className='logout-button' onClick={this.handleLogout}>Log Out</button>
                    </div>
                </div>

                <div className='homepage-main'>
                    <div className='homepage-main-container'>
                        <div className="homepage-main-left">
                            <TransactionIndexContainer />
                        </div>
                        <div className="homepage-main-right">
                            <div className='current-user-container'>
                                <div className='user-photo-container'>
                                    <img className='user-photo' src={this.props.currentUser.photoURL} alt=""/>
                                </div>
                                <div className='current-user-wrapper'>
                                    <div className='current-user'>
                                        <Link className='current-user-name' to="/profile">{this.props.currentUser.username}</Link>
                                        {/* {this.props.currentUser.username} */}
                                    </div>
                                    <div>
                                        <label className='photo-label'>
                                            <p className='add-photo'>Add Photo</p>
                                            
                                            <input className='photo-file' 
                                            onChange={this.handleFile}
                                            {...preview}
                                            id='photo-upload'
                                            type="file"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='balance-container'>
                                <div className='current-user-balance'>
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
                
                {/* <div>
                    <RequestIndexContainer />
                </div> */}

            </div>
        )
        
    }
};

export default Homepage;