import React, { Component } from 'react';
import classNames from "classnames";
import { Typography, Grid, withStyles } from "@material-ui/core";

const styles = {
  root: {
    display: "flex",
    flexGrow: 1
  }
}

class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="row">
          <Grid item xs={12}>
            <Typography variant="h1">
              Miles Perkins
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">
              Front End Developer
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
};

export default withStyles(styles)(Landing);
