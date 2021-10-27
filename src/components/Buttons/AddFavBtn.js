import React, { useState, useEffect, useContext } from "react";
import { Button } from "@material-ui/core";
import { MdFavorite } from "react-icons/md";
import { FavoriteContext } from "components/Context/FavoriteContext";

const AddFavBtn = ({ movieId }) => {
  //Favorite movies ids in local storage, initial state
  const { favorites, setFavorites } = useContext(FavoriteContext);

  //is movie passed in on the favorite list, boolean
  const [inFavorite, setInFavorite] = useState(() => {
    const infavorite = favorites?.includes(movieId);
    return infavorite;
  });

  const handleFavorite = (id) => {
    // test if id is in favorites
    const test = favorites.includes(id);
    setInFavorite(!test);
    if (test) {
      setFavorites((prev) => prev.filter((movie) => movie !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  //remove duplicates if any, extremely rare case
  useEffect(() => {
    const unique = favorites?.filter((value, index) => {
      return favorites.indexOf(value) === index;
    });
    setInFavorite(unique.includes(movieId));
  }, [favorites, movieId]);

  return (
    <Button
      variant='contained'
      size='small'
      color='primary'
      style={{ margin: "0 .5em" }}
      onClick={() => handleFavorite(movieId)}>
      <MdFavorite style={{ margin: "0 .5em" }} />
      {inFavorite ? "Remove" : "Add to Favorites"}
    </Button>
  );
};

export default AddFavBtn;
