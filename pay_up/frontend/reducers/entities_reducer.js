import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import transactionsReducer from './transactions_reducer';
import userReducer from './users2_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    transactions: transactionsReducer,
    user: userReducer
});

export default entitiesReducer;