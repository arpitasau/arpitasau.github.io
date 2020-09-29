import React from 'react';
import {makeStyles} from "@material-ui/core/styles";s
import Navbar from "./Navbar";
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

function Portfolio() {
    return (
        <Box component="div">
            <Navbar />
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={8} md={6}>
                <Card>
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
                                
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            
       </Box >
        
    )
}

export default Portfolio
