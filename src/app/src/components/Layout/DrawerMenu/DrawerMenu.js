import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import ListItemLink from "../../UI/ListItemLink/ListItemLink";

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
                    <ListItemLink button component={Link} to="/" primary="Profile" icon={ <HomeIcon /> }/>
                    <ListItemLink button component={Link} to="/messages" primary="Messages" icon={ <MailIcon /> }/>
                    <ListItemLink button component={Link} to="/contacts" primary="Contacts" icon={ <ContactMailIcon /> }/>
                    <ListItemLink button component={Link} to="/settings" primary="Settings" icon={ <SettingsIcon /> }/>

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
