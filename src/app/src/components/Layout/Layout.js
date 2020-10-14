import CssBaseline from "@material-ui/core/CssBaseline";
import AppHeader from "./AppHeader/AppHeader";
import DrawerMenu from "./DrawerMenu/DrawerMenu";
import Toolbar from "@material-ui/core/Toolbar";
import Routes from "./Routes";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Loyout = ({isAuthenticated}) => {
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

export default connect(mapStateToProps)(Loyout);

