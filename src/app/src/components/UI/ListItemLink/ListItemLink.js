import React, { useMemo, forwardRef } from "react";

import { Link } from 'react-router-dom';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default ({ icon, primary, to }) => {
    const CustomLink = useMemo(
        () => forwardRef((linkProps, ref) => (<Link ref={ref} to={to} {...linkProps} />)),
        [to],
    );

    return (
        <ListItem button component={CustomLink}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={primary} />
        </ListItem>
    );
}
