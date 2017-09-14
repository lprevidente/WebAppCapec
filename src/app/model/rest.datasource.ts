/**
 * New typescript file
 */

import { Query } from './query.model';
import { Injectable, Inject, OpaqueToken } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
export const REST_URL = new OpaqueToken("rest_url");

@Injectable()
export class RestDataSource {
  
  constructor(private http: Http,
    @Inject(REST_URL) private url: string) { }

  getData(): Observable<Query[]> {
    return this.http.get(this.url).map(response => response.json());
  }

  saveQuery(query: Query) {
    return this.http.post(this.url, query)
            .map(response => response.json);
  }
}