import React from "react";
import ReactDOM from "react-dom";
import requests from "../Data/utils/requests";
import { FaWindowClose } from "react-icons/fa";
import {
  Button,
  Card,
  CardActions,
  Typography,
  Grid,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

//material UI styling
const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "150%",
  },
  cardActions: {
    position: "absolute",

    right: 2,
    top: 2,
  },
  Popup_Style: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -46%)",
    maxHeight: "90vh",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      transform: "translate(-50%, -45%)",
      maxHeight: "82vh",
      width: "85%",
    },

    padding: "1em",
    zIndex: 11000,
    overflowY: "auto",
  },
  Overlay_Styles: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.8)",
    zIndex: 1000,
  },
}));

const ActorPopup = ({ open, onClose, bio }) => {
  const classes = useStyles();

  const { name, birthday, place_of_birth, biography, profile_path, deathday } =
    bio;

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className={classes.Overlay_Styles}>
        <Card
          className={classes.Popup_Style}
          style={{ justifyContent: "center" }}>
          <CardActions className={classes.cardActions}>
            <Button
              variant='outlined'
              onClick={onClose}
              size='small'
              style={{ minWidth: 10, border: "none", color: "white" }}>
              <FaWindowClose style={{ fontSize: "2em" }} />
            </Button>
          </CardActions>
          <Grid container spacing={2} style={{ padding: "1em" }}>
            <Grid item xs={3} md={2}>
              {profile_path !== undefined && (
                <CardMedia
                  className={classes.cardMedia}
                  image={requests.getImage(profile_path)}
                />
              )}
            </Grid>
            <Grid item xs={8} md={6}>
              <Typography variant='body1'>{`Name: ${name}`}</Typography>
              <Typography variant='body1'>{`Place of Birth: ${place_of_birth}`}</Typography>
              <Typography variant='body1'>{`Born: ${birthday}`}</Typography>
              {deathday && (
                <Typography variant='body1'>{`Died: ${deathday}`}</Typography>
              )}
            </Grid>
          </Grid>
          <Typography variant='body2' style={{ position: "relative" }}>
            {biography}
          </Typography>
        </Card>
      </div>
    </>,

    document.getElementById("popup")
  );
};

export default ActorPopup;
