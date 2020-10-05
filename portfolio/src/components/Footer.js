import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import{ LinkedIn , EmailRounded, GitHub} from "@material-ui/icons"

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "white",
            "&:hover": {
                fill: "orange",
                fontSize: "1.8rem"
            }
        }
    }
})



const  Footer= ()=>  {
    const classes = useStyles()

    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction
            className={classes.root}
            style= {{padding: 0}}
            icon={<EmailRounded />}
            href="mailto:arpitakaran@gmail.com"
            />
            <BottomNavigationAction
            className={classes.root}
            style= {{padding: 0}}
            icon={<LinkedIn />}
            href="https://www.linkedin.com/in/arpita-sau-4ab0a6143/" target="_blank"


            />
            <BottomNavigationAction
            className={classes.root}
            style= {{padding: 0}}
            icon={<GitHub />}
            href="https://github.com/arpitasau" target="_blank"
            />
        </BottomNavigation>
    )
}

export default Footer
