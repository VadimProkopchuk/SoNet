import CssBaseline from "@material-ui/core/CssBaseline";
import AppHeader from "./AppHeader/AppHeader";
import AppMenu from "./AppMenu/AppMenu";
import Toolbar from "@material-ui/core/Toolbar";
import AppRouter from "./AppRouter/AppRouter";
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
            <AppMenu />
            <main className={classes.content}>
                <Toolbar />
                <AppRouter />
            </main>
        </div>
    );
}
