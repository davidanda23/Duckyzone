import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService/http-service.service';


@Component({
  selector: 'app-moda',
  templateUrl: './moda.component.html',
  styleUrls: ['./moda.component.scss']
})
export class ModaComponent implements OnInit {
  prods ;

  constructor(public http : HttpService) { }

  ngOnInit(): void {
    this.http.getProdxDept('prodxdept/2').subscribe( (Productos) => {
      console.log(Productos);
      this.prods = Productos;
    } );
  }

}
