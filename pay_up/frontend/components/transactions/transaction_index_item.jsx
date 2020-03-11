import React from 'react';

const TransactionIndexItem = props => {
    return(
        <div className='transaction'> 
            <section className='transaction-section'>
                <div className='transaction-info'>
                    <p className='transaction-users'>{props.transaction.payer} paid {props.transaction.recipient}</p>
                    <p className='transaction-amount'>${props.transaction.amount}</p>
                </div>
                <p className='transaction-message'>{props.transaction.body}</p>
            </section>
        </div>
    )
}

export default TransactionIndexItem;