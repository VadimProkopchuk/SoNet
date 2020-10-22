import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {connect} from "react-redux";
import { auth } from '../../store/actions/authActions';
import { Redirect } from "react-router-dom";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

const SignIn = ({isAuthenticated, auth}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    if (isAuthenticated) {
        return (
            <Redirect to={'/'} />
        )
    }

    const goToSignUp = () => history.push("/sign-up")

    return (
        <Dialog header="Sign In"
                style={{ width: '40vw' }}
                onHide={() => {}}
                visible={true}
                modal={false}
                closable={false}>
            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor="login">Login:</label>
                    <InputText id="login" type="text" onChange={e => setLogin(e.target.value)} value={login}/>
                </div>
                <div className="p-field">
                    <label htmlFor="password">Password:</label>
                    <InputText id="password" type="password" onChange={e => setPassword(e.target.value)} value={password}/>
                </div>
                <div className="p-field">
                    <Button label="Don't have an account?" className="p-button-info p-button-text" onClick={() => goToSignUp()} />
                </div>
                <div className="p-field">
                    <Button type="button" label="Sign In" onClick={() => auth(login, password)}/>
                </div>
            </div>
        </Dialog>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
    auth: (email, password) => dispatch(auth(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
