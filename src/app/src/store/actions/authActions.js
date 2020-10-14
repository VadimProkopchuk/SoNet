import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes";

export function auth(email, password) {
    return async dispatch => {
        // todo: connect to API

        console.log('auth dispatch')

        const token = '123';
        const expiresIn = 600;

        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', new Date(new Date().getTime() + expiresIn*1000).toISOString())

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

export function autoAuth() {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const expiresIn = (expirationDate.getTime() - new Date().getTime()) / 1000;
                dispatch(authSuccess(token));
                dispatch(autoLogout(expiresIn));
            }
        }
    }
}

export function autoLogout(expiresIn) {
    return dispatch => {
        setTimeout(() => dispatch(logout()), expiresIn * 1000)
    }
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: AUTH_LOGOUT
    }
}


