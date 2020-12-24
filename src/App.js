import React, { createContext, useState } from 'react';
import './App.css';
import BookingPage from './components/BookingPage/BookingPage';
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HotelPage from './components/HotelPage/HotelPage';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/bookingPage/:id">
            <BookingPage />
          </Route>
          <PrivateRoute path="/hotelPage/:id">
            <HotelPage />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
