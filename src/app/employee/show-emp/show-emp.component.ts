import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { EmployeeComponent } from '../employee.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit{
  searchText: string = '';
  recentSearches: any;

  AllEmployees: any[] = [];
   p:number =1;
   itemsPerPage:number = 5;
   totalEmployees: any;

  constructor(private service:SharedService, private router:ActivatedRoute) {


 }

 ActivateStudentEditComponent:boolean | undefined
  ModalTitle: string | undefined;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  dataItem:any;


  ngOnInit(): void {
    
      this.service.getEmployees().subscribe(data=>{
        this.AllEmployees=data;
        this.refreshEmployees();
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
      DepartmentName:"",
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
      this.service.deleteEmployee(item.EmployeeId).subscribe((response: any) => {
        if (response && response.Message) {
          alert(response.Message)
        }
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
      this.totalEmployees = data.length;
    });
  }
  }

