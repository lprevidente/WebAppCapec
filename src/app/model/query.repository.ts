/**
 * Is responsible for distributing that data to individual application building
 * blocks so that the details of how the data has obtained are kept hidden 
 */

import { Query } from './query.model';
import { RestDataSource } from './rest.datasource';
import { Injectable } from '@angular/core';

@Injectable()
export class Repository {

    private Queries: Query[] = [];
    private q: Query;
    constructor(private dataSource: RestDataSource) {
        dataSource.getData().subscribe(query => this.Queries = query);
    }

    getQueries(): Query[] {
      return this.Queries;
    }
    getQuery(id: number): Query {
      return this.Queries.find(q => q.id == id);
    }
    newQuery(query: Query) {
     this.dataSource.saveQuery(query);
     this.Queries.push(query);
    }

    getMaxIndex(): number {
     var v: number = 0;
      for(var i = 1; i <= this.Queries.length; i++) {
        this.q = this.getQuery(i);
        if(v < this.q.id) {
          v = this.q.id;
        }
      }
     return v;
    }

  setQuery(id: number ) {
    this.q = this.getQuery(id);
  }
  getQuerySelected(): Query {
    return this.q;
  }
 }
