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
  public query: Query = this.repository.getQuerySelected();

  public results: Result[] = [];

  constructor(public router: Router, private repository: Repository, private http: Http, private restDataSource: RestDataSource) {

      restDataSource.getResults().subscribe(results => { this.results = results; console.log(this.results); });
   }

  goBack() {
    this.router.navigateByUrl('/');
  }


}
