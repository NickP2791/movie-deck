import { Typography, Grid } from "@material-ui/core";
import React from "react";
import AddFavBtn from "components/Buttons/AddFavBtn";
import AddTrashBtn from "components/Buttons/AddTrashBtn";
import SeeCollectionsBtn from "components/Buttons/SeeCollectionsBtn";

const MovieInfo = ({ movieInfo, handleRender }) => {
  return (
    <>
      <Grid container style={{ margin: ".5em 0" }}>
        <Grid item>
          <Typography
            variant='h6'
            color='secondary'
            style={{ display: "inline-block" }}>
            {`${movieInfo.title} (${movieInfo.release_date})`}
          </Typography>
        </Grid>

        <Grid item>
          {movieInfo.belongs_to_collection && (
            <SeeCollectionsBtn movieInfo={movieInfo} />
          )}
        </Grid>

        <Grid item>
          <AddFavBtn movieId={movieInfo.id} />
        </Grid>
      </Grid>

      <Typography variant='body2' color='secondary' gutterBottom>
        {movieInfo.overview}
      </Typography>

      <Grid item align='right'>
        <AddTrashBtn movieId={movieInfo.id} />
        {/*   */}
      </Grid>
    </>
  );
};

export default MovieInfo;
