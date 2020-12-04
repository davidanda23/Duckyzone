import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService/http-service.service';
import { Router } from '@angular/router';
import { VentaProductoService } from 'src/app/services/ventaProducto/venta-producto.service';


@Component({
  selector: 'app-ninos',
  templateUrl: './ninos.component.html',
  styleUrls: ['./ninos.component.scss']
})
export class NinosComponent implements OnInit {
  prods ;

  constructor(public http : HttpService, public router: Router, public productoService: VentaProductoService) { }

  ngOnInit(): void {
    this.http.getProdxDept('prodxdept/7').subscribe( (Productos) => {
      console.log(Productos);
      this.prods = Productos;
    } );
  }
  generar_compra( producto: any,){
    this.productoService.producto_Vendido = producto;
    this.router.navigate(['/confirmarVenta']);
  }
}
