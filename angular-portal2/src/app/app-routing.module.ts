import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';

// const accountModule = () =>
//   import('./account/account.module').then((x) => x.AccountModule);
// const usersModule = () =>
//   import('./users/users.module').then((x) => x.UsersModule);

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  //   { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  //   { path: 'account', loadChildren: accountModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
