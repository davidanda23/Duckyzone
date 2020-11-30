import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeModel } from './../../models/employee-model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService/http-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  select = new FormControl();
  closeResult = '';
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
  public entryDelete: any;

  
  constructor(public httpService : HttpService,
              public modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.isEmployees=true;
    this.isDepts=false;
    this.isProviders=false;
    this.isProducts=false;
    this.isSales=false;
    this.isUsers=false;
    this.httpService.getAllEmployees().subscribe( (Empleados) => {
      this.employees = Empleados;
    } );
  }
  configModal(targetModal,record: any){
    this.entryDelete = record;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    
  }
  editEmployee(){
    this.entryDelete.nombreusuario = (<HTMLInputElement>document.getElementById("usernameEditEmp")).value;
    this.entryDelete.correo = (<HTMLInputElement>document.getElementById("emailEditEmp")).value;
    this.entryDelete.nombre = (<HTMLInputElement>document.getElementById("nameEditEmp")).value;
    this.entryDelete.apelli_pat = (<HTMLInputElement>document.getElementById("apepatEditEmp")).value;
    this.entryDelete.apelli_mat = (<HTMLInputElement>document.getElementById("apematEditEmp")).value;
    this.entryDelete.tel = (<HTMLInputElement>document.getElementById("telEditEmp")).value;
    this.entryDelete.puesto = (<HTMLInputElement>document.getElementById("puestoEditEmp")).value;
    this.entryDelete.salario = (<HTMLInputElement>document.getElementById("salarioEditEmp")).value;
    this.entryDelete.id_departamento = (<HTMLInputElement>document.getElementById("id_depaEditEmp")).value;
    /*this.httpService.postEditEmp(this.entryDelete);
    window.location.reload();*/
    console.log(this.entryDelete);
    
  }
  deleteEmployeeDB(){
    this.httpService.deleteEmployee(this.entryDelete).subscribe(()=>{});
    this.httpService.deleteUser(this.entryDelete).subscribe(()=>{});
    window.location.reload();
  }
  deleteDeptDB(){
    this.httpService.deleteDept(this.entryDelete).subscribe(()=>{});
    window.location.reload();
  }
  deleteProviderDB(){
    this.httpService.deleteProvider(this.entryDelete).subscribe(()=>{});
    window.location.reload();
  }
  deleteProductDB(){
    this.httpService.deleteProduct(this.entryDelete).subscribe(()=>{});
    window.location.reload();
  }
  deleteUserDB(){
    this.httpService.deleteUser(this.entryDelete).subscribe(()=>{});
    window.location.reload();
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
