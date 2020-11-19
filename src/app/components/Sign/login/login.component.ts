import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/HttpService/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({});
  user: any = {id: null, username: '', email: '', password: ''};
  public res: any=null;
  

  constructor(private fb: FormBuilder,private httpService : HttpService,private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.user.email,
      password: this.user.password,
    });
  }

  async loginUsuario(){
    
    const User = {
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    };
    this.httpService.getUserAuth(User,'login').subscribe((respuesta)=>{
      this.res=respuesta;
    });
    console.log(this.res.nombreusuario);
    if(this.res!==null){
      this.httpService.correoUsuario=User.email;
      this.router.navigate(['/home']);
    }else{
      console.log("Ingrese correctamente sus credenciales");
    }
    
    //this.router.navigate(['/home']);
  }

}
