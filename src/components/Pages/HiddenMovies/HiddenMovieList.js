import React, { useEffect, useContext, useState } from "react";
import useLocalStorage from "components/Hooks/useLocalStorage";
import { Container, Grid } from "@material-ui/core";
import { PageContext } from "components/Context/PageContext";
import CollectionCard from "components/Pages/Collections/CollectionCard";
import getmovieinfo from "components/Data/utils/getmovieinfo";
import EmptyMessage from "./EmptyMessage";

const HiddenMovieList = () => {
  const { setPage } = useContext(PageContext);
  const [hidden, setHidden] = useLocalStorage("hidden", []); //movie ids passed on components
  const [trashedMovies, setTrashedMovies] = useState([]); //full movie details

  useEffect(() => {
    setPage("Hidden Movies");
  }, [setPage]);

  useEffect(() => {
    getmovieinfo(hidden).then((details) => setTrashedMovies([...details]));
  }, [hidden]);

  const handleRender = () => {
    let item = window.localStorage.getItem("hidden");
    let details = JSON.parse(item);
    setHidden(details);
  };

  if (trashedMovies.length !== hidden.length) return null;
  return (
    <Container maxWidth='lg'>
      {trashedMovies.length === 0 ? (
        <EmptyMessage />
      ) : (
        <Grid container spacing={2} justifyContent='center'>
          {trashedMovies &&
            trashedMovies.map((movie) => (
              <CollectionCard
                movie={movie}
                key={movie.id}
                cardType={"trash"}
                handleRender={handleRender}
              />
            ))}
        </Grid>
      )}
    </Container>
  );
};

export default HiddenMovieList;
