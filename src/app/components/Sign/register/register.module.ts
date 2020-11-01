import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RegisterRoutingModule,
    CommonModule
  ]
})
export class RegisterModule { }
