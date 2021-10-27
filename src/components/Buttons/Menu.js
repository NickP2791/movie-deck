import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Box,
  SwipeableDrawer,
  Divider,
  ListItemText,
  ListItem,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdTrendingUp, MdInfoOutline } from "react-icons/md";
import { ImCompass2 } from "react-icons/im";
import { BsEyeSlash } from "react-icons/bs";
import { RiArrowGoBackLine } from "react-icons/ri";

const useStyles = makeStyles({
  listText: { paddingLeft: "1em" },
  iconButton: { marginLeft: ".3em" },
});

const Menu = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const menuItems = [
    {
      text: "Fun Quiz",
      icon: <ImCompass2 />,
      path: "/favoritelist",
    },
    {
      text: "Back to latest results",
      icon: <RiArrowGoBackLine />,
      path: "/results",
    },
    {
      text: "What's trending",
      icon: <MdTrendingUp />,
      path: "/trending",
    },
    {
      text: "Edit hidden movies",
      icon: <BsEyeSlash />,
      path: "/hiddenmovielist",
    },

    {
      text: "About",
      icon: <MdInfoOutline />,
      path: "/",
    },
  ];

  return (
    <div>
      <IconButton
        className={classes.iconButton}
        edge='start'
        aria-label='open drawer'
        onClick={() => {
          setOpen(true);
        }}>
        <GiHamburgerMenu />
      </IconButton>
      <SwipeableDrawer
        className={classes.drawer}
        anchor='right'
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {
          setOpen(true);
        }}>
        <Box sx={{ textAlign: "center", fontSize: "1.5em" }}>
          Main
          <Divider />
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}>
              {item.icon}
              <ListItemText
                color='secondary'
                primary={item.text}
                className={classes.listText}
              />
            </ListItem>
          ))}
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default Menu;
