import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NavBar2Component } from './nav-bar2/nav-bar2.component';
import { CoreModule } from '../core/core.module';
import { CustomersModule } from '../customers/customers.module';



@NgModule({
  declarations: [
    NavBarComponent,
    NavBar2Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
   
  ],
  exports: [
    NavBarComponent,
    NavBar2Component
  ]
})
export class SharedModule { }
