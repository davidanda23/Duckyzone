import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { from } from 'rxjs';
import { HttpService } from 'src/app/services/HttpService/http-service.service';
import { VentaProductoService } from 'src/app/services/ventaProducto/venta-producto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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

  @ViewChild("myModalConf", {static: false}) myModalConf: TemplateRef<any>;
  

  constructor(public ProductoService: VentaProductoService,public http : HttpService, public modalService: NgbModal, public router: Router) { }

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

    if(this.cliente[0].num_interno === null) this.cliente[0].num_interno = 0;
    if(this.cliente[0].num_externo === null) this.cliente[0].num_externo = 0;

    this.http.GenerarVenta(this.cant.value, this.producto.codigo,this.ProductoService.producto_Vendido.precio_unidad,this.cliente[0]);

    this.mostrarModalConf();

    /*this.http.prueba().subscribe((respuesta) => {
      console.log(respuesta);
    });*/
  }

  mostrarModalConf(){
    this.modalService.open(this.myModalConf).result.then( r => {
      this.router.navigate(['/home']);
    }, error => {
      console.log(error);
    });
  }

}
