import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {

    }
}))
const RecentProjects = () => {
    const classes =  useStyles();

    return (
        <div>
            <Typography>Recent Projects</Typography>
            <Grid container>
                <Grid item>
                    <Box></Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default RecentProjects
