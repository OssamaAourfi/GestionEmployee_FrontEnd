import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/v1/employees';
  constructor(private http: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }
  
  createEmployee(employee: Employee): Observable<any>{
    return this.http.post(`${this.baseUrl}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number| undefined): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
