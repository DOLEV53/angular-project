import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldErrorComponent } from './field-error/field-error.component';
import { SignupComponent } from './signup/signup.component';





@NgModule({
  declarations: [
    LoginComponent,
    FieldErrorComponent,
    SignupComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  
  ],
  exports: [
    LoginComponent,
    FieldErrorComponent,
    SignupComponent
  ]
})
export class AuthModule { }
