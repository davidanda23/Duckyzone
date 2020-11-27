import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isEmployees: boolean;
  isDepts: boolean;
  isProviders: boolean;
  isProducts: boolean;
  isSales: boolean;
  isUsers: boolean;
  
  constructor() { }

  ngOnInit(): void {
    this.isEmployees=true;
    this.isDepts=false;
    this.isProviders=false;
    this.isProducts=false;
    this.isSales=false;
    this.isUsers=false;
  }

  toggleConfig(property: String){
    switch(property){
      case "employees":
        this.isEmployees=true;
        this.isDepts=false;
        this.isProviders=false;
        this.isProducts=false;
        this.isSales=false;
        this.isUsers=false;
        break;
      case "depts":
        this.isEmployees=false;
        this.isDepts=true;
        this.isProviders=false;
        this.isProducts=false;
        this.isSales=false;
        this.isUsers=false;
        break;
      case "providers":
        this.isEmployees=false;
        this.isDepts=false;
        this.isProviders=true;
        this.isProducts=false;
        this.isSales=false;
        this.isUsers=false;
        break;
      case "products":
        this.isEmployees=false;
        this.isDepts=false;
        this.isProviders=false;
        this.isProducts=true;
        this.isSales=false;
        this.isUsers=false;
        break;
      case "sales":
        this.isEmployees=false;
        this.isDepts=false;
        this.isProviders=false;
        this.isProducts=false;
        this.isSales=true;
        this.isUsers=false;
        break;
      case "users":
        this.isEmployees=false;
        this.isDepts=false;
        this.isProviders=false;
        this.isProducts=false;
        this.isSales=false;
        this.isUsers=true;
        break;
    }
  }
}
