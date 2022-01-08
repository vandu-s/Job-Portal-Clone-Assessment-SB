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
import Signup from '../../Pages/LoginAndSignup/Signup';

const ForgetPassword = () => {
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
          <Grid container spacing={2}>
            <Box className="form_group">
              <Grid Item sm={12}>
                <Box className="form_heading_wrapper">
                  <h4>Forgot your password?</h4>
                </Box>
              </Grid>
              <Grid Item sm={12}>
                <InputLabel className="form_label">
                  Enter the email associated with your account and we’ll send
                  you instructions to reset your password.
                </InputLabel>
              </Grid>

              <Grid Item sm={12}>
                <InputLabel className="form_label">Email Address</InputLabel>
                <InputBase
                  className="form_input"
                  placeholder="Enter your email"
                  classes={{ focused: 'form_input_focused' }}
                />
              </Grid>
              <Grid Item sm={12}>
                <Box className="login_btn_wrapper">
                  <Box>
                    <Button bgColor="#43AFFF">Submit</Button>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ForgetPassword;
