import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customers/customer/customer.component';
import { User } from '../auth/signup/signup.component';
import { Employee } from '../employees/employee/employee.component';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

 serverUrl = 'http://localhost:3000/';
 private TOKEN_KEY = 'token';


   setEmail(value: string) {
        localStorage.setItem("email", value);
        
    }

    getEmail(): string {
        return localStorage.getItem("email") || '';
      
    }
 
  setToken(value: string) {
        localStorage.setItem(this.TOKEN_KEY, value);
        
    }

  getToken(): string {
        return localStorage.getItem(this.TOKEN_KEY) || '';
      
    }

  deleteToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }


  constructor(private http: HttpClient) { }

   // Generic GET function
    GET<DynamicType>(endpoint: string): Observable<DynamicType> {
        return this.http.get<DynamicType>(
            `${this.serverUrl}${endpoint}`,
            {
                  headers: {
                     'x-auth-token': this.getToken()
                 }
            }
        )
    }
    
    // Generic POST function 
    POST<DynamicType>(endpoint: string, data: DynamicType): Observable<DynamicType> {
        return this.http.post<DynamicType>(
            `${this.serverUrl}${endpoint}`,
            data,
             {
                 headers: {
                     'Content-Type': 'application/json',
                     'x-auth-token': this.getToken()
                 }
             }
        )
    }


  // Create - CRUD
  addCustomer(customer:Customer ): Observable<Customer> {
      return this.POST<Customer>('customers', customer);
       
       
    }

  // Read - CRUD
    getCustomers(): Observable<Array<Customer>> {
        return this.GET<Array<Customer>>(`customers`);
     } 

   // Read One - CRUD
    getOneCustomer(id: String): Observable<Customer> {
        return this.GET<Customer>(`customers/${id}`);
    }  

   // Update - CRUD
   updateCustomer(id: String, customer: Customer): Observable<Customer> {
        return this.http.put<Customer>(
            `${this.serverUrl}customers/${id}`,
            customer,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

    // Delete - CRUD
    deleteCustomer(id: String): Observable<Customer> {
        return this.http.delete<Customer>(
            `${this.serverUrl}customers/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }



    // (employees) Create - CRUD
      addEmployee(employee:Employee ): Observable<Employee> {
      return this.POST<Employee>('employees', employee);
    }

    // (Employees) Read - CRUD
    getEmployees(): Observable<Array<Employee>> {
        return this.GET<Array<Employee>>(`employees`);
     }  
     
    

 // Create user 
  signup(user: User): Observable<User> {
        return this.POST<User>('users/signup', user);
    }

 // Autorization user
  login(user: User): Observable<User> {
        return this.POST<User>('users/login', user);
    }


}