import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';

let adminEmail = 'kiki.auto.matusiak@gmail.com';
@Injectable()
export class AuthGuardService implements CanActivate {
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this.auth.user$.map(user => {
      if (user) return true;
      this.router.navigate(['/login']);
      return false;
     });
  }
  constructor(private auth: AuthService, private router: Router) { }

}
