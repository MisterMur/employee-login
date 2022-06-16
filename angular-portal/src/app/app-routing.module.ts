import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AuthGuardService } from './service/auth.guard';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'emplist',
    component: EmplistComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'addemployee',
    component: AddEmployeeComponent,
    //canActivate:[AuthGuardService]
  },
];
// {path: 'logout', component: LogoutComponent},
// {path: '**', component: ErrorComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
