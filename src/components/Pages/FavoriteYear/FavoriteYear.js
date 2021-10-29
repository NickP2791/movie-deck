import React, { useEffect, useContext, useState } from "react";
import useLocalStorage from "components/Hooks/useLocalStorage";
import { Link } from "react-router-dom";
import { Slider, Typography, Button, Container, Grid } from "@material-ui/core";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./FavoriteYear.css";
import { sliderticks } from "../../Data/utils/sliderticks";
import YearDisplay from "./YearDisplay";
import { PageContext } from "../../Context/PageContext";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    // opacity: 0,
    x: "100vw",
  },
  show: {
    x: 0,
    // opacity: 1,
    mass: 0.4,
    damping: 6,
    type: "spring",
    stiffness: 200,
    transition: {
      delay: 0.2,
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const rightBtnVariants = {
  hidden: { x: "100vw" },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      type: "spring",
      stiffness: 100,
    },
  },
};

const FavoriteYear = () => {
  const { setPage } = useContext(PageContext);
  //This is the years displaying on the screen
  const [years, setYears] = useLocalStorage("years", [1970, 1980]);
  //because the slider for the years run from right to left, had to run
  //some math to make that happen. This is years running in to background
  const [internalYears, setInternalYears] = useState();

  //set page title in Header
  useEffect(() => {
    setPage("Preferences-Years");
  }, [setPage]);

  useEffect(() => {
    setInternalYears(years);
  }, []);

  const handleYear = (e, data) => {
    setInternalYears(data);
  };

  const postYear = () => {
    setYears(internalYears);
  };

  if (!internalYears) return null;
  return (
    <Container
      component={motion.div}
      initial='hidden'
      animate='show'
      exit='exit'
      variants={containerVariants}>
      <Grid container justifyContent='center' style={{ marginTop: "20vh" }}>
        <Grid item xs={12} align='center'>
          <Typography variant='h2' color='secondary'>
            Movie Years
          </Typography>
          <YearDisplay years={internalYears} />
        </Grid>
        <Grid item xs={10} align='center'>
          <Slider
            min={1969}
            max={2021}
            marks={sliderticks}
            value={internalYears}
            onChange={handleYear}
            aria-labelledby='range-slider'
          />
        </Grid>
        <Grid
          component={motion.div}
          variants={rightBtnVariants}
          container
          spacing={2}
          justifyContent='center'
          style={{ marginTop: "2em" }}>
          <Grid item xs={6} align='right'>
            <Link to='/favoritelist'>
              <Button
                startIcon={<IoChevronBack fontSize='2em' />}
                variant='contained'
                color='primary'
                size='large'
                style={{ margin: "0 1em" }}
                onClick={() => postYear()}>
                Previous
              </Button>
            </Link>
          </Grid>

          <Grid item xs={6} align='left'>
            <Link to='/questions'>
              <Button
                endIcon={<IoChevronForward fontSize='2em' />}
                variant='contained'
                color='primary'
                size='large'
                style={{ margin: "0 1em" }}
                onClick={() => postYear()}>
                Next
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FavoriteYear;
