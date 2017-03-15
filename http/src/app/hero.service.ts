import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private readonly URL = '/src/app/heroes.json';

  constructor(private http: Http) { }

  addHero(name: string): Observable<Hero> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.URL, { name }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get(this.URL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    const body = response.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `E2ROR! ${ error.status } - ${ error.statusText || '' } ${ err }`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error('E2ROR!' + errMsg);
    return Observable.throw(errMsg);
  }
}
