import {connect} from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import { createTransaction, fetchAllTransactions } from '../../actions/transactions_actions';
import UserIndex from './user_index';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = state => ({
    users: Object.values(state.entities.user),
    transaction: {
        amount: '',
        body: '',
        payer_id: '',
        recipient_id: ''
    },
    transactions: Object.values(state.entities.transactions),
})

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createTransaction: transaction => dispatch(createTransaction(transaction)),
    fetchAllTransactions: () => dispatch(fetchAllTransactions()),
    openModal: (modal, username) => dispatch(openModal(modal, username))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)