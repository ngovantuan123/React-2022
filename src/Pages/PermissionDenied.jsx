import { Avatar, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import img from "../assets/images/404.png";
const useStyles = makeStyles((theme) => ({
  container: {
    // display: "flex",
    // flex: 1, background:'blue',
    width: "79%",
    position: "absolute",
    paddingRight: 10,
  },
  image: {
    // width: 8 * 50
    // height: 6 * 50,
    width: "50%",
    height: "60%",
    // marginTop: theme.spacing(10),
    objectFit: "contain",
  },
}));
function PermissionDenied() {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.container}>
      <Avatar src={img} className={classes.image} variant="square" />
    </Grid>
  );
}

export default PermissionDenied;
