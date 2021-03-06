import React, { useState } from 'react';

import { Box, Grid, InputLabel, InputBase } from '@material-ui/core';
import CustomButton from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import '../../assets/css/Form.scss';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Login from '../../Pages/LoginAndSignup/Login';

const Signup = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: '',
    userRole: 0,
  };
  const [userDetails, setUserDetails] = useState(initialState);
  const [nameError, setnameError] = useState({});
  const [emailError, setemailError] = useState({});
  const [passwordError, setpasswordError] = useState({});
  const [confirmPasswordError, setconfirmPasswordError] = useState({});

  const [open, setOpen] = React.useState(false);
  const { name, password, email, confirmPassword, skills, userRole } =
    userDetails;

  const onInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const formValidation = () => {
    // const nameError = {};
    const nameError = {};
    const emailError = {};
    const passwordError = {};
    const confirmPasswordError = {};

    let isValid = true;

    if (!name.trim()) {
      nameError.nameRequire = 'The field is mandatory.';
      isValid = false;
    }
    setnameError(nameError);
    if (!email.trim()) {
      emailError.passwordRequire = 'The field is mandatory.';
      isValid = false;
    }
    setemailError(emailError);
    if (!password.trim()) {
      passwordError.passwordRequire = 'The field is mandatory.';
      isValid = false;
    }
    setpasswordError(passwordError);

    if (!confirmPassword.trim()) {
      confirmPasswordError.passwordRequire = 'The field is mandatory.';
      isValid = false;
    }
    setconfirmPasswordError(confirmPasswordError);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = formValidation();

    if (isValid) {
      console.log('userDetails', userDetails);
      await axios
        .post(
          `https://jobs-api.squareboat.info/api/v1/auth/register`,
          userDetails
        )
        .then((res) => {
          console.log(res.data.data.token);
          if (res.data.data.token) {
            alert('Signup Success,Please Login!');
          } else {
            alert('Signup Fail pls try again');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // setUserDetails(initialState);
  };
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
                  <CustomButton bgColor="#43AFFF">
                    <Box className="signup_btn_wrapper">
                      {' '}
                      <PersonIcon className="buttonIcons" />
                      Recruiter
                    </Box>
                  </CustomButton>
                  <Button className="candiadte_btn">
                    <Box className="signup_btn_wrapper">
                      <GroupAddIcon className="candidatebuttonIcons" />
                      Candidate
                    </Box>
                  </Button>
                </Box>
              </Grid>
              <br />
              <Grid Item sm={12}>
                <InputLabel className="form_label">Full Name*</InputLabel>
                <InputBase
                  className="form_input"
                  placeholder="Enter your full name"
                  classes={{ focused: 'form_input_focused' }}
                  name="name"
                  value={name}
                  onChange={onInputChange}
                />
                {Object.keys(nameError).map((key) => {
                  return <p className="error">{nameError[key]}</p>;
                })}
              </Grid>
              <br />
              <Grid Item sm={12}>
                <InputLabel className="form_label">Email Address*</InputLabel>
                <InputBase
                  className="form_input"
                  placeholder="Enter your email"
                  classes={{ focused: 'form_input_focused' }}
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
                {Object.keys(emailError).map((key) => {
                  return <p className="error">{emailError[key]}</p>;
                })}
              </Grid>
              <br />
              <Grid container>
                <Grid Item sm={5}>
                  <InputLabel className="form_label">
                    Create Password*
                  </InputLabel>
                  <InputBase
                    className="form_input"
                    placeholder="Enter your password"
                    classes={{ focused: 'form_input_focused' }}
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    type="password"
                  />
                  {Object.keys(passwordError).map((key) => {
                    return <p className="error">{passwordError[key]}</p>;
                  })}
                </Grid>
                <br />
                <Grid Item sm={1} />

                <Grid Item sm={6}>
                  <InputLabel className="form_label">
                    Confirm Password*
                  </InputLabel>
                  <InputBase
                    className="form_input"
                    placeholder="Enter your password"
                    classes={{ focused: 'form_input_focused' }}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onInputChange}
                    type="password"
                  />
                  {Object.keys(confirmPasswordError).map((key) => {
                    return <p className="error">{confirmPasswordError[key]}</p>;
                  })}
                </Grid>
              </Grid>
              <br />

              <Grid Item sm={12}>
                <InputLabel className="form_label">Skills*</InputLabel>
                <InputBase
                  className="form_input"
                  placeholder="Enter comma separated skills"
                  classes={{ focused: 'form_input_focused' }}
                  name="skills"
                  value={skills}
                  onChange={onInputChange}
                />
              </Grid>
              <br />

              <Grid Item sm={12}>
                <Box className="login_btn_wrapper">
                  <Box>
                    <CustomButton bgColor="#43AFFF" onClick={handleSubmit}>
                      Signup
                    </CustomButton>
                  </Box>
                </Box>
                <Box className="bottom_txt_wrapper">
                  <p className="form_label">Have an account?&nbsp; </p>
                  <p className="sky_blue_text" onClick={handleOpen}>
                    {' '}
                    Login
                  </p>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
      <Modal handleOpen={handleOpen} open={open} handleClose={handleClose}>
        <Login />
      </Modal>
    </div>
  );
};

export default Signup;
