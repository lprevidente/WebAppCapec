/**
 * I need this component to show the results of query
 */
import { Repository } from '../model/query.repository';
import { REST_URL, RestDataSource } from '../model/rest.datasource';
import { Component, Inject, OnInit } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Router } from '@angular/router';

import { Query } from '../model/query.model';
import { Result } from '../model/result_model';

@Component({
  moduleId: module.id,
  templateUrl: 'result.component.html'
})

export class ResultComponent {
  public query: Query;

  public results: Result[] = this.results = [];

  constructor(public router: Router, private repository: Repository, private http: Http, private restDataSource: RestDataSource) {
      this.query = this.repository.getQuerySelected();

      restDataSource.getResults(this.query.sql).subscribe(results =>  this.results = results );
   }

  goBack() {
    this.results = [];
    this.router.navigateByUrl('/');
  }
  orderByFirst() {
    this.restDataSource.getResults(this.query.sql+" ORDER BY "+this.query.firstSelected+" ASC")
            .subscribe(results =>  this.results = results );

  }
  
  orderBySecond() {
    this.restDataSource.getResults(this.query.sql+" ORDER BY "+this.query.secondSelected+" ASC")
            .subscribe(results =>  this.results = results );
  }

}
