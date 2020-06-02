import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { useDispatch } from 'react-redux';
// import getStore from '../store';
import { loadInstruments } from '../store/actions/instruments.actions';

// Layout
import Header from './layout/Header';
import Navbar from './layout/elements/Navbar';
import Progress from './layout/Progress';

// Components
import Instruments from '../src/components/Instruments';
import ChartsInstruments from '../src/components/charts/ChartsInstruments';

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInstruments());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <CssBaseline />
      <Navbar />
      <Container>
        <Box my={4}>
          <Instruments />
        </Box>
      </Container>
      <Container>
        <ChartsInstruments />
      </Container>
      <Progress />
    </React.Fragment>
  );
};

export async function getStaticProps() {
  /* const store = getStore();
  store.dispatch(loadInstruments()); */
  return {
    props: {},
  };
}

export default Index;
