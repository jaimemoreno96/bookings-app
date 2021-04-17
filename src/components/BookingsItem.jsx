import React from 'react';
import { Card, CardContent, CardHeader, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: "100%",
        margin: theme.spacing(1)
    },
    container: {
        minWidth: '100%',
        padding: theme.spacing(2),
    },
}));

const BookingsItem = ({ booking }) => {
    const classes = useStyles();

    const { bookingId, tutenUserClient, bookingTime, locationId, bookingPrice } = booking;

    const date = new Date(bookingTime);

    return (
        <Grid item sm={12} md={6} lg={4}>
            <Card className={classes.card}>
                <CardHeader
                    title={bookingId}
                    subheader="BookingId"
                />
                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Cliente
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        {`${tutenUserClient.firstName} ${tutenUserClient.lastName}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Fecha de Creación
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="h2">
                        {date.toString()}
                    </Typography>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        // alignItems="center"
                        justify="center"
                    >
                        <Grid item lg={6}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Dirección
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {locationId.streetAddress}
                            </Typography>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Precio
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {`$ ${bookingPrice}`}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default BookingsItem;