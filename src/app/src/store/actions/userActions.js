import {UPDATE_CURRENT_USER} from "./actionTypes";
import userApiClient from "../../http/user/userApiClient";

export function getCurrentUser() {
    return async dispatch => {
        const response = await userApiClient.getCurrent();
        const user = response.data;

        dispatch(updateCurrentUser(user));
    }
}

export function updateCurrentUser(user) {
    return {
        type: UPDATE_CURRENT_USER,
        user
    }
}
