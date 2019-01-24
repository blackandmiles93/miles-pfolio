import React, { Component } from 'react'
import { AppBar, Toolbar, Grid, GridList, withStyles, Typography } from '@material-ui/core';

const styles = {
    root: {
        display: "flex",
        flexGrow: 1,
        height: "75px",
    },
    navItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
}

class Header extends Component {
  render() {
    const {classes } = this.props;
    return (
      <header className={classes.root}>
        <Grid container>
          <Grid container item xs={2} />
          <Grid container item xs={8}>
            <Grid item xs className={classes.navItem}>
              <Typography variant="h6">
                About Me
              </Typography>
            </Grid>
            <Grid item xs className={classes.navItem}>
              <Typography variant="h6">
                Resume
              </Typography>
            </Grid>
            <Grid item xs className={classes.navItem}>
              <Typography variant="h6">
                Portfolio
              </Typography>
            </Grid>
            <Grid item xs className={classes.navItem}>
              <Typography variant="h6">
                Music
              </Typography>
            </Grid>
            <Grid item xs className={classes.navItem}>
              <Typography variant="h6">
                Contact
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </header>
    )
  }
}

export default withStyles(styles)(Header);
