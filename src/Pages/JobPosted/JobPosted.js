import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Box, Grid, Card } from '@material-ui/core';
import './JobPosted.scss';
import jobImg from '../../assets/images/job.PNG';
import Banner from '../../components/Banner/Banner2';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '../../components/Button/Button';

const JobPosted = () => {
  return (
    <Layout>
      <Banner />

      <Container>
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
      </Container>
    </Layout>
  );
};

export default JobPosted;
