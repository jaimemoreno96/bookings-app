import React, { useContext } from 'react';
import { Card, CardHeader, Grid, makeStyles } from '@material-ui/core';
import { Redirect } from 'react-router';

import { BookingsContext } from '../context/BookingsContext';
import { LoginContext } from '../context/LoginContext';
import BookingsItem from '../components/BookingsItem';

const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: 275,
    },
    container: {
        minWidth: '100%',
        padding: theme.spacing(2),
    },
}));


const Bookings = () => {
    const { bookings, setBookings } = useContext(BookingsContext);

    const { login } = useContext(LoginContext);

    const classes = useStyles();
    console.log(bookings);

    return (
        <div>
            {login ?
                <div className={classes.container}>
                    <h1>Bookings</h1>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justify="center"
                    >
                        {bookings.map((booking, index) =>
                            (<BookingsItem key={booking.bookingId} booking={booking} />)
                        )}
                    </Grid>
                </div>
                :
                <Redirect to="/" />
            }
        </div>
    );
}

export default Bookings;