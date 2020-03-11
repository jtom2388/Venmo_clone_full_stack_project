import React from 'react';

class TransactionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.transaction;
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(e, username){
        e.preventDefault();
        this.props.users.map(user => {
            if(user.username === username) {
                this.userId = user.id
            }
        })
        
        this.props.createTransaction({
            amount: this.state.amount,
            body: this.state.body,
            payer_id: this.props.currentUserId,
            recipient_id: this.userId
        });
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render(){
        
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e, this.props.username)}>
                    <label>Recipient:
                        <input type="text" value={this.props.username}/>
                    </label>
                    <input type="text" onChange={this.update('amount')} placeholder="$0"/>
                    <br/>
                    <input type="text" onChange={this.update('body')} placeholder="What's it for?"/>
                    <br/>
                    <button type='submit'>Pay</button>
                </form>
            </div>
        )
    }
}


export default TransactionForm;