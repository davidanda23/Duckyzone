import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService/http-service.service';

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
  public employees: any = [];
  public depts: any = [];
  public providers: any = [];
  public products: any = [];
  public users: any = [];
  
  constructor(public httpService : HttpService) { }

  ngOnInit(): void {
    this.isEmployees=true;
    this.isDepts=false;
    this.isProviders=false;
    this.isProducts=false;
    this.isSales=false;
    this.isUsers=false;
    this.httpService.getAllEmployees().subscribe( (Empleados) => {
      this.employees = Empleados;
      console.log(this.employees);
    } );
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
        this.httpService.getAllEmployees().subscribe( (Empleados) => {
          this.employees = Empleados;
        } );
        break;
      case "depts":
        this.isEmployees=false;
        this.isDepts=true;
        this.isProviders=false;
        this.isProducts=false;
        this.isSales=false;
        this.isUsers=false;
        this.httpService.getDeptsAdmin().subscribe( (Departamentos) => {
          this.depts = Departamentos;
        } );
        break;
      case "providers":
        this.isEmployees=false;
        this.isDepts=false;
        this.isProviders=true;
        this.isProducts=false;
        this.isSales=false;
        this.isUsers=false;
        this.httpService.getProviders().subscribe( (Proveedores) => {
          this.providers = Proveedores;
        } );
        break;
      case "products":
        this.isEmployees=false;
        this.isDepts=false;
        this.isProviders=false;
        this.isProducts=true;
        this.isSales=false;
        this.isUsers=false;
        this.httpService.getProducts().subscribe( (Productos) => {
          this.products = Productos;
        } );
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
        this.httpService.getUsers().subscribe( (Usuarios) => {
          this.users = Usuarios;
        } );
        break;
    }
  }
  
}
