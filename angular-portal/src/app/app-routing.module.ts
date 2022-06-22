import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AuthGuardService } from './service/auth.guard';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'emplist',
    loadChildren: () =>
      import('./emplist/emplist.module').then((m) => m.EmplistModule),
    component: EmplistComponent,
  },
  { path: 'employee/:id', component: AddEmployeeComponent },

  {
    path: 'addEmployee',
    component: AddEmployeeComponent,
  },
];

// {path: 'logout', component: LogoutComponent},
// {path: '**', component: ErrorComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
