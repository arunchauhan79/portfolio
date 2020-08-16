import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import NavBar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  form: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);
const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Box component="div">
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography
              variant="h5"
              style={{
                color: "tomato",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              hire or contact me
            </Typography>
            <InputField
              variant="outlined"
              fullWidth={true}
              label="Name"
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
            />
            <br />
            <InputField
              variant="outlined"
              fullWidth={true}
              label="Email"
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
            />
            <br />
            <InputField
              variant="outlined"
              fullWidth={true}
              label="Company Name"
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
            />
            <br />
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              Contact me
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
