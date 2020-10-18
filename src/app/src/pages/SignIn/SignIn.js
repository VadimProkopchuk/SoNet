import React, {useState} from "react";
import {connect} from "react-redux";
import { auth } from '../../store/actions/authActions';
import { Redirect } from "react-router-dom";

const SignIn = ({isAuthenticated, auth}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    if (isAuthenticated) {
        return (
            <Redirect to={'/'} />
        )
    }


    return (
        <React.Fragment>
            <div>
                <p>Login</p>
                <input type="text" onChange={e => setLogin(e.target.value)} value={login} />
            </div>
            <div>
                <p>Password:</p>
                <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
            </div>
            <p>
                <button onClick={() => auth(login, password)}>Sign In</button>
            </p>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
    auth: (email, password) => dispatch(auth(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
