import {NEXT_SIGN_UP_STEP, PREV_SIGN_UP_STEP, RESET_SIGN_UP} from "./actionTypes";

export function nextSignUpStep() {
    return {
        type: NEXT_SIGN_UP_STEP
    };
}

export function prevSignUpStep() {
    return {
        type: PREV_SIGN_UP_STEP
    };
}

export function resetSignUp() {
    return {
        type: RESET_SIGN_UP
    };
}
