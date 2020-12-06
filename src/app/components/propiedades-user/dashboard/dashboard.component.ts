import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService/http-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
  isPurchases: boolean;
  isShipping: boolean;
  public employees: any = [];
  public depts: any = [];
  public providers: any = [];
  public products: any = [];
  public users: any = [];
  public entryDelete: any;
  public depts_dpd = [];
  public depts_int = [];
  public compras = [];

  constructor(public httpService : HttpService,
              public modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.isEmployees=true;
    this.isDepts=false;
    this.isProviders=false;
    this.isProducts=false;
    this.isSales=false;
    this.isUsers=false;
    this.isShipping=false;
    this.httpService.getAllEmployees().subscribe( (Empleados) => {
      this.employees = Empleados;
    } );
    this.httpService.getQuery('dept_int').subscribe( (Departamentos) => {
      this.depts_dpd = Departamentos;
    } );
  }
  configModal(targetModal,record: any){
    this.entryDelete = record;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    
  }
  addEmployee(){
    const newEmployee = {
      nombreusuario: (<HTMLInputElement>document.getElementById("usernameAddEmp")).value,
      correo: (<HTMLInputElement>document.getElementById("emailAddEmp")).value,
      nombre: (<HTMLInputElement>document.getElementById("nameAddEmp")).value,
      apelli_pat: (<HTMLInputElement>document.getElementById("apepatAddEmp")).value,
      apelli_mat: (<HTMLInputElement>document.getElementById("apematAddEmp")).value,
      tel: (<HTMLInputElement>document.getElementById("telAddEmp")).value,
      puesto: (<HTMLInputElement>document.getElementById("puestoAddEmp")).value,
      salario: (<HTMLInputElement>document.getElementById("salarioAddEmp")).value,
      id_departamento: (<HTMLInputElement>document.getElementById("id_depaAddEmp")).value,
    }
    this.httpService.postAddEmp(newEmployee);
    window.location.reload();
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
    this.httpService.postEditEmp(this.entryDelete);
    window.location.reload();

  }
  deleteEmployeeDB(){
    this.httpService.deleteEmployee(this.entryDelete).subscribe(()=>{});
    this.httpService.deleteUser(this.entryDelete).subscribe(()=>{});
    window.location.reload();
  }

  addDept(){
    const newDept = {
      nombre: (<HTMLInputElement>document.getElementById("nombreAddDept")).value,
    }
    this.httpService.postAddDept(newDept);
    window.location.reload();
  }
  editDept(){
    this.entryDelete.nombre = (<HTMLInputElement>document.getElementById("nameEditDept")).value;
    this.httpService.postEditDept(this.entryDelete);
    window.location.reload();
  }
  deleteDeptDB(){
    this.httpService.deleteDept(this.entryDelete).subscribe(()=>{});
    window.location.reload();
  }

  addProvider(){
    const newProvider = {
      nombre : (<HTMLInputElement>document.getElementById("nombreAddPrv")).value,
      tel : (<HTMLInputElement>document.getElementById("telAddPrv")).value,
      calle : (<HTMLInputElement>document.getElementById("calleAddPrv")).value,
      colonia : (<HTMLInputElement>document.getElementById("coloniaAddPrv")).value,
      num_int : (<HTMLInputElement>document.getElementById("nintAddPrv")).value,
      num_ext : (<HTMLInputElement>document.getElementById("nextAddPrv")).value,
      cod_postal : (<HTMLInputElement>document.getElementById("codAddPrv")).value,
      correo : (<HTMLInputElement>document.getElementById("correoAddPrv")).value,
      ciudad : (<HTMLInputElement>document.getElementById("ciudadAddPrv")).value,
      pais : (<HTMLInputElement>document.getElementById("paisAddPrv")).value
    }
    this.httpService.postAddProvider(newProvider);
    window.location.reload();
  }

  editProvider(){
    this.entryDelete.nombre = (<HTMLInputElement>document.getElementById("nombreEditPrv")).value;
    this.entryDelete.tel = (<HTMLInputElement>document.getElementById("telEditPrv")).value;
    this.entryDelete.calle = (<HTMLInputElement>document.getElementById("calleEditPrv")).value;
    this.entryDelete.colonia = (<HTMLInputElement>document.getElementById("coloniaEditPrv")).value;
    this.entryDelete.num_int = (<HTMLInputElement>document.getElementById("nintEditPrv")).value;
    this.entryDelete.num_ext = (<HTMLInputElement>document.getElementById("nextEditPrv")).value;
    this.entryDelete.cod_postal = (<HTMLInputElement>document.getElementById("codEditPrv")).value;
    this.entryDelete.correo = (<HTMLInputElement>document.getElementById("correoEditPrv")).value;
    this.entryDelete.ciudad = (<HTMLInputElement>document.getElementById("ciudadEditPrv")).value;
    this.entryDelete.pais = (<HTMLInputElement>document.getElementById("paisEditPrv")).value;
    this.httpService.postEditProvider(this.entryDelete);
    window.location.reload();
  }
  deleteProviderDB(){
    this.httpService.deleteProvider(this.entryDelete).subscribe(()=>{});
    window.location.reload();
  }
  addProduct(){
    const newProduct = {
      nombre: (<HTMLInputElement>document.getElementById("nombreAddPrd")).value,
      descr: (<HTMLInputElement>document.getElementById("descrAddPrd")).value,
      precio_unidad: (<HTMLInputElement>document.getElementById("precioAddPrd")).value,
      existencias: (<HTMLInputElement>document.getElementById("existenciasAddPrd")).value,
      imgen: (<HTMLInputElement>document.getElementById("imgAddPrd")).value,
      departamento: (<HTMLInputElement>document.getElementById("deptAddPrd")).value,
      proveedor: (<HTMLInputElement>document.getElementById("prvAddPrd")).value
    }
    this.httpService.postAddProduct(newProduct);
    window.location.reload();
  }
  editProduct(){
    this.entryDelete.nombre = (<HTMLInputElement>document.getElementById("nombreEditPrd")).value;
    this.entryDelete.descr = (<HTMLInputElement>document.getElementById("descrEditPrd")).value;
    this.entryDelete.precio_unidad = (<HTMLInputElement>document.getElementById("precioEditPrd")).value;
    this.entryDelete.existencias = (<HTMLInputElement>document.getElementById("existenciasEditPrd")).value;
    this.entryDelete.imgen = (<HTMLInputElement>document.getElementById("imgEditPrd")).value;
    this.entryDelete.departamento = (<HTMLInputElement>document.getElementById("deptEditPrd")).value;
    this.entryDelete.proveedor = (<HTMLInputElement>document.getElementById("prvEditPrd")).value;
    this.httpService.postEditProduct(this.entryDelete);
    window.location.reload();
  }
  deleteProductDB(){
    this.httpService.deleteProduct(this.entryDelete).subscribe(()=>{});
    window.location.reload();
  }

  addUser(){
    const newUser = {
      nombreusuario : (<HTMLInputElement>document.getElementById("usernameAddUser")).value,
      correo: (<HTMLInputElement>document.getElementById("emailAddUser")).value,
      contrseña: (<HTMLInputElement>document.getElementById("passAddUser")).value,
      nombre: (<HTMLInputElement>document.getElementById("nameAddUser")).value,
      apelli_pat: (<HTMLInputElement>document.getElementById("apepatAddUser")).value,
      apelli_mat: (<HTMLInputElement>document.getElementById("apematAddUser")).value,
      tel: (<HTMLInputElement>document.getElementById("telAddUser")).value
    }
    this.httpService.postAddUser(newUser);
    window.location.reload();
  }

  editUser(){
    this.entryDelete.nombreusuario = (<HTMLInputElement>document.getElementById("usernameEditUser")).value;
    this.entryDelete.correo = (<HTMLInputElement>document.getElementById("emailEditUser")).value;
    this.entryDelete.nombre = (<HTMLInputElement>document.getElementById("nameEditUser")).value;
    this.entryDelete.apelli_pat = (<HTMLInputElement>document.getElementById("apepatEditUser")).value;
    this.entryDelete.apelli_mat = (<HTMLInputElement>document.getElementById("apematEditUser")).value;
    this.entryDelete.tel = (<HTMLInputElement>document.getElementById("telEditUser")).value;
    this.httpService.postEditUser(this.entryDelete);
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
        this.isPurchases=false;
        this.isShipping=false;
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
        this.isPurchases=false;
        this.isShipping=false;
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
        this.isPurchases=false;
        this.isShipping=false;
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
        this.isPurchases=false;
        this.isShipping=false;
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
        this.isPurchases=false;
        this.isShipping=false;
        break;
      case "purchases":
        this.isEmployees=false;
        this.isDepts=false;
        this.isProviders=false;
        this.isProducts=false;
        this.isSales=false;
        this.isUsers=false;
        this.isPurchases=true;
        this.isShipping=false;
        break;
      case "shipping":
        this.isEmployees=false;
        this.isDepts=false;
        this.isProviders=false;
        this.isProducts=false;
        this.isSales=false;
        this.isUsers=false;
        this.isPurchases=false;
        this.isShipping=true;
        break;
      case "users":
        this.isShipping=false;
        this.isEmployees=false;
        this.isDepts=false;
        this.isProviders=false;
        this.isProducts=false;
        this.isSales=false;
        this.isUsers=true;
        this.isPurchases=false;
        this.httpService.getUsers().subscribe( (Usuarios) => {
          this.users = Usuarios;
        } );
        break;
    }
  }
  
}
