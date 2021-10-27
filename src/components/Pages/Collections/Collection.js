import React, { useEffect, useState, useContext } from "react";
import axios from "../../Data/utils/axios";
import requests from "../../Data/utils/requests";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { IoChevronBack } from "react-icons/io5";
import CollectionCard from "./CollectionCard";
import { PageContext } from "../../Context/PageContext";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: ".5em",
  },
  grid_container: {
    position: "relative",
  },
  button_return: {
    position: "absolute",
    top: 0,
  },
  text_section: { marginTop: "42px" },
}));

const Collection = ({ match }) => {
  const { setPage } = useContext(PageContext);
  const [collection, setCollection] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    setPage("Collections");
  }, [setPage]);

  useEffect(() => {
    const getCollectionInfo = async () => {
      const response = await axios.get(requests.getCollection(match.params.id));
      const collectionInfo = await response.data;
      setCollection(collectionInfo);
    };
    getCollectionInfo();
  }, [match.params.id]);

  return (
    <div>
      <Container maxWidth='lg' className={classes.container}>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          className={classes.grid_container}>
          <Grid item xs={12} sm={7} md={6}>
            <Link to='/results'>
              <Button
                className={classes.button_return}
                startIcon={<IoChevronBack fontSize='2em' />}
                variant='contained'
                color='primary'
                size='large'
                style={{
                  marginTop: ".2em",
                  position: "absolute",
                }}>
                Go Back To Results
              </Button>
            </Link>

            <Typography
              className={classes.text_section}
              variant='h3'
              color='secondary'
              align='center'
              gutterBottom>
              {collection && collection.name}
            </Typography>
            <Typography
              variant='body2'
              color='secondary'
              align='center'
              gutterBottom>
              {collection && collection.overview}
            </Typography>
          </Grid>

          <Grid
            item
            // xs={12}
            sm={5}
            md={4}
            lg={4}
            align='center'>
            {collection && (
              <img
                src={`https://image.tmdb.org/t/p/w500${collection.poster_path}`}
                alt={collection.name}
                width='90%'
              />
            )}
          </Grid>
        </Grid>
      </Container>
      <Divider variant='fullWidth' />
      <Container maxWidth='lg'>
        <Grid container spacing={2} justifyContent='center'>
          {collection &&
            collection.parts.map((movie) => (
              <CollectionCard
                movie={movie}
                key={movie.id}
                cardType={"wishlist"}
              />
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Collection;
