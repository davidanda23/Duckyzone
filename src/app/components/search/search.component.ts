import { Component, OnInit } from '@angular/core';
import { VentaProductoService } from 'src/app/services/ventaProducto/venta-producto.service';
import { HttpService } from 'src/app/services/HttpService/http-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  prod: any;
  busqueda: any;

  constructor(public VentaService: VentaProductoService, public http: HttpService) { }

  ngOnInit(): void {
    this.busqueda = this.VentaService.busqueda_producto.value;
    this.http.GenerarBusqueda(this.busqueda).subscribe( (Productos) => {
      this.prod = Productos;
      console.log(this.prod.value);
    } ); 
  }

}
