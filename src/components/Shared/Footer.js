import React from "react";
import { Typography, Grid } from "@material-ui/core";

function Footer(props) {
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={0} justify="center">
        <Grid item xs={6}>
          <Typography>Copyright 2018 Miles Perkins</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Instagram</Typography>
          <Typography>SoundCloud</Typography>
          <Typography>YouTube</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
