import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Header from "components/Pages/Header/Header";
import Footer from "components/Pages/Footer/Footer";
import Start from "components/Pages/Start/Start";
import FavoriteList from "components/Pages/FavoriteList/FavoriteList";
import FavoriteYear from "components/Pages/FavoriteYear/FavoriteYear";
import Questions from "components/Pages/Quiz/Questions";
import Results from "components/Pages/Results/Results";
import Collection from "components/Pages/Collections/Collection";
import WishList from "components/Pages/WishList";
import HiddenMovieList from "components/Pages/HiddenMovies/HiddenMovieList";
import Trending from "components/Pages/Trending/Trending";
import About from "./components/Pages/About/About";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core";
import Scroll from "./components/Data/utils/Scroll";

import { PageProvider } from "components/Context/PageContext";
import { FavoriteProvider } from "components/Context/FavoriteContext";
import { AnimatePresence } from "framer-motion";

let theme = createTheme({
  overrides: {
    MuiFormControlLabel: {
      root: {
        color: "#FBE69E",
      },
    },
  },
  typography: {
    fontFamily: "Quicksand",
  },
  palette: {
    type: "dark",
    secondary: {
      main: "#FBE69E",
    },
  },
});

//material UI method, to deal with fonts and such
theme = responsiveFontSizes(theme);

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Scroll showBelow={300} />

      <FavoriteProvider>
        <PageProvider>
          <div
            className='App'
            style={{
              backgroundImage: `url(./BGLayer1.png)`,
              backgroundPosition: "50% 50%",
              backgroundSize: "100%",
            }}>
            <Header />
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route path='/' exact component={Start} />
                <Route path='/favoritelist' component={FavoriteList} />
                <Route path='/favoriteyear' component={FavoriteYear} />
                <Route path='/questions' component={Questions} />
                <Route path='/results' component={Results} />
                <Route path='/collection/:id' component={Collection} />
                <Route path='/wishlist' component={WishList} />
                <Route path='/hiddenmovielist' component={HiddenMovieList} />
                <Route path='/trending' component={Trending} />
                <Route path='/about' component={About} />
              </Switch>
            </AnimatePresence>
          </div>
          <Footer />
        </PageProvider>
      </FavoriteProvider>
    </ThemeProvider>
  );
}

export default App;
