import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/HttpService/http-service.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({});
  user: any = {id: null, username: '', email: '', password: ''};
  public res = [];
  public rol = [];

  constructor(private fb: FormBuilder,private httpService : HttpService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.user.email,
      password: this.user.password,
    });
  }

  loginUsuario(){
    
    const User = {
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    };
    this.httpService.getUserAuth(User,'login').subscribe((respuesta)=>{
      this.res=respuesta;
      this.httpService.getRole(this.res[0].id,'role').subscribe((rol)=>{
        if(rol){
          sessionStorage.setItem('Admin','Yes');
        }else{
          sessionStorage.setItem('Admin','No');
        }
      });
      if(this.res!==null){
        sessionStorage.setItem('nombreUsuario',this.res[0].nombreusuario);
        sessionStorage.setItem('idUsuario',this.res[0].id);
        this.router.navigate(['/home']);
      }else{ 
        console.log("Ingrese correctamente sus credenciales");
      }
    });
    
  }
}
