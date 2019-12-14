import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class ProveedorService {

  constructor(public http:HttpClient) { }

  //METODO PARA LA EXTRACCION DE DATOS DE LA BD
  obtenerActividades(): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/actividades');
  }

  obtenerActividad(id:string): Observable<any>{
    if (id == null){
      return this.http.get('http://192.168.1.141:3000/actividades');
    }
    else
      return this.http.get('http://192.168.1.141:3000/actividades?id='+id);
  }

  obtenerUsuarios(): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios');
  }

  obtenerParticipantes(id:string): Observable<any>{
    if (id == null){
      return this.http.get('http://192.168.1.141:3000/usuarios/participantes');
    }
    else
      return this.http.get('http://192.168.1.141:3000/usuarios/participantes?id='+id);
  }

  obtenerSocios(): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/socios');
  }

  obtenerCategorias(): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/actividades/categorias');
  }

  /*obtenerFamiliar(): Observable<any>{
    return this.http.get('http://192.168.1.148:3000/usuarios/familiaresDelSocio?id=5');
  }*/

  obtenerFamiliares(): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/familiares');
  }

  obtenerFamiliar(id:string): Observable<any>{
    if (id == null){
      return this.http.get('http://192.168.1.141:3000/usuarios/familiares');
    }
    else
      return this.http.get('http://192.168.1.141:3000/usuarios/familiares?id='+id);
    //return this.http.get('http://192.168.1.141:3000/usuarios/familiares');
  }

  obtenerUsuario(id:string): Observable<any>{
    if (id == null){
      return this.http.get('http://192.168.1.141:3000/usuarios/familiares');
    }
    else
      return this.http.get('http://192.168.1.141:3000/usuarios?id='+id);
  }

  obtenerGestor(id:string): Observable<any>{
    if (id == null){
      return this.http.get('http://192.168.1.141:3000/usuarios/familiares');
    }
    else
      return this.http.get('http://192.168.1.141:3000/usuarios/familiares?id='+id);
  }

  obtenerVoluntario(id:string): Observable<any>{
    if (id == null){
      return this.http.get('http://192.168.1.141:3000/usuarios/voluntarios');
    }
    else
      return this.http.get('http://192.168.1.141:3000/usuarios/voluntarios?id='+id);
  }

  obtenerSocio(id:string): Observable<any>{
    if (id == null){
      return this.http.get('http://192.168.1.141:3000/usuarios/socios');
    }
    else
      return this.http.get('http://192.168.1.141:3000/usuarios/socios?id='+id);
  }

  obtenerValoracion(): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/familiares');
  }

  //METODO PARA INICIAR SESION
  enviarLogin(postData): Observable<any>{// Http Options
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*'
        })
      }
      console.log(JSON.stringify(postData));
      return this.http.post("http://192.168.1.141:3000/loginGestor", JSON.stringify(postData));
  }

  //METODOS PARA AÑADIR
  enviarActividad(postData): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(postData));
    return this.http.post("http://192.168.1.141:3000/actividades/addActividadGrupal", JSON.stringify(postData), httpOptions);
  }

  enviarCategoria(postData): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    console.log(JSON.stringify(postData));
    return this.http.post("http://192.168.1.141:3000/actividades/addCategoria", postData, httpOptions);
  }

  //añadir usuarios
  enviarGestor(postData): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    console.log(JSON.stringify(postData));
    return this.http.post("http://192.168.1.141:3000/usuarios/addGestor", JSON.stringify(postData), httpOptions);
  }

  enviarSocio(postData): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    console.log(JSON.stringify(postData));
    return this.http.post("http://192.168.1.141:3000/usuarios/addSocio", JSON.stringify(postData), httpOptions);
  }

  enviarVoluntario(postData): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    console.log(JSON.stringify(postData));
    return this.http.post("http://192.168.1.141:3000/usuarios/addVoluntario", JSON.stringify(postData), httpOptions);
  }

  enviarFamiliar(postData): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    console.log(JSON.stringify(postData));
    return this.http.post("http://192.168.1.141:3000/usuarios/addFamiliar", JSON.stringify(postData), httpOptions);
  }

  //METODOS PARA COMPROBAR EL ROL DE UN USUARIO
  esSocio(username): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/esSocio?username=' + username);
  }

  esGestor(username): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/esGestor?username=' + username);
  }

  esVoluntario(username): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/esVoluntario?username=' + username);
  }

  esFamiliar(username): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/esFamiliar?username=' + username);
  }

  //METODOS PARA ELIMINAR
  eliminarUsuario(username): Observable<any>{

    console.log("Borrando " + username);
    return this.http.delete('http://192.168.1.141:3000/usuarios?username=' + username);
  }

  eliminarActividad(id): Observable<any>{

    console.log("Borrando " + id);
    return this.http.delete('http://192.168.1.141:3000/actividades?id=' + id);
  }

  eliminarCategoria(id): Observable<any>{

    console.log("Borrando " + id);
    return this.http.delete('http://192.168.1.141:3000/actividades/categorias?id=' + id);
  }
}
