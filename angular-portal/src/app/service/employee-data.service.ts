import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/Employee.Model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  constructor(private http: HttpClient) {}

  getEmployeeData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.retrieveEmpUrl);
  }

  async addEmployeeData(employee: any) {
    console.log('in add employee data');

    const response = await fetch(environment.addEmpUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(employee),
    });
    return response.json();
  }
  async updateEmployeeData(employee: any) {
    console.log('in update employee data', employee);

    const response = await fetch(environment.updateEmpUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee),
    });
    return response.json();
  }
}
