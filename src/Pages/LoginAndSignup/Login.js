import {
  Box,
  Container,
  Grid,
  FormControl,
  InputLabel,
  InputBase,
} from '@material-ui/core';
import React from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import '../../assets/css/Form.scss';
import Signup from '../../Pages/LoginAndSignup/Signup';
import ForgetPassword from '../../Pages/ForgetPassword/ForgetPassword';
const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [openForgetPwd, setOpenForgetPwd] = React.useState(false);

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
                />
              </Grid>
              <Grid Item sm={12}>
                <Box className="login_btn_wrapper">
                  <Box>
                    <Button bgColor="#43AFFF">Login</Button>
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
