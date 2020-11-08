import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  rsl: any;

  constructor(private Client: HttpClient) {

  }

  getQuery(url: String) {
      console.log("MySQL: http://localhost:3000/" + url);
      this.rsl = this.Client.get('http://localhost:3000/' + url);
      return this.rsl;
  }
}
