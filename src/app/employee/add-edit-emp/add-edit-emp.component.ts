
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





interface CountryName {
  country: CountryName;
}

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {



  countries: CountryName[] = [];
  selectedCountry: string | undefined;
  filteredCountries: CountryName[] = [];

  

  AllDepartments: any[] = [];

  @Input() emp: any;
  EmployeeId: string | undefined;
  EmployeeName: string | undefined;

  FirstName: string = '';
  LastName: string | undefined;
  DesignationName: string[] = [];
  DateOfJoining: string | undefined;
  ReportingManagerEmployeeId: string | undefined;
  Gender: string | undefined;
  EmployeeAddress: string | undefined;
  State: string | undefined;
  Pincode: string | undefined;
  IsActive: boolean | undefined;
  selectedOption: any;
  Designation: any;
  Country: any;
  DepartmentName: any;

  GenderOptions = ['Male', 'Female'];
  filteredDepartments: string[] | undefined;
  selectedDepartment: string | undefined;

  
  constructor(private service: SharedService, private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {


  

    this.loadAllEmployees();
    this.loadEmployeeDetails();
    this.getDropdownOptions();
    this.getDropdownOptions1();
    this.fetchCountries();
  
    //this.loadDesignations();
  }
  initForm() {
    throw new Error('Method not implemented.');
  }
 
  getDropdownOptions1() {
    this.service.getDesignations().subscribe(

      (response: any[]) => {

        this.DesignationName = response.map(item => item.DesignationName);

      },
      (error: any) => {
        console.log('Error fetching dropdown options:', error);
      }
    );
  }



  onOptionChange1() {

    console.log('Selected option:', this.selectedOption)
}




  getDropdownOptions() {
    this.service.getDepartment().subscribe(
      (response: any[]) => {
        this.DepartmentName = response.map(item => item.DepartmentName);
      },
      (error: any) => {
        console.log('Error fetching dropdown options:', error);
      }
    );
  }

 

  selectDepartment(department: string): void {
    this.selectedDepartment = department;
  }

  onOptionChange() {
     console.log('Selected option:', this.selectedDepartment);
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
    this.Designation = this.selectedOption;
    this.DateOfJoining = this.emp.DateOfJoining;
    this.ReportingManagerEmployeeId = this.emp.ReportingManagerEmployeeId;
    this.Gender = this.emp.Gender;
    this.EmployeeAddress = this.emp.EmployeeAddress;
    this.Country = this.selectedCountry;
    this.State = this.State;
    this.Pincode = this.emp.Pincode;
    this.DepartmentName = this.selectedDepartment;
    this.IsActive = this.emp.IsActive;
    console.log(this.Country);
  }
  getStatesForSelectedCountry(): string[] {

    if (this.selectedCountry) {
      const selectedCountryObject = this.Country.find((country: any) => country.name === this.selectedCountry);
      if (selectedCountryObject && selectedCountryObject.states) {
        return selectedCountryObject.states.map((state: any) => state.name);
      }
    }
    return [];
  }


  
  fetchCountries() {
   this.http.get<any[]>('https://restcountries.com/v2/all')
      .subscribe(
         (response) => {
           this.Country = response;
           
          
         },
         (error) => {
           console.error('Error fetching countries:', error);
  }
      );
   }
  
 


  
  addEmployee() {
   
    const val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Designation: this.selectedOption,
      DateOfJoining: this.DateOfJoining,
      ReportingManagerEmployeeId: this.ReportingManagerEmployeeId,
      Gender: this.Gender,
      EmployeeAddress: this.EmployeeAddress,
      State: this.State,
      Country: this.selectedCountry,
      Pincode: this.Pincode,
      DepartmentName: this.selectedDepartment,
      IsActive: this.IsActive
    };

    this.service.addEmployee(val).subscribe(
      (response: any) => {
        if (response && response.Message) {
          alert(response.Message);
          location.reload();
        } else {
          console.log("Added");
        }
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );
  }
  


  updateEmployee() {
    const val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Designation: this.selectedOption,
      DateOfJoining: this.DateOfJoining,
      ReportingManagerEmployeeId: this.ReportingManagerEmployeeId,
      Gender: this.Gender,
      EmployeeAddress: this.EmployeeAddress,
      State: this.State,
      Country: this.selectedCountry,
      Pincode: this.Pincode,
      DepartmentName: this.selectedDepartment,
      IsActive: this.IsActive
    };

    this.service.updateEmployee(val).subscribe((response: any) => {
      if (response && response.Message) {
        alert(response.Message)
      }
    });
  }
}
function initForm() {
  throw new Error('Function not implemented.');
}

