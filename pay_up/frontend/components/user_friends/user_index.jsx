import React from 'react';
import UserIndexItem from './user_index_item';

class UserIndex extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchAllUsers()
    }

    render(){
        if(!this.props.users) return null
        const users = this.props.users.map((user, i) => {
            return <UserIndexItem user={user} key={i} />
        })
        return (
            <div>
                <ul>{users}</ul>
            </div>
        )
    }
}

export default UserIndex;