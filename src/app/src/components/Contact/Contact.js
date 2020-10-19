import React from "react";
import { useHistory } from "react-router-dom";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

export default function Contact({ user }) {
    const history = useHistory();
    const openProfile = () => {
        history.push("/" + user.id);
    }

    return (
        <Card>
            <CardActionArea onClick={openProfile}>
                <CardMedia
                    component="img"
                    alt={user.full_name}
                    height="200"
                    image={user.avatarUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h4">
                        {user.full_name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" fullWidth>
                    Message
                </Button>
            </CardActions>
        </Card>
    )
}
