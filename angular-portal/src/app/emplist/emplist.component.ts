import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDataService } from '../service/employee-data.service';
import { Employee } from '../model/Employee';
import { InteractionService } from '../service/interaction.service';
import { takeWhile } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.scss'],
})
export class EmplistComponent implements OnInit {
  name = '';
  componentAlive: boolean = true;
  employee: any;
  title: string = 'Edit';
  employees: Employee[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeData: EmployeeDataService,
    private _interactionService: InteractionService
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.employeeData
      .getEmployeeData()
      .pipe(takeWhile(() => this.componentAlive))
      .subscribe((res) => (this.employees = res));
    console.log('emplist employeeData: ', this.employeeData);
    console.log('emplist employee array: ', this.employees);
  }

  updateData(id: any) {
    this.employee = this.employees.find((x) => x.id === id);
    this.checkStatus();
  }
  handleAddEmployee() {
    this.router.navigate(['addemployee']);
  }
  logoutHandler() {
    this.router.navigate(['']);
  }

  checkStatus() {
    this._interactionService
      .getTitle()
      .pipe(takeWhile(() => this.componentAlive))
      .subscribe((title) => {
        this.title = title;

        if (title === 'Edit') {
          this._interactionService.setId(this.employee.id);
          this._interactionService.setFirstName(this.employee.first_name);
          this._interactionService.setLastName(this.employee.last_name);
          this._interactionService.setAddress(this.employee.address);
          this._interactionService.setCity(this.employee.city);
          this._interactionService.setState(this.employee.state);
          this._interactionService.setZip(this.employee.zip);
          this._interactionService.setHomePhone(this.employee.home_phone);
          this._interactionService.setCellPhone(this.employee.cell_phone);
          this._interactionService.setEmail(this.employee.email);
        } else {
          this.initialState();
        }
      });
  }

  initialState() {
    this._interactionService.setId(0);
    this._interactionService.setFirstName('');
    this._interactionService.setLastName('');
    this._interactionService.setAddress('');
    this._interactionService.setCity('');
    this._interactionService.setState('');
    this._interactionService.setZip('');
    this._interactionService.setHomePhone('');
    this._interactionService.setCellPhone('');
    this._interactionService.setEmail('');
  }

  ngOnDestroy() {
    this.componentAlive = false;
  }
}
