import React, { useContext } from "react";
import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../Data/images/Movielogo.png";
import { makeStyles } from "@material-ui/core";
import { PageContext } from "components/Context/PageContext";
import { FavoriteContext } from "components/Context/FavoriteContext";
import Menu from "components/Buttons/Menu";

const useStyles = makeStyles((theme) => ({
  appbar: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
  },
  item: {
    flex: "1 1 33%",
    display: "flex",
    alignItems: "center",
    "&:nth-child(3)": {
      justifyContent: "flex-end",
    },
    "&:nth-child(2)": {
      justifyContent: "center",
      order: 0,
      [theme.breakpoints.down("xs")]: {
        order: 1,
        flex: "1 1 12em",
      },
    },
  },
  fineline: {
    display: "flex",
    borderBottom: "2px solid rgb(251, 230, 158)",
  },
  title: {
    fontFamily: "Bangers, cursive",
    fontSize: "3.5vh",
    marginLeft: "0.2em",
    transform: "translateY(6px)",
  },
  logo: {
    maxHeight: "2em",
    // maxWidth: ".5em",
  },
}));

const Header = () => {
  const { page } = useContext(PageContext);
  const { favorites } = useContext(FavoriteContext);
  const classes = useStyles();

  return (
    <AppBar position='sticky'>
      <Toolbar className={classes.appbar}>
        <div className={classes.item}>
          <img className={classes.logo} src={logo} alt='logo' />
          <div className={classes.fineline}>
            <Link to='/'>
              <Typography color='secondary' className={classes.title}>
                Movie Deck
              </Typography>
            </Link>
          </div>
        </div>

        <div className={classes.item}>
          <Typography
            className={classes.pageName}
            color='secondary'
            variant='h5'>
            {page}
          </Typography>
        </div>

        <div className={classes.item}>
          <Link to='/wishlist'>
            <IconButton
              size='medium'
              aria-label={`show ${
                !!favorites ? favorites.length : "0"
              } favorites`}
              color='secondary'>
              <Badge
                badgeContent={!!favorites ? favorites.length : "0"}
                color='error'>
                <MdFavorite style={{ fontSize: "1.2em" }} />
              </Badge>
            </IconButton>
          </Link>
          <Menu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
