import { Box, Button, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
    minHeight: "100vh",
  },
  paper: {
    padding: "16px",
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.paper}>
        <Typography variant="h4" component="h1">
          Login Page
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
