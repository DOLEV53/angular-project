import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';



export interface Employee {
    _id?: string | null;
    name?: string | null;
    phone?: string | null;
    email?: string | null;
    birthday?: string | null;
    
    
}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
   headline2 ="Contacts"
   icon1 = "bi bi-envelope-fill"
 
   title = 'Company Employees';
   searchText: any;
   employees: Array<Employee> = [];
   

     constructor(
        private api: ApiService,
    
    ) { }

 
   getEmployees() {
        this.api.getEmployees().subscribe({
            next: (data: Array<Employee>) => this.employees = data,
            error: (err) => console.log(err)
        })
    }
     ngOnInit(): void {
         this.getEmployees();
    }  

     allEmployees() {
      setTimeout (() => {
          //  console.log("hello");
        this.getEmployees();
      },50)
      
    }


}

