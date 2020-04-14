export const fetchAllUsers = () => {
    return $.ajax({
        url: `/api/users`,
        method: 'GET'
    })
}

export const updateImage = formData => {
    return $.ajax({
        url: `/api/users/${formData.get('user[id]')}`,
        method: 'PATCH',
        data: formData,
        contentType: false,
        processData: false
    })
}

export const updatePayer = username => {
    return $.ajax({
        url: `/api/users/${username}`,
        method: 'PATCH',
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
