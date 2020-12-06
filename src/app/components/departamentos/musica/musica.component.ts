import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService/http-service.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})
export class MusicaComponent implements OnInit {
  prods ;

  constructor(public http : HttpService) { }

  ngOnInit(): void {
    this.http.getProdxDept('prodxdept/4').subscribe( (Productos) => {
      console.log(Productos);
      this.prods = Productos;
    } );
  }

}
