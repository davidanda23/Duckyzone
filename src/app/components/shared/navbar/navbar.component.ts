import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/HttpService/http-service.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public depts = [];
  public user = false;

  constructor(router: Router, private httpService : HttpService) {
      
   }

  ngOnInit(): void {
    this.httpService.getQuery('dept').subscribe( (Departamentos) => {
      this.depts = Departamentos;
    } );
  }
}
