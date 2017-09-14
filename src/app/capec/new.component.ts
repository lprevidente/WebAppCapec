/**
 * New typescript file
 */
import { Query } from '../model/query.model';
import { Repository } from '../model/query.repository';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'new.component.html'
})

export class NewComponent {
 public query: Query = new Query();

  constructor(private router: Router, private repository: Repository) {}
  
  addQuery() {
   this.query.id= this.repository.getMaxIndex() +1;
   this.repository.newQuery(this.query);
   this.router.navigateByUrl("/");
  }
}
