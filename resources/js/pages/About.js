import React from 'react'
import {Container, Link, Typography} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Navbar from "../components/Navbar"

const useStyles = makeStyles(theme => ({
    titleContainer:{
        display: "flex",
        justifyContent: "center",
        margin: theme.spacing(3,0)
    }
})) 
const About = () => {
    const classes = useStyles()
    return (
        <div>
            <Navbar/>
            <Container maxWidth="md">
                <Container className={classes.titleContainer}>
                    <Typography variant="h4">About</Typography>
                </Container>
                <Typography variant="body1"><strong>Thai Nguyen</strong> is a web developer, engineer, traveler. Until recently, he used to work for a high volume mobile phone service business where he was responsible for data warehousing management and test engineering. He had developed several pieces of application to handle inventory, product management flow, and merchandise returns.
                <br/><br/>
                In the past ten months, Thai has been enrolled in an immersive full-stack web developer program at Lambda School. During the courses, he has learned basic HTML with Javascript front-end developement to back-end development using Node JS. Additionally, he also learns intensive computer science materials such as algorithms, graphs, blockchains and basic CPU computing operations.

                <br/><br/>
                In his spare time, Thai enjoys running and exploring various web technologies.
                <br/><br/>
                Thai lives in the Los Angeles area with his wife.
                <br/><br/>
                Thai can also be found online here:
                <br/><br/>
                </Typography>
                <Link href="https://www.linkedin.com/in/tnguyen-web" color="inherit" variant="body1" underline="always">Linkedin</Link>&nbsp;/&nbsp;
                <Link href="https://github.com/thaiq8nguyen" color="inherit" variant="body1" underline="always">Github</Link>


            </Container>
            
        </div>
    )
}

export default About
