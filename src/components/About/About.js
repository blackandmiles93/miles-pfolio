import React from "react";
import { Grid, Button, Typography, withStyles } from "@material-ui/core";
import closeup from "../../assets/img/closeup_resized.jpg";
import resume from "../../assets/documents/my-resume.pdf";

const styles = {
  root: {
    display: "flex",
    flex: 1,
    backgroundColor: "#2b2a2a",
    padding: 50
  },
  profileImgContainer: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 50,
    profileImg: {
      borderRadius: "100%",
      height: 330,
      width: 300
    }
  },
  typographyStyle: {
    fontWeight: 300,
    color: "#fff",
    fontFamily: "Megrim"
  }
};

//TODO: need to fix image on render, it blips like it's width is narrow to start

function About(props) {
  return (
    <div style={styles.root}>
      <Grid container spacing={0} justify="flex-end">
        <Grid style={styles.profileImgContainer} item xs={6}>
          <img
            style={styles.profileImgContainer.profileImg}
            src={closeup}
            alt="miles"
          />
        </Grid>
      </Grid>

      <Grid container spacing={0} justify="flex-start">
        <Grid container spacing={0}>
          <Grid style={{ paddingLeft: "50px" }} item xs={6}>
            <Typography style={{ fontWeight: 300, color: "#fff" }} variant="h3">
              About Me
            </Typography>
            <br />
            <Typography style={{ fontWeight: 300, color: "#6f6f6f" }}>
              I am a front end web developer with an interest. I am currently
              actively looking for Front End Web Development opportunities. I
              have experience in implementing designs with HTML, CSS, JS and
              React.js.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid style={{ paddingLeft: "50px" }} item xs={4}>
            <Typography variant="h5" style={{ color: "#fff" }}>
              Contact Details
            </Typography>
            <br />
            <Typography style={{ color: "#6f6f6f" }}>
              Miles Perkins <br />
              5 Lawrence Street <br />
              Bloomfield, NJ 07003 US <br />
              (973)-985-5969 <br />
              mperkins1993@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={props.downloadResume}
              style={{ backgroundColor: "#6f6f6f", color: "#fff" }}
              variant="text"
            >
              Download Resume
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(About);
