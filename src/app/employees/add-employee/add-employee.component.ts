import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Employee } from '../employee/employee.component';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
     showForm = false;
  

     employeeForm = new FormGroup({
        name: new FormControl('', {
            validators: [ 
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(200),
             ]
        }),
        email: new FormControl('', {
            validators: [
                Validators.required,
                Validators.email,
                Validators.minLength(6),
                Validators.maxLength(255)
            ]
        }),
        phone: new FormControl('', {
            validators: [
               Validators.required,
               Validators.minLength(9),
               Validators.maxLength(12)
            ]
        }),
        birthday: new FormControl('', {
            validators: Validators.required
        })
    }) 
    
     constructor(
        private api: ApiService,
        private router: Router,
    
    ) { }


      toggleForm() {
      this.showForm = !this.showForm;
    }


     // feild - error 
   @ViewChild('nameFieldRef') nameField!: ElementRef; 
    getFieldControl(field: string): FormControl {
        return this.employeeForm.get(field) as FormControl;
    }

    @Output() buttonClicked = new EventEmitter();
     onButtonClick() {
     this.buttonClicked.emit();
    }


     onSubmit() {
      
        if (this.employeeForm.invalid) {
            return;
        }

        this.api.addEmployee(this.employeeForm.value).subscribe({
            next: (data: Employee) => {
                 this.employeeForm.reset();
                 this.router.navigate(['employees'])
            },
            error: (err) => console.log(err)

        })
    }    
}
