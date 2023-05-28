import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

export interface Customer {
  _id?: string | null;
  firstName?: string | null ;
  lastName?: string | null ;
  phone?: string | null ;
  email?: string | null ;
  address?: string | null ;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 headline = "Customers";
 icon1 = "bi bi-person-fill";

 customers: Array<Customer> = []; 

  constructor(
        private api: ApiService,
    ) { }

    
   getCustomers() {
        this.api.getCustomers().subscribe({
            next: (data: Array<Customer>) => this.customers = data,
            error: (err) => console.log(err)
        })
    }
     ngOnInit(): void {
         this.getCustomers();
    }  

    allCustomers() {
      setTimeout (() => {
          //  console.log("hello");
        this.getCustomers();
      },50)
      
    }


  onDelete(customer: Customer) {
        if (!customer._id) {
            return;
        }
        this.api.deleteCustomer(customer._id).subscribe({
            next: (data: Customer) => this.getCustomers(),
            error: (err) => console.log(err)
        })
    }  

 

  }
   


   
