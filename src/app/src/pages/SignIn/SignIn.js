import React, {useState} from "react";
import {connect} from "react-redux";
import { auth } from '../../store/actions/authActions';
import Redirect from "react-router-dom/es/Redirect";

const SignIn = ({isAuthenticated, auth}) => {
    const [login, setLogin] = useState('');


    if (isAuthenticated) {
        return (
            <Redirect to={'/'} />
        )
    }


    return (
        <React.Fragment>
            <p>Click!</p>
            <input onChange={e => setLogin(e.target.value)} value={login} />
            <button onClick={() => auth(login)}>Sign In</button>
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
