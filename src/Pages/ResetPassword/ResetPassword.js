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

const ResetPassword = () => {
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
                  <h4>Reset Your Password</h4>
                </Box>
              </Grid>
              <Grid Item sm={12}>
                <InputLabel className="form_label">
                  Enter your new password below.{' '}
                </InputLabel>
              </Grid>
              <br />
              <Grid Item sm={12}>
                <InputLabel className="form_label">New password</InputLabel>
                <InputBase
                  className="form_input"
                  placeholder="Enter your password"
                  classes={{ focused: 'form_input_focused' }}
                />
              </Grid>
              <br />

              <Grid Item sm={12}>
                <InputLabel className="form_label">
                  Confirm new password
                </InputLabel>
                <InputBase
                  className="form_input"
                  placeholder="Enter your password"
                  classes={{ focused: 'form_input_focused' }}
                />
              </Grid>
              <br />

              <Grid Item sm={12}>
                <Box className="login_btn_wrapper">
                  <Box>
                    <Button bgColor="#43AFFF">Reset</Button>
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

export default ResetPassword;
