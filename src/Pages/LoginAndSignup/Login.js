import { Box, Grid, InputLabel, InputBase } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import '../../assets/css/Form.scss';
import Signup from '../../Pages/LoginAndSignup/Signup';
import ForgetPassword from '../../Pages/ForgetPassword/ForgetPassword';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [openForgetPwd, setOpenForgetPwd] = React.useState(false);
  const initialState = {
    password: '',
    email: '',
  };
  const [userDetails, setUserDetails] = useState(initialState);
  const { password, email } = userDetails;

  const onInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`https://jobs-api.squareboat.info/api/v1/auth/login`, userDetails)
      .then((res) => {
        console.log(res);
        console.log(res.data.data.token);
        if (res.data.data.token) {
          localStorage.setItem('token', res.data.data.token);
          localStorage.setItem('user', JSON.stringify(userDetails));

          alert('Login Success');
          navigate('/job-posted');
        } else {
          alert('Login Fail pls try again');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenForgetPwd = () => {
    setOpenForgetPwd(true);
  };

  const handleCloseForgetPwd = () => {
    setOpenForgetPwd(false);
  };
  const closeAndOpenDialog = () => {
    setOpenForgetPwd(true);
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
                  <h4>Login</h4>
                </Box>
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
                <Box className="forget_pwd_wrapper">
                  <p className="sky_blue_text" onClick={handleOpenForgetPwd}>
                    Forgot your password?
                  </p>
                </Box>
              </Grid>
              <Grid Item sm={12}>
                <InputLabel className="form_label">Password</InputLabel>
                <InputBase
                  className="form_input"
                  placeholder="Enter your password"
                  classes={{ focused: 'form_input_focused' }}
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  type="password"
                />
              </Grid>
              <Grid Item sm={12}>
                <Box className="login_btn_wrapper">
                  <Box>
                    <Button bgColor="#43AFFF" onClick={handleSubmit}>
                      Login
                    </Button>
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
      <Modal
        handleOpen={handleOpenForgetPwd}
        open={openForgetPwd}
        handleClose={handleCloseForgetPwd}
      >
        <ForgetPassword />
      </Modal>
    </div>
  );
};

export default Login;
