import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { ImArrowUpLeft, ImArrowUpRight } from "react-icons/im";

const useStyles = makeStyles((theme) => ({
  container: {
    color: "orange",
    paddingRight: "1em",
  },
  arrows: {
    margin: "0 .5em",
    fontSize: "2em",
  },
  text: {
    maxWidth: "10em",
  },
}));

const SliderMessage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      className={classes.container}>
      <ImArrowUpLeft className={classes.arrows} />
      <Typography variant='body1' className={classes.text} align='center'>
        Click cards to browse
      </Typography>
      <ImArrowUpRight className={classes.arrows} />
    </Grid>
  );
};

export default SliderMessage;
