import React, { Component } from 'react';
import Landing from "./components/Landing/Landing";
import { withStyles } from '@material-ui/core';
import Header from "./components/Shared/Header";
import Layout from './components/Layout';


class App extends Component {

  render() {
    
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default App;
