import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Profile pic" />
      </Grid>
      <Typography variant="h4" className={classes.title}>
        <Typed strings={["Arun Chauhan"]} typeSpeed={40} />
      </Typography>

      <Typography variant="h5" className={classes.subtitle}>
        <Typed
          strings={["Web Developer", "React | Redux", "MERN Stack"]}
          typeSpeed={60}
          backSpeed={70}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
