import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Layout
import Header from './layout/Header';
import Navbar from './layout/elements/Navbar';

// Components
import Instruments from '../src/components/Instruments';

export default function Index() {
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
}
