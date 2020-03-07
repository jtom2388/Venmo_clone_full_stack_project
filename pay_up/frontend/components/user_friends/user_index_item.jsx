import React from 'react';

const UserIndexItem = props => {
    return(
        <div>
            <li>
                {props.user.username}
                {props.user.balance}
            </li>
        </div>
    )
}

export default UserIndexItem;