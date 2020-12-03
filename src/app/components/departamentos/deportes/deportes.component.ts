import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/HttpService/http-service.service';
import { VentaProductoService } from 'src/app/services/ventaProducto/venta-producto.service';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.scss']
})
export class DeportesComponent implements OnInit {
  prods ;
  public res: any = [];
  public id_cliente: any;

  constructor(public http : HttpService, public router: Router, public productoService: VentaProductoService) { }

  ngOnInit(): void {
    this.http.getProdxDept('prodxdept/1').subscribe( (Productos) => {
      this.prods = Productos;
    } );    
  }

  generar_compra( producto: any){
    this.id_cliente = sessionStorage.getItem('idUsuario');
    this.http.getClient(this.id_cliente).subscribe((cliente) => {
      //this.productoService.cliente_venta = cliente;
      this.res = cliente;
      //console.log(this.productoService.cliente_venta);
    }); 
    this.productoService.cliente_venta = this.res;
    this.productoService.producto_Vendido = producto;
    this.router.navigate(['/confirmarVenta']);
  }
}
