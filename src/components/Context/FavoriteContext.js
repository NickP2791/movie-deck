import React, { createContext } from "react";
import useLocalStorage from "components/Hooks/useLocalStorage";

export const FavoriteContext = createContext();

export const FavoriteProvider = (props) => {
  console.log("favoriteprovider ran");
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {props.children}
    </FavoriteContext.Provider>
  );
};
