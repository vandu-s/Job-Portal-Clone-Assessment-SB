import { Box, Grid, InputLabel, InputBase } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import '../../assets/css/Form.scss';
import ResetPassword from '../../Pages/ResetPassword/ResetPassword';
import axios from 'axios';
const ForgetPassword = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const initialState = {
    email: '',
  };
  const [userDetails, setUserDetails] = useState(initialState);
  const { email } = userDetails;

  const onInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const verifyTokan = async () => {
    const resetToken = sessionStorage.getItem('ResetPwdToken');

    await axios
      .get(
        `https://jobs-api.squareboat.info/api/v1/auth/resetpassword/${resetToken}`
      )
      .then((res) => {
        if (res.data.message == 'Token is valid') {
          // alert('Token is valid');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=${email}`
      )
      .then((res) => {
        //  console.log(res.data.data.token);
        if (res.data.data.token) {
          sessionStorage.setItem('ResetPwdToken', res.data.data.token);
          verifyTokan();
          handleOpen();
        } else {
          alert('Login Fail pls try again');
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid Item sm={12}>
                <Box className="login_btn_wrapper">
                  <Box>
                    <Button bgColor="#43AFFF" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
      <Modal handleOpen={handleOpen} open={open} handleClose={handleClose}>
        <ResetPassword />
      </Modal>
    </div>
  );
};

export default ForgetPassword;
