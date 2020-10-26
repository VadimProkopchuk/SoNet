import React from 'react';
import { useHistory } from "react-router-dom";
import {Button} from "primereact/button";

const Success = () => {
    const history = useHistory();
    const goToLogin = () => history.push('/sign-in');

    return (
        <div className="p-fluid">
            <div className="p-field">
                <p>You will get an email with further instructions.</p>
            </div>
            <div className="p-d-flex p-justify-end">
                <Button
                    type="button"
                    label="Login"
                    classes="p-button"
                    onClick={() => goToLogin()}
                />
            </div>
        </div>
    );
}

export default Success;
