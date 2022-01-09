import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Box, Grid, Card } from '@material-ui/core';
import './JobPosted.scss';
import jobImg from '../../assets/images/job.PNG';
import Banner from '../../components/Banner/Banner2';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '../../components/Button/Button';
import axios from 'axios';
import PostJob from '../../Pages/PostJob/PostJob';
import Modal from '../../components/Modal/Modal';

const JobPosted = () => {
  const [myJobs, setMyJobs] = useState({});
  const [open, setOpen] = React.useState(false);

  const config = {
    headers: {
      Authorization: localStorage.getItem('token'),
      type: 'text',
    },
  };
  // console.log('config', config);
  const getJobs = async () => {
    await axios
      .get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs`, config)
      .then((res) => {
        console.log(res.data.message);
        setMyJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getJobs();
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Layout>
        <Banner />
        <Container>
          {myJobs.message === 'No jobs posted' ? (
            <Box className="JobPostedWrapper">
              <Box className="JobPostedWrapper_content">
                <img src={jobImg} alt="JOB_IMG" />
                <p>Your posted jobs will show here!</p>
                <Button bgColor="#43AFFF" onClick={handleOpen}>
                  Post a Job
                </Button>
              </Box>
            </Box>
          ) : (
            <Box className="layout_main_container2">
              <Box className="Job_Posted_Wrapper">
                <h3>Jobs Posted by you</h3>
                <Grid container spacing={3}>
                  <Grid item sm={12} md={3}>
                    <Card className="job_card">
                      <p className="blue_comman_text_dark">UI UX Designer</p>
                      <p className="blue_comman_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore debitis rerum repudiandae harum quam nemo!
                      </p>
                      <Box className="job_card_contents">
                        <LocationOnIcon className="location_icons" />
                        <p className="blue_comman_text">Bengluru</p>
                        <Button bgColor="#43AFFF">View Applications</Button>
                      </Box>
                    </Card>
                  </Grid>
                  <Grid item sm={12} md={3}>
                    <Card className="job_card">
                      <p className="blue_comman_text_dark">UI UX Designer</p>
                      <p className="blue_comman_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore debitis rerum repudiandae harum quam nemo!
                      </p>
                      <Box className="job_card_contents">
                        <Box display="flex" alignItems="center">
                          <LocationOnIcon className="location_icons" />
                          <p className="blue_comman_text">Bengluru</p>
                        </Box>
                        <Button bgColor="#43AFFF">View Applications</Button>
                      </Box>
                    </Card>
                  </Grid>
                  <Grid item sm={12} md={3}>
                    <Card className="job_card">
                      <p className="blue_comman_text_dark">UI UX Designer</p>
                      <p className="blue_comman_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore debitis rerum repudiandae harum quam nemo!
                      </p>
                      <Box className="job_card_contents">
                        <LocationOnIcon className="location_icons" />
                        <p className="blue_comman_text">Bengluru</p>
                        <Button bgColor="#43AFFF">View Applications</Button>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          )}
          <Modal handleOpen={handleOpen} open={open} handleClose={handleClose}>
            <PostJob />
          </Modal>
        </Container>
      </Layout>
    </>
  );
};

export default JobPosted;
