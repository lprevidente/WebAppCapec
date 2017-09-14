/**
 * Is a class that provides data and logic to an HTML template,
 *  which contains data bindings that generate content dynamically
 */


import { ResultComponent } from '../capec/result.component';
import { Query } from '../model/query.model';
import { Repository } from '../model/query.repository';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'queries',
  moduleId: module.id,
  templateUrl: 'main.component.html'
})

export class MainComponent {

  constructor (private repository: Repository, private router: Router) {}

  get queries(): Query[] {
    return this.repository.getQueries();
  }

  goToResult(id: number) {
    this.repository.setQuery(id);
    this.router.navigateByUrl('/result');
  }
  newQuery() {
    this.router.navigateByUrl('/new');
  }

}
