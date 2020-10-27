import {AUTH_LOADING, AUTH_LOGOUT, UPDATE_TOKEN} from "../actions/actionTypes";

const initialState = {
    token: null,
    isLoading: false
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TOKEN: {
            return {
                ...state,
                token: action.token,
            };
        }

        case AUTH_LOGOUT: {
            return {
                ...state,
                token: null
            };
        }

        case AUTH_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }

        default: return state;
    }
}
