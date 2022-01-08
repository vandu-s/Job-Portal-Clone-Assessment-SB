import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import Button from '../Button/Button';
import Modal from '../../components/Modal/Modal';
import '../../assets/css/Form.scss';
import './Banner.scss';
import girlImg from '../../assets/images/girlOffice.png';

import Login from '../../Pages/LoginAndSignup/Login';

const Banner = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box className="banner">
        <Container maxWidth="lg">
          <Box className="nav">
            <h4>
              My<span>Jobs</span>
            </h4>
            <Button bgColor="#43AFFF33" onClick={handleOpen}>
              Login/Signup
            </Button>
          </Box>
          <Grid container>
            <Grid item sm={12} lg={4}>
              <Box className="banner_heading">
                <h1>Welcome to </h1>
                <h1>
                  <span>My</span>Jobs{' '}
                </h1>
                <Button clasName="started-btn" bgColor="#43AFFF">
                  Get Started
                </Button>
              </Box>
            </Grid>
            <Grid item sm={12} lg={4} />
            <Grid item sm={12} lg={4}>
              <Box className="banner_img">
                <img src={girlImg} alt="girlImg" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Modal handleOpen={handleOpen} open={open} handleClose={handleClose}>
        <Login />
      </Modal>
    </>
  );
};

export default Banner;
