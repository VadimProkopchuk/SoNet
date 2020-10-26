import React, {useState} from 'react';
import {connect} from 'react-redux';
import {nextSignUpStep, prevSignUpStep} from "../../../store/actions/signUpActions";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

const Confirm = (props) => {
    const [code, setCode] = useState('');

    return (
        <div className="p-fluid">
            <div className="p-field">
                <p>Please check your email <i>{props.email}</i> and enter the verification code below to confirm your account.</p>
            </div>
            <div className="p-field">
                <label htmlFor="code">Verification Code:</label>
                <InputText id="code" type="text" onChange={e => setCode(e.target.value)} value={code} autoComplete={'off'} />
            </div>

            <div className="p-field">
                <p>If <i>{props.email}</i> is not your email address, please go back and enter the correct one.</p>
                <p>If you haven't received our email in 15 minutes, please check your spam folder.</p>
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
