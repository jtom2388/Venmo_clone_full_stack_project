import {connect} from 'react-redux';
import { createTransaction } from '../../actions/transactions_actions';
import TransactionForm from './transaction_form';

const mapStateToProps = state => ({
    transaction: {
        amount: '',
        body: '',
        payer_id: '',
        recipient_id: ''
    }
})

const mapDispatchToProps = dispatch => ({
    createTransaction: transaction => dispatch(createTransaction(transaction))
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);