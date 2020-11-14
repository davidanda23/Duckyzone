import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  rsl: any;

  constructor(private Client: HttpClient) {

  }
  private async request(method: string, url: string, data?: any){
    const result = this.Client.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {}
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getQuery(url: String) { 
    this.rsl = this.Client.get('http://localhost:3000/' + url);
    return this.rsl;
  }
  postQuery(user,url: String){
    return this.request('POST','http://localhost:3000/'+url,user);
  }
}
