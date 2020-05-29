export const LOAD_INSTRUMENTS = '[Instruments] Load Instruments of service';
export const GET_INSTRUMENTS = '[Instruments] Get Instruments';
export const GET_BY_ID = '[Instruments] Get Instrument by id';
export const FILTER = '[Instruments] Filter instruments';

// RXJS
import { of } from 'rxjs';
import { take, reduce } from 'rxjs/operators';

// Services
import InstrumentsService from '../../src/services/instruments.service';

export const loadInstruments = () => (dispatch) => {
  /**
   * Como el servicio no tiene paginación se toma 5 elementos del json
   */
  const instrumentsService = new InstrumentsService();
  instrumentsService.getData().subscribe((data) => {
    const sliceDataSubscription = of(...data).pipe(
      take(5),
      reduce((acc, item) => [...acc, item], [])
    );
    sliceDataSubscription.subscribe((response) => {
      dispatch({
        type: LOAD_INSTRUMENTS,
        payload: response,
      });
    });
  });
};

export const getInstruments = (instruments) => {
  return {
    type: GET_INSTRUMENTS,
    payload: instruments,
  };
};

export const getInstrumentById = (symbol) => {
  dispatch({
    type: GET_BY_ID,
    payload: symbol,
  });
};

export const filterInstruments = (filter) => {
  return {
    type: FILTER,
    payload: filter,
  };
};
