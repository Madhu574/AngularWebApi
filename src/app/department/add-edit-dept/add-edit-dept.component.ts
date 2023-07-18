import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-add-edit-dept',
  templateUrl: './add-edit-dept.component.html',
  styleUrls: ['./add-edit-dept.component.css']
})
export class AddEditDeptComponent implements OnInit {
  
  departmentName = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]+$')
  ]);
  constructor(private service:SharedService){ }
  

  @Input() dept:any;
  DepartmentId: string | undefined;
  DepartmentName: string | undefined;
  

  ngOnInit(): void 
  {
   this.DepartmentId=this.dept.DepartmentId;
   this.DepartmentName=this.dept.DepartmentName;

  }



  updateDepartment(){
    var val ={DepartmentId:this.DepartmentId,
              DepartmentName:this.DepartmentName};
      this.service.updateDepartment(val).subscribe((response: any) => {
        if (response && response.Message) {
          alert(response.Message)
        }
      });
    }
    
  addDepartment() {
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
  
    this.service.addDepartment(val).subscribe(
      (response: any) => {
        if (response && response.Message) {
          alert(response.Message)
          location.reload();
        } 
      }
    );
  }

} 

