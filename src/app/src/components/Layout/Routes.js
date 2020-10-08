import React from "react";
import { Switch, Route } from "react-router-dom";
import { Profile, Settings, Messages, Contacts, NotFound } from "../../pages";

export default class Routes extends React.Component {
    render() {
        return  (
            <Switch>
                <Route exact path="/" component={Profile} />
                <Route path="/messages" component={Messages} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/settings" component={Settings} />
                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}
