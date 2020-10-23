import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {Button} from "primereact/button";

const SideMenu = () => {
    const history = useHistory();
    const location = useLocation();
    const routes = [
        { name: "Profile", location: "/", icon: "pi pi-home" },
        { name: "Messages", location: "/messages", icon: "pi pi-comments" },
        { name: "Contacts", location: "/contacts", icon: "pi pi-users" },
        { name: "Settings", location: "/settings", icon: "pi pi-sliders-h" },
        { name: "Tests", location: "/tests", icon: "pi pi-circle-on" },
    ];

    return (
        <div className="p-d-flex p-dir-col p-text-left">
            {
                routes.map(route => {
                    const classList = [
                        "p-button-text",
                        "p-text-left",
                        route.location === location.pathname
                            ? "p-button"
                            : "p-button-plain"
                    ];

                    return (
                        <Button key={route.location}
                                icon={route.icon}
                                label={route.name}
                                className={classList.join(" ")}
                                onClick={() => history.push(route.location)}
                        />
                    );
                })
            }
        </div>
    )
}

export default SideMenu;
