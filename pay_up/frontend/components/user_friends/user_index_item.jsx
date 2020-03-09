import React from 'react';

class UserIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.transaction;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createTransaction(this.state);
    }

    componentDidUpdate(){
        this.props.fetchAllTransactions();
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    render(){
        return(
            <div>
                <div className='usernames'>
                   <li>
                       {this.props.user.username}
                    <button className='pay-button'>Pay</button>
                    <button className='request-button'>Request</button>
                    </li>
                </div>
            </div>
        )
    }
}

export default UserIndexItem;