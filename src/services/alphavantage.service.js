import { ajax } from 'rxjs/ajax';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import parseReponseAlphavantange from '../../lib/parse-response-alphavantage';

// Test
// const HOST = '/assets/json/xdia.json';
// Example
// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=KOF&interval=60min&apikey=9AFJDL5KCXOB2ZX5
const HOST = 'https://www.alphavantage.co';
const APIKEY = '9AFJDL5KCXOB2ZX5';

export default class AlphaVantageService {
  constructor() {
    this.typeFn = {
      intraday: 'Time Series (Daily)',
    };
  }

  getData(queryFn, type, symbol, interval = '60min') {
    const url = `${HOST}/query?function=${queryFn}&symbol=${symbol}&interval=${interval}&apikey=${APIKEY}`;
    // const url = '/assets/json/xdia.json';
    return ajax.get(url).pipe(
      map((data) => data.response),
      map((responsejson) =>
        parseReponseAlphavantange(responsejson, this.typeFn[type])
      )
    );
  }
}
