import React from "react";
import { Link } from "react-router-dom";
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
const TryAgain = () => {
  const classes = useStyles();

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
              variant='h2'
              color='secondary'
              align='center'
              gutterBottom>
              Try Again...
            </Typography>
            <Typography
              variant='h3'
              color='secondary'
              align='center'
              gutterBottom>
              Your preferences did not give results
            </Typography>
            <Link to='/favoritelist'>
              <Button
                className={classes.btn}
                variant='contained'
                color='primary'
                size='large'>
                Modify Search
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TryAgain;
