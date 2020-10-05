import React from 'react'
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box, Paper} from "@material-ui/core"
import Navbar from "./Navbar";
import SendIcon from "@material-ui/icons/Send";

const InputField = withStyles({
    root: {
        "& label.Mui-focused" : {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root" : {
            "& fieldset" : {
                borderColor: "tan",
            },
            "&:hover fieldset" : {
                borderColor: "tan",
            },
            "& .Mui-focused fieldset": {
                borderColor: "tan",
            },
        },

    },
    
})(TextField);

const useStyles = makeStyles({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
        
    },
    subtitle: {
        color: "#0ABAB5"
    },
    button: {
        marginTop: "1rem",
        color: "#0ABAB5",
        borderColor: "#0ABAB5"
        
    }

});


const Contact = () => {
    const classes = useStyles();
    return (
        
       <Box component="div">
            <Navbar />
           <Grid container justify="center">
               <Box component="form" className={classes.form}>
                   <Typography className={classes.subtitle}variant="h5">
                       Hire or contact me
                   </Typography>
                   <InputField 
                   fullWidth={true} 
                   label="Name" 
                   variant="outlined" 
                   margin="dense"
                   size="medium" 
                   inputProps={{style: { color: "white" }}}/>
                   <br />
                   <InputField fullWidth={true} 
                   label="Email" 
                   variant="outlined" 
                   margin="dense"
                   size="medium" 
                   inputProps={{style: { color: "white" }}}/>
                   
                   <br />
                   <InputField 
                   fullWidth={true} 
                   label="Company Name" 
                   variant="outlined" 
                   margin="dense"
                   size="medium" 
                   inputProps={{style: { color: "white" }}}
                   margin="dense"
                   size="medium"
                   />
                   <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />} >Contact me</Button>
                   
               </Box>

           </Grid>
       </Box>
    )
}

export default Contact;
