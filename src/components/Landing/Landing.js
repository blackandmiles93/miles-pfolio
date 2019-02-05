import React, { Component } from "react";
import { Typography, Grid, withStyles } from "@material-ui/core";
import Header from "../Shared/Header";
import "typeface-roboto";

const styles = {
  root: {
    display: "flex",
    flexGrow: 1,
    backgroundImage: "url(/img/yosemite.jpg)",
    backgroundPosition: "center",
    height: "100vh"
  },
  divOverlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
    position: "absolute",
    width: "100%",
    height: "100vh"
  },
  gridStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1
  },
  typographyStyle: {
    color: "#fff",
    fontFamily: "Roboto",
    // fontFamily: "Megrim",
    fontWeight: 200
  }
};

class Landing extends Component {
  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <>
        <div className={classes.divOverlay} />
        <div className={classes.root}>
          <Grid container spacing={0} justify="center">
            <Grid item xs={12}>
              <Header handleScroll={this.props.handleScroll} />
            </Grid>
            <Grid item xs={12} className={classes.gridStyles}>
              <Typography variant="h1" className={classes.typographyStyle}>
                Miles Perkins
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              className={classes.gridStyles}
              style={{ alignItems: "flex-start" }}
            >
              <Typography variant="h3" className={classes.typographyStyle}>
                Front End Developer
              </Typography>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Landing);
