import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './department/department.component';
import { ShowDeptComponent } from './department/show-dept/show-dept.component';
import { AddEditDeptComponent } from './department/add-edit-dept/add-edit-dept.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatDividerModule } from '@angular/material/divider'; // Import MatDividerModule
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
; 
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatMenuModule } from '@angular/material/menu';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDeptComponent,
    AddEditDeptComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatIconModule,
    MatDividerModule, 
    MatListModule, 
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    Ng2SearchPipeModule


  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }