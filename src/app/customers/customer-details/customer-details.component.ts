import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Customer } from '../customer/customer.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
    headline = "Customer Details";
    icon = "bi bi-person-fill";

    customer: Customer | null = null; 

    customerDetailsForm = new FormGroup({
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
        private activeRoute: ActivatedRoute,
        private router: Router
       
    ) { }

  ngOnInit(): void {
        this.activeRoute.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id') as string;
                return this.api.getOneCustomer(id);
            })
        ).subscribe({
            next: (data: Customer) => {
                this.customer = data;
                const firstName = data.firstName || '';
                const lastName = data.lastName || '';
                const phone = data.phone || '';
                const email = data.email || '';
                const address = data.address || '';
                this.customerDetailsForm.get('firstName')?.setValue(firstName);
                this.customerDetailsForm.get('lastName')?.setValue(lastName);
                this.customerDetailsForm.get('phone')?.setValue(phone);
                this.customerDetailsForm.get('email')?.setValue(email);
                this.customerDetailsForm.get('address')?.setValue(address);
            },
            error: (err) => console.log(err)
        })
    }
    
  }
