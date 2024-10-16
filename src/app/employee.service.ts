import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //private baseURL = "http://localhost:8080/api/v1/employees"
  //private baseURL = "http://100.36.116.164:6266/api/v1/employees";
  private baseURL = "https://initial-b.work.gd:6266/api/v1/employees";
  static header_node = {
    headers: new HttpHeaders(
        { 'Accept': 'application/json' ,
        'rejectUnauthorized': 'false' })
    };
  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    console.log("EmployeeService.getEmployeesList entry point");

    return this.httpClient.get<Employee[]>(`${this.baseURL}`,EmployeeService.header_node);
  }
  
  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`,EmployeeService.header_node);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee,EmployeeService.header_node)
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,employee,EmployeeService.header_node);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
