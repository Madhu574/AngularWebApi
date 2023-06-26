import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit{
  constructor(private service:SharedService) {}



  AllEmployees:any;
  ModalTitle: string | undefined;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  dataItem:any;


  ngOnInit(): void {
    
      this.service.getEmployees().subscribe(data=>{
        this.AllEmployees=data;
      });
    
    
    }
  refreshAllEmployees() {
    throw new Error('Method not implemented.');
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      FirstName:"",
      LastName:"",
      Designation:"",
      DateOfJoining:"",
      ReportingManagerEmployeeId:"",
      Sex:"",
      EmployeeAddress:"",
      State:"",
      Country:"",
      Pincode:"",
      DepartmentId:"",
      IsActive:""
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }

  editClick(item: any){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item: any){
    if(confirm("Are you sure??")){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmployees();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmployees();
  }

  refreshEmployees(){
    this.service.getEmployees().subscribe(data=>{
      this.AllEmployees=data;
    });
  }
}