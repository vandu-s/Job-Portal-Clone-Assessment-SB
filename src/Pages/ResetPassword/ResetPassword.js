import { Box, Grid, InputLabel, InputBase } from '@material-ui/core';
import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import '../../assets/css/Form.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const ResetPwdToken = sessionStorage.getItem('ResetPwdToken');
  const navigate = useNavigate();

  const initialState = {
    password: '',
    confirmPassword: '',
    token: ResetPwdToken,
  };
  const [userDetails, setUserDetails] = useState(initialState);
  const { password, confirmPassword, token } = userDetails;

  const onInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('userDetails', userDetails);
    await axios
      .post(
        `https://jobs-api.squareboat.info/api/v1/auth/resetpassword`,
        userDetails
      )
      .then((res) => {
        console.log(res);
        if (res.data.message == 'Password updated successfully') {
          alert('Password updated successfully');
          sessionStorage.clear();
          navigate('/');
        } else {
          alert('Failed pls try again');
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
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  type="password"
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
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onInputChange}
                  type="password"
                />
              </Grid>
              <br />

              <Grid Item sm={12}>
                <Box className="login_btn_wrapper">
                  <Box>
                    <Button bgColor="#43AFFF" onClick={handleSubmit}>
                      Reset
                    </Button>
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
