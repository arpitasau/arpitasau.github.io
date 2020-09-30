import React from 'react'
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core"
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
        "&.MuiOutlinedInput-root" : {
            "& fieldset" : {
                borderColor: "tan",
            },
            "&:hover fieldset" : {
                borderColor: "tan",
            }
        }

    }
})

const Contact = () => {
    return (
       <Box component="div">
           <Grid container justify="center">
               <Box component="form">
                   <Typography variant="h5">
                       Hire or contact me
                   </Typography>
                   {/* <InputField fullWidth={true} label="Name" variant="outlined" /> */}

               </Box>

           </Grid>
       </Box>
    )
}

export default Contact;
