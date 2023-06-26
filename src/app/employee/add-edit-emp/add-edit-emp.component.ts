
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  AllDepartments: any[] = [];
  
  @Input() emp: any;
  EmployeeId: string | undefined;
  EmployeeName: string | undefined;
  FirstName: string | undefined;
  LastName: string | undefined;
  Designation: string | undefined;
  DateOfJoining: string | undefined;
  ReportingManagerEmployeeId: string | undefined;
  Sex: string | undefined;
  EmployeeAddress: string | undefined;
  State: string | undefined;
  Country: string | undefined;
  Pincode: string | undefined;
  DepartmentId: string | undefined;
  IsActive: string | undefined;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.loadAllEmployees();
    this.loadEmployeeDetails();
  }

  loadAllEmployees() {
    this.service.getEmployees().subscribe((data: any) => {
      this.AllDepartments = data;
    });
  }

  loadEmployeeDetails() {
    this.EmployeeId = this.emp.EmployeeId;
    this.EmployeeName = this.emp.EmployeeName;
    this.FirstName = this.emp.FirstName;
    this.LastName = this.emp.LastName;
    this.Designation = this.emp.Designation;
    this.DateOfJoining = this.emp.DateOfJoining;
    this.ReportingManagerEmployeeId = this.emp.ReportingManagerEmployeeId;
    this.Sex = this.emp.Sex;
    this.EmployeeAddress = this.emp.EmployeeAddress;
    this.State = this.emp.State;
    this.Country = this.emp.Country;
    this.Pincode = this.emp.Pincode;
    this.DepartmentId = this.emp.DepartmentId;
    this.IsActive = this.emp.IsActive;
  }

  addEmployee() {
    const val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Designation: this.Designation,
      DateOfJoining: this.DateOfJoining,
      ReportingManagerEmployeeId: this.ReportingManagerEmployeeId,
      Sex: this.Sex,
      EmployeeAddress: this.EmployeeAddress,
      State: this.State,
      Country: this.Country,
      Pincode: this.Pincode,
      DepartmentId: this.DepartmentId,
      IsActive: this.IsActive
    };

    this.service.addEmployee(val).subscribe(
         (response: any) => {
            if (response && response.Message) {
              alert(response.Message)
              location.reload();
            }
          
            else{
              console.log("Added")
            }
              
            },
            (error: any)=>{
              console.error(error)
            } 
    );
  
  }
  updateEmployee() {
    const val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Designation: this.Designation,
      DateOfJoining: this.DateOfJoining,
      ReportingManagerEmployeeId: this.ReportingManagerEmployeeId,
      Sex: this.Sex,
      EmployeeAddress: this.EmployeeAddress,
      State: this.State,
      Country: this.Country,
      Pincode: this.Pincode,
      DepartmentId: this.DepartmentId,
      IsActive: this.IsActive
    };

    this.service.updateEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
