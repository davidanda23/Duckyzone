import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RegisterRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
