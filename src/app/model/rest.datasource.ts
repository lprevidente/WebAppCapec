/**
 * New typescript file
 */

import { Query } from './query.model';
import { Result } from './result_model';
import { Injectable, Inject, OpaqueToken } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

export const REST_URL = new OpaqueToken("rest_url");

@Injectable()
export class RestDataSource {
  
  constructor(private http: Http,
    @Inject(REST_URL) private url: string) { }

  getData(): Observable<Query[]> {
    return this.http.get('http://localhost:3500/queries').map(response => response.json());
  }

  saveQuery(query: Query) {
    return this.http.post(this.url, query)
            .map(response => response.json);
  }

  getResults(sql: String): Observable<Result[]> {
    console.log('http://localhost:8080/servlet/QueryServlet?sql=' + sql);
    return this.http.get('http://localhost:8080/servlet/QueryServlet?sql=' + sql)
                  .map(response =>  response.json() );
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
   }
}