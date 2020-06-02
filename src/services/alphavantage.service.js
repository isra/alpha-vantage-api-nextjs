import { ajax } from 'rxjs/ajax';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
// import { XMLHttpRequest } from 'xmlhttprequest';

import parseReponseAlphavantange from '../../lib/parse-response-alphavantage';

const HOST = 'https://www.alphavantage.co';
const APIKEY = '9AFJDL5KCXOB2ZX5';

export default class AlphaVantageService {
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
