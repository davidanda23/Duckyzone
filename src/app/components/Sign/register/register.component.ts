import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/HttpService/http-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({});
  user: any = {id: null, username: '', email: '', password: ''};

  constructor(private fb: FormBuilder,private httpService : HttpService,private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: this.user.username,
      email: this.user.email,
      password: this.user.password,
    });
  }
  //crear usuario
  createUser() {
    const newUser = {
      username: this.form.get('username').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    };
    this.httpService.postQuery(newUser,'register');
    this.router.navigate(['/home']);
  }
}
