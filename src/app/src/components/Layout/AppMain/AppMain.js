import React from "react";
import classes from "./AppMain.module.css";
import "./AppMain.css";
import {Redirect, Route, Switch} from "react-router-dom";
import {Contacts, Messages, NotFound, Profile, Settings, SignIn, SignUp} from "../../../pages";
import SideMenu from "../SideMenu";
import Logout from "../../Logout/Logout";
import Tests from "../../../pages/Tests/Tests";
import {ScrollPanel} from "primereact/scrollpanel";

const AppMain = ({isAuthenticated}) => {
    if (!isAuthenticated) {
        return (
            <Switch>
                <Route path="/sign-in" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <Redirect to={'/sign-in'} />
            </Switch>
        );
    }

    return (
        <React.Fragment>
            <div className={classes.SideMenuContainer + " p-col-2"}>
                <SideMenu />
            </div>

            <div className="p-offset-2 p-col-10">
                <ScrollPanel className={classes.CustomBar}>
                    <Switch>
                        <Route exact path="/" component={Profile}/>
                        <Route path="/messages" component={Messages}/>
                        <Route path="/contacts" component={Contacts}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/sign-in" component={SignIn}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/tests" component={Tests}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </ScrollPanel>
            </div>
        </React.Fragment>
    );
}

export default AppMain;
