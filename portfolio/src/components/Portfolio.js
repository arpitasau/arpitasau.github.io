import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import codeQuiz from "../images/codequiz.png";
import project2 from "../images/project2.png";
import weather from "../images/weather.png";
import rentsocial from "../images/rentsocial.png";
import notetaker from "../images/notetaker.png";
import workschedular from "../images/workschedular.png";

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
                                alt="codeQuiz"
                                height="200"
                                image={codeQuiz}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Code Quiz
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A timed quiz application allows the user to play quiz, view and save the score

                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary"><a href="https://arpitasau.github.io/homework-code-quiz/" target="_blank" class="btn btn-primary">Try it
              out</a>
                                </Button>
                                <Button size="small" color="primary">
                                    <a href="https://github.com/arpitasau/homework-code-quiz" target="_blank" class="btn btn-primary">See Source
              Code</a>
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
                                height="200"
                                image={project2}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Travel and Style(Group Project)
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Full stack application that suggests outfit based on weather

                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="https://evening-oasis-14753.herokuapp.com/" target="_blank" class="button">Try it
              out</a>
                                </Button>
                                <Button size="small" color="primary" ><a href="https://github.com/kairora/travel-n-style" target="_blank" class="btn btn-primary">See Source
              Code</a>

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
                                alt="weather"
                                image={weather}
                                height="200"
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Weather Dashboard
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Weather Dashboard to view the real time weather of any given city in the US

                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="https://arpitasau.github.io/homework-weather-dashboard/" target="_blank"
                                        class="btn btn-primary">Try it out</a>
                                </Button>
                                <Button size="small" color="primary">
                                    <a href="https://github.com/arpitasau/homework-weather-dashboard" target="_blank"
                                        class="btn btn-primary">See Source Code</a>
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
                                height="200"
                                image={rentsocial}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Rent Social(Group Project)
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Website to find rental listings and view nearby events

                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="https://cd-prog.github.io/RentSocial/" target="_blank" class="btn btn-primary">Try it out</a>
                                </Button>
                                <Button size="small" color="primary">
                                    <a href="https://github.com/CD-prog/RentSocial" target="_blank" class="btn btn-primary">See Source Code</a>
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
                                height="200"
                                image={workschedular}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Work Schedular
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A fun application that help users to schedule their work-day

                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="https://arpitasau.github.io/homework-work-schedular/" target="_blank" class="btn btn-primary">Try
              it out</a>
                                </Button>
                                <Button size="small" color="primary">
                                    <a href="https://github.com/arpitasau/homework-work-schedular" target="_blank" class="btn btn-primary">See
              Source Code</a>
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
                                height="200"
                                image={notetaker}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Note Taker
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Full Stack Note Taker Application

                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href="https://nameless-gorge-85230.herokuapp.com/" target="_blank" class="btn btn-primary">Try
              it out</a>
                                </Button>
                                <Button size="small" color="primary">
                                    <a href="https://github.com/arpitasau/note-taker" target="_blank" class="btn btn-primary">See
              Source Code</a>
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
