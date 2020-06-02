export const LOAD_CHART = '[Charts] Load Chart of service';
export const GET_CURRENT = '[Charts] Get current chart';
export const GET_HISTORY = '[Charts] Get history chart';
export const CHANGE_ENDPOINT_BY_CHART =
  '[Charts] Change endpoint by specific chart';

// Serviced
import AlphaVantageService from '../../src/services/alphavantage.service';

// Actions
import * as fromAppActions from './app.actions';

export const loadChart = (symbol) => (dispatch) => {
  const alphaVantageService = new AlphaVantageService();
  alphaVantageService.getData(symbol).subscribe((response) => {
    dispatch({
      type: LOAD_CHART,
      payload: response,
    });

    setTimeout(() => {
      dispatch({
        type: fromAppActions.LOADING,
        payload: false,
      });
    }, 1500);
  });
};

export const getCurrent = () => {
  return {
    type: GET_CURRENT,
  };
};

export const getHistory = () => {
  return {
    type: GET_HISTORY,
  };
};

export const changeEndpointByChart = (symbol, queryFn) => (dispatch) => {
  const alphaVantageService = new AlphaVantageService();

  dispatch({
    type: fromAppActions.LOADING,
    payload: true,
  });

  alphaVantageService.getData(symbol, queryFn).subscribe((response) => {
    dispatch({
      type: CHANGE_ENDPOINT_BY_CHART,
      payload: response,
    });

    // spinner
    setTimeout(() => {
      dispatch({
        type: fromAppActions.LOADING,
        payload: false,
      });
    }, 1500);
  });
};
