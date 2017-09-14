/**
 * I need this component to show the results of query
 */
import { Repository } from '../model/query.repository';
import { REST_URL } from '../model/rest.datasource';
import { Component, Inject } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Query } from '../model/query.model';
@Component({
  moduleId: module.id,
  templateUrl: 'result.component.html'
})

export class ResultComponent {

  constructor ( public router: Router, private repository: Repository) { }

  goBack() {
    this.router.navigateByUrl('/');
  }

  public query: Query = this.repository.getQuerySelected();

}
