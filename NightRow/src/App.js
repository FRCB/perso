import React, { Component } from 'react';
import route from './route';
import { withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        {route}
      </div>
    );
  }
}

export default withRouter(App);
