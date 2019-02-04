import React, { Component } from 'react'
import { Grid, withStyles, Typography, Link, Button } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';

const styles = {
  root: {
    display: "flex",
    flex: 1,
    height: "75px"
  },navItem: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  typographyStyle: {
    color: "#fff",
    fontWeight: 300,
    zIndex: 1
  }
}

class Header extends Component {
  render() {
    const {classes } = this.props;
    return (
      <header className={classes.root}>
          <Grid justify="space-around" container spacing={0}>
            <Grid item xs className={classes.navItem}>
              <Typography variant="h6" className={classes.typographyStyle}>
                About Me
              </Typography>
            </Grid>
            <Grid item xs className={classes.navItem}>
              <Typography variant="h6" className={classes.typographyStyle}>
                Resume
              </Typography>
            </Grid>
            <Grid item xs className={classes.navItem}>
              <Typography variant="h6" className={classes.typographyStyle}>
                Portfolio
              </Typography>
            </Grid>
            <Grid item xs className={classes.navItem}>
              <Typography variant="h6" className={classes.typographyStyle}>
                Music
              </Typography>
            </Grid>
            <Grid item xs className={classes.navItem}>
              <Typography variant="h6" className={classes.typographyStyle}>
                Contact
              </Typography>
            </Grid>
          </Grid>
       
      </header>
    )
  }
}

export default withStyles(styles)(Header);
