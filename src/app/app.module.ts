import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CapecGuard } from './main/capec.guard';
import { CapecModule } from './capec/capec.module';
import { NewComponent } from './capec/new.component';
import { ResultComponent } from './capec/result.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, CapecModule,
            RouterModule.forRoot([
            { path: "main", component: MainComponent, canActivate: [CapecGuard] },
            { path: "result", component: ResultComponent, canActivate: [CapecGuard]},
            { path: "new", component: NewComponent, canActivate: [CapecGuard]},
            { path: "**", redirectTo:"/main", canActivate: [CapecGuard]},
            ])],
  providers: [CapecGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
