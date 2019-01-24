import React, { Component } from 'react';
import { Typography, Grid, withStyles } from "@material-ui/core";

const styles = {
  root: {
    display: "flex",
    flexGrow: 1,
    backgroundImage: "url(/img/yosemite.jpg)",
    backgroundPosition: 'center',
    height: "100vh",
  },
  divOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: "100vh",
    width: "100%",
    position: "absolute"

  },
  gridStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}

class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
      <div className={classes.divOverlay}></div>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.gridStyles}>
            <Typography variant="h1">
              Miles Perkins
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.gridStyles} style={{alignItems: "flex-start"}}>
            <Typography variant="h3">
              Front End Developer
            </Typography>
          </Grid>
        </Grid>
      </div>
      </>
    )
  }
};

export default withStyles(styles)(Landing);
