
export const fetchTransactions = () => {
    return $.ajax({
        url:`/api/transactions`,
        method: 'GET'
    })
}

// export const fetchTransaction = transactionId => {
//     return $.ajax({
//         url: `/api/transactions/${transactionId}`,
//         method: 'GET'
//     })
// }

export const createTransaction = transaction => {
    return $.ajax({
        url: `/api/transactions`,
        method: 'POST',
        data: { transaction }
    })
}

