import React, { useEffect, useState, useContext } from "react";
import axios from "components/Data/utils/axios";
import requests from "components/Data/utils/requests";
import CollectionCard from "components/Pages/Collections/CollectionCard";
import { Container, Divider, Grid, Typography } from "@material-ui/core";
import { PageContext } from "components/Context/PageContext";

const Trending = () => {
  const { setPage } = useContext(PageContext);
  const [trending, setTrending] = useState([]); //trending movie details

  useEffect(() => {
    setPage("Trending (last 7 days)");
  }, [setPage]);

  useEffect(() => {
    const getTrending = async () => {
      const response = await axios.get(requests.getTrend);
      setTrending(response.data.results);
    };
    getTrending();
  }, []);

  console.log(trending);
  if (!trending) return null;
  return (
    <Container maxWidth='lg'>
      <Typography variant='h3' color='secondary'>
        Movies
      </Typography>
      <Grid container spacing={2} justifyContent='center'>
        {/* trends come in 2 types, movies and tv */}
        {trending.map(
          (movie) =>
            movie.media_type === "movie" && (
              <CollectionCard
                movie={movie}
                key={movie.id}
                cardType={"wishlist"}
              />
            )
        )}
      </Grid>
      <Divider />
      <Typography variant='h3' color='secondary'>
        TV shows
      </Typography>
      <Grid container spacing={2} justifyContent='center'>
        {trending.map(
          (movie) =>
            movie.media_type === "tv" && (
              <CollectionCard
                movie={movie}
                key={movie.id}
                cardType={"wishlist"}
              />
            )
        )}
      </Grid>
    </Container>
  );
};

export default Trending;
