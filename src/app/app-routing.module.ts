import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customers/customer/customer.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './core/auth.service';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { AddCustomersComponent } from './customers/add-customers/add-customers.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
     // The first page we wiil see when we go to localhost 4200
     { path: '', pathMatch: 'full', redirectTo: '/signup' },
   
    { path: '', canActivateChild: [AuthService],
    children: [
       { path: 'customers', component: CustomerComponent },
       { path: 'employees', component: EmployeeComponent },
       { path: 'add-customer/:id', component: AddCustomersComponent },
       { path: 'edit-customer/:id', component: EditCustomerComponent },
       { path: 'customer-details/:id', component: CustomerDetailsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
