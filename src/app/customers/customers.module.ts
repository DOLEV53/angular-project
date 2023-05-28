import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';



@NgModule({
  declarations: [
    CustomerComponent,
    EditCustomerComponent,
    CustomerDetailsComponent,
    AddCustomersComponent
  
  ],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
   
  ],
  exports: [
    CustomerComponent,
    EditCustomerComponent,
    CustomerDetailsComponent,
    AddCustomersComponent
  ]
})
export class CustomersModule { }
