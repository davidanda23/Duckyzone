import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService/http-service.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.scss']
})
export class VideojuegosComponent implements OnInit {
  prods ;

  constructor(public http : HttpService) { }

  ngOnInit(): void {
    this.http.getProdxDept('prodxdept/10').subscribe( (Productos) => {
      console.log(Productos);
      this.prods = Productos;
    } );
  }

}
