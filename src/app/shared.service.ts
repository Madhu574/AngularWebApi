import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   APIUrl="http://localhost:5840/api/Department/GetDepartment";
   baseUrl="http://localhost:5840/api/Department/AddEditDepartment";
   dltUrl="http://localhost:5840/api/Department/DeleteDepartment";
   empUrl="http://localhost:5840/api/Employee/GetEmployee";
   addUrl="http://localhost:5840/api/Employee/AddEditEmployee";
   EmpdltUrl="http://localhost:5840/api/Employee/DeleteEmployee";

  constructor(private http:HttpClient) { }

  getDepartment():Observable<any[]>{
    return this.http.get<any>(this.APIUrl);
  }
  getDepartmentById():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department/id');
  }
  addDepartment(val:any){
    return this.http.post(this.baseUrl,val);
  }
  updateDepartment(val:any){
    return this.http.put(this.baseUrl,val);
  }
  deleteDepartment(id: number): Observable<any> {
    const url = `${this.dltUrl}?id=${id}`;
    return this.http.delete(url);
  }
 
  getEmployees():Observable<any[]>{
    return this.http.get<any>(this.empUrl);
  }
  getEmployeeById():Observable<any[]>{
    return this.http.get<any>(this.empUrl);
  }
  addEmployee(val:any){
    return this.http.post(this.addUrl,val);
  }
  updateEmployee(val:any){
    return this.http.put(this.addUrl,val);
  }
  deleteEmployee(id: number): Observable<any> {
    const url = `${this.EmpdltUrl}?id=${id}`;
    return this.http.delete(url);
  }


}
