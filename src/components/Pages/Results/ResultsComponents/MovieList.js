import React, { useState, useEffect } from "react";
import axios from "components/Data/utils/axios";
import requests from "components/Data/utils/requests";
import nophoto from "components/Data/images/nophoto.jpg";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    textTransform: "none",
  },
  card: {
    padding: ".4em",
    backgroundColor: "black",
  },
  cardMedia: {
    paddingTop: "150%",
    position: "relative",
  },
});

const MovieList = ({ actorId }) => {
  const [movieList, setMovieList] = useState([]);
  const { id, name } = actorId;
  const classes = useStyles();

  useEffect(() => {
    const getMovies = async () => {
      const getlist = await axios.get(requests.getCredits(id));
      setMovieList(
        getlist.data.cast.sort((a, b) => {
          return (
            //check to see if entry exists, then sorts
            (!!b.release_date && b.release_date.slice(0, 4)) -
            (!!a.release_date && a.release_date.slice(0, 4))
          );
        })
      );
    };
    getMovies();
  }, [id]);

  return (
    <section>
      <Typography variant='h4' color='secondary' align='left'>
        {`${name} movie credits (${movieList.length})`}
      </Typography>
      <Grid container spacing={2}>
        {movieList.map((eachmovie) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={2}
            align='center'
            key={eachmovie.id}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={
                  eachmovie.poster_path
                    ? requests.getImageSmall(eachmovie.poster_path)
                    : nophoto
                }>
                <Typography
                  variant='h4'
                  align='center'
                  style={{
                    color: "blue",
                    fontWeight: 900,
                    position: "absolute",
                    bottom: 20,
                    width: "100%",
                  }}>
                  {!eachmovie.poster_path && eachmovie.title}
                </Typography>
              </CardMedia>
              <Typography
                variant='h6'
                color='secondary'
                align='center'
                display='block'
                noWrap=''>
                {eachmovie.release_date && eachmovie.release_date.slice(0, 4)}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default MovieList;
