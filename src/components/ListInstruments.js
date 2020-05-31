import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
} from '@material-ui/core';

// Redux -
import { useSelector, useDispatch } from 'react-redux';

// Redux - Actions
import { loadChart } from '../../store/actions/charts.actions';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ListInstruments = ({}) => {
  // Redux
  const classes = useStyles();
  const dispatch = useDispatch();

  const items = useSelector((state) => state.instruments.items);
  const [instruments, setInstruments] = useState([]);
  useEffect(() => {
    setInstruments(items);
  }, [items]);

  const handleItemClick = (item, e) => {
    e.preventDefault();
    // set type chart by default
    dispatch(loadChart('TIME_SERIES_DAILY', 'intraday', item.Symbol));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 100 }}>Symbol</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>IPO Year</TableCell>
            <TableCell>Last Sale</TableCell>
            <TableCell>Sector</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {instruments.map((row) => (
            <TableRow key={row.Symbol}>
              <TableCell component='th' scope='row'>
                <Link
                  href='#'
                  color='secondary'
                  onClick={handleItemClick.bind(this, row)}
                >
                  {row.Symbol}
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  href='#'
                  color='secondary'
                  onClick={handleItemClick.bind(this, row)}
                >
                  {row.Name}
                </Link>
              </TableCell>
              <TableCell align='left'>$ {row.LastSale.toFixed(2)}</TableCell>
              <TableCell>{row.IPOyear}</TableCell>
              <TableCell>{row.Sector}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListInstruments;
