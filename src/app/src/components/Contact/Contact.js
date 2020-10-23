import React from "react";
import { useHistory } from "react-router-dom";
import {Card} from "primereact/card";
import {Button} from "primereact/button";

export default function Contact({ user }) {
    const history = useHistory();
    const openProfile = () => {
        history.push("/" + user.id);
    }

    const header = (
        <img alt={user.full_name} src={user.avatarUrl} />
    );
    const footer = (
        <div className="p-d-flex p-justify-center">
            <Button label="Message" icon="pi pi-comment" />
        </div>
    );

    return (
        <Card
            title={user.full_name}
            className="ui-card-shadow"
            footer={footer}
            header={header}
            onClick={openProfile}>
        </Card>
    )
}
