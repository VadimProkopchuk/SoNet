import React from 'react';
import { useHistory } from "react-router-dom";
import classes from "./AppHeader.module.css";
import {Button} from "primereact/button";

const AppHeader = ({isAuthenticated}) => {
    const history = useHistory();
    const routes = {
        toMain: () => history.push('/'),
        toSignIn: () => history.push('/sign-in'),
        toSignUp: () => history.push('/sign-up'),
        toSignOut: () => history.push('/logout')
    }

    const renderButtons = () => {
        if (isAuthenticated) {
            return (
                <Button label="Sign Out"
                        className="p-button-text p-button m-mr-3"
                        icon="pi pi-sign-out"
                        onClick={() => routes.toSignOut()}
                />
            )
        }

        return (
            <React.Fragment>
                <Button label="Sign In"
                        className="p-button-text p-button m-mr-3"
                        icon="pi pi-sign-in"
                        onClick={() => routes.toSignIn()}
                />
                <Button label="Sign Up"
                        className="p-button-text p-button"
                        icon="pi pi-user"
                        onClick={() => routes.toSignUp()}
                />
            </React.Fragment>
        )
    }

    return (
        <div className={"p-d-flex " + classes.TopBar}>
            <div className="p-col-2 p-d-flex p-justify-center p-align-center">
                <img alt="logo" src={process.env.PUBLIC_URL + '/static/images/logo/logo.jpg'} height="50" className="p-mr-2"/>
                <Button label="SoNet Application"
                        className="p-button-text p-button"
                        onClick={() => routes.toMain()}
                />
            </div>
            <div className="p-col-10 p-d-flex p-justify-end">
                {renderButtons()}
            </div>
        </div>
    );
};

export default AppHeader;
