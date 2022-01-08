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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
                />
              </Grid>
              <br />
              <Grid Item sm={12}>
                <InputLabel className="form_label">Location* </InputLabel>
                <InputBase
                  className="form_input"
                  placeholder="Enter Location"
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
