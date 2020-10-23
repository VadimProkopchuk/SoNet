import React, {useEffect} from "react";
import { connect } from "react-redux";
import {nextSignUpStep, prevSignUpStep, resetSignUp} from "../../store/actions/signUpActions";
import {Dialog} from "primereact/dialog";
import UserDetails from "../../components/SignUp/UserDetails/UserDetails";
import Confirm from "../../components/SignUp/Confirm/Confirm";
import Success from "../../components/SignUp/Success/Success";

const SignUp = (props) => {
    useEffect(() => {
        props.resetStep();
    }, [props.resetStep]);

    const currentStepComponent = props.step === 1
        ? ( <UserDetails nextStep={props.nextStep} /> )
        : props.step === 2
            ? ( <Confirm nextStep={props.nextStep} prevStep={props.prevStep} /> )
            : ( <Success prevStep={props.prevStep} /> );

    return (
        <Dialog header="Sign Up"
                style={{ width: '40vw' }}
                onHide={() => {}}
                visible={true}
                modal={false}
                closable={false}>
            {currentStepComponent}
        </Dialog>
    );
}

const mapStateToProps = state => {
     return {
         step: state.signUp.step,
     };
}

const mapDispatchToProps = dispatch => {
     return {
         nextStep: () => dispatch(nextSignUpStep()),
         prevStep: () => dispatch(prevSignUpStep()),
         resetStep: () => dispatch(resetSignUp()),
     };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
