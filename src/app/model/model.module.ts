/**
 * It will allow the data model functionality 
 * to be easily used elsewhere in the application.
 *
 * It tell Angular how the module should be used
 */

import { Repository } from './query.repository';
import { REST_URL, RestDataSource } from './rest.datasource';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [HttpModule],
  providers: [RestDataSource, Repository,
    { provide: REST_URL, useValue: `http://${location.hostname}:3500/queries` }]
})
export class ModelModule {}

