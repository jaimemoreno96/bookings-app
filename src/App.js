import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Bookings from './pages/Bookings';
import LoginProvider from './context/LoginContext';
import BookingsProvider from './context/BookingsContext';

function App() {
  return (
    <LoginProvider>
      <BookingsProvider>
        <CssBaseline />
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route exact path="/bookings">
                <Bookings />
              </Route>
            </Switch>
          </div>
        </Router>
      </BookingsProvider>
    </LoginProvider>
  );
}

export default App;
