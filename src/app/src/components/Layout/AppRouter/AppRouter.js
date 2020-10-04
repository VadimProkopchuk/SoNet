import React from "react";
import { Switch, Route } from "react-router-dom";
import { ProfilePage, SettingsPage, MessagesPage, ContactsPage, NotFoundPage } from "../../../pages";

export default class AppRouter extends React.Component {
    render() {
        return  (
            <Switch>
                <Route exact path="/" component={ProfilePage} />
                <Route path="/messages" component={MessagesPage} />
                <Route path="/contacts" component={ContactsPage} />
                <Route path="/settings" component={SettingsPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        );
    }
}
