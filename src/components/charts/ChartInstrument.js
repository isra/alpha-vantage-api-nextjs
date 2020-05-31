import React, { useState, useEffect, useLayoutEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

// Chart
import renderChartFn, { disposeChartFn } from '../../../lib/renderchart';

class ChartInstrument extends React.Component {
  state = {
    generic: {},
  };

  constructor(props) {
    super(props);
    const { header, items } = JSON.parse(this.props.jsonChart);
    this.state = {
      header,
      items,
    };
  }

  componentDidMount() {
    const { items } = this.state;
    const { idChart } = this.props;
    renderChartFn(items, idChart);
  }

  componentWillUnmount() {
    disposeChartFn();
  }

  render() {
    const { information, symbol, lastRefresh } = this.state.header || {};
    const { idChart } = this.props;

    return (
      <Grid item xs={12}>
        <Typography component='div' variant='body1'>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} m={0}>
              <Box color='text.primary'>{symbol}</Box>
            </Grid>
            <Grid item xs={12} sm={6} m={0}>
              <Box color='text.secondary' style={{ textAlign: 'right' }}>
                Last update: {lastRefresh}
              </Box>
            </Grid>
            <Grid item xs={12} m={0}>
              <Box color='text.disabled'>{information}</Box>
            </Grid>
          </Grid>
        </Typography>
        <Paper>
          <div key={idChart} style={styleChart} id={idChart}></div>
        </Paper>
      </Grid>
    );
  }
}

const styleChart = {
  width: '100%',
  height: 500,
};

ChartInstrument.propTypes = {
  jsonChart: PropTypes.string.isRequired,
  idChart: PropTypes.string.isRequired,
};

export default ChartInstrument;
