import {
  Box,
  Container,
  Grid,
  FormControl,
  InputLabel,
  InputBase,
  Card,
  Avatar,
} from '@material-ui/core';
import {
  createStyles,
  alpha,
  Theme,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from '@material-ui/core/styles';
import React from 'react';
import '../../assets/css/Form.scss';
import './JobApplication.scss';
import CloseIcon from '@material-ui/icons/Close';
const JobApplications = (props) => {
  return (
    <>
      <Box className="form_group">
        <Grid container spacing={2}>
          <Grid Item md={12}>
            <Box className="job_appication_top_heading_wrapper">
              <h4 className="big_heading">Applications for this job</h4>
              <CloseIcon className="close_icon" onClick={props.handleClose} />
            </Box>
            <div className="border"></div>
            <h6 className="blue_comman_text" style={{ marginTop: '10px' }}>
              Total 35 applications
            </h6>
          </Grid>
        </Grid>
        <br />
        <br />

        <Box className="application_card_wrapper">
          <Grid container spacing={3}>
            <Grid Item md={6}>
              <Card className="application_card">
                <Box>
                  <Box className="applicant_details_wrapper">
                    <Avatar className="avatar">H</Avatar>
                    <Box>
                      <p className="blue_comman_text_dark">Eliza Lucas</p>
                      <p className="blue_comman_text">Total 35 applications</p>
                    </Box>
                  </Box>
                  <Box className="skill_wrapper">
                    <p className="blue_comman_text_dark">Skills</p>
                    <p className="blue_comman_text">
                      Coding, designing, graphics, website, app ui
                    </p>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid Item md={6}>
              <Card className="application_card">
                <Box>
                  <Box className="applicant_details_wrapper">
                    <Avatar className="avatar">H</Avatar>
                    <Box>
                      <p className="blue_comman_text_dark">Eliza Lucas</p>
                      <p className="blue_comman_text">Total 35 applications</p>
                    </Box>
                  </Box>
                  <Box className="skill_wrapper">
                    <p className="blue_comman_text_dark">Skills</p>
                    <p className="blue_comman_text">
                      Coding, designing, graphics, website, app ui
                    </p>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid Item md={6}>
              <Card className="application_card">
                <Box>
                  <Box className="applicant_details_wrapper">
                    <Avatar className="avatar">H</Avatar>
                    <Box>
                      <p className="blue_comman_text_dark">Eliza Lucas</p>
                      <p className="blue_comman_text">Total 35 applications</p>
                    </Box>
                  </Box>
                  <Box className="skill_wrapper">
                    <p className="blue_comman_text_dark">Skills</p>
                    <p className="blue_comman_text">
                      Coding, designing, graphics, website, app ui
                    </p>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid Item md={6}>
              <Card className="application_card">
                <Box>
                  <Box className="applicant_details_wrapper">
                    <Avatar className="avatar">H</Avatar>
                    <Box>
                      <p className="blue_comman_text_dark">Eliza Lucas</p>
                      <p className="blue_comman_text">Total 35 applications</p>
                    </Box>
                  </Box>
                  <Box className="skill_wrapper">
                    <p className="blue_comman_text_dark">Skills</p>
                    <p className="blue_comman_text">
                      Coding, designing, graphics, website, app ui
                    </p>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default JobApplications;
