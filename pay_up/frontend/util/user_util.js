export const fetchAllUsers = () => {
    return $.ajax({
        url: `/api/users`,
        method: 'GET'
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