import React from "react";
import {connect} from "react-redux";
import { auth } from '../../store/actions/authActions';
import Redirect from "react-router-dom/es/Redirect";

const SignIn = ({isAuthenticated, auth}) => {
    if (isAuthenticated) {
        return (
            <Redirect to={'/'} />
        )
    }

    return (
        <React.Fragment>
            <p>Click!</p>
            <button onClick={() => auth()}>Sign In</button>
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
