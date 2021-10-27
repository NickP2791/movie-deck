import React from "react";
import { Grid, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  btn: {
    zIndex: "10",
    margin: ".6em .6em 0",
  },
});

const ResultsNav = ({ apiResultSize, handleReduceApiResults }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} justifyContent='center'>
      {apiResultSize && (
        <Grid item>
          <Button
            className={classes.btn}
            variant='contained'
            color='primary'
            size='large'
            onClick={handleReduceApiResults}>
            More like these
          </Button>
        </Grid>
      )}
      <Grid item>
        <Link to='/favoritelist'>
          <Button
            className={classes.btn}
            variant='contained'
            color='primary'
            size='large'
            onClick={window.localStorage.removeItem("movielist")}>
            New Search
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default ResultsNav;
