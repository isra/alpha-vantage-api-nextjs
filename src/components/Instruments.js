import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const rows = [
  createData('A', 'AGILENT TECHNOLOGIES INC'),
  createData('AA', 'ALCOA CORPORATION'),
  createData('AACG', 'ATA CREATIVITY GLOBAL SPON ADS EACH REP 2 ORD SHS'),
  createData('AAL', 'AMERICAN AIRLINES GROUP INC'),
  createData('AAMC', 'ALTISOURCE ASSET MANAGEMENT CORP'),
];

const Instruments = ({}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <FilterInstrument />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 100 }}>Symbol</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.symbol}>
                <TableCell component='th' scope='row'>
                  {row.symbol}
                </TableCell>
                <TableCell>{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default Instruments;
