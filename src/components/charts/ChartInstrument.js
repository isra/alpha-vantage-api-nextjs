import React, { useState, useEffect, useLayoutEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Box, Link, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

// Chart
import renderChartFn, { disposeChartFn } from '../../../lib/renderchart';

// actions
import { changeEndpointByChart } from '../../../store/actions/charts.actions';

// Redux
import { connect } from 'react-redux';

const TIME_SERIES_DAILY = 'TIME_SERIES_DAILY';
const TIME_SERIES_MONTHLY = 'TIME_SERIES_MONTHLY';

class ChartInstrument extends React.Component {
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

  handleChangeChartClick = (typeFn) => {
    this.props.changeEndpointByChart(this.state.header.symbol, typeFn);
  };

  render() {
    const { information, symbol, lastRefresh } = this.state.header || {};
    const { idChart } = this.props;

    return (
      <Grid item xs={12}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} m={0}>
            <Box color='text.primary' style={{ fontWeight: 600 }}>
              {symbol}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} m={0}>
            <Box color='text.secondary' style={{ textAlign: 'right' }}>
              <Link
                component='button'
                variant='body2'
                onClick={() => this.handleChangeChartClick(TIME_SERIES_DAILY)}
              >
                Time Series (Daily)
              </Link>{' '}
              |{' '}
              <Link
                component='button'
                variant='body2'
                onClick={() => this.handleChangeChartClick(TIME_SERIES_MONTHLY)}
              >
                Monthly Time Series
              </Link>
            </Box>
          </Grid>
          <Grid color='text.secondary' item xs={12} m={0}>
            {information}
          </Grid>
        </Grid>
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
  changeEndpointByChart: PropTypes.func.isRequired,
};

export default connect(null, { changeEndpointByChart })(ChartInstrument);
