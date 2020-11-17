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
  email:string;
  password:string;
  form = new FormGroup({});

  constructor(private fb: FormBuilder,private httpService : HttpService,private router: Router) { }

  ngOnInit(): void {}

  loginUsuario(){
    console.log('entramos a loginUsuario');
    this.httpService.getQuery('login').subscribe( (email,password) => {
      email= this.form.get('correo').value;
      password= this.form.get('contraseña').value;
    } );
    this.router.navigate(['/home']);
  }

}
