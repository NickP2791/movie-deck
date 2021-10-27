import React from "react";
import requests from "../../Data/utils/requests";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import AddFavBtn from "components/Buttons/AddFavBtn";
import AddTrashBtn from "components/Buttons/AddTrashBtn";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    scale: 0,
    y: 0,
  },
  show: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    scale: 0.2,
    y: "-100vh",
    transition: {
      duration: 0.5,
    },
  },
};

const collectionCard = makeStyles((theme) => ({
  card: {
    padding: ".2em 0",
    border: "1px solid rgb(22, 22, 22)",
    "&:hover $card__content": {
      transform: " rotateY(.5turn)",
    },
  },
  card__content: {
    position: "relative",
    paddingTop: "150%",
    transition: "transform 1s",
    backgroundColor: "#50546B",
    transformStyle: "preserve-3d",
  },
  card__front: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    outline: "2px solid rgb(22, 22, 22)",
    backfaceVisibility: "hidden",
  },
  card__back: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: ".3em",
    outline: "4px solid rgb(22, 22, 22)",
    transform: "rotateY(.5turn)",
    backgroundColor: "rgb(37, 37, 37)",
    backfaceVisibility: "hidden",
  },

  card__title: {
    paddingTop: "150%",
  },
  textOverview: {
    [theme.breakpoints.up("sm")]: {
      lineHeight: "1.2",
    },
  },
}));

const CollectionCard = ({ movie, cardType, handleRender }) => {
  const classes = collectionCard();

  const noPosterMessage = (
    <div className={classes.card__front}>
      <Typography variant='h4' color='secondary' align='center'>
        {movie.overview}
      </Typography>
      <Typography variant='h6' color='secondary' align='center'>
        ...is so NEW, there is no poster for it yet
      </Typography>
    </div>
  );

  if (!movie) return null;
  return (
    <Grid
      item
      xs={10}
      sm={5}
      md={4}
      lg={3}
      className={classes.card__grid}
      component={motion.div}
      variants={cardVariants}
      initial='hidden'
      animate='show'
      exit='exit'>
      <div className={classes.card}>
        <div className={classes.card__content}>
          {movie.poster_path ? (
            <img
              className={classes.card__front}
              src={requests.getImage(movie.poster_path)}
              alt={movie.name}
              width='100%'
            />
          ) : (
            noPosterMessage
          )}
          <div className={classes.card__back}>
            <div className='top'>
              <Typography variant='h5' color='secondary' align='center'>
                {/* movies use 'title', tv shows use 'name' */}
                {movie.title ? movie.title : movie.name}
              </Typography>
              <Typography variant='h6' color='secondary' align='center'>
                {/* tv shows have no release date */}
                {movie.release_date && `(${movie.release_date})`}
              </Typography>

              <Typography
                variant='body2'
                color='secondary'
                align='justify'
                className={classes.textOverview}>
                {movie.overview}
              </Typography>
            </div>
            <div className='bottom'>
              {cardType === "wishlist" ? (
                <AddFavBtn movieId={movie.id} />
              ) : (
                <AddTrashBtn movieId={movie.id} handleRender={handleRender} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default CollectionCard;
