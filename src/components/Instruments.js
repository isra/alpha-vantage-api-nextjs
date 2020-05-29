import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Redux -
import { useSelector } from 'react-redux';

// Components
import FilterInstrument from './FilterInstrument';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Instruments = ({}) => {
  const classes = useStyles();
  const [instruments, setInstruments] = useState([]);
  const items = useSelector((state) => state.instruments.items);
  useEffect(() => {
    setInstruments(items);
  }, [items]);

  return (
    <React.Fragment>
      <FilterInstrument />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 100 }}>Symbol</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>IPO Year</TableCell>
              <TableCell>Last Sale</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {instruments.map((row) => (
              <TableRow key={row.Symbol}>
                <TableCell component='th' scope='row'>
                  {row.Symbol}
                </TableCell>
                <TableCell>{row.Name}</TableCell>
                <TableCell align='left'>$ {row.LastSale.toFixed(2)}</TableCell>
                <TableCell>{row.IPOyear}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default Instruments;
