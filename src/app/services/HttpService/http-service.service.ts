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
  getClient(id){
    return this.Client.get('http://localhost:3000/getClient/'+id);
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
  getUser(id){
    return this.Client.get('http://localhost:3000/getUser/' + id)
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
  postAddUser(usuario){
    return this.request('POST','http://localhost:3000/addUsers',usuario);
  }
  postEditUser(usuario){
    return this.request('POST','http://localhost:3000/editUsers',usuario);
  }
  postPersonalUser(usuario){
    return this.request('POST','http://localhost:3000/editPersonalUser',usuario);
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
  postAddProvider(provider){
    return this.request('POST','http://localhost:3000/addProvider',provider);
  }
  postEditProvider(provider){
    return this.request('POST','http://localhost:3000/editProvider',provider);
  }
  deleteProvider(provider){
    return this.Client.get('http://localhost:3000/deleteProvider/'+provider.ID);
  }
  postAddProduct(product){
    return this.request('POST','http://localhost:3000/addProduct',product);
  }
  postEditProduct(product){
    return this.request('POST','http://localhost:3000/editProduct',product);
  }
  deleteProduct(product){
    return this.Client.get('http://localhost:3000/deleteProduct/'+product.codigo);
  }
}
