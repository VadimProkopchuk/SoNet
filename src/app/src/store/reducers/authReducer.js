import {AUTH_LOGOUT, UPDATE_TOKEN} from "../actions/actionTypes";

const initialState = {
    token: null
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

        default: return state;
    }
}
