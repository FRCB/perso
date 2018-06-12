import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from './components/Homepage/Homepage';
import Auth from './components/Auth/Auth';
import Category from './components/Category/Category';
import Event from './components/Event/Event';
import AddEvent from './components/AddEvent/AddEvent';
import Reservations from './components/Reservations/Reservations';

export default (
  <Switch>
    <Route component={ Homepage } path='/homepage' />
    <Route component={ Auth } path='/auth' />
    <Route component={ Category } path='/category/:name' />
    <Route component={ Event } path='/event/:id' />
    <Route component={ AddEvent } path='/add' />
    <Route component={ Reservations } path='/reservations' />
  </Switch>
)