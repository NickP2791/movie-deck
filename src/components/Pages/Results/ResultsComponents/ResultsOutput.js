import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ResultsSlider from "./ResultsOutput/ResultsSlider/ResultsSlider";
import GenreShow from "./ResultsOutput/GenreShow";
import MovieInfo from "./ResultsOutput/MovieInfo";
import SliderMessage from "./ResultsOutput/SliderMessage";
import ResultsNav from "./ResultsOutput/ResultsNav";

//material UI styling
const useStyles = makeStyles((theme) => ({
  grid_container: {
    margin: ".5em 0",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
  movie_info: {
    border: "2px solid #FBE69E",
    padding: "0 1em",
    borderRadius: "1em",
    flexGrow: 1,
  },
  resultSlider: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1em",
    },
  },
}));

const ResultsOutput = (props) => {
  const {
    showcase,
    movieInfo,
    handleCheck,
    handleReduceApiResults,
    check,
    apiResultSize,
  } = props;

  const classes = useStyles();

  let isShowcaseGood = showcase?.length >= 5;

  return (
    <Grid
      container
      spacing={2}
      justifyContent='space-evenly'
      className={classes.grid_container}>
      <Grid item xs={12} sm={12} md={5}>
        <ResultsSlider
          className={classes.resultSlider}
          showcase={showcase}
          check={check}
          handleCheck={handleCheck}
          isShowcaseGood={isShowcaseGood}
        />
        <SliderMessage />
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <Grid
          container
          direction='column'
          justifyContent='space-between'
          alignItems='center'
          className={classes.grid_container}>
          <Grid item className={classes.movie_info}>
            {movieInfo && <GenreShow movieInfo={movieInfo} />}
            {movieInfo && <MovieInfo movieInfo={movieInfo} />}
          </Grid>
          <ResultsNav
            apiResultSize={apiResultSize}
            handleReduceApiResults={handleReduceApiResults}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResultsOutput;
