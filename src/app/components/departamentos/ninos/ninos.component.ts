import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService/http-service.service';

@Component({
  selector: 'app-ninos',
  templateUrl: './ninos.component.html',
  styleUrls: ['./ninos.component.scss']
})
export class NinosComponent implements OnInit {
  prods ;

  constructor(public http : HttpService) { }

  ngOnInit(): void {
    this.http.getProdxDept('prodxdept/7').subscribe( (Productos) => {
      console.log(Productos);
      this.prods = Productos;
    } );
  }

}
