import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import Navbar from './elements/Navbar';
import Header from './Header';
const Dashboard = ({}) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Navbar />

      <Container maxWidth='sm'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, eos.
        Porro ratione soluta nemo tempora dolorem expedita libero consequatur
        quasi alias cum reprehenderit quaerat accusamus, labore cumque fugit,
        repellat molestiae!
      </Container>
    </React.Fragment>
  );
};
export default Dashboard;
