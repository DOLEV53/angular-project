import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';
import { User } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   currentDate = new Date();

   loginForm = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        })
    })

 constructor(
        private api: ApiService,
        private router: Router,
        private auth: AuthService
    ) {}


     getFieldControl(field: string): FormControl {
        return this.loginForm.get(field) as FormControl;
    }

     onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }

        this.api.login(this.loginForm.value).subscribe({
            next: (data: User) => {
                if (data.token) this.api.setToken(data.token)
                if (data.email) this.api.setEmail(data.email)
                this.router.navigate([this.auth.redirectUrl]);
            },
            error: (err) => console.log(err)
        })
    }

}









        
