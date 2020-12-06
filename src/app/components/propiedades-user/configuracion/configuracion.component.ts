import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { HttpService } from 'src/app/services/HttpService/http-service.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss']
})
export class ConfiguracionComponent implements OnInit {
  form = new FormGroup({});
  //USER OLD, SACADO DE LA BD CON EL HTTPSERVICE
  userO: any = {username: '', email: '', name: '', lastm: '', lastf: '', tel: '', password: ''};
  //USER FORM, SACADO DE LO QUE SE ESCRIBE EN EL FORM
  userF: any = {username: '', email: '', name: '', lastm: '', lastf: '', tel: '', password: ''};
  //USER NEW, SACADO COMPARANDO USER OLD Y USER FORM
  userN: any = {username: '', email: '', name: '', lastm: '', lastf: '', tel: '', password: '', id: 0};

  constructor(private fb: FormBuilder, private http: HttpService) { }

  ngOnInit(): void {
    this.http.getUser(sessionStorage.getItem("idUsuario")).subscribe( (info) => {
      this.userO.email = info[0].correo;
      this.userO.password = info[0].contrseña;
      this.userO.name = info[0].nombre;
      this.userO.tel = info[0].tel;
      this.userO.lastf = info[0].apelli_pat;
      this.userO.lastm = info[0].apelli_mat;
      this.userO.username = info[0].nombreusuario;
      this.userN.id = info[0].id;
    });
    this.form = this.fb.group({
      username: this.userF.username,
      email: this.userF.email,
      name: this.userF.name,
      lastm: this.userF.lastm,
      lastf: this.userF.lastf,
      tel: this.userF.tel,
      password: this.userF.password,
    });
  }

  modifyUser(){
      //VA DE ATRIBUTO EN ATRIBUTO, SI SE CAMBIO EL VALOR ENTONCES USER NEW = USER FORM, SI NO SE CAMBIO
      //ENTONCES USER NEW = USER OLD

      //CHECA SI SE CAMBIO EL CAMPO USERNAME
      if (this.form.get('username').value != ''){
          console.log("Entra if");
          this.userN.username = this.form.get('username').value;
      }
      else {
        console.log("Entra else");
        this.userN.username = this.userO.username;
      }
      //CHECA SI SE CAMBIO EL CAMPO EMAIL
      if (this.form.get('email').value != ''){
        console.log("Entra if");
        this.userN.email = this.form.get('email').value;
      }
      else {
        console.log("Entra else");
        this.userN.email = this.userO.email;
      }
      //CHECA SI SE CAMBIO EL CAMPO NAME
      if (this.form.get('name').value != ''){
        console.log("Entra if");
        this.userN.name = this.form.get('name').value;
      }
      else {
        console.log("Entra else");
        this.userN.name = this.userO.name;
      }
      //CHECA SI SE CAMBIO EL CAMPO LASTF
      if (this.form.get('lastf').value != ''){
        console.log("Entra if");
        this.userN.lastf = this.form.get('lastf').value;
      }
      else {
        console.log("Entra else");
        this.userN.lastf = this.userO.lastf;
      }
      //CHECA SI SE CAMBIO EL CAMPO LASTM
      if (this.form.get('lastm').value != ''){
        console.log("Entra if");
        this.userN.lastm = this.form.get('lastm').value;
      }
      else {
        console.log("Entra else");
        this.userN.lastm = this.userO.lastm;
      }
      //CHECA SI SE CAMBIO EL CAMPO TEL
      if (this.form.get('tel').value != ''){
        console.log("Entra if");
        this.userN.tel = this.form.get('tel').value;
      }
      else {
        console.log("Entra else");
        this.userN.tel = this.userO.tel;
      }
      //CHECA SI SE CAMBIO EL CAMPO PASSWORD
      if (this.form.get('password').value != ''){
        console.log("Entra if");
        this.userN.password = this.form.get('password').value;
      }
      else {
        console.log("Entra else");
        this.userN.password = this.userO.password;
      }
      this.http.postPersonalUser(this.userN);
      this.disableInput();
  }

  enableInput(){
    this.form.get('username').enable();
    this.form.get('email').enable();
    this.form.get('name').enable();
    this.form.get('lastm').enable();
    this.form.get('lastf').enable();
    this.form.get('tel').enable();
    this.form.get('password').enable();
  }

  disableInput(){
    this.form.get('username').disable();
    this.form.get('email').disable();
    this.form.get('name').disable();
    this.form.get('lastm').disable();
    this.form.get('lastf').disable();
    this.form.get('tel').disable();
    this.form.get('password').disable();
  }

}
