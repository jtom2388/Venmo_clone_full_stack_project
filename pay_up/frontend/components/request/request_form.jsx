import React from 'react';

class RequestForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.RequestForm;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, username){
        e.preventDefault();
        this.props.users.map(user => {
            if(user.username === username){
                this.userId = user.id
            }
        })

        this.props.createRequest({
            amount: this.state.amount,
            body: this.state.body,
            requestor_id: this.props.currentUserId,
            requestee_id: this.userId
        });
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render(){
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e, this.props.username)}>
                    <h1 className='request-header'>Request</h1>
                    <label>
                        <input className='requestee' type="text" value={this.props.username}/>
                    </label>
                    <input className='amount-requested' type="text" onChange={this.update('amount')} placeholder="$0"/>
                    <br/>
                    <input className='request-message' type="text" onChange={this.update('body')} placeholder="What's it for?"/>
                    <br/>
                    <button type='submit' className='submit-request'>Request</button>
                </form>
            </div>
        )
    }
}

export default RequestForm;