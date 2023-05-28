import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Customer } from '../customer/customer.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent {
      
 customerForm = new FormGroup({
        firstName: new FormControl('', {
            validators: [ 
              Validators.required, 
              Validators.maxLength(200),
              Validators.minLength(2),
            ]
        }),
         lastName: new FormControl('', {
            validators: [ 
              Validators.required, 
              Validators.maxLength(200),
              Validators.minLength(2),
            ]
        }),
        email: new FormControl('', {
            validators: [
                Validators.required,
                Validators.email,
                Validators.maxLength(255),
                Validators.minLength(6),
            ]
        }),
        phone: new FormControl('', {
            validators: [
               Validators.required,
               Validators.maxLength(12),
               Validators.minLength(9),
            ]
        }),
       address: new FormControl('', {
            validators: [
               Validators.maxLength(350),
               Validators.minLength(6),
            ]
        }
        ),
    })  

     constructor(
        private api: ApiService,
        private router: Router
    ) { }

 
    // feild - error 
   @ViewChild('nameFieldRef') nameField!: ElementRef; 
    getFieldControl(field: string): FormControl {
        return this.customerForm.get(field) as FormControl;
    }

    @Output() buttonClicked = new EventEmitter();
    onButtonClick() {
        this.buttonClicked.emit();
    }

    

    onSubmit() {
      
        if (this.customerForm.invalid) {
            return;
        }

        this.api.addCustomer(this.customerForm.value).subscribe({
            next: (data: Customer) => {
                 this.customerForm.reset();
                 this.router.navigate(['customers'])
            },
            error: (err) => console.log(err)

        })
    }    

}
