import React from 'react';
import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import FormLogin from '../components/FormLogin';

const useStyles = makeStyles((theme) => ({
    paper: {
        minWidth: '100%',
        padding: theme.spacing(2),
    },
    container: {
        minHeight: '100vh'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    loginTitle: {
        fontWeight: 'bold',
    }
}));

const Login = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.container}
        >
            <Grid item xs={12} md={6} lg={3}>
                <Paper elevation={3} className={classes.paper}>
                    <Typography
                        align="center"
                        component="h2"
                        variant="h4"
                    // className={classes.loginTitle}
                    >
                        Booking App
                </Typography>
                    <FormLogin />
                </Paper>
            </Grid>
        </Grid >
    );
}

export default Login;