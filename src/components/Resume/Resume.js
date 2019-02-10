import React from "react";
import {
  Grid,
  Typography,
  withStyles,
  List,
  ListItem
} from "@material-ui/core";

const styles = theme => ({
  gridContainerStyle: {
    display: "flex"
  },
  gridLeft: {
    display: "flex",
    justifyContent: "flex-end",
    borderRight: "5px solid #555",
    padding: "10px",
    borderBottom: "5px solid #555"
  },
  gridRight: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "10px",
    borderBottom: "5px solid #555"
  },
  resumeTextStyle: {
    fontWeight: 300,
    fontFamily: "Megrim"
  },
  resumeListStyle: {
    display: "flex",
    justifyContent: "flex-end"
  }
});

function Resume(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container spacing={0} alignItems="center">
        {/* Left side */}
        <Grid component="div" item xs={5} className={classes.gridLeft}>
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end"
              }}
            >
              <Typography variant="h3" className={classes.resumeTextStyle}>
                Experience
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7} />
        {/* row 2 */}
        <Grid container spacing={0}>
          <Grid item xs={5} className={classes.gridLeft}>
            <List>
              <ListItem className={classes.resumeListStyle}>
                <Typography>Applied Dynamic Solutions, LLC</Typography>
              </ListItem>
              <ListItem className={classes.resumeListStyle}>
                <Typography>Rahway, NJ</Typography>
              </ListItem>
            </List>
          </Grid>

          <Grid component="div" item xs={7} className={classes.gridRight}>
            <List>
              <ListItem>
                <Typography>
                  Established and handled development environments and user
                  authentication for client site built with React.js and Okta
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Implemented page designs using React.js and Material UI
                  framework
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Manage ever aspect of client site upkeep
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={5} className={classes.gridLeft}>
            <List>
              <ListItem className={classes.resumeListStyle}>
                <Typography>CODEIT</Typography>
              </ListItem>
              <ListItem className={classes.resumeListStyle}>
                <Typography>Hoboken, NJ</Typography>
              </ListItem>
            </List>
          </Grid>

          <Grid component="div" item xs={7} className={classes.gridRight}>
            <List>
              <ListItem>
                <Typography>
                  Oversaw the entire student experience from initial recruitment
                  to course conduction
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Developed a course syllabus covering Python fundamentals, data
                  science, and web development
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Created personalized lesson plans for all students
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Resume);
