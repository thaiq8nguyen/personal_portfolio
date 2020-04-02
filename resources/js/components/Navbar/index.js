import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from "@material-ui/core"

import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    list: {
         width: 250
    }
}))


const NavBar = () => {
    const classes = useStyles();
    const [sideMenu, setSideMenu] = useState(false)

    const handleOpenSideMenu = () => {
        
        setSideMenu(!sideMenu)
        
    }

    

    const sideMenuContent = () => (
        
        <div style={{minHeight: "100vh"}} className = {classes.list}>
            <List>
                <ListItem button component={Link} to="/projects">
                    <ListItemText>Projects</ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/contact">
                    <ListItemText>Contact</ListItemText>
                </ListItem>
            </List>
        </div>
        
    )

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" aria-label="menu" style={{color: "white"}} onClick={handleOpenSideMenu}><MenuIcon/></IconButton>
                    <Typography variant="h5">Thai Nguyen</Typography>
                    <div></div>
                </Toolbar>
                
            </AppBar>
            
            <Drawer open={sideMenu} ModalProps={{onBackdropClick: handleOpenSideMenu}} >
                {sideMenuContent()}
            </Drawer>
            
            
        </div>
    )
}

export default NavBar
