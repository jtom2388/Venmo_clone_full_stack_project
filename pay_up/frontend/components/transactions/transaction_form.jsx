import React from 'react';

class transactionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.transaction;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createTransaction(this.state);
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render(){
        return(
            
        )
    }
}


export default transactionForm;