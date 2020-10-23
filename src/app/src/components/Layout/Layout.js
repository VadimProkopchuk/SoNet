import React, {useEffect} from "react";
import {connect} from "react-redux";

import classes from "./Layout.module.css";

import AppHeader from "./AppHeader/AppHeader";
import {autoAuth} from "../../store/actions/authActions";
import AppMain from "./AppMain/AppMain";

const Layout = ({autoAuth, isAuthenticated}) => {
    useEffect(() => {
        autoAuth();
    })

    return (
        <div >
            <AppHeader isAuthenticated={isAuthenticated}/>
            <main className={classes.Main + " p-d-flex"}>
                <AppMain isAuthenticated={isAuthenticated} />
            </main>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.token
    }
}

const mapDispatchToProps = (dispatch) => ({
    autoAuth: () => dispatch(autoAuth())
});


export default connect(mapStateToProps, mapDispatchToProps)(Layout);

