import {FETCH_ALL_CONTACTS, UPDATE_CURRENT_USER} from "./actionTypes";
import userApiClient from "../../clients/user/userApiClient";
import usersApiClient from "../../clients/users/usersApiClient";

export function getCurrentUser() {
    return async dispatch => {
        const response = await userApiClient.getCurrent();
        dispatch(updateCurrentUser(response.data));
    }
}

export function updateCurrentUser(user) {
    return {
        type: UPDATE_CURRENT_USER,
        user
    }
}

export function fetchAllContacts() {
    return async dispatch => {
        const response = await usersApiClient.getAll();
        dispatch(fetchAllContactsSuccess(response.data));
    }
}

export function fetchAllContactsSuccess(contacts) {
    return {
        type: FETCH_ALL_CONTACTS,
        contacts
    }
}

