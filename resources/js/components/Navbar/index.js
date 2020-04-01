import React from 'react'
import {AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}))


const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" aria-label="menu"><MenuIcon/></IconButton>
                    <Typography variant="h6" className={classes.title}>Thai Nguyen</Typography>
                    <Button>About</Button>
                    <Button>Projects</Button>
                    
                    <Button>Contact</Button>
                </Toolbar>
                
            </AppBar>
        </div>
    )
}

export default NavBar
