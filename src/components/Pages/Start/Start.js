import React, { useEffect, useContext } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import "./Start.css";
import { Link } from "react-router-dom";
import imgleft from "components/Data/images/BGLayer2a.png";
import imgright from "components/Data/images/BGLayer2b.png";
import { PageContext } from "../../Context/PageContext";
import { motion } from "framer-motion";

export const Start = () => {
  const { setPage } = useContext(PageContext);

  //set page title in Header
  useEffect(() => {
    setPage("Intro");
  }, [setPage]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { delay: 0.6, duration: 0.8, when: "beforeChildren" },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      scale: 0,
      y: 250,
    },
    show: {
      scale: 1.3,
      y: 0,
      transition: {
        delay: 2,
        type: "spring",
        stiffness: 500,
      },
    },
  };

  const popcornLeftVariants = {
    hidden: {
      x: "-100vw",
    },
    show: {
      x: 0,
      transition: { delay: 0.7, type: "spring", stiffness: 50 },
    },
  };

  const popcornRightVariants = {
    hidden: {
      x: "100vw",
    },
    show: {
      x: 0,
      transition: { delay: 0.9, type: "spring", stiffness: 70 },
    },
  };

  return (
    <Container
      className='home_container'
      component={motion.div}
      variants={containerVariants}
      initial='hidden'
      animate='show'
      exit='exit'>
      <div className='start'>
        <div className='section__top'>
          <Typography variant='h3' color='secondary' align='center'>
            Welcome to MovieDECK
          </Typography>
          <Typography variant='h4' color='secondary'>
            DISCOVER movies ...
          </Typography>
          <Typography variant='h5' color='secondary' align='center'>
            with just a few clicks and find movies you never thought watching.
          </Typography>

          <Link to='/favoritelist'>
            <Button
              // framer props
              component={motion.div}
              variants={buttonVariants}
              // material ui props
              variant='contained'
              color='primary'
              size='large'
              style={{ marginTop: ".6em", zIndex: "10" }}>
              Let's Begin
            </Button>
          </Link>
        </div>
        <div className='section__bottom'>
          <motion.img
            variants={popcornLeftVariants} //framer prop
            id='imgleft'
            src={imgleft}
            height='100%'
            width='100%'
            alt=''
          />
          <motion.img
            variants={popcornRightVariants}
            id='imgright'
            src={imgright}
            height='100%'
            width='100%'
            alt=''
          />
        </div>
      </div>
    </Container>
  );
};

export default Start;
