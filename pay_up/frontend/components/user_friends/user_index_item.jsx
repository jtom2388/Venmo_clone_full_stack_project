import React from 'react';

class UserIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.transaction
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createTransaction(this.state.transaction);
    }

    update(field){
        return e => this.setState({transaction:{ [field]: e.currentTarget.value }})
    }

    render(){
        
        return(
            <div className='usernames-container'>
                <div className='usernames'>
                    <div className='name'>
                       {this.props.user.username}
                    </div>
                    <div className='pay'>
                        <button className='pay-button' onClick={(() => this.props.openModal('PAY', this.props.user.username))}>Pay</button>
                    </div>
                    {/* <div className='request'>
                        <button className='request-button' onClick={(() => this.props.openModal('REQUEST', this.props.user.username))}>Request</button>
                    </div> */}
                    
                </div>
            </div>
        )
    }
}

export default UserIndexItem;