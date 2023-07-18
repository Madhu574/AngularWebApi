// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SharedService {
//    APIUrl="http://localhost:5840/api/Department/GetDepartment";
//    baseUrl="http://localhost:5840/api/Department/AddEditDepartment";
//    dltUrl="http://localhost:5840/api/Department/DeleteDepartment";
//    empUrl="http://localhost:5840/api/Employee/GetEmployee";
//    addUrl="http://localhost:5840/api/Employee/AddEditEmployee";
//    EmpdltUrl="http://localhost:5840/api/Employee/DeleteEmployee";
//    DesUrl = "http://localhost:5840/api/Designation/GetDesignations";

//   constructor(private http:HttpClient) { }

//   getDepartment():Observable<any[]>{
//     return this.http.get<any>(this.APIUrl);
//   }
//   getDepartmentById():Observable<any[]>{
//     return this.http.get<any>(this.APIUrl+'/Department/id');
//   }
//   addDepartment(val:any){
//     return this.http.post(this.baseUrl,val);
//   }
//   updateDepartment(val:any){
//     return this.http.put(this.baseUrl,val);
//   }
//   deleteDepartment(id: number): Observable<any> {
//     const url = `${this.dltUrl}?id=${id}`;
//     return this.http.delete(url);
//   }
 
//   getEmployees():Observable<any[]>{
//     return this.http.get<any>(this.empUrl);
//   }
//   getEmployeeById():Observable<any[]>{
//     return this.http.get<any>(this.empUrl);
//   }
//   addEmployee(val:any){
//     return this.http.post(this.addUrl,val);
//   }
//   updateEmployee(val:any){
//     return this.http.put(this.addUrl,val);
//   }
//   deleteEmployee(id: number): Observable<any> {
//     const url = `${this.EmpdltUrl}?id=${id}`;
//     return this.http.delete(url);
//   }
//   getDesignations():Observable<any[]>{
//     return this.http.get<any>(this.DesUrl);
//   }

// }

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';




@Injectable({

  providedIn: 'root'

})

export class SharedService {

  APIUrl = "http://localhost:5840/api/Department/GetDepartment";

  baseUrl = "http://localhost:5840/api/Department/AddEditDepartment";

  dltUrl = "http://localhost:5840/api/Department/DeleteDepartment";

  empUrl = "http://localhost:5840/api/Employee/GetEmployee";

  addUrl = "http://localhost:5840/api/Employee/AddEditEmployee";

  EmpdltUrl = "http://localhost:5840/api/Employee/DeleteEmployee";

  DesUrl = "http://localhost:5840/api/Designation/GetDesignations";





  constructor(private http: HttpClient) { }

  


   getDepartment(): Observable<any[]> {

     return this.http.get<any>(this.APIUrl).pipe(

      map(response => response.Result),

      catchError(this.handleError)

     );

   }

  getDepartmentById(id: number): Observable<any[]> {

    const url = `${this.APIUrl}/Department/${id}`;

    return this.http.get<any>(url).pipe(
      map(response => response.Result),

      catchError(this.handleError)

    );

  }




  addDepartment(val: any) {

    return this.http.post(this.baseUrl, val).pipe(

      catchError(this.handleError)

    );

  }




  updateDepartment(val: any) {

    return this.http.put(this.baseUrl, val).pipe(

      catchError(this.handleError)

    );

  }




  deleteDepartment(id: number): Observable<any> {

    const url = `${this.dltUrl}?id=${id}`;

    return this.http.delete(url).pipe(

      catchError(this.handleError)

    );

  }





  getEmployees(): Observable<any[]> {

    return this.http.get<any>(this.empUrl).pipe(

      map(response => response.Result),

      catchError(this.handleError)

    );

  }




  getEmployeeById(id: number): Observable<any[]> {

    const url = `${this.empUrl}/Employee/${id}`;

    return this.http.get<any>(url).pipe(

      map(response => response.Result),

      catchError(this.handleError)

    );

  }




  addEmployee(val: any) {

    return this.http.post(this.addUrl, val).pipe(

      catchError(this.handleError)

    );

  }




  updateEmployee(val: any) {

    return this.http.put(this.addUrl, val).pipe(

      catchError(this.handleError)

    );

  }




  deleteEmployee(id: number): Observable<any> {

    const url = `${this.EmpdltUrl}?id=${id}`;

    return this.http.delete(url).pipe(

      catchError(this.handleError)

    );

  }

  getDesignations() {

    return this.http.get<any>(this.DesUrl)

    }

  private handleError(error: any) {

    console.error('An error occurred:', error);

    return throwError(error);

  }
}