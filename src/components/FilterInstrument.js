import { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

// Redux
// El actions realiza la opción del filtrado
import * as fromInstrumentsActions from '../../store/actions/instruments.actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const FilterInstrument = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fromInstrumentsActions.filterInstruments(filter));
  }, [filter]);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box m={1}>
      <TextField
        id='standard-full-width'
        name='filterInstrument'
        label='Filter'
        placeholder='Symbol or name of instrument'
        fullWidth
        style={{ marginButton: 5 }}
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
      />
    </Box>
  );
};

export default FilterInstrument;
