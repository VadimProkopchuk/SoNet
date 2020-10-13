import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";


const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar} style={{backgroundColor: "#90EE90"}}>
            <Toolbar>
                <CardMedia
                    component="img"
                    style={{
                        borderRadius: '2px',
                        width: '120px',
                        height: '55px',
                        marginLeft: '15px'
                    }}
                    image="/static/images/logo/logo.jpg"
                    title="Contemplative Reptile"
                />

            </Toolbar>
        </AppBar>
    );
}
