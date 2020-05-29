import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const FilterInstrument = () => {
  const classes = useStyles();
  return (
    <Box m={1}>
      <TextField
        id='standard-full-width'
        placeholder='Symbol or Name of Instrument'
        fullWidth
        style={{ marginButton: 5 }}
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
};

export default FilterInstrument;
