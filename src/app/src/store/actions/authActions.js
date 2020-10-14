import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes";

export function auth(email, password) {
    return async dispatch => {
        // todo: connect to API

        console.log('auth dispatch')

        const token = '123';
        const expiresIn = 600;

        localStorage.setItem('token', token);
        localStorage.setItem('expiresIn', new Date(new Date().getTime() + expiresIn*1000).toISOString())

        dispatch(authSuccess(token));
        dispatch(autoLogout(expiresIn));
    }
}

export function authSuccess(token) {
    return {
        token,
        type: AUTH_SUCCESS
    }
}

export function autoLogout(expiresIn) {
    return dispatch => {
        setTimeout(() => dispatch(logout()), expiresIn * 1000)
    }
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    return {
        type: AUTH_LOGOUT
    }
}


