import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { from } from 'rxjs';
import { HttpService } from 'src/app/services/HttpService/http-service.service';
import { VentaProductoService } from 'src/app/services/ventaProducto/venta-producto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CheckboxControlValueAccessor } from '@angular/forms';

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
  public checbox: any;
  public val: boolean;
  

  @ViewChild("myModalConf", {static: false}) myModalConf: TemplateRef<any>;
  @ViewChild("validarTerminos", {static: false}) ModalTerminos: TemplateRef<any>;
  

  constructor(public ProductoService: VentaProductoService,public http : HttpService, public modalService: NgbModal, public router: Router) { }

  ngOnInit(): void {
    this.id_cliente = sessionStorage.getItem('idUsuario');

    this.http.getClient(this.id_cliente).subscribe((costumer) => {
      this.cliente=costumer;
    });
    this.producto = this.ProductoService.producto_Vendido; 
    this.cant = <HTMLInputElement> document.getElementById('cantidad');

    this.cant.value = 1;
    console.log(this.cant)
  }

  value(){
    this.cant = <HTMLInputElement> document.getElementById('cantidad');
  }

  confirmaVenta(){
    if(this.cliente[0].num_interno === null) this.cliente[0].num_interno = 0;
    if(this.cliente[0].num_externo === null) this.cliente[0].num_externo = 0;

    if(this.val){
      this.http.GenerarVenta(this.cant.value, this.producto.codigo,this.ProductoService.producto_Vendido.precio_unidad,this.cliente[0]);
      this.mostrarModalConf();
    } 

    else this.mostrarModalTerminos();

  }

  mostrarModalConf(){
    this.modalService.open(this.myModalConf).result.then( r => {
      this.router.navigate(['/home']);
    }, error => {
      console.log(error);
    });
  }

  regresar(){
    this.router.navigate(['/home']);
  }

  validar(){
    this.val=true;
  }

  mostrarModalTerminos(){
    this.modalService.open(this.ModalTerminos).result.then( r => {
      this.router.navigate(['/home']);
    }, error => {
      console.log(error);
    });
  }

}
