
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

export const updatePayer = payer => {
    return $.ajax({
        url: `/api/users/${payer.id}`,
        method: 'PATCH',
        data: { payer }
    })
}

export const updateRecipient = recipient => {
    return $.ajax({
        url: `/api/users/${recipient.id}`,
        method: 'PATCH',
        data: { recipient }
    })
}