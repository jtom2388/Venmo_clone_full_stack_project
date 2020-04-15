import React from 'react';

const TransactionIndexItem = props => {

    const timeData = props.transaction.createdAt;
    const day = timeData.split("T")[0];
    const time = timeData.split("T")[1].split(".")[0];
    const images = [window.person0, window.person1, window.person2, window.person3, window.person4, window.person5, window.person6, window.person7, window.person8, window.person9];
    

    return(
        <div className='transaction'> 
            <div className='transaction-div'>
                <div className='transaction-info'>
                    <div className='transaction-left'>
                        {/* <img className='payer-photo' src={images[Math.floor(Math.random() * images.length)]} /> */}
                        <img src={props.transaction.payer.photoURL} alt=""/>
                    </div>
                    <div className='transaction-middle'>
                        <p className='transaction-users'>{props.transaction.payer} paid {props.transaction.recipient}</p>
                        {/* <div> */}
                        <p className='transaction-time'>{day}, {time}</p>
                        {/* </div> */}
                        <p className='transaction-message'>{props.transaction.body}</p>
                    </div>
                    <div className='transaction-right'>
                        <p className='transaction-amount'>${props.transaction.amount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionIndexItem;