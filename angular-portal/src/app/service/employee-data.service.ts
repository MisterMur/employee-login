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

  addEmployeeData(employee: any): Observable<any> {
    return this.http.post(environment.addEmpUrl, employee);
  }

  updateEmployeeData(employee: any): Observable<any> {
    return this.http.put(environment.updateEmpUrl, employee);
  }
}
