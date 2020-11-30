import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  rsl: any;
  res: any;

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

  getProdxDept(url: String) { 
    this.rsl = this.Client.get('http://localhost:3000/' + url);
    return this.rsl;
  }

  postQuery(user,url: String){
    return this.request('POST','http://localhost:3000/'+url,user);
  }

  getUserAuth(user,url: String){
    this.res=this.Client.get('http://localhost:3000/'+url+'/'+user.email+'&'+user.password,user);
    return this.res;
  }
  getRole(user,url:String){
    return this.Client.get('http://localhost:3000/'+url+'/'+user,user);
  }

  getAllEmployees(){
    return this.Client.get('http://localhost:3000/getAllEmployees');
  }
  
  getDeptsAdmin(){
    return this.Client.get('http://localhost:3000/getDeptsAdmin');
  }
  getProviders(){
    return this.Client.get('http://localhost:3000/getProviders');
  }
  getProducts(){
    return this.Client.get('http://localhost:3000/getProducts');
  }
  getUsers(){
    return this.Client.get('http://localhost:3000/getUsers');
  }
  postAddEmp(user){
    return this.request('POST','http://localhost:3000/addEmployee',user);
  }
  postEditEmp(user){
    return this.request('POST','http://localhost:3000/editEmployee',user);
  }
  deleteEmployee(usuario){
    return this.Client.get('http://localhost:3000/deleteEmployee/'+usuario.id);
  }
  deleteUser(usuario){
    return this.Client.get('http://localhost:3000/deleteUser/'+usuario.id);
  }
  postAddDept(dept){
    return this.request('POST','http://localhost:3000/addDept',dept);
  }
  postEditDept(dept){
    return this.request('POST','http://localhost:3000/editDept',dept);
  }
  deleteDept(dept){
    return this.Client.get('http://localhost:3000/deleteDept/'+dept.id);
  }
  deleteProvider(provider){
    return this.Client.get('http://localhost:3000/deleteProvider/'+provider.ID);
  }
  deleteProduct(product){
    return this.Client.get('http://localhost:3000/deleteProduct/'+product.codigo);
  }
}
