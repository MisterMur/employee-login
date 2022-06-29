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
  // employeeForm!: FormGroup;
  employeeForm: FormGroup = new FormGroup({});

  mode = 'Add';
  submitted = false;
  employees: Employee[] = [];
  componentAlive: boolean = true;
  states: string[] = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ];

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
          Validators.minLength(2),
          Validators.maxLength(35),
          Validators.pattern('^[a-zA-Z]+$'),
        ]),
        last_name: new FormControl(this.employee.last_name, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(35),
          Validators.pattern('^[a-zA-Z]+$'),
        ]),
        email: new FormControl(this.employee.email, [
          Validators.email,
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50),
        ]),
        city: new FormControl(
          this.employee.city,
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(50),
          ])
        ),
        state: new FormControl(this.employee.state, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2),
        ]),

        zip: new FormControl(
          this.employee.zip,
          Validators.compose([
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.minLength(5),
            Validators.maxLength(9),
          ])
        ),
        address: new FormControl(
          this.employee.address,
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(50),
          ])
        ),
        cell_phone: new FormControl(this.employee.cell_phone, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$'),
        ]),
        home_phone: new FormControl(this.employee.home_phone, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$'),
        ]),
      });
    } else {
      this.employeeForm = new FormGroup({
        user_id: new FormControl('', [Validators.required]),
        first_name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(35),
          Validators.pattern('^[a-zA-Z]+$'),
        ]),

        last_name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(35),
          Validators.pattern('^[a-zA-Z]+$'),
        ]),
        email: new FormControl(
          '',
          Validators.compose([
            Validators.email,
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(50),
          ])
        ),
        city: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(50),
          ])
        ),
        state: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(2),
          ])
        ),

        zip: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.minLength(5),
            Validators.maxLength(9),
          ])
        ),
        address: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(50),
          ])
        ),
        cell_phone: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$'),
        ]),
        home_phone: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$'),
        ]),
      });
    }
  }

  onSubmit() {
    console.log('in handleaddemployee');
    console.log(this.employeeForm.value);
    if (this.employeeForm.invalid) {
      return;
    }
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
  validateInput(field: any) {
    this.employeeForm.patchValue({
      [field]: this.employeeForm.controls[field].value,
    });
  }
  handleCancel() {
    this.router.navigate(['emplist']);
  }
  get f() {
    return this.employeeForm.controls;
  }
}
