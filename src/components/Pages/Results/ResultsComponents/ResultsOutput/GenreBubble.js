import React from "react";
import Genres from "../../../../Data/utils/Genres";
import { Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  bubble: {
    height: "auto",
    padding: "0 0.4em",
    border: "2px solid #fbe69e",
    borderRadius: "1.2rem",
    margin: " 0.1em 0",
  },
});

const GenreBubble = ({ item }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <div className={classes.bubble}>
        <Typography
          variant='h6'
          color='secondary'
          style={{ fontSize: ".9rem" }}
          noWrap={true}>
          {Genres.filter((genre) => genre.id === item)[0].name}
        </Typography>
      </div>
    </Grid>
  );
};

export default GenreBubble;
