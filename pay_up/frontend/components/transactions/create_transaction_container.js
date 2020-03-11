import {connect} from 'react-redux';
import { createTransaction } from '../../actions/transactions_actions';
import TransactionForm from './transaction_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import {fetchAllTransactions} from '../../actions/transactions_actions'

const mapStateToProps = state => ({
    transaction: {
        amount: '',
        body: '',
        payer_id: '',
        recipient_id: ''
    },
    username: state.ui.modalUserReducer.username,
    currentUserId: state.session.id,
    users: Object.values(state.entities.user)
})

const mapDispatchToProps = dispatch => ({
    createTransaction: transaction => dispatch(createTransaction(transaction)),
    closeModal: () => dispatch(closeModal()),
    fetchAllTransactions: () => dispatch(fetchAllTransactions())
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);