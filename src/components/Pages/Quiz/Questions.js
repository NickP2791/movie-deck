import React, { useState, useEffect, useContext } from "react";
import useLocalStorage from "components/Hooks/useLocalStorage";
import { useHistory } from "react-router-dom";
import Genres from "../../Data/utils/Genres";
import QuestCard from "./QuestCard";
import { PageContext } from "../../Context/PageContext";
import { Container, Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

//framer motion styling
const textVariants = {
  hidden: {
    x: "-100vw",
  },
  show: {
    x: 0,
    transition: {
      mass: 0.4,
      damping: 6,
      type: "spring",
      stiffness: 200,
    },
  },
};

const cardsContainerVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

const yoyoVariants = {
  hidden: { scale: 0.9 },
  show: {
    scale: 1.2,
    transition: { yoyo: 20 },
  },
};

const Questions = () => {
  const { setPage } = useContext(PageContext);
  const [movies, setMovies] = useLocalStorage("movies", []); //strip ids from genres
  const [preference, setPreference] = useLocalStorage("preference", []); // Results from questions
  //The whole genre list then reduced by movies prefered, then shuffled
  const [questList, setQuestList] = useState(() => {
    return Genres.filter((item) => movies.includes(item.id) === true).sort(
      () => Math.random() - 0.5
    );
  });
  const [questNum, setQuestNum] = useState(1); // Placeholer for number of questions asked
  const history = useHistory();

  //set page title in Header
  useEffect(() => {
    setPage(() => `Quiz - Question ${questNum} of 5`);
  }, [setPage, questNum]);

  const handlePref = (id) => {
    setPreference((prev) => [...prev, id]);
    setQuestNum((prev) => prev + 1);
    setQuestList((prev) => [...prev.splice(2, prev.length)]);
  };

  if (questNum > 5) {
    history.push({ pathname: "./Results" });
  }

  return (
    <Container
      maxWidth='md'
      component={motion.div}
      variants={textVariants}
      initial='hidden'
      animate='show'>
      <Typography
        variant='h3'
        color='secondary'
        align='center'
        style={{ paddingBottom: 0 }}>
        Rapid Fire Questions
      </Typography>

      <Grid
        container
        spacing={2}
        direction='row'
        justifyContent='center'
        alignItems='center'>
        <Grid
          item
          xs={12}
          sm={5}
          md={4}
          lg={5}
          component={motion.div}
          variants={cardsContainerVariant}
          initial='hidden'
          animate='show'>
          {questList[0] && (
            <QuestCard
              quiz={questList[0]}
              handlePref={(id) => handlePref(id)}
            />
          )}
        </Grid>
        <Grid
          component={motion.div}
          variants={yoyoVariants}
          item
          sm={1}
          style={{
            margin: "0 1em",
          }}>
          <Typography
            variant='h3'
            color='secondary'
            style={{ padding: "none", margin: "none" }}>
            OR
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} md={4} lg={5}>
          {questList[1] && (
            <QuestCard
              quiz={questList[1]}
              handlePref={(id) => handlePref(id)}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Questions;
