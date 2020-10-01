import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Avatar,
    Grid,
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
} from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../arpita.jpg";

//CSS Styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(15),
    },
    title: {
        color: "#0ABAB5"
    },
    subtitle: {
        color: "orange",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        // top: "40%",
        // left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    },
    cardContainer: {
        margin: "5rem auto",
        marginLeft: "5px"
    },



}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box >
            <Grid container>

                <Grid item xs={6} sm={6} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="my pic"
                                image={avatar}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography className={classes.title} variant="h4">
                                    <Typed strings={["Arpita Sau"]} typeSpeed={40} />
                                </Typography>
                                <br />
                                <Typography className={classes.subtitle} variant="h5">
                                    <Typed strings={["Full Stack", "Web Development", "MERN Stack"]} typeSpeed={40}
                                        backSpeed={60}
                                        loop

                                    />

                                </Typography>
                                <Typography color="textSecondary" component="p">
                                    <p>Hi there, this is Arpita K Sau, resident of one of the beautiful suburbs of Chicagoland, Illinois. Friends, colleagues and family knows me as a well-read, hardworking, and  composed person. I am a mom to my 8 years old daughter and a working woman. As a person I prefer to perform in all shoes with complete dedication, passion and try to strike a balance between my roles as a parent and a professional.</p>
                                    <p>I did my Masters in Science, specializing in Botany and then started off as a teacher teaching Chemistry and Biology in high school in India. It has always been my dream or a wish to work in the software industry, so I enrolled myself in a professional course to become a Software Quality and Business Analyst. After passing the course with flying colors I landed a job as a Software Quality Analyst at entry level in one of the renowned software companies in India.</p>
                                    <p>I got married and relocated to the US with my husband. In the US I got certifications to refine my skills to perform better as a Quality Analyst and worked with various US clients as Quality Analyst. Currently, I am working as a Senior Quality Engineer with W.W. Grainger, Chicago, IL.</p>
                                    <p>I have seven years of experience in Software Quality Assurance (Manual and Automation) with extensive knowledge in testing both web based and client server applications. I am well versed
          with various SDLC methodologies like Agile & Waterfall and supporting the testing efforts during the various phases of the project. My expertise is testing SOAP and REST Web Services using SoapUI.</p>
                                    <p>Experienced in data driven testing, cross browser testing and parallel test execution using Selenium WebDriver, TestNG and Selenium Grid.</p>
                                    <p>Now I have taken up a new challenge, yeah… to become a full-stack software developer and would love to see myself as software developer in coming years!!!</p>
                                    <p>If I am not working, my entire time goes in taking care of my family, trying out new recipes, making art and crafts with my daughter and reading…..</p>
                                    <p>This is me in nutshell ……….  </p>
                                    <p>Hit me in any of the below mode of communications if you want to be part of my professional network.</p>




                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

        </Box>


    )
}

export default Header
