/**
 * I need this class to prevent the application from
 * starting with "/result" URL
 */

import { MainComponent } from './main.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CapecGuard {
  private FirstNavigation = true;

  constructor (private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.FirstNavigation) {
      this.FirstNavigation = false;
      if ( route.component != MainComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }


}
