import AlphaVantageService from './alphavantage.service';
import { interval } from 'rxjs';
var _response = {};

function getData(callback, params) {
  setTimeout(() => {
    callback(symbol, ...params).subscribe((response) => {
      _response = response;
    });
  }, 3000);
}

describe('[AlphaVantageService]', () => {
  let responseService;
  let alphaVantageService;
  let symbol;
  let timeSerieDaily;
  let timeSeriesMonthly;

  beforeEach(() => {
    responseService = {};
    symbol = 'AAPL'; // Apple Inc
    timeSerieDaily = 'TIME_SERIES_DAILY';
    timeSeriesMonthly = 'TIME_SERIES_MONTHLY';
    alphaVantageService = new AlphaVantageService();
  });

  it('Validando respuesta del servicio.', () => {
    // getData(alphaVantageService.getData, [symbol, timeSerieDaily]);
    // expect(_response).toBeTruthy();
    alphaVantageService.getData(symbol).subscribe((response) => {
      expect(_response).toBeTruthy();
    });
  });

  it('Valida respuesta JSON de endpoint para consulta tipo mensual.', (done) => {
    alphaVantageService
      .getData(symbol, timeSeriesMonthly)
      .subscribe((response) => {
        const titleMonthly = response.header.information;
        expect(titleMonthly).toEqual(
          'Monthly Prices (open, high, low, close) and Volumes'
        );
        done();
      });
  });
});
