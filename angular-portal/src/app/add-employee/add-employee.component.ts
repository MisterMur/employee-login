import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  mode = 'Add';
  employee = {
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
  handleAddEmployee() {}
  handleCancel() {
    this.router.navigate(['emplist']);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
