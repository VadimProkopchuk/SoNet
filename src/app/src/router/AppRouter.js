import React from "react";
import { Switch, Route } from "react-router-dom";
import { ProfilePage, SettingsPage, MessagesPage, ContactsPage, NotFoundPage } from "../pages";

export default () => {
    return  (
        <Switch>
            <Route exact path="/" children={ <ProfilePage /> } />
            <Route path="/messages" children={ <MessagesPage /> } />
            <Route path="/contacts" children={ <ContactsPage /> } />
            <Route path="/settings" children={ <SettingsPage /> } />
            <Route path="*" children={ <NotFoundPage /> } />
        </Switch>
    );
}
