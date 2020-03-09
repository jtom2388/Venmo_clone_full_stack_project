import React from 'react';

const TransactionIndexItem = props => {
    return(
        <div className='transaction'>
            {/* <div className='transaction-users'>
                {props.transaction.payer} paid {props.transaction.recipient}
            </div>
            <div className='transaction-amount'>
                ${props.transaction.amount}
            </div>
            <div className='transaction-body'>
                {props.transaction.body}
            </div> */}
            <form>
                <p className='transaction-users'>{props.transaction.payer} paid {props.transaction.recipient}</p>
                <p className='transaction-amount'>${props.transaction.amount}</p>
                <p className='transaction-message'>{props.transaction.body}</p>
            </form>
        </div>
    )
}

export default TransactionIndexItem;