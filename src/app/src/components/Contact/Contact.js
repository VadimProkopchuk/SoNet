import React from "react";
import { useHistory } from "react-router-dom";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import CircleAvatar from "../UI/CircleAvatar/CircleAvatar";

export default function Contact({ user }) {
    const history = useHistory();
    const openProfile = () => {
        history.push("/profile/" + user.id);
    }

    const header = (
        <div className="p-d-flex">
            <CircleAvatar src={user.avatarUrl} alt={user.full_name} size={'4rem'} />
            <Button label={user.full_name} className="p-button p-button-text p-text-left" onClick={openProfile} />
        </div>
    );
    const footer = (
        <div className="p-d-flex p-justify-around">
            <Button icon="pi pi-user" className="p-button-rounded p-button-info" onClick={openProfile} />
            <Button icon="pi pi-times" className="p-button-rounded p-button-danger" />
            <Button icon="pi pi-check" className="p-button-rounded" />
        </div>
    );

    return (
        <Card
            className="ui-card-shadow"
            footer={footer}
            header={header}
            onClick={openProfile}>
        </Card>
    )
}
