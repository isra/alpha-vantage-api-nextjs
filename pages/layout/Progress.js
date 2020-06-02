import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Progress = () => {
  const [open, setOpen] = useState(false);
  const spinner = useSelector((state) => state.app.progress);
  useEffect(() => {
    setOpen(spinner);
  }, [spinner]);
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

export default Progress;
