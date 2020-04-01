import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MatakaLogo from "../../../images/mataka_logo.png";
import GithubLogo from "../../../images/github_logo.png";
import ReactLogo from "../../../images/react_logo.png";
import VueLogo from "../../../images/vue_logo.png";
import LaravelLogo from "../../../images/laravel_logo.png";
import NodeLogo from "../../../images/nodejs_logo.png";
import SalonRegisterLogo from "../../../images/salon_register_logo.png";
import ReceiptorLogo from "../../../images/receiptor_logo.png";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        flexDirection: "row",
        marginTop: theme.spacing(1),
    },
    projectContainer: {
        flex: 1,
    },
    techLogoWithWord: {
        display: "flex",
    },
}));
const RecentProjects = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h4">Recent Projects</Typography>
            <Grid container spacing={3} className={classes.root}>
                <Grid item className={classes.projectContainer}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography variant="h6">Mataka</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={MatakaLogo} />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="body2">
                                Mataka is a school calendar application. It
                                allows coaches and teachers to post events for
                                their students. Students can subscribe to public
                                calendars to see upcoming events.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Typography>Built using: </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src={ReactLogo}
                                        width="32px"
                                        height="32px"
                                    />
                                </Grid>

                                <Grid item xs={2}>
                                    <img
                                        src={NodeLogo}
                                        width="32px"
                                        height="32px"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <Grid item xs={3}>
                                    <a href="https://github.com/thaiq8nguyen/school-calendar-fe">
                                        <img
                                            src={GithubLogo}
                                            width="32px"
                                            height="32px"
                                        />
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.projectContainer}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography variant="h6">Salon Register</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={SalonRegisterLogo} />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="body2">
                                Salon Register enables salon owners to record
                                their technician's sales. The application
                                removes paper registers with a time-saver
                                flexibile platform.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Typography>Built using: </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src={VueLogo}
                                        width="32px"
                                        height="32px"
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={2}
                                    className={classes.techLogoWithWord}
                                >
                                    <div style={{ marginRight: "3px" }}>
                                        <img
                                            src={LaravelLogo}
                                            width="32px"
                                            height="32px"
                                        />
                                    </div>

                                    <Typography>Laravel</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <Grid item xs={3}>
                                    <a href="https://github.com/thaiq8nguyen/salon-management">
                                        <img
                                            src={GithubLogo}
                                            width="32px"
                                            height="32px"
                                        />
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.projectContainer}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography variant="h6">Receiptor</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={ReceiptorLogo} />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="body2">
                                Receiptor is a versatile receipt tracking app.
                                It allows users to track their spending in a
                                receipt with flexible categories. Users can
                                upload a picture of their receipt to the app for
                                reference.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Typography>Built using: </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src={ReactLogo}
                                        width="32px"
                                        height="32px"
                                    />
                                </Grid>

                                <Grid item xs={2}>
                                    <img
                                        src={NodeLogo}
                                        width="32px"
                                        height="32px"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <Grid item xs={3}>
                                    <a href="https://github.com/Receipt-Tracking-App">
                                        <img
                                            src={GithubLogo}
                                            width="32px"
                                            height="32px"
                                        />
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default RecentProjects;
