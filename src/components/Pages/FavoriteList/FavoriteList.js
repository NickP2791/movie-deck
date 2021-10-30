import React, { useEffect, useContext, useState, useCallback } from "react";
import axios from "../../Data/utils/axios";
import requests from "../../Data/utils/requests";
import useLocalStorage from "components/Hooks/useLocalStorage";
import { Link } from "react-router-dom";
import {
  FormGroup,
  Button,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { IoChevronForward } from "react-icons/io5";
import CheckBoxes from "./CheckBoxes";
import { PageContext } from "../../Context/PageContext";
import { motion } from "framer-motion";

//framer motion styling ++++++++++++++++++++++++++++++++++++++++++++++++++++++
const containerVariants = {
  hidden: {
    x: "100vw",
  },
  show: {
    x: 0,
    mass: 0.4,
    damping: 6,
    type: "spring",
    stiffness: 200,
    transition: { delay: 0.2, when: "beforeChildren" },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const columnVariants = {
  hidden: {
    y: "100vh",
  },
  show: (index) => ({
    y: 0,
    transition: {
      delay: index * 0.12,
      type: "spring",
      stiffness: 50,
    },
  }),
};

const buttonVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 2,
      type: "spring",
      stiffness: 100,
    },
  },
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const FavoriteList = () => {
  const { setPage } = useContext(PageContext);

  //used to create list, holds array of genre ids and description, called from TMDB
  const [genres, setGenres] = useState([]);

  //strip ids from genres, movies we keep
  const [movies, setMovies] = useLocalStorage("movies", []);

  //movies checked and we remove from movie array
  const [removedGenres, setRemovedGenres] = useLocalStorage(
    "removedGenres",
    []
  );

  // Results from questions
  const [preference, setPreference] = useLocalStorage("preference", []);

  useEffect(() => {
    setPage("Preferences-Genres");
  }, [setPage]);

  //if the user comes back to this page, all preferences are deleted
  //preferences come from the quiz answers
  useEffect(() => {
    setPreference([]);
  }, []);

  //function outside of useEffect able to use callback. If inside, API call twice
  const getGenreList = useCallback(async () => {
    const response = await axios.get(requests.getGenresList);
    setGenres([...response.data.genres]);
    const genreArray = await response.data.genres
      .map((id) => id.id) //extract ids
      .filter((eachID) => !removedGenres.includes(eachID)); //filter out what is in removedlist
    setMovies([...genreArray]);
    return response;
  }, [genres]);

  //fetch genre list from TMDB, parse out ids in movie state
  useEffect(() => {
    if (!genres?.length) {
      getGenreList();
    }
  }, [genres?.length]);

  const handleClick = ({ target }) => {
    let { value: id, checked } = target;

    if (checked === true) {
      minusMovie(id);
      plusRemovedGenres(id);
    } else {
      plusMovie(id);
      minusRemovedGenres(id);
    }
  };

  //functions used to make state changes
  const minusMovie = function (id) {
    setMovies((prev) => prev.filter((items) => items !== parseInt(id)));
  };
  const plusMovie = (id) => {
    setMovies((prev) => [...prev, parseInt(id)]);
  };
  const plusRemovedGenres = (id) => {
    setRemovedGenres((prev) => [...prev, parseInt(id)]);
  };
  const minusRemovedGenres = (id) => {
    setRemovedGenres((prev) => prev.filter((items) => items !== parseInt(id)));
  };

  return (
    <Container
      maxWidth='sm'
      component={motion.div}
      variants={containerVariants}
      initial='hidden'
      animate='show'
      exit='exit'>
      <Typography
        //material ui props
        variant='h2'
        color='secondary'
        align='center'
        style={{ marginTop: "10vh" }}>
        Movie Types
      </Typography>
      <Typography variant='h5' color='secondary' align='center'>
        Choose up to 8 genres to <u>REMOVE</u> from your search
      </Typography>

      {/* <motion.div> */}
      <Grid container spacing={5} style={{ paddingLeft: ".5em" }}>
        {/* Left column */}
        <Grid item xs={4}>
          <FormGroup>
            {genres.map(
              (type, index) =>
                index < 6 && (
                  <motion.div
                    variants={columnVariants}
                    custom={index}
                    key={type.id}>
                    <CheckBoxes
                      key={type.id}
                      type={type}
                      removedGenres={removedGenres}
                      handleClick={handleClick}
                    />
                  </motion.div>
                )
            )}
          </FormGroup>
        </Grid>

        {/* center column */}
        <Grid item xs={4}>
          <FormGroup>
            {genres.map(
              (type, index) =>
                index >= 6 &&
                index < 13 && (
                  <motion.div
                    variants={columnVariants}
                    custom={index}
                    key={type.id}>
                    <CheckBoxes
                      key={type.id}
                      type={type}
                      removedGenres={removedGenres}
                      handleClick={handleClick}
                    />
                  </motion.div>
                )
            )}
          </FormGroup>
        </Grid>

        {/* right column */}
        <Grid item xs={4}>
          <FormGroup>
            {genres.map(
              (type, index) =>
                index >= 13 && (
                  <motion.div
                    variants={columnVariants}
                    custom={index}
                    key={type.id}>
                    <CheckBoxes
                      key={type.id}
                      type={type}
                      removedGenres={removedGenres}
                      handleClick={handleClick}
                    />
                  </motion.div>
                )
            )}
          </FormGroup>
        </Grid>
      </Grid>
      {/* </motion.div> */}

      <Grid
        container
        justifyContent='center'
        component={motion.div}
        variants={buttonVariants}>
        <Grid item>
          <Link to='/favoriteyear'>
            <Button
              endIcon={<IoChevronForward fontSize='2em' />}
              variant='contained'
              color='primary'
              size='large'
              style={{ marginTop: "2em" }}>
              Next
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FavoriteList;
