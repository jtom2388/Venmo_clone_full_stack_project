import { RECEIVE_REQUESTS, RECEIVE_REQUEST, REMOVE_REQUEST} from '../actions/request_action';

const RequestReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_REQUESTS:
            return Object.assign({}, action.requests)
        case RECEIVE_REQUEST:
            nextState[action.request.id] = action.request
        case REMOVE_REQUEST:
            delete nextState[action.request.id]
            return nextState
        default:
            return state
    }
}

export default RequestReducer;