import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({

    timeLine: {
        position: "relative",
        padding: "1ream",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"

            }
        }
    },
    timeLimeItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#0ABAB5 #0ABAB5 transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #0ABAB5 #0ABAB5"
            }

        }

    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "#0ABAB5",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            }

        }

    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"

    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    },
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience
              </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLimeItem}`}>2020
                   </Typography>
                    <Box component="div" className={classes.timeLimeItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}>
                            Quality Engineer III
                      </Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            style={{ color: "tomato" }}>
                            Company: Grainger
                      </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            <p> Participating in Agile ceremonies like Daily Scrum, Story Grooming and Retro.</p>
                            <p>Working with BA and TPM to prioritize stories in Jira.</p>
                            <p>Identifying test scenarios, preparing test data, documenting test results and
                             maintaining Regression test cases.</p>
                            <p>Practicing the technique of buddy testing with the developers in their local
                            environment to identify any issues at very early stages of development to
                            improve the throughput of the team.</p>
                            <p>Practicing the technique of buddy testing with the developers in their local
                            environment to identify any issues at very early stages of development to
                            improve the throughput of the team.</p>
                            <p>Extensively Using SoapUI to verify REST and SOAP based web services.</p>
                            <p>Working with cross functional team for integration and end to end testing.</p>

                            <p>Automating Regression test cases using Selenium Web Driver and TestNG.</p>
                            <p>Working with Dynatrace and Splunk as performance monitoring tool.</p>
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLimeItem}`}>2018
                   </Typography>
                    <Box component="div" className={classes.timeLimeItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}>
                            QA Engineer (Consultant)
                      </Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            style={{ color: "tomato" }}>
                            Client: Risk Management Solutions of America
                      </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            <p>Writing Test Plan, Test Scenarios, Test Cases and Test Matrix documents
                            analyzing the Use Cases and updating the Traceability Matrix to check the
                            coverage analysis.</p>
                            <p>Analyzing the Healthcare Claims EDI 837I and 837P files and modifying them
                            appropriately to create different test data scenarios to validate various business
                            rules of the application.</p>
                            <p>Experienced in Data transformation and Data flow validation of the inbound EDI
                            transactions from various providers into the staging server via SFTP or directly
                            from the Application Portal.</p>
                            <p>Have worked with edit codes to validate HIPAA compliance of the application.</p>
                            <p>Experienced in working with Secured FTP client and SQL Database.</p>
                        
                      </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLimeItem}`}>2017
                   </Typography>
                    <Box component="div" className={classes.timeLimeItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}>
                            
                      </Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            style={{ color: "tomato" }}>
                          
                      </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            
                      </Typography>
                    </Box>
                </Box>
            </Box>

        </>
    );
};

export default Resume
