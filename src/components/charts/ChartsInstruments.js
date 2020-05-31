import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { v4 as uuidv4 } from 'uuid';

// Redux
import { useSelector } from 'react-redux';

// Components
import ChartInstrument from './ChartInstrument';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ChartsInstruments = () => {
  const { current, history } = useSelector((state) => state.charts);
  const [historyItems, setHistoryItems] = useState([]);
  useEffect(() => {
    setHistoryItems([]);
    setTimeout(() => {
      setHistoryItems(history);
    }, 100);
  }, [history]);
  const classes = useStyles();

  // const currentChart = useSelector((state) => state.charts);
  /* const [current, setCurrent] = useState(null);
  useEffect(() => {
    setCurrent(currentChart);
  }, [currentChart]);

  const historyCharts = useSelector((state) => state.charts.history);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    setHistory(historyCharts);
  }, [historyCharts]); */

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {current ? (
          <Grid container item xs={12}>
            <ChartInstrument
              key={`chart_${uuidv4()}`}
              jsonChart={JSON.stringify(current)}
              idChart={uuidv4()}
            />
          </Grid>
        ) : (
          ''
        )}
        {historyItems.length
          ? historyItems.map((itemJson, index) => (
              <Grid key={`grid_${index}`} container item xs={12} sm={6}>
                <ChartInstrument
                  key={index.toString()}
                  jsonChart={JSON.stringify(itemJson)}
                  idChart={`_index_${uuidv4()}`}
                />
              </Grid>
            ))
          : ''}
      </Grid>
    </div>
  );
};

export default ChartsInstruments;
