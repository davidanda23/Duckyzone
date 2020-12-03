import { Component, OnInit } from '@angular/core';
import { VentaProductoService } from 'src/app/services/ventaProducto/venta-producto.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  constructor(public ProductoService: VentaProductoService) { }

  ngOnInit(): void {
    console.log(this.ProductoService.producto_Vendido);
    console.log(this.ProductoService.cliente_venta);
  }

}
