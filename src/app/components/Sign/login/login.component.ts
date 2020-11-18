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
  

  constructor(private fb: FormBuilder,private httpService : HttpService,private router: Router) { }

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
    User.email=this.httpService.getUserAuth(User,'login');
    console.log(User.email);
    //this.router.navigate(['/home']);
  }

}
