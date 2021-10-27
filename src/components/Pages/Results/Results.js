import React, { useState, useEffect, useContext } from "react";
import useLocalStorage from "components/Hooks/useLocalStorage";
import axios from "components/Data/utils/axios";
import requests from "components/Data/utils/requests";
import MovieCast from "./ResultsComponents/MovieCast";
import MovieList from "./ResultsComponents/MovieList";
import ResultsOutput from "./ResultsComponents/ResultsOutput";
import TryAgain from "./ResultsComponents/TryAgain";
import {
  Divider,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { PageContext } from "components/Context/PageContext";
import { motion } from "framer-motion";

//framer motion styling
const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

//material UI styling
const resultsStyles = makeStyles({
  container: {
    paddingBottom: "3px",
  },
  grid_container: {
    marginBottom: "1.2em",
    height: "100%",
  },
  case_container: {
    marginBottom: ".75em",
  },
});

const Results = () => {
  const { setPage } = useContext(PageContext);
  const [removedGenres, setRemovedGenres] = useLocalStorage(
    "removedGenres",
    []
  );
  const [years, setYears] = useLocalStorage("years", [1970, 1980]);
  const [preference, setPreference] = useLocalStorage("preference", []); // Results from questions
  const [hidden, setHidden] = useLocalStorage("hidden", []); //movie ids passed on components
  const [recentResults, setRecentResults] = useLocalStorage(
    "recentresults",
    []
  ); //most recent valid results (at least of size 5), are kept in local
  const [quizResults, setQuizResults] = useState(preference); //array of 5 genres from the quiz
  const [apiResults, setApiResults] = useState(null); //All the raw movie list information, 1 array of 20 obj
  const [showcase, setShowcase] = useState(null); //array holding all information for the 5 movies shown on screen
  const [movieInfo, setMovieInfo] = useState(null);
  const [check, setCheck] = useState("s5");
  const [actorId, setActorId] = useState([]);
  const [isCastInList, setIsCastInList] = useState(false);

  const classes = resultsStyles();

  //set page title in header
  useEffect(() => {
    setPage("Results");
  }, [setPage]);

  //FIRST CALL...API call to TMDB for list of movies
  const getRawInfo = () => {
    const rawInfo = axios
      .get(requests.getMovies(quizResults, removedGenres, years))
      .then((res) => {
        return res.data.results;
      });
    return rawInfo;
  };

  // function that maps through raw movie list
  // and merges collection ids and taglines for each movie
  const moreMovieInfo = (raw) => {
    const promises = raw.map(async (item) => {
      return Object.assign(item, await getTaglnCollection(item.id));
    });
    return Promise.all(promises);
  };

  //SECOND CALL...API call to TMDB for get tagline, collection ID, cast credits for a movie
  const getTaglnCollection = async (checkMovieId) => {
    const response = await axios.get(requests.getMovieInfo(checkMovieId));
    const resTagline = {
      belongs_to_collection: response.data.belongs_to_collection,
      tagline: response.data.tagline,
      casts: response.data.credits.cast,
    };
    return resTagline;
  };

  //Add labels to the movies in the showcase array
  //This is required for the CSS to work
  const showcaseAddLabelIds = (showcasedmovies) => {
    if (!showcasedmovies) return;
    return new Promise((resolve) => {
      let size = 5;
      let ids = ["s1", "s2", "s3", "s4", "s5"];
      let listOfFive = showcasedmovies
        .slice(0, size)
        .map((movie, index) => ({ ...movie, labelindex: ids[index] }));
      resolve(listOfFive);
    });
  };

  const showMovieInfo = (check) => {
    if (showcase) {
      let filtered = showcase.filter((movie) => movie.labelindex === check);
      setMovieInfo(() => filtered[0]);
    }
  };

  //Result page can come from 2 locations, the quiz or the menu (which brings back to latest results)
  //This useEffect decides if we are going a new TMDB API call or showing the latest results
  //Only run once at page load
  useEffect(() => {
    const getAllInformation = async () => {
      //Get either movielist from local or do a fresh fetch call
      const movieres =
        preference.length <= 4 ? recentResults : await getRawInfo();

      // Intercept at this point
      // Take out any movie ids in movielist that are hidden ids
      const cleanMovieDetails = movieres.filter(
        (movie) => !hidden.includes(movie.id)
      );
      const allMovieDetails = await moreMovieInfo(cleanMovieDetails); // second API call to add more infromation to each movies
      setApiResults(allMovieDetails);
      const showcased = await showcaseAddLabelIds(allMovieDetails); //add first 5 movies to showcase on screen
      setShowcase(showcased);
      return showcased;
    };

    getAllInformation();
  }, []);

  //When flipping through movie result cards, we keep same actors and credits
  useEffect(() => {
    if (movieInfo && actorId) {
      let castInList = movieInfo.casts.some((cast) => cast.id === actorId.id);
      if (isCastInList && !castInList) {
        setActorId([]);
      }
      setIsCastInList(castInList);
    }
  }, [movieInfo, actorId]);

  //Event handler for when flipping through result cards
  const handleCheck = (e) => {
    setCheck(() => e.target.id);
    showMovieInfo(e.target.id);
  };

  //initiate first render of cards properly (to show all information)
  useEffect(() => {
    showMovieInfo(check);
  }, [showMovieInfo, check]);

  //after everything passes, valid results with movie list >5, localstorage is updated
  useEffect(() => {
    if (apiResults) {
      setRecentResults(apiResults);
    }
  });

  //are there 5 more movies to show?? toggle button on or off
  const handleReduceApiResults = async () => {
    if (apiResults.length - 5 >= 5) {
      const apiResCopy = apiResults;
      apiResCopy.splice(0, 5);
      setApiResults([...apiResCopy]);
      const getData3 = await showcaseAddLabelIds(apiResCopy); //add first 5 movies to showcase on screen
      setShowcase([...getData3]);
    }
  };

  const handleRender = (ids) => {
    console.log("handleReneder RAN");
    console.log(ids);
    // getmovieinfo(hidden).then((details) => setTrashedMovies([...details]));
  };

  let isShowcaseGood = !!showcase && showcase.length >= 5;

  if (!apiResults) return null;
  return (
    <Container
      maxWidth='lg'
      className={classes.container}
      component={motion.div}
      variants={containerVariants}
      initial='initial'
      animate='animate'
      exit='exit'>
      {isShowcaseGood ? (
        <>
          <ResultsOutput
            showcase={showcase}
            movieInfo={movieInfo}
            handleCheck={handleCheck}
            check={check}
            apiResultSize={apiResults.length - 5 >= 5}
            handleReduceApiResults={handleReduceApiResults}
          />

          <Divider variant='fullWidth' />
          <Typography variant='h4' color='secondary' align='left'>
            Main Cast (click on cards for actor information)
          </Typography>
        </>
      ) : (
        <TryAgain />
      )}

      <Grid
        className={classes.case_container}
        container
        direction='row'
        justifyContent='center'
        alignItems='stretch'>
        {movieInfo &&
          movieInfo.casts
            .map((cast) => (
              <MovieCast
                key={cast.id}
                cast={cast}
                actorid={(id) => setActorId(() => id)}
              />
            ))
            .slice(0, 6)}
      </Grid>

      {isCastInList && (
        <>
          <Divider variant='fullWidth' />
          <MovieList actorId={actorId} />
        </>
      )}
    </Container>
  );
};

export default Results;
