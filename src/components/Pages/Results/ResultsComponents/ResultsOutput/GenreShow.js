import React from "react";
import GenreBubble from "./GenreBubble";
import { Container, Grid, Typography } from "@material-ui/core";

const GenreShow = ({ movieInfo }) => {
  let movieIds = movieInfo.genre_ids;
  let movieTagline = movieInfo.tagline;

  return (
    <Container maxWidth='lg'>
      <Typography variant='h5' color='secondary' align='center'>
        {movieTagline}
      </Typography>
      <Grid container spacing={1} justifyContent='center'>
        {movieIds.map((item) => {
          return <GenreBubble key={item} item={item} />;
        })}
        ;
      </Grid>
    </Container>
  );
};

export default GenreShow;
