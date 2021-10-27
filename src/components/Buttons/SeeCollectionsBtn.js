import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const SeeCollectionsBtn = ({ movieInfo }) => {
  return (
    <Link to={`/collection/${movieInfo.belongs_to_collection.id}`}>
      <Button
        variant='contained'
        color='primary'
        size='small'
        style={{ zIndex: "10", marginLeft: "1em" }}>
        See Collection
      </Button>
    </Link>
  );
};

export default SeeCollectionsBtn;
