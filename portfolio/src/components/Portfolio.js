import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import project1 from "../images/codequiz.png";

import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core/";
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles({
    mainContainer: {
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    }

})

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project1"
                                height="140"
                                image={project1}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    agggjjkjkjjsjkjc jjcjjcj jkkkkjcjcj bvshjjhshchbhbas vhhcjhbbchbcb bhjbcbhbhcbb hbjcjbhbcjkbbjkc   c cbcbcbbcbjc.

                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    share
                            </Button>
                                <Button size="small" color="primary">
                                    live
                            </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project1"
                                    height="140"
                                    image={project1}
                                >
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 1
                            </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        agggjjkjkjjsjkjc jjcjjcj jkkkkjcjcj bvshjjhshchbhbas vhhcjhbbchbcb bhjbcbhbhcbb hbjcjbhbcjkbbjkc   c cbcbcbbcbjc.

                            </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        share
                            </Button>
                                    <Button size="small" color="primary">
                                        live
                            </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project1"
                                height="140"
                                image={project1}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    agggjjkjkjjsjkjc jjcjjcj jkkkkjcjcj bvshjjhshchbhbas vhhcjhbbchbcb bhjbcbhbhcbb hbjcjbhbcjkbbjkc   c cbcbcbbcbjc.

                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    share
                            </Button>
                                <Button size="small" color="primary">
                                    live
                            </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project1"
                                    height="140"
                                    image={project1}
                                >
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 1
                            </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        agggjjkjkjjsjkjc jjcjjcj jkkkkjcjcj bvshjjhshchbhbas vhhcjhbbchbcb bhjbcbhbhcbb hbjcjbhbcjkbbjkc   c cbcbcbbcbjc.

                            </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        share
                            </Button>
                                    <Button size="small" color="primary">
                                        live
                            </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project1"
                                height="140"
                                image={project1}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    agggjjkjkjjsjkjc jjcjjcj jkkkkjcjcj bvshjjhshchbhbas vhhcjhbbchbcb bhjbcbhbhcbb hbjcjbhbcjkbbjkc   c cbcbcbbcbjc.

                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    share
                            </Button>
                                <Button size="small" color="primary">
                                    live
                            </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project1"
                                    height="140"
                                    image={project1}
                                >
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 1
                            </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        agggjjkjkjjsjkjc jjcjjcj jkkkkjcjcj bvshjjhshchbhbas vhhcjhbbchbcb bhjbcbhbhcbb hbjcjbhbcjkbbjkc   c cbcbcbbcbjc.

                            </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        share
                            </Button>
                                    <Button size="small" color="primary">
                                        live
                            </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project1"
                                height="140"
                                image={project1}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    agggjjkjkjjsjkjc jjcjjcj jkkkkjcjcj bvshjjhshchbhbas vhhcjhbbchbcb bhjbcbhbhcbb hbjcjbhbcjkbbjkc   c cbcbcbbcbjc.

                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    share
                            </Button>
                                <Button size="small" color="primary">
                                    live
                            </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project1"
                                    height="140"
                                    image={project1}
                                >
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 1
                            </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        agggjjkjkjjsjkjc jjcjjcj jkkkkjcjcj bvshjjhshchbhbas vhhcjhbbchbcb bhjbcbhbhcbb hbjcjbhbcjkbbjkc   c cbcbcbbcbjc.

                            </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        share
                            </Button>
                                    <Button size="small" color="primary">
                                        live
                            </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            

        </Box >

    )
}

export default Portfolio
