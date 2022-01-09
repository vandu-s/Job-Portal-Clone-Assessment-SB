import { Box, Grid, InputLabel, InputBase } from '@material-ui/core';
import Button from '../../components/Button/Button';
import '../../assets/css/Form.scss';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const config = {
    headers: {
      Authorization: localStorage.getItem('token'),
      type: 'text',
    },
  };
  const initialState = {
    title: '',
    description: '',
    location: '',
  };
  const [userDetails, setUserDetails] = useState(initialState);
  const { title, description, location } = userDetails;

  const onInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('userDetails', userDetails);
    await axios
      .post(
        `https://jobs-api.squareboat.info/api/v1/jobs/`,
        config,
        userDetails,
        { description: 'add new job' }
      )
      .then((res) => {
        console.log(res);
        // console.log(res.data.data.token);
        // if (res.data.data.token) {
        //   localStorage.setItem('token', res.data.data.token);
        //   localStorage.setItem('user', JSON.stringify(userDetails));

        //   alert('Login Success');
        // } else {
        //   alert('Login Fail pls try again');
        // }
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
                  <h4>Post a Job</h4>
                </Box>
              </Grid>
              <br />
              <Grid Item sm={12}>
                <InputLabel className="form_label">Job Title*</InputLabel>
                <InputBase
                  className="form_input"
                  placeholder="Enter job title"
                  classes={{ focused: 'form_input_focused' }}
                  name="title"
                  value={title}
                  onChange={onInputChange}
                />
              </Grid>
              <br />

              <Grid Item sm={12}>
                <InputLabel className="form_label">Description* </InputLabel>
                <TextareaAutosize
                  minRows={10}
                  placeholder="Enter Job Description"
                  className="form_textArea"
                  classes={{ focused: 'form_input_focused' }}
                  name="description"
                  value={description}
                  onChange={onInputChange}
                />
              </Grid>
              <br />
              <Grid Item sm={12}>
                <InputLabel className="form_label">Location* </InputLabel>
                <InputBase
                  className="form_input"
                  placeholder="Enter Location"
                  classes={{ focused: 'form_input_focused' }}
                  name="location"
                  value={location}
                  onChange={onInputChange}
                />
              </Grid>
              <br />

              <Grid Item sm={12}>
                <Box className="login_btn_wrapper">
                  <Box>
                    <Button bgColor="#43AFFF" onClick={handleSubmit}>
                      Post
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
