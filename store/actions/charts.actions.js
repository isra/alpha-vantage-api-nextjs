export const LOAD_CHART = '[Charts] Load Chart of service';
export const GET_CURRENT = '[Charts] Get current chart';
export const GET_HISTORY = '[Charts] Get history chart';

// Serviced
import AlphaVantageService from '../../src/services/alphavantage.service';

export const loadChart = (queryFn, type, symbol) => (dispatch) => {
  const alphaVantageService = new AlphaVantageService();
  alphaVantageService.getData(queryFn, type, symbol).subscribe((response) => {
    dispatch({
      type: LOAD_CHART,
      payload: response,
    });
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
