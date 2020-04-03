import React from 'react'
import { Helmet } from "react-helmet"
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Navbar from "../components/Navbar"
import RecentProjects from "../components/RecentProjects"

const useStyles = makeStyles(theme => ({
    titleContainer:{
        display: "flex",
        justifyContent: "center",
        margin: theme.spacing(3,0)
    }
})) 

const Projects = () => {

    const classes =  useStyles()
    return (
        <div>
            <Helmet>
                <title>Thai Nguyen Projects</title>
            </Helmet>
            <Navbar/>
            <Container>
                <Container className={classes.titleContainer}>
                    <Typography variant="h4">Projects</Typography>
                </Container>
                <RecentProjects/>
            </Container>
            
        </div>
    )
}

export default Projects
