import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

const tileData = [
    {
        img: '/static/images/photos/breakfast.jpg',
        cols: 2
    },
    {
        img: '/static/images/photos/burgers.jpg',
        cols: 1
    },
    {
        img: '/static/images/photos/camera.jpg',
        cols: 1,
    },
    {
        img: '/static/images/photos/hats.jpg',
        cols: 1,
    },
    {
        img: '/static/images/photos/morning.jpg',
        cols: 1,
    },
]

export default () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="260"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                        ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Write Message
                                </Button>
                                <Button size="small" color="primary">
                                    Add to Contacts
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Contacts
                                    </Typography>

                                    <Avatar alt="Vadim Prokopchuk"/>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Public Information
                                </Typography>
                                <Typography variant="body2" component="p">
                                    I love Dianka
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Photos
                                </Typography>
                                <div className={classes.root}>
                                    <GridList cols={3}>
                                        {tileData.map((tile) => (
                                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                                <img src={tile.img} alt="Test1" />
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe">
                                        D
                                    </Avatar>
                                }
                                title="Dianka Levchenko"
                                subheader="September 14, 2020"
                            />
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/paella.jpg"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}
