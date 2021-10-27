import React, { useState, useEffect } from "react";
import { TiArrowUpOutline } from "react-icons/ti";
import { IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  iconButton: {
    position: "fixed",
    bottom: "3vh",
    right: "3%",
    zIndex: 10,
    // fontSize: "3em",
    backgroundColor: "rgba(150,150,1,.8)",
    "&:hover, &Mui-focusVisible": {
      transition: ".5s",
      backgroundColor: "rgba(70,70,1,.8)",
    },
  },
});

const Scroll = ({ showBelow }) => {
  const classes = useStyles();
  const [show, setShow] = useState(!showBelow);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: "smooth" });
  };

  console.log(show);
  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          size='medium'
          className={classes.iconButton}>
          <TiArrowUpOutline />
        </IconButton>
      )}
    </div>
  );
};

export default Scroll;
