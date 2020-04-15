import React from 'react';
import TransactionIndexItem from './transaction_index_item';

class TransactionIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllTransactions();
    }

    render(){
        if(!this.props.transactions) return null
        const transactions = this.props.transactions.map((transaction, i) => {
            return <TransactionIndexItem transaction={transaction} users={this.props.users} key={i} />
        })
        return (
            <div className='transaction-container'>
                {transactions.reverse()}
            </div>
        )
    }
}

export default TransactionIndex;