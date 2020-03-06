import { RECEIVE_ALL_TRANSACTIONS, RECEIVE_TRANSACTION } from '../actions/transactions_actions';

const transactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_TRANSACTIONS:
            return Object.assign({}, action.transactions)
        case RECEIVE_TRANSACTION:
            nextState[action.transaction.id] = action.transaction
            return nextState
        default:
            return state
    }
}

export default transactionsReducer;