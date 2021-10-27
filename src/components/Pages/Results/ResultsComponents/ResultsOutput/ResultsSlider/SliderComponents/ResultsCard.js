import React from "react";
import requests from "components/Data/utils/requests";
import "./ResultsCard.css";
import nophoto from "components/Data/images/nophoto.jpg";

const ResultsCard = ({ movie, index }) => {
  console.log(movie);

  return (
    <label htmlFor={`s${index}`} id={`slide${index}`}>
      {
        <img
          id={movie.id}
          src={
            movie.poster_path ? requests.getImage(movie.poster_path) : nophoto
          }
          alt={movie.title}
          height='100%'
          min-width='100%'
        />
      }
    </label>
  );
};

export default React.memo(ResultsCard);
