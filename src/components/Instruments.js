import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// RXJS
import { of } from 'rxjs';
import { take, reduce } from 'rxjs/operators';

// Services
import InstrumentsService from '../../src/services/instruments.service';

// Components
import FilterInstrument from './FilterInstrument';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(symbol, name) {
  return { symbol, name };
}

const Instruments = ({}) => {
  const classes = useStyles();

  const [instruments, setInstruments] = useState([]);
  useEffect(() => {
    const instrumentsService = new InstrumentsService();
    /**
     * Como el servicio no tiene paginación se toma 5 elementos del json
     */
    instrumentsService.getData().subscribe((data) => {
      const sliceDataSubscription = of(...data).pipe(
        take(5),
        reduce((acc, item) => [...acc, item], [])
      );
      sliceDataSubscription.subscribe((response) => setInstruments(response));

      return () => {
        sliceDataSubscription.unsubscribe();
      };
    });
  }, []);

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
