import React from 'react';
import {connect} from 'react-redux';
import {nextSignUpStep, prevSignUpStep} from "../../../store/actions/signUpActions";
import {Button} from "primereact/button";

const Confirm = (props) => {
    return (
        <div className="p-fluid">
            <div className="p-field">
                <label className="p-text-bold">Email: <span className="p-text-light">{props.email}</span></label>
            </div>
            <div className="p-field">
                <label className="p-text-bold">Password: <span className="p-text-light">{props.password}</span></label>
            </div>
            <div className="p-d-flex p-justify-between">
                <div className="p-col-4">
                    <Button type="button"
                            label="Edit"
                            classes="p-button p-col-2"
                            icon="pi pi-pencil"
                            onClick={() => props.prevStep()}
                    />
                </div>
                <div className="p-col-4">
                    <Button type="button"
                            label="Confirm"
                            classes="p-button p-col-2"
                            icon="pi pi-check"
                            onClick={() => props.nextStep()}
                    />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        email: state.signUp.email,
        password: state.signUp.password,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        prevStep: () => dispatch(prevSignUpStep()),
        nextStep: () => dispatch(nextSignUpStep()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
