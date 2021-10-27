import React from "react";
import CardImage from "../../Data/utils/CardImage";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

//material UI styling
const cardStyle = makeStyles((theme) => ({
  card_title: {
    fontSize: (quiz) => quiz.name === "Science Fiction" && "2.2em",
    lineHeight: (quiz) => quiz.name === "Science Fiction" && "1.8",
  },
  card__image__container: {
    width: "100%",
    paddingTop: "119%",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "60%",
    },
    border: "2px solid black",
    borderRadius: " 10px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "center",
    },
    position: "relative",
    height: "200px",
  },
  content: {
    fontWeight: "700",
    position: "absolute",
    top: (quiz) => ![18, 28].includes(quiz.id) && 7, //special case for drama or action card
    bottom: (quiz) => [18, 28].includes(quiz.id) && 7,
    textTransform: "none",
    textAlign: (quiz) =>
      quiz.direction === "left"
        ? "right"
        : quiz.direction === "right"
        ? "left"
        : "center",
    left: (quiz) => (quiz.direction === "left" ? 100 : 10),
    right: (quiz) => (quiz.direction === "right" ? 100 : 10),
    color: (quiz) => quiz.text_color,
    backgroundColor: (quiz) => !!quiz.backgroundcolor && quiz.backgroundcolor,
  },
}));

//framer motion styling
const cardVariants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
};

const QuestCard = ({ quiz, handlePref }) => {
  const classes = cardStyle(quiz);
  const path = CardImage[quiz.id];
  const whatToAsk = Math.random() < 0.5 ? quiz.question_1 : quiz.question_2;

  return (
    <Grid
      container
      justifyContent='center'
      component={motion.div}
      variants={cardVariants}
      initial='hidden'
      animate='show'>
      <Grid item xs={12}>
        <Typography
          variant='h3'
          color='secondary'
          align='center'
          className={classes.card_title}>
          {quiz.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          className={classes.card__image__container}
          style={{
            backgroundImage: `url(${path})`,
          }}
          onClick={() => handlePref(quiz.id)}>
          <Grid item xs={2}>
            <Typography variant='h4' className={classes.content}>
              {whatToAsk}
            </Typography>
          </Grid>
        </Button>
      </Grid>
    </Grid>
  );
};

export default QuestCard;
/*{ <p></p> }*/
