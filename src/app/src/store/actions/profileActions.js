import {CHANGE_LOADING_USER_PROFILE, SET_USER_PROFILE} from "./actionTypes";
import usersApiClient from "../../clients/users/usersApiClient";

export function fetchUserProfile(userId) {
    return async dispatch => {
        dispatch(changeLoadingUserProfile(true));
        dispatch(setUserProfile(null));

        const response = await usersApiClient.getById(userId);

        dispatch(fetchUserProfileSuccess(response.data));
    }
}

export function fetchUserProfileSuccess(profile) {
    return dispatch => {
        dispatch(setUserProfile(profile));
        dispatch(changeLoadingUserProfile(false));
    }
}

export function setUserProfile(profile) {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export function changeLoadingUserProfile(isLoading) {
    return {
        type: CHANGE_LOADING_USER_PROFILE,
        isLoading
    }
}
