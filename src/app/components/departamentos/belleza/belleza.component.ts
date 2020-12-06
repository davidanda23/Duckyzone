import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService/http-service.service';

@Component({
  selector: 'app-belleza',
  templateUrl: './belleza.component.html',
  styleUrls: ['./belleza.component.scss']
})
export class BellezaComponent implements OnInit {
  prods ;

  constructor(public http : HttpService) { }

  ngOnInit(): void {
    this.http.getProdxDept('prodxdept/5').subscribe( (Productos) => {
      console.log(Productos);
      this.prods = Productos;
    } );
  }

}
