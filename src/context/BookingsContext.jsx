import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { LoginContext } from './LoginContext';

export const BookingsContext = createContext();

const BookingsProvider = (props) => {
    const [bookings, setBookings] = useState([]);

    const { login } = useContext(LoginContext);

    useEffect(() => {
        const getBookings = async () => {
            const email = 'contacto@tuten.cl'
            const URL = `https://dev.tuten.cl/TutenREST/rest/user/${email}/bookings?current=true`;
            const app = 'APP_BCK';

            const options = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'app': app,
                    'adminemail': login.email,
                    'token': login.sessionTokenBck
                },
                url: URL
            }
            const response = await axios(options);
            setBookings(response.data);
        }
        if(login) {
            console.log(login);
            getBookings();
        }
        
    }, [login]);

    return (
        <BookingsContext.Provider
            value={{
                bookings,
                setBookings
            }}>
            {props.children}
        </BookingsContext.Provider>
    );
}

export default BookingsProvider;