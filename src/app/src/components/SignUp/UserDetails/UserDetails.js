import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {updateSignUpData} from "../../../store/actions/signUpActions";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

const UserDetails = (props) => {
    const [email, setEmail] = useState(props.email);
    const [password, setPassword] = useState(props.password);
    const nextStep = () => {
        props.updateSignUpData(email, password);
        props.nextStep();
    }

    useEffect(() => {
        props.updateSignUpData('', '');
    })

    return (
        <div className="p-fluid">
            <div className="p-field">
                <label htmlFor="login">Email:</label>
                <InputText id="login" type="text" onChange={e => setEmail(e.target.value)} value={email} autoComplete={'off'} />
            </div>
            <div className="p-field">
                <label htmlFor="password">Password:</label>
                <InputText id="password" type="password" onChange={e => setPassword(e.target.value)} value={password} autoComplete={'off'}/>
            </div>
            <div className="p-d-flex p-justify-end">
                <Button
                    type="button"
                    label="Create Account"
                    classes="p-button"
                    onClick={() => nextStep()}
                />
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
        updateSignUpData: (email, password) => dispatch(updateSignUpData(email, password)),
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
