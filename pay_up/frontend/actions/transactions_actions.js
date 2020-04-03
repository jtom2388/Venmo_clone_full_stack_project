import * as TransactionAPIUtil from '../util/transaction_util';

export const RECEIVE_ALL_TRANSACTIONS = 'RECEIVE_ALL_TRANSACTIONS';
export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS';

const receiveAllTransactions = transactions => ({
    type: RECEIVE_ALL_TRANSACTIONS,
    transactions
})

const receiveTransaction = transaction => ({
    type: RECEIVE_TRANSACTION,
    transaction
})

const receiveTransactionErrors = transactionErrors => ({
    type: RECEIVE_TRANSACTION_ERRORS,
    transactionErrors
})

export const fetchAllTransactions = () => dispatch => (
    TransactionAPIUtil.fetchTransactions().then(
        transactions => dispatch(receiveAllTransactions(transactions))
    )
)

export const createTransaction = transaction => dispatch => (
    TransactionAPIUtil.createTransaction(transaction).then(
        transaction => dispatch(receiveTransaction(transaction)),
        transactionErrors => dispatch(receiveTransactionErrors(transactionErrors.responseJSON))
    )
)

