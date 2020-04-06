import {connect} from 'react-redux';
import { createTransaction } from '../../actions/transactions_actions';
import TransactionForm from './transaction_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import {fetchAllTransactions} from '../../actions/transactions_actions'
import {fetchUser} from '../../actions/user_actions';

const mapStateToProps = state => ({
    transaction: {
        amount: '',
        body: '',
        payer_id: '',
        recipient_id: '',
        created_at: '',
    },
    username: state.ui.modalUserReducer.username,
    currentUserId: state.session.id,
    allUsers: Object.values(state.entities.user),
    transactionErrors: state.errors.transactionErrors
})

const mapDispatchToProps = dispatch => ({
    createTransaction: transaction => dispatch(createTransaction(transaction)),
    closeModal: () => dispatch(closeModal()),
    fetchAllTransactions: () => dispatch(fetchAllTransactions()),
    fetchUser: user => dispatch(fetchUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);