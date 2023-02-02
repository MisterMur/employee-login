// import { Injectable } from '@angular/core';
// import {
//   Router,
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
// } from '@angular/router';

// import { AccountService } from '../services/account.service';

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router, private accountService: AccountService) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const user = this.accountService.userValue;
//     if (user) {
//       // authorised so return true
//       return true;
//     }

//     // not logged in so redirect to login page with the return url
//     this.router.navigate(['/account/login'], {
//       queryParams: { returnUrl: state.url },
//     });
//     return false;
//   }
// }
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from './authentication.service';

const auth = new AuthenticationService();

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    AuthenticationService.validateJWTToken().then((res) => {
      const user_id = res.user_id;
      if (!user_id) {
        this.router.navigate(['']);
        return false;
      }
      return true;
    });
    return false;
  }
}
