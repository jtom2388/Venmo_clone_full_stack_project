import { RECEIVE_TRANSACTION, RECEIVE_TRANSACTION_ERRORS } from '../actions/transactions_actions';

const transactionErrorsReducer = ((state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TRANSACTION_ERRORS:
            return action.tranErrors;
        case RECEIVE_TRANSACTION:
            return [];
        default:
            return state;
    }
})

export default transactionErrorsReducer;