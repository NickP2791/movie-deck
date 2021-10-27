import React from "react";
import useLocalStorage from "components/Hooks/useLocalStorage";
import { Button } from "@material-ui/core";
import { FaTrash } from "react-icons/fa";

const AddTrashBtn = ({ movieId, handleRender }) => {
  //Movies ids in local storage, initial state
  // const { hidden, setHidden } = useContext(HiddenContext); //movie ids
  const [hidden, setHidden] = useLocalStorage("hidden", []);

  console.log("1", hidden);

  const handleTrash = (id) => {
    // test if id is in array
    const test = hidden.includes(id);
    if (test) {
      setHidden((hidden) => hidden.filter((movie) => movie !== id));
    } else {
      setHidden([...hidden, id]);
    }
    //check to see if exist, function only used when button is rendered
    //in the HiddenMovieList page. function not sent if on the results page
    handleRender && handleRender();
  };

  return (
    <Button
      variant='contained'
      size='small'
      style={{ backgroundColor: "#ED6C02", color: "white" }}
      onClick={() => handleTrash(movieId)}>
      <FaTrash style={{ margin: "0 .5em" }} />
      {hidden.includes(movieId) ? "Remove" : "Hide in future results"}
    </Button>
  );
};

export default AddTrashBtn;
