import { connect } from 'react-redux';
import { fetchAllTransactions } from '../../actions/transactions_actions';
import TransactionIndex from './transaction_index';
import { fetchUser } from '../../actions/user_actions'

const mapStateToProps = state => ({
    transactions: Object.values(state.entities.transactions),
    currentUser: state.entities.users[state.session.id],
    users: Object.values(state.entities.user)
})

const mapDispatchToProps = dispatch => ({
    fetchAllTransactions: () => dispatch(fetchAllTransactions())
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionIndex);