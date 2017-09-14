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
  public query: Query = this.repository.getQuerySelected();
  public results = this.http.get('http://localhost:8080/servlet/QueryServlet')
                  .map(this.extractData)
                  .catch(this.handleErrorObservable);

  constructor ( public router: Router, private repository: Repository, private http: Http) { }

  goBack() {
    this.router.navigateByUrl('/');
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
   }

  private extractData(res: Response) {
   const body = res.text();
   if (body) {
       return body;
    } else {
       return {};
    }
  }

}
