import React from "react";
import NavBar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/react-redux.jpg";
import project4 from "../images/mern-stack.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    //background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem",
    margin: "5rem auto",
  },
}));
const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <NavBar />
        <Grid container justify="center" alignItems="center">
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Project 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Velit quis elit sint tempor mollit proident quis fugiat
                    deserunt aliquip. Quis id fugiat dolore sunt. Qui sint ex
                    deserunt pariatur quis dolor. Lorem nulla ea anim eiusmod
                    eiusmod reprehenderit dolor aute cupidatat minim dolore ut.
                    Voluptate Lorem et officia dolor aliqua quis sit laborum
                    amet enim et ullamco.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project2}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Project 2
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Velit quis elit sint tempor mollit proident quis fugiat
                    deserunt aliquip. Quis id fugiat dolore sunt. Qui sint ex
                    deserunt pariatur quis dolor. Lorem nulla ea anim eiusmod
                    eiusmod reprehenderit dolor aute cupidatat minim dolore ut.
                    Voluptate Lorem et officia dolor aliqua quis sit laborum
                    amet enim et ullamco.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project3}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Project 3
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Enim officia duis cillum Lorem voluptate enim exercitation
                    sit cillum ad voluptate. Ut exercitation pariatur elit
                    eiusmod tempor officia. Ex dolor eiusmod irure qui do
                    reprehenderit voluptate ut. Veniam laboris ullamco ad ea
                    incididunt pariatur proident aliqua cupidatat laborum
                    occaecat ex officia. Proident reprehenderit eu dolor
                    cupidatat ut. Consectetur deserunt cupidatat aute do veniam
                    deserunt.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project4}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Project 3
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Enim officia duis cillum Lorem voluptate enim exercitation
                    sit cillum ad voluptate. Ut exercitation pariatur elit
                    eiusmod tempor officia. Ex dolor eiusmod irure qui do
                    reprehenderit voluptate ut. Veniam laboris ullamco ad ea
                    incididunt pariatur proident aliqua cupidatat laborum
                    occaecat ex officia. Proident reprehenderit eu dolor
                    cupidatat ut. Consectetur deserunt cupidatat aute do veniam
                    deserunt.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
