import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService/http-service.service';
import { VentaProductoService } from 'src/app/services/ventaProducto/venta-producto.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
  
  public id_cliente: any;
  public cliente: any = []
  public producto: any;
  public cant: any;
  

  constructor(public ProductoService: VentaProductoService,public http : HttpService,) { }

  ngOnInit(): void {
    this.id_cliente = sessionStorage.getItem('idUsuario');

    this.http.getClient(this.id_cliente).subscribe((costumer) => {
      this.cliente=costumer;
    });
    this.producto = this.ProductoService.producto_Vendido; 
    this.cant = <HTMLInputElement> document.getElementById('cantidad');
    this.cant.value = 1;
  }

  value(){
    this.cant = <HTMLInputElement> document.getElementById('cantidad');
  }

  confirmaVenta(){
    console.log(this.cliente[0].correo);
    console.log(this.producto.nombre);
    console.log(this.ProductoService.producto_Vendido.precio_unidad);
    console.log(this.cant.value);
    this.http.GenerarVenta(this.cant, this.producto);
  }

}
