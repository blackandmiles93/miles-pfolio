import React, { Component } from 'react';
import Landing from "./components/Landing/Landing";
import { withStyles } from '@material-ui/core';
import Header from "./components/Shared/Header";

const styles = {
  root: {
    display: "flex"
  }
}

class App extends Component {

  render() {
    
    return (
      <div className={styles.root}>
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
