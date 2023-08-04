export const userLogin =(profile) => {
    return {
        type: 'user_login',
        payload: profile
    }
}

export const userLogout =() => {
    return {
        type: 'user_logout',
        payload: {}
    }
    }