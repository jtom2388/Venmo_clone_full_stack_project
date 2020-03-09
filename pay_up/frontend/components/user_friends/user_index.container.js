import {connect} from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import { createTransaction, fetchAllTransactions } from '../../actions/transactions_actions';
import UserIndex from './user_index';

const mapStateToProps = state => ({
    users: Object.values(state.users),
    transaction: {
        amount: '',
        body: '',
        payer_id: '',
        recipient_id: ''
    },
    transactions: Object.values(state.entities.transactions)
})

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createTransaction: transaction => dispatch(createTransaction(transaction)),
    fetchAllTransactions: () => dispatch(fetchAllTransactions())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)