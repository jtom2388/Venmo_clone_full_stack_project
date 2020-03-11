import React from 'react';

const RequestIndexItem = props => {
    return(
        <div className='request'>
            <section className='request-section'>
                <div className='request-info'>
                    <p className='request-users'>{props.request.requestor} requests {props.request.requestee}</p>
                    <p className='request-amount'>${props.request.amount}</p>
                </div>
                <p className='request-message'>{props.request.body}</p>
            </section>
        </div>
    )
}

export default RequestIndexItem;