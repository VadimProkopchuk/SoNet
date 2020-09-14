import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import Divider from "@material-ui/core/Divider";

import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {Button} from "@material-ui/core";

import AppListItemLink from "../AppListItemLink/AppListItemLink";

const drawerWidth = 240;
const useStyles = makeStyles(() => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}>
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    <AppListItemLink button component={Link} to="/" primary="Profile" icon={ <HomeIcon /> }/>
                    <AppListItemLink button component={Link} to="/messages" primary="Messages" icon={ <MailIcon /> }/>
                    <AppListItemLink button component={Link} to="/contacts" primary="Contacts" icon={ <ContactMailIcon /> }/>
                    <AppListItemLink button component={Link} to="/settings" primary="Settings" icon={ <SettingsIcon /> }/>

                    <Divider />

                    <ListItem button>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Log Out'} />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
}