import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

const checkboxStyle = makeStyles({
  checkbox: {
    color: "#FBE69E",
    padding: ".15em",
  },
});

const CheckBoxes = ({ type, removedGenres, handleClick }) => {
  const classes = checkboxStyle();

  const checkedTest = () => {
    return removedGenres.length > 7;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.2, originX: 0 }}
      transition={{ type: "spring", stiffness: 500 }}>
      <FormControlLabel
        key={type.id}
        value={type.id}
        control={
          <Checkbox
            className={classes.checkbox}
            key={type.id}
            checked={removedGenres.includes(type.id)}
            value={type.id}
            disabled={checkedTest() && !removedGenres.includes(type.id)}
            onChange={(e) => {
              handleClick(e);
            }}
          />
        }
        label={type.name}
        labelPlacement='end'
      />
    </motion.div>
  );
};

export default CheckBoxes;
