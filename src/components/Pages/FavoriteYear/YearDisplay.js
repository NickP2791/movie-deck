import { Typography } from "@material-ui/core";
import React from "react";

const YearDisplay = ({ years }) => {
  //convertion math required to display slider for rigth to left
  const yearConvert = (yr) => -yr + 2020 + 1970;
  let highYear = yearConvert(years[0]);
  let lowYear = yearConvert(years[1]);

  return (
    <Typography variant='h3' color='secondary'>
      {`${highYear} to ${lowYear}`}
    </Typography>
  );
};

export default YearDisplay;
