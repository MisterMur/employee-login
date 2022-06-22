import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { Employee } from '../model/Employee.Model';
import { MustMatch } from '../_helpers/must-match.validator';
import { EmployeeDataService } from '../service/employee-data.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  sub: any;
  employeeForm!: FormGroup;
  mode = 'Add';
  submitted = false;
  employees: Employee[] = [];
  componentAlive: boolean = true;

  employee = {
    id: '',
    user_id: '',
    email: '',
    first_name: '',
    last_name: '',
    zip: '',
    address: '',
    state: '',
    city: '',
    home_phone: '',
    cell_phone: '',
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private employeeData: EmployeeDataService
  ) {
    this.employee = {
      id: '',
      user_id: '',
      email: '',
      first_name: '',
      last_name: '',
      zip: '',
      address: '',
      state: '',
      city: '',
      home_phone: '',
      cell_phone: '',
    };
  }
  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params) => {
      console.log(params);
      this.mode = params.get('mode') === 'Edit' ? 'Edit' : 'Add';
      this.employee.id = params.get('id')!;
      this.employee.user_id = params.get('user_id')!;
      this.employee.email = params.get('email')!;
      this.employee.first_name = params.get('first_name')!;
      this.employee.last_name = params.get('last_name')!;
      this.employee.address = params.get('address')!;
      this.employee.city = params.get('city')!;
      this.employee.zip = params.get('zip')!;
      this.employee.state = params.get('state')!;
      this.employee.home_phone = params.get('home_phone')!;
      this.employee.cell_phone = params.get('cell_phone')!;

      console.log(this.employee);
    });
    if (this.employee) {
      this.employeeForm = new FormGroup({
        user_id: new FormControl(this.employee.user_id, [Validators.required]),
        first_name: new FormControl(this.employee.first_name, [
          Validators.required,
          Validators.minLength(10),
        ]),
        last_name: new FormControl(this.employee.last_name, [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z]+$'),
        ]),
        email: new FormControl(this.employee.email, [
          Validators.email,
          Validators.required,
        ]),
        city: new FormControl(this.employee.city, [Validators.required]),
        state: new FormControl(this.employee.state, [Validators.required]),

        zip: new FormControl(this.employee.zip, [Validators.required]),
        address: new FormControl(this.employee.address, [Validators.required]),
        cell_phone: new FormControl(this.employee.cell_phone, [
          Validators.required,
        ]),
        home_phone: new FormControl(this.employee.home_phone, [
          Validators.required,
        ]),
      });
    } else {
      this.employeeForm = new FormGroup({
        user_id: new FormControl('', [Validators.required]),
        first_name: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
        ]),
        last_name: new FormControl('', [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z]+$'),
        ]),
        email: new FormControl('', [Validators.email, Validators.required]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),

        street: new FormControl('', [Validators.required]),
        zip: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        cell_phone: new FormControl('', [Validators.required]),
        home_phone: new FormControl('', [Validators.required]),
      });
    }
  }

  onSubmit() {
    console.log('in handleaddemployee');
    console.log(this.employeeForm.value);
    if (this.mode === 'Edit') {
      this.employeeData
        .updateEmployeeData(this.employeeForm.value)
        .then(() => this.router.navigate(['emplist']));
    } else {
      console.log(this.mode);
      this.employeeData
        .addEmployeeData(this.employeeForm.value)
        .then(() => this.router.navigate(['emplist']));
    }
  }
  handleCancel() {
    this.router.navigate(['emplist']);
  }
  get f() {
    return this.employeeForm.controls;
  }
}
