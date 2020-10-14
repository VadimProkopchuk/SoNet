import React from "react";
import { Switch, Route } from "react-router-dom";
import {Profile, Settings, Messages, Contacts, NotFound, SignIn} from "../../pages";
import Logout from "../Logout/Logout";
import Redirect from "react-router-dom/es/Redirect";

export default ({isAuthenticated}) => {
    let routes = (
        <Switch>
            <Route exact path="/" component={Profile} />
            <Route path="/messages" component={Messages} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/settings" component={Settings} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/logout" component={Logout} />
            <Route path="*" component={NotFound} />
        </Switch>
    );

    if (!isAuthenticated) {
        routes = (
            <Switch>
                <Route path="/sign-in" component={SignIn} />
                <Redirect to={'/sign-in'} />
            </Switch>
        );
    }

    return routes;
}
