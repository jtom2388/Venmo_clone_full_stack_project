import { RECEIVE_ALL_USERS, RECEIVE_UPDATED_USER} from '../actions/user_actions';

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return Object.assign({}, action.users)
        case RECEIVE_UPDATED_USER:
            nextState[action.user.id] = action.user
            return nextState
        default:
            return state;
    }
}

export default userReducer;