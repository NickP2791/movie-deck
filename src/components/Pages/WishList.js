import React, { useEffect, useState, useContext } from "react";
import getmovieinfo from "components/Data/utils/getmovieinfo";
import { Container, Grid } from "@material-ui/core";
import CollectionCard from "components/Pages/Collections/CollectionCard";
import { PageContext } from "components/Context/PageContext";
import { FavoriteContext } from "components/Context/FavoriteContext";
import useUpdateEffect from "components/Hooks/useUpdateEffect";

const WishList = () => {
  const { setPage } = useContext(PageContext);
  const { favorites } = useContext(FavoriteContext); //movie ids.copy of what is in local storage
  const [movieDetails, setMovieDetails] = useState([]); //movie details

  useEffect(() => {
    setPage("Wishlist");
  }, [setPage]);

  useEffect(() => {
    getmovieinfo(favorites).then((details) => setMovieDetails(details));
  }, [favorites]);

  useUpdateEffect(() => {
    if (movieDetails.length > 0) {
      const filtered = movieDetails.filter((movie) =>
        favorites.includes(movie.id)
      );
      setMovieDetails(filtered);
    }
  }, [favorites]);

  if (!movieDetails) return null;
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2} justifyContent='center'>
        {movieDetails.map(
          (movie) =>
            favorites.includes(movie.id) && (
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

export default WishList;
