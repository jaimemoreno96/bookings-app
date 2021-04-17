import React, { useContext, useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { LoginContext } from '../context/LoginContext';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
        padding: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

const FormLogin = () => {
    const classes = useStyles();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    const {login, setLogin} = useContext(LoginContext);
    let history = useHistory();

    const onLogin = async values => {
        console.log(errors);
        console.log(values);
        const { email, password } = values;
        const URL = `https://dev.tuten.cl/TutenREST/rest/user/${email}`;
        const app = 'APP_BCK';

        const options = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'app': app,
                'password': password
            },
            url: URL
        }

        const response = await axios(options).catch(error => {
            if (error.response) {
                setError(true);
                setMessage(error.response.data);
                return
            }
        });

        setLogin(response.data);
        history.push("/bookings");

    }


    return (
        <form
            className={classes.form}
            onSubmit={handleSubmit(onLogin)}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
            />
            {errors.email && "Enter an available email"}
            <TextField
                variant="outlined"
                margin="normal"
                // required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password", { required: true, minLength: 4 })}
            />
            {console.log(errors)}
            {errors.password && "Password is required"}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
            </Button>

        </form>
    );
}

export default FormLogin;