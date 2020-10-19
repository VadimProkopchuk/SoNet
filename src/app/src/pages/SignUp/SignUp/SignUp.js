import React, {useEffect} from "react";
import { connect } from "react-redux";

import UserDetails from "../UserDetails/UserDetails";
import PersonalDetails from "../PersonalDetails/FormPersonalDetails";
import Confirm from "../Confirm/Confirm";
import Success from "../Success/Success";
import {nextSignUpStep, prevSignUpStep, resetSignUp} from "../../../store/actions/signUpActions";

const SignUp = (props) => {
    useEffect(() => {
        props.resetStep();
    }, [props.resetStep]);

    switch (props.step) {
        case 1:
            return (
                <UserDetails
                    nextStep={props.nextStep}
                />
            );
        case 2:
            return (
                <Confirm
                    nextStep={props.nextStep}
                    prevStep={props.prevStep}
                />
            );
        case 3:
            return (
                <Success
                    prevStep={props.prevStep}
                />
            );
        default: return null;
    }
}

const mapStateToProps = state => {
     return {
         step: state.signUp.step
     }
}

const mapDispatchToProps = dispatch => {
     return {
         nextStep: () => dispatch(nextSignUpStep()),
         prevStep: () => dispatch(prevSignUpStep()),
         resetStep: () => dispatch(resetSignUp()),
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
