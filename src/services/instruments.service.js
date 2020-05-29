import { ajax } from 'rxjs/ajax';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

const HOST = '/assets/json/instruments.json';

export default class InstrumentsService {
  constructor() {
    this.url = HOST;
  }

  getData() {
    return ajax.get(this.url).pipe(map((data) => data.response));
  }
}
