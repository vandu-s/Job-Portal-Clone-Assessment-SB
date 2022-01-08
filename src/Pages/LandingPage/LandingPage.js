import { Grid } from '@material-ui/core';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Box, Card, CardContent, Container, Button } from '@material-ui/core';
import './landingPage.scss';
import logo1 from '../../assets/images/logo1.PNG';
import logo2 from '../../assets/images/logo2.PNG';
import logo3 from '../../assets/images/logo3.PNG';
import logo4 from '../../assets/images/logo4.PNG';
import logo5 from '../../assets/images/logo5.PNG';
import logo6 from '../../assets/images/logo6.PNG';
import logo7 from '../../assets/images/logo7.PNG';
import logo8 from '../../assets/images/logo8.PNG';
import Banner from '../../components/Banner/Banner';
const LandingPage = () => {
  return (
    <Layout>
      <Banner />

      <Box className="layout_padding">
        <Container fixed>
          <Grid container spacing={4}>
            <Grid item sm={12} md={2} />

            <Grid item sm={12} md={3}>
              <Box className="landing_page_heading">
                <h4>Why Us</h4>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item sm={12} md={2} />

            <Grid item sm={12} md={3}>
              <Card className="Card">
                <CardContent className="card_content">
                  <h4>
                    Get More
                    <br /> Visibility
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum odit error harum velit nulla voluptate quibusdam
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={12} md={3}>
              <Card className="Card">
                <CardContent className="card_content">
                  <h4>
                    Organize Your <br /> Candidate
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum odit error harum velit nulla voluptate quibusdam
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={12} md={3}>
              <Card className="Card">
                <CardContent className="card_content">
                  <h4>
                    Verify Their <br /> Abilites
                  </h4>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum odit error harum velit nulla voluptate quibusdam
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={12} md={2} />
          </Grid>
          <Grid container spacing={4}>
            <Grid item sm={12} md={2} />

            <Grid item sm={12} md={3}>
              <Box className="landing_page_heading">
                <h4>Companies Who Trust Us</h4>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item sm={12} md={2} />

            <Grid item sm={12} md={2}>
              <Box className="company_img_wrapper">
                <img src={logo1} alt="company_logo" />
              </Box>
            </Grid>
            <Grid item sm={12} md={2}>
              <Box className="company_img_wrapper">
                <img src={logo2} alt="company_logo" />
              </Box>
            </Grid>
            <Grid item sm={12} md={2}>
              <Box className="company_img_wrapper">
                <img src={logo3} alt="company_logo" />
              </Box>
            </Grid>
            <Grid item sm={12} md={2}>
              <Box className="company_img_wrapper">
                <img src={logo4} alt="company_logo" />
              </Box>
            </Grid>
            <Grid item sm={12} md={2}>
              <Box className="company_img_wrapper">
                <img src={logo5} alt="company_logo" />
              </Box>
            </Grid>
            <Grid item sm={12} md={1} />
          </Grid>
          <Grid container spacing={4}>
            <Grid item sm={12} md={3} />

            <Grid item sm={12} md={2}>
              <Box className="company_img_wrapper">
                <img src={logo6} alt="company_logo" />
              </Box>
            </Grid>
            <Grid item sm={12} md={2}>
              <Box className="company_img_wrapper">
                <img src={logo7} alt="company_logo" />
              </Box>
            </Grid>
            <Grid item sm={12} md={2}>
              <Box className="company_img_wrapper">
                <img src={logo8} alt="company_logo" />
              </Box>
            </Grid>
            <Grid item sm={12} md={2}>
              <Box className="company_img_wrapper">
                <img src={logo2} alt="company_logo" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default LandingPage;
