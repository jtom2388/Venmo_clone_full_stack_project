import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_UPDATED_USER } from '../actions/user_actions';

const _defaultState = {
    currentUser: null
};

const usersReducer = (state = _defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_UPDATED_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        default:
            return state
    };
}

export default usersReducer;