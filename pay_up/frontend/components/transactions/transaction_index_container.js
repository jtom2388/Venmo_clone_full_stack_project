import { connect } from 'react-redux';
import { fetchAllTransactions } from '../../actions/transactions_actions';
import TransactionIndex from './transaction_index';

const mapStateToProps = state => ({
    transactions: Object.values(state.entities.transactions)
})

const mapDispatchToProps = dispatch => ({
    fetchAllTransactions: () => dispatch(fetchAllTransactions())
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionIndex);