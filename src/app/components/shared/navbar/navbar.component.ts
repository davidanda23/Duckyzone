import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/HttpService/http-service.service';
import { VentaProductoService } from 'src/app/services/ventaProducto/venta-producto.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public depts = [];
  public user: String;
  public role: String;
  @Input() correo:string;


  constructor(private router: Router, public httpService : HttpService, public VentaService: VentaProductoService) {
      
   }

  ngOnInit(): void {
    //OBTENEMOS DEPARTAMENTOS
    this.httpService.getQuery('dept').subscribe( (Departamentos) => {
      this.depts = Departamentos;
    } );
    //COMPROBAMOS SI EL USUARIO ES ADMIN

  }
  checkStorage(){
    this.user=sessionStorage.getItem('nombreUsuario');
    this.role=sessionStorage.getItem('Admin');
    return sessionStorage.getItem('nombreUsuario');
  }
  logout(){
    sessionStorage.removeItem('nombreUsuario');
    sessionStorage.removeItem('Admin');
    this.router.navigate(['/']);
  }

  buscar(){
    this.VentaService.busqueda_producto = (<HTMLInputElement>document.getElementById('prodSearch')).value;
  }
}
