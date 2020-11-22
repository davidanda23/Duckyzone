import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    SearchRoutingModule,
    CommonModule
  ]
})
export class SearchModule { }
