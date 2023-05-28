import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';


export interface User {
    _id?: string | null;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    token?: string | null;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements AfterViewInit {
  
    constructor(
        private api: ApiService,
        private router: Router
    ) { }

    @ViewChild('nameFieldRef') nameField!: ElementRef;

    signupForm = new FormGroup({
        name: new FormControl('', {
            validators: [Validators.required, Validators.maxLength(20), Validators.minLength(2)]
        }),
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        })
    })

    
    ngAfterViewInit(): void {
        this.nameField.nativeElement.focus();
    }

   
    getFieldControl(field: string): FormControl {
        return this.signupForm.get(field) as FormControl;
    }

    onSubmit() {
        if (this.signupForm.invalid) {
            return;
        }
       console.log(this.signupForm.value);

        this.api.signup(this.signupForm.value).subscribe({
            next: (data) => {
                this.router.navigate(['login']);
            },
            error: (err) => console.log(err)
        })
    }


}


