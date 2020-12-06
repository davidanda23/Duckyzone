import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentaProductoService {

  public producto_Vendido: any;

  public busqueda_producto: any;

  constructor() { }
}
