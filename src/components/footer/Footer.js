import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";

const Footer = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        bottom: "0",
        position: "fixed",
        background: "#27272775",
        color: "white",
      }}
    >
      <Grid item xs={12} sm={12} sx={{ padding: "5px" }}>
        <div> @ Copyright 2023: AnzilSoft</div>
      </Grid>
    </Grid>
  );
};

export default Footer;
