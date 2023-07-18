import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit{

  constructor(private service:SharedService) {}

  AllDepartments:any=[];
  ModalTitle: string | undefined;
  ActivateAddEditDeptComp:boolean=false;
  dept:any;
  dataItem:any;


  ngOnInit(): void {
    this.refreshAllDepartments();
  }

  addClick(){
    this.dept={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDeptComp=true;
  }

  editClick(item: any){
    this.dept=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditDeptComp=true;
  }

  deleteClick(item: any){
    if(confirm("Are you sure??")){
      this.service.deleteDepartment(item.DepartmentId).subscribe((response: any) => {
        if (response && response.Message) {
          alert(response.Message)
        }
        this.refreshAllDepartments();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditDeptComp=false;
    this.refreshAllDepartments();
  }

  refreshAllDepartments(){
    this.service.getDepartment().subscribe((data: any)=>{
      this.AllDepartments=data;
    });
  }
}
