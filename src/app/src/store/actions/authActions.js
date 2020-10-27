import {AUTH_LOADING, AUTH_LOGOUT, UPDATE_TOKEN} from "./actionTypes";
import storage from "../../storage";
import accountApiClient from "../../clients/account/accountApiClient";
import {getCurrentUser} from "./userActions";

export function auth(email, password) {
    return async dispatch => {
        dispatch(authLoading(true));
        const response = await accountApiClient.auth(email, password);
        const token = response.data.token;
        const expiresIn = response.data.expiresIn;
        const expirationDate = new Date(new Date().getTime() + expiresIn*1000).toISOString();

        storage.token.set(token);
        storage.expirationDate.set(expirationDate);

        dispatch(authSuccess(token, expiresIn));
    }
}

export function authLoading(isLoading) {
    return {
        type: AUTH_LOADING,
        isLoading
    }
}

export function authSuccess(token, expiresIn) {
    return dispatch => {
        dispatch(authLoading(false));
        dispatch(autoLogout(expiresIn));
        dispatch(updateToken(token));
        dispatch(getCurrentUser());
    }
}

export function updateToken(token) {
    return {
        token,
        type: UPDATE_TOKEN
    }
}

export function autoAuth() {
    return dispatch => {
        const token = storage.token.get();
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(storage.expirationDate.get());
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const expiresIn = (expirationDate.getTime() - new Date().getTime()) / 1000;
                dispatch(authSuccess(token, expiresIn));
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
    storage.token.remove();
    storage.expirationDate.remove();

    return {
        type: AUTH_LOGOUT
    }
}


