import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Box } from '@material-ui/core';
import Button from '../../components/Button/Button';
import './JobPosted.scss';
import jobImg from '../../assets/images/job.PNG';
import Banner from '../../components/Banner/Banner2';

const JobPostedByYouEmpty = () => {
  return (
    <Layout>
      <Banner />

      <Container>
        <Box className="JobPostedWrapper">
          <Box className="JobPostedWrapper_content">
            <img src={jobImg} alt="JOB_IMG" />
            <p>Your posted jobs will show here!</p>
            <Button bgColor="#43AFFF">Post a Job</Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default JobPostedByYouEmpty;
