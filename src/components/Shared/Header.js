import React, { Component, ReactDOM } from "react";
import { Grid, withStyles, Typography, Link, Button } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";

const styles = {
  root: {
    display: "flex",
    flex: 1,
    height: "75px"
  },
  navItem: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  typographyStyle: {
    color: "#fff",
    fontWeight: 300,
    zIndex: 1
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props);
  }
  // Want to be able to scroll to top of each component onClick
  // react-scrolls might be an option

  // Grab ref attached to each component and then use a function
  // to get the ref and scroll to the top the component
  render() {
    return (
      <header style={styles.root}>
        <Grid justify="space-around" container spacing={0}>
          <Grid item xs style={styles.navItem}>
            <Button onClick={this.props.handleScroll}>
              <Typography style={styles.typographyStyle}>About Me</Typography>
            </Button>
          </Grid>
          <Grid item xs style={styles.navItem}>
            <Typography variant="h6" style={styles.typographyStyle}>
              Resume
            </Typography>
          </Grid>
          <Grid item xs style={styles.navItem}>
            <Typography variant="h6" style={styles.typographyStyle}>
              Portfolio
            </Typography>
          </Grid>
          <Grid item xs style={styles.navItem}>
            <Typography variant="h6" style={styles.typographyStyle}>
              Music
            </Typography>
          </Grid>
          <Grid item xs style={styles.navItem}>
            <Typography variant="h6" style={styles.typographyStyle}>
              Contact
            </Typography>
          </Grid>
        </Grid>
      </header>
    );
  }
}

export default withStyles(styles)(Header);
