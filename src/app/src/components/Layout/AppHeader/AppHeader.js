import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    SoNet Application
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
