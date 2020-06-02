import { ajax } from 'rxjs/ajax';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import parseReponseAlphavantange from '../../lib/parse-response-alphavantage';

// Test
// const HOST = '/assets/json/xdia.json';
// Example
// https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=60min&apikey=9AFJDL5KCXOB2ZX5
// https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=AAPL&apikey=9AFJDL5KCXOB2ZX5
const HOST = 'https://www.alphavantage.co';
const APIKEY = '9AFJDL5KCXOB2ZX5';

export default class AlphaVantageService {
  // intraday: 'Time Series (Daily)',
  constructor() {
    this.typeFn = {
      TIME_SERIES_DAILY_INTERVAL: 'Time Series ([interval])',
      TIME_SERIES_DAILY: 'Time Series (Daily)',
      TIME_SERIES_MONTHLY: 'Monthly Time Series',
    };
  }

  getData(symbol, queryFn = 'TIME_SERIES_DAILY', interval = null) {
    interval = interval ? `&interval=${interval}` : '';
    const url = `${HOST}/query?function=${queryFn}&symbol=${symbol}${interval}&apikey=${APIKEY}`;
    // const url = '/assets/json/xdia.json';
    return ajax.get(url).pipe(
      map((data) => data.response),
      map((responsejson) =>
        parseReponseAlphavantange(responsejson, this.typeFn[queryFn])
      )
    );
  }
}
