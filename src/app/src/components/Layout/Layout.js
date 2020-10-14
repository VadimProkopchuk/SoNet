import CssBaseline from "@material-ui/core/CssBaseline";
import AppHeader from "./AppHeader/AppHeader";
import DrawerMenu from "./DrawerMenu/DrawerMenu";
import Toolbar from "@material-ui/core/Toolbar";
import Routes from "./Routes";
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {autoAuth} from "../../store/actions/authActions";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Layout = ({autoAuth, isAuthenticated}) => {
    useEffect(() => {
        autoAuth();
    })

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppHeader />
            <DrawerMenu isAuthenticated={isAuthenticated} />
            <main className={classes.content}>
                <Toolbar/>
                <Routes isAuthenticated={isAuthenticated} />
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

