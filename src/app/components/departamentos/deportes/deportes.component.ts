import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService/http-service.service';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.scss']
})
export class DeportesComponent implements OnInit {
  prods ;
  public res: any = [];
  public id_cliente: any;

  constructor(public http : HttpService) { }

  ngOnInit(): void {
    this.http.getProdxDept('prodxdept/1').subscribe( (Productos) => {
      this.prods = Productos;
    } );
    this.id_cliente = sessionStorage.getItem('idUsuario');
    this.http.getClient(this.id_cliente).subscribe((clientes) => {
      this.res = clientes;
      console.log(this.res[0]);
    });     
  }
}
