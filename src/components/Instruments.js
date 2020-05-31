import React from 'react';

// Components
import FilterInstrument from './FilterInstrument';
import ListInstruments from './ListInstruments';

const Instruments = ({}) => {
  return (
    <React.Fragment>
      <FilterInstrument />
      <ListInstruments />
    </React.Fragment>
  );
};

export default Instruments;
