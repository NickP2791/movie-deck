import React, { useState } from "react";
import axios from "components/Data/utils/axios";
import requests from "components/Data/utils/requests";
import ActorPopup from "../../ActorPopup";
import {
  Card,
  CardMedia,
  Typography,
  Grid,
  makeStyles,
  Button,
  Divider,
} from "@material-ui/core";
import noman from "components/Data/images/noman.jpg";
import nowoman from "components/Data/images/nowoman.jpg";

//material UI styling
const useStyles = makeStyles({
  btn: {
    textTransform: "none",
  },
  card: {
    padding: ".4em",
    backgroundColor: "black",
    width: "min(30vw, 150px)",
  },
  cardMedia: {
    paddingTop: "150%",
  },
});

const MovieCast = ({ cast, actorid }) => {
  const { name, character, profile_path, id, gender } = cast;
  const [openPopup, setOpenPopup] = useState(false);
  const [bio, setBio] = useState([]);
  const classes = useStyles();

  const handleOpenPopup = () => {
    getCastBio();
    setOpenPopup(true);
  };

  const getCastBio = async () => {
    const castBio = await axios.get(requests.getBio(id));
    setBio(castBio.data);
  };

  const genderPhoto = gender === 1 ? nowoman : noman;

  return (
    <>
      <Grid item xs={4} sm={3} md={2} align='center'>
        <Button onClick={handleOpenPopup} className={classes.btn}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={
                profile_path
                  ? requests.getImageSmall(profile_path)
                  : genderPhoto
              }
            />
            <Typography
              variant='body2'
              color='secondary'
              align='center'
              display='block'>
              {name}
            </Typography>
            <Divider />
            <Typography
              variant='body2'
              color='secondary'
              align='center'
              style={{ fontStyle: "italic" }}>
              {character}
            </Typography>
          </Card>
        </Button>
        <Button
          variant='contained'
          color='primary'
          size='small'
          onClick={() => actorid({ id, name })}>
          See Movie List
        </Button>
      </Grid>

      <ActorPopup
        bio={bio}
        open={openPopup}
        onClose={() => setOpenPopup(false)}></ActorPopup>
    </>
  );
};

export default MovieCast;
