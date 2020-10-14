import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import ListItemLink from "../../UI/ListItemLink/ListItemLink";
import {HowToReg, LockOpen} from "@material-ui/icons";

const drawerWidth = 240;
const useStyles = makeStyles(() => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#FFFFE0',
    },
    drawerContainer: {
        overflow: 'auto',

    }
}));

export default function DrawerMenu({isAuthenticated}) {
    const classes = useStyles();

    let links = (
        <React.Fragment>
            <ListItemLink button component={Link} to="/sign-in" primary="Sign In" icon={ <LockOpen /> }/>
            <ListItemLink button component={Link} to="/sign-up" primary="Sign Up" icon={ <HowToReg /> }/>
        </React.Fragment>
    );

    if (isAuthenticated) {
        links = (
            <React.Fragment>
                <ListItemLink button component={Link} to="/" primary="Profile" icon={ <HomeIcon /> }/>
                <ListItemLink button component={Link} to="/messages" primary="Messages" icon={ <MailIcon /> }/>
                <ListItemLink button component={Link} to="/contacts" primary="Contacts" icon={ <ContactMailIcon /> }/>
                <ListItemLink button component={Link} to="/settings" primary="Settings" icon={ <SettingsIcon /> }/>
                <Divider />
                <ListItemLink button component={Link} to="/logout" primary="Log Out" icon={ <ExitToAppIcon /> }/>
            </React.Fragment>
        )
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}>
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>{links}</List>
            </div>
        </Drawer>
    );
}
