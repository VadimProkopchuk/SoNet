import CssBaseline from "@material-ui/core/CssBaseline";
import AppHeader from "./AppHeader/AppHeader";
import DrawerMenu from "./DrawerMenu/DrawerMenu";
import Toolbar from "@material-ui/core/Toolbar";
import Routes from "./Routes";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppHeader />
            <DrawerMenu />
            <main className={classes.content}>
                <Toolbar />
                <Routes />
            </main>
        </div>
    );
}
