import {NEXT_SIGN_UP_STEP, PREV_SIGN_UP_STEP, RESET_SIGN_UP, UPDATE_SIGN_UP_DATA} from "../actions/actionTypes";

const initialState = {
    step: 1,
    email: "",
    password: "",

};

export default function signUpReducer(state = initialState, action) {
    switch (action.type) {
        case NEXT_SIGN_UP_STEP: {
            return {
                ...state,
                step: state.step + 1
            };
        }

        case PREV_SIGN_UP_STEP: {
            return {
                ...state,
                step: state.step - 1
            };
        }

        case RESET_SIGN_UP: {
            return {
                ...initialState,
            };
        }

        case UPDATE_SIGN_UP_DATA: {
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            }
        }
        default: return state;
    }
}
