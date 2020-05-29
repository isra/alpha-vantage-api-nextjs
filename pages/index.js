import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { useDispatch } from 'react-redux';
import getStore from '../store';
import { loadInstruments } from '../store/actions/instruments.actions';

// Redux
/* import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'react-thunk';
import { Provider, __esModule } from 'react-redux';
import { rootReducer } from '../store';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

// IF REDUCERS WERE CHANGED, RELOAD WITH INITIAL STATE
if (module.hot) {
  module.hot.accept(rootReducer, () => {
    const createNextReducer = rootReducer.default;

    store.replaceReducer(createNextReducer(initialState));
  });
} */

// Layout
import Header from './layout/Header';
import Navbar from './layout/elements/Navbar';

// Components
import Instruments from '../src/components/Instruments';

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
