import {
  Box,
  Container,
  Grid,
  FormControl,
  InputLabel,
  InputBase,
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
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import '../../assets/css/Form.scss';
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';

// import Signup from '../../Pages/LoginAndSignup/Signup';

const Signup = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <form>
        <Grid container>
          <Grid container spacing={3}>
            <Box className="form_group">
              <Grid Item sm={12}>
                <Box className="form_heading_wrapper">
                  <h4>Signup</h4>
                </Box>
              </Grid>
              <Grid Item sm={12}>
                <p>I'm 'a'</p>
                <Box>
                  <Button bgColor="#43AFFF">
                    <MdIcons.MdOutlinePersonSearch className="buttonIcons" />
                    Recruiter
                  </Button>
                  <Button bgColor="#43AFFF">
                    <GrIcons.GrGroup className="buttonIcons" />
                    Candidate
                  </Button>
                </Box>
              </Grid>

              <Grid Item sm={12}>
                <InputLabel className="form_label">Full Name*</InputLabel>
                <InputBase
                  className="form_input"
                  placeholder="Enter your full name"
                  classes={{ focused: 'form_input_focused' }}
                />
              </Grid>
              <br />
              <Grid Item sm={12}>
                <InputLabel className="form_label">Email Address*</InputLabel>
                <InputBase
                  className="form_input"
                  placeholder="Enter your email"
                  classes={{ focused: 'form_input_focused' }}
                />
              </Grid>
              <br />
              <br />

              <Grid container spacing={3}>
                <Grid Item sm={5}>
                  <Box style={{ marginLeft: '50px!important' }}>
                    <InputLabel className="form_label">
                      Create Password*
                    </InputLabel>
                    <InputBase
                      className="form_input"
                      placeholder="Enter your password"
                      classes={{ focused: 'form_input_focused' }}
                    />
                  </Box>
                </Grid>
                <Grid Item sm={1} />

                <Grid Item sm={5}>
                  <InputLabel className="form_label">
                    Confirm Password*
                  </InputLabel>
                  <InputBase
                    className="form_input"
                    placeholder="Enter your password"
                    classes={{ focused: 'form_input_focused' }}
                  />
                </Grid>
              </Grid>
              <br />

              <Grid Item sm={12}>
                <InputLabel className="form_label">Skills*</InputLabel>
                <InputBase
                  className="form_input"
                  placeholder="Enter comma separated skills"
                  classes={{ focused: 'form_input_focused' }}
                />
              </Grid>
              <br />

              <Grid Item sm={12}>
                <Box className="login_btn_wrapper">
                  <Box>
                    <Button bgColor="#43AFFF">Signup</Button>
                  </Box>
                </Box>
                <Box className="bottom_txt_wrapper">
                  <p className="form_label">New to MyJobs?&nbsp; </p>
                  <p className="sky_blue_text" onClick={handleOpen}>
                    {' '}
                    Create and account
                  </p>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
      <Modal handleOpen={handleOpen} open={open} handleClose={handleClose}>
        <Signup />
      </Modal>
    </div>
  );
};

export default Signup;
