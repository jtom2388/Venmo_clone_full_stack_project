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
                    <label>Requestee:
                        <input type="text" value={this.props.username}/>
                    </label>
                    <input type="text" onChange={this.update('amount')} placeholder="$0"/>
                    <br/>
                    <input type="text" onChange={this.update('body')} placeholder="What's it for?"/>
                    <br/>
                    <button type='submit'>Request</button>
                </form>
            </div>
        )
    }
}

export default RequestForm;