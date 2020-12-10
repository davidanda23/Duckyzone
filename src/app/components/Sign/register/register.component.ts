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
  user: any = {id: null, username: '', email: '', password: '', name: '', apepat: '', apemat: '', tel: 0, in: 0, ext: 0, cod: 0, calle: '', col: '', ciu: '', pais: ''};

  constructor(private fb: FormBuilder,private httpService : HttpService,private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: this.user.username,
      email: this.user.email,
      password: this.user.password,
      name: this.user.name,
      apepat: this.user.apepat,
      apemat: this.user.apemat,
      tel: this.user.tel,
      pais: this.user.pais,
      ciudad: this.user.ciu,
      colonia: this.user.col,
      calle: this.user.calle,
      post: this.user.cod,
      in: this.user.in,
      ext: this.user.ext
    });
  }
  //crear usuario
  createUser() {
    const newUser = {
      username: this.form.get('username').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
      name: this.form.get('name').value,
      apepat: this.form.get('apepat').value,
      apemat: this.form.get('apemat').value,
      tel: this.form.get('tel').value
    };
    this.httpService.postQuery(newUser,'register');
    console.log(newUser.username);
    this.httpService.getUserByName(newUser.username).subscribe((NewU) => {
      if (NewU){
        const NewUID = NewU[0].id;
        const newEmployee = {
          in: this.form.get('in').value,
          ext: this.form.get('ext').value,
          cod: this.form.get('post').value,
          cal: this.form.get('calle').value,
          col: this.form.get('colonia').value,
          ciu: this.form.get('ciudad').value,
          pai: this.form.get('pais').value,
          idu: NewUID
        }
      this.httpService.postQuery(newEmployee, 'addClient'); 
      }
    });
    this.router.navigate(['/home']);
  }
}
