import {combineReducers} from 'redux';
import sessionsErrorsReducer from './sessions_errors_reducer'
import transactionErrorsReducer from './transactions_errors_reducer';

const errorsReducer = combineReducers({
    sessionErrors: sessionsErrorsReducer,
    transactionErrors: transactionErrorsReducer
});

export default errorsReducer;