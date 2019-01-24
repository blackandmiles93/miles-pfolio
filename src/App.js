import React, { Component } from 'react';
import Landing from "./components/Landing/Landing";
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
}

class App extends Component {

  render() {
    
    return (
      <div className={styles.root}>
        <Landing />
      </div>
    );
  }
}

export default App;
