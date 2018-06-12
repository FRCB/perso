import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from './components/Homepage/Homepage';
import Category from './components/Category/Category';
import Event from './components/Event/Event';
import AddEvent from './components/AddEvent/AddEvent';
import Reservations from './components/Reservations/Reservations';
import Login from './components/Login/Login';

export default (
  <Switch>
    <Route component={ Homepage } path='/' exact />
    <Route component={ Category } path='/category/:name' />
    <Route component={ Event } path='/event/:id' />
    <Route component={ AddEvent } path='/add' />
    <Route component={ Reservations } path='/reservations' />
    <Route component={ Login } path='/login' />
  </Switch>
)