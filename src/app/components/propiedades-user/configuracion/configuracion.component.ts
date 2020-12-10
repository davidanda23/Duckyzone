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

  //CLIENT OLD
  CliO: any = {in: '', ext: '', cod: '', calle: '', col: '', ciud: '', pais: ''};
  //CLIENT FORM
  CliF: any = {in: '', ext: '', cod: '', calle: '', col: '', ciud: '', pais: ''};
  //CLIENT NEW
  CliN: any = {in: '', ext: '', cod: '', calle: '', col: '', ciud: '', pais: '', id_usuario: 0};


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
    this.http.getClient(sessionStorage.getItem("idUsuario")).subscribe( (info) => {
      this.CliO.in = info[0].num_interno;
      this.CliO.ext = info[0].num_externo;
      this.CliO.cod = info[0].cod_postal;
      this.CliO.calle = info[0].calle;
      this.CliO.col = info[0].colonia;
      this.CliO.ciud = info[0].ciudad;
      this.CliO.pais = info[0].pais;
    });
    this.form = this.fb.group({
      username: this.userF.username,
      email: this.userF.email,
      name: this.userF.name,
      lastm: this.userF.lastm,
      lastf: this.userF.lastf,
      tel: this.userF.tel,
      password: this.userF.password,
      in: this.CliF.in,
      ext: this.CliF.ext,
      cod: this.CliF.cod,
      call: this.CliF.calle,
      col: this.CliF.col,
      ciud: this.CliF.ciud,
      pais: this.CliF.pais
    });
    this.CliN.id_usuario=sessionStorage.getItem("idUsuario");
  }
 
  modifyUser(){
      //VA DE ATRIBUTO EN ATRIBUTO, SI SE CAMBIO EL VALOR ENTONCES USER NEW = USER FORM, SI NO SE CAMBIO
      //ENTONCES USER NEW = USER OLD

      //CHECA SI SE CAMBIO EL CAMPO USERNAME
      if (this.form.get('username').value != ''){
          this.userN.username = this.form.get('username').value;
      }
      else {
        this.userN.username = this.userO.username;
      }
      //CHECA SI SE CAMBIO EL CAMPO EMAIL
      if (this.form.get('email').value != ''){
        this.userN.email = this.form.get('email').value;
      }
      else {
        this.userN.email = this.userO.email;
      }
      //CHECA SI SE CAMBIO EL CAMPO NAME
      if (this.form.get('name').value != ''){
        this.userN.name = this.form.get('name').value;
      }
      else {
        console.log("Entra else");
        this.userN.name = this.userO.name;
      }
      //CHECA SI SE CAMBIO EL CAMPO LASTF
      if (this.form.get('lastf').value != ''){
        this.userN.lastf = this.form.get('lastf').value;
      }
      else {
        this.userN.lastf = this.userO.lastf;
      }
      //CHECA SI SE CAMBIO EL CAMPO LASTM
      if (this.form.get('lastm').value != ''){
        this.userN.lastm = this.form.get('lastm').value;
      }
      else {
        this.userN.lastm = this.userO.lastm;
      }
      //CHECA SI SE CAMBIO EL CAMPO TEL
      if (this.form.get('tel').value != ''){
        this.userN.tel = this.form.get('tel').value;
      }
      else {
        this.userN.tel = this.userO.tel;
      }
      //////////////////////////////CLIENTE////////////////////////////////
      //CHECA SI SE CAMBIO EL CAMPO num_int
      if (this.form.get('in').value != ''){
        this.CliN.in = this.form.get('in').value;
      }
      else {
        this.CliN.in = this.CliO.in;
      }
      //CHECA SI SE CAMBIO EL CAMPO num_ext
      if (this.form.get('ext').value != ''){
        this.CliN.ext = this.form.get('ext').value;
      }
      else {
        this.CliN.ext = this.CliO.ext;
      }
      //CHECA SI SE CAMBIO EL CAMPO cod_post
      if (this.form.get('cod').value != ''){
        this.CliN.cod = this.form.get('cod').value;
      }
      else {
        this.CliN.cod = this.CliO.cod;
      }
      //CHECA SI SE CAMBIO EL CAMPO calle
      if (this.form.get('call').value != ''){
        this.CliN.calle = this.form.get('call').value;
      }
      else {
        this.CliN.calle = this.CliO.calle;
      }
      //CHECA SI SE CAMBIO EL CAMPO colonia
      if (this.form.get('col').value != ''){
        this.CliN.col = this.form.get('col').value;
      }
      else {
        this.CliN.col = this.CliO.col;
      }
      //CHECA SI SE CAMBIO EL CAMPO ciudad
      if (this.form.get('ciud').value != ''){
        this.CliN.ciud = this.form.get('ciud').value;
      }
      else {
        this.CliN.ciud = this.CliO.ciud;
      }
      //CHECA SI SE CAMBIO EL CAMPO pais
      if (this.form.get('pais').value != ''){
        this.CliN.pais = this.form.get('pais').value;
      }
      else {
        this.CliN.pais = this.CliO.pais;
      }
      console.log(this.CliN);
      this.http.postPersonalUser(this.userN);
      this.http.postEditClient(this.CliN);
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
    this.form.get('in').enable();
    this.form.get('ext').enable();
    this.form.get('cod').enable();
    this.form.get('call').enable();
    this.form.get('col').enable();
    this.form.get('ciud').enable();
    this.form.get('pais').enable();
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
