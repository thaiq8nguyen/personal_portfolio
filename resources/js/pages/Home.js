import React, {useState} from 'react'
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Navbar from "../components/Navbar"
import RecentProjects from "../components/RecentProjects"

import ProfileImage from "../../images/profile.png"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    introContainer: {
        marginTop: theme.spacing(6)
    },
    profile: {
        display: "flex",
        justifyContent: "center"
    },
    profileIntro: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    recentProjectContainer: {
        marginTop:  theme.spacing(4)
    }

}))
const Home = () => {
    const classes = useStyles()
    
    return (
        <div>
            <Navbar />
            
            <Container className={classes.introContainer}>
                <Grid container justify="center" className={classes.root} >
                    <Grid item xs={6}>
                        <Box className={classes.profile}>
                            <img src={ProfileImage}/>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.profileIntro}>
                            <Typography variant="h3">Hello, my name is Thai Nguyen</Typography>
                        </Box>
                        
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.recentProjectContainer}>
                <RecentProjects/>
            </Container>

        </div>
    )
}

export default Home
