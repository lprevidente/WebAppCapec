

import { MainComponent } from '../main/main.component';
import { ModelModule } from '../model/model.module';
import { REST_URL } from '../model/rest.datasource';
import { NewComponent } from './new.component';
import { ResultComponent } from './result.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule, HttpModule],
  declarations: [MainComponent, ResultComponent, NewComponent],
  providers: [ResultComponent],
  exports: [MainComponent]
})
export class CapecModule {}
