import React, { useEffect, useContext } from "react";
import { PageContext } from "../../Context/PageContext";

import {
  Container,
  Grid,
  Paper,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { motion } from "framer-motion";

//material UI styling
const useStyles = makeStyles({
  content: {
    display: "flex",
    alignItems: "center",
    height: "50vh",
    marginTop: "2em 2em",
  },
});

//framer motion variants
const cardVariants = {
  hidden: {
    scale: 0,
    y: 0,
  },
  show: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    scale: 0.2,
    y: "-100vh",
    transition: {
      duration: 0.5,
    },
  },
};

const About = () => {
  const { setPage } = useContext(PageContext);
  const classes = useStyles();

  //set page title in Header
  useEffect(() => {
    setPage("About");
  }, [setPage]);

  return (
    <Container
      maxWidth='lg'
      className={classes.content}
      component={motion.div}
      variants={cardVariants}
      initial='hidden'
      animate='show'
      exit='exit'>
      <Grid container justifyContent='center'>
        <Grid item xs={9}>
          <Paper variant='outlined' style={{ padding: "1em .5em" }}>
            <Typography
              variant='body1'
              color='secondary'
              align='center'
              paragraph='true'
              gutterBottom>
              As a movie enthuiast, I developed this app as a project to
              showcase API calls with the help of The Movie DB.
            </Typography>

            <Typography
              variant='body1'
              color='secondary'
              align='center'
              paragraph='true'
              gutterBottom>
              In a unique way by using 5 binary questions, the user chooses
              between movie genres to discover movies to watch.
            </Typography>

            <Typography
              variant='body1'
              color='secondary'
              align='center'
              paragraph='true'
              gutterBottom>
              Disclaimer: This app uses local storage to save your personal
              preferences and your last results. So, everything is saved to your
              local drive and nothing is saved or shared on the internet.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
