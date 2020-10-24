import {CHANGE_LOADING_USER_PROFILE, SET_USER_PROFILE} from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    userProfile: null
};

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LOADING_USER_PROFILE: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.profile
            }
        }

        default: return state;
    }
}
