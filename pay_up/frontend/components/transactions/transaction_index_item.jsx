import React from 'react';

const TransactionIndexItem = props => {
    return(
        <div>
            <li>
                {props.transaction.amount}
                {props.transaction.body}
                {props.transaction.payer}
                {props.transaction.recipient}
            </li>
        </div>
    )
}

export default TransactionIndexItem;