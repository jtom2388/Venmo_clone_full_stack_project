import React from 'react';

class TransactionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.transaction;
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(e, username){
        e.preventDefault();
        this.props.allUsers.map(user => {
            if(user.username === username) {
                this.userId = user.id
            }
        })
        
        this.props.createTransaction({
            amount: this.state.amount,
            body: this.state.body,
            payer_id: this.props.currentUserId,
            recipient_id: this.userId
        }).then(() => this.props.fetchUser(this.props.currentUserId))

        this.props.closeModal();
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render(){
        
        return(
            <div>
                <form className='transaction-form' onSubmit={(e) => this.handleSubmit(e, this.props.username)}>
                    <h1 className='transaction-header'>Pay</h1>
                    <h2 className='balance-header'></h2>
                    {/* <label> */}
                    <input className='recipient' type="text" value={this.props.username}/>
                    {/* </label> */}
                    <input className='amount-paid' type="text" onChange={this.update('amount')} placeholder="How much? Ex: 5"/>
                    
                    <textarea className='payment-message' onChange={this.update('body')} placeholder="What's it for?"/>
                    
                    <button type='submit' className='submit-transaction'>Pay</button>
                </form>
            </div>
        )
    }
}


export default TransactionForm;