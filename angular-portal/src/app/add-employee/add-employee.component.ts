import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { Employee } from '../model/Employee.Model';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  // employeeForm = new FormGroup({
  //   user_id: new FormControl(''),
  //   email: new FormControl(''),
  //   first_name: new FormControl(''),
  //   last_name: new FormControl(''),
  //   zip: new FormControl(''),
  //   address: new FormControl(''),
  //   state: new FormControl(''),
  //   city: new FormControl(''),
  //   home_phone: new FormControl(''),
  //   cell_phone: new FormControl(''),
  // });

  employeeForm!: FormGroup;
  mode = 'Add';
  submitted = false;
  employee = {};

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.employee = {
      id: null,
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
      street: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      cell_phone: new FormControl('', [Validators.required]),
      home_phone: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log('in handleaddemployee');
    console.log(this.employeeForm.value);
  }
  handleCancel() {
    this.router.navigate(['emplist']);
  }
  get f() {
    return this.employeeForm.controls;
  }
}
