export const fetchAllUsers = () => {
    return $.ajax({
        url: `/api/users`,
        method: 'GET'
    })
}

export const updatePayer = username => {
    return $.ajax({
        url: `/api/users/${username}`,
        method: 'GET',
        data: { user: username }
    })
}

export const updateRecipient = recipient => {
    return $.ajax({
        url: `/api/users/${recipient.id}`,
        method: 'PATCH',
        data: { recipient }
    })
}