import React from 'react';

// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Styles = {
  color: 'white',
  textTransform: 'capitalize',
  fontSize: '14px',
  padding: '5px 20px',
  margin: '5px',
  borderRadius: 'none',
};
export default function CustomButton(props) {
  const style = () => ({
    root: {
      background: props.bgColor,
      width: props.btnWidth,
      color: props.color,
      '&:hover': {
        background: props.bgColor,
      },
    },
  });
  const useStyles = makeStyles(style);
  const classes = useStyles();
  const {
    color,
    round,
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    backgroundColor,
    onClick,
    ...rest
  } = props;

  return (
    <Button
      {...rest}
      style={Styles}
      classes={{
        root: classes.root,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
