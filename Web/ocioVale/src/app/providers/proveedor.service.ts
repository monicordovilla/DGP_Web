import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class ProveedorService {

  url = 'http://192.168.56.200:3000';

  constructor(public http:HttpClient) { }

  //METODO PARA LA EXTRACCION DE DATOS DE LA BD
  obtenerActividades(): Observable<any>{
    return this.http.get(this.url + '/actividades');
  }

  obtenerActividad(id:string): Observable<any>{
    if (id == null){
      return this.http.get(this.url + '/actividades');
    }
    else
      return this.http.get(this.url + '/actividades?id='+id);
  }

  obtenerUsuarios(): Observable<any>{
    return this.http.get(this.url + '/usuarios');
  }

  obtenerParticipantes(id:string): Observable<any>{
    if (id == null){
      return this.http.get(this.url + '/usuarios/participantes');
    }
    else
      return this.http.get(this.url + '/usuarios/participantes?id='+id);
  }

  obtenerSocios(): Observable<any>{
    return this.http.get(this.url + '/usuarios/socios');
  }

  obtenerCategorias(): Observable<any>{
    return this.http.get(this.url + '/actividades/categorias');
  }

  obtenerCategoriasDeActividad(id): Observable<any>{
    console.log(id);
    return this.http.get(this.url + '/actividades/categoriasDeActividad?idAct='+id);
  }

  obtenerFamiliarSocio(id): Observable<any>{
    return this.http.get(this.url + '/usuarios/familiaresDelSocio?id=' + id);
  }

  obtenerFamiliares(): Observable<any>{
    return this.http.get(this.url + '/usuarios/familiares');
  }

  obtenerFamiliar(id:string): Observable<any>{
    if (id == null){
      return this.http.get(this.url + '/usuarios/familiares');
    }
    else
      return this.http.get(this.url + '/usuarios/familiares?id='+id);
  }

  obtenerUsuario(id:string): Observable<any>{
    if (id == null){
      return this.http.get(this.url + '/usuarios/familiares');
    }
    else
      return this.http.get(this.url + '/usuarios?id='+id);
  }

  obtenerGestor(id:string): Observable<any>{
    if (id == null){
      return this.http.get(this.url + '/usuarios/familiares');
    }
    else
      return this.http.get(this.url + '/usuarios/familiares?id='+id);
  }

  obtenerVoluntario(id:string): Observable<any>{
    if (id == null){
      return this.http.get(this.url + '/usuarios/voluntarios');
    }
    //te dice las valoraciones de este voluntario
    else
      return this.http.get(this.url + '/usuarios/voluntarios?id='+id);
  }

  obtenerSocio(id:string): Observable<any>{
    if (id == null){
      return this.http.get(this.url + '/usuarios/socios');
    }
    else
      return this.http.get(this.url + '/usuarios/socios?id='+id);
  }

  obtenerValoracion(): Observable<any>{
    return this.http.get(this.url + '/usuarios/familiares');
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
      return this.http.post(this.url + '/loginGestor', JSON.stringify(postData));
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
    return this.http.post(this.url + '/actividades/addActividadGrupal', JSON.stringify(postData), httpOptions);
  }

  enviarCategoria(postData): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    console.log(JSON.stringify(postData));
    return this.http.post(this.url + '/actividades/addCategoria', postData, httpOptions);
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
    return this.http.post(this.url + '/usuarios/addGestor', JSON.stringify(postData), httpOptions);
  }

  enviarSocio(postData): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    console.log(JSON.stringify(postData));
    return this.http.post(this.url + '/usuarios/addSocio', JSON.stringify(postData), httpOptions);
  }

  enviarVoluntario(postData): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    console.log(JSON.stringify(postData));
    return this.http.post(this.url + '/usuarios/addVoluntario', JSON.stringify(postData), httpOptions);
  }

  enviarFamiliar(postData): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    console.log(JSON.stringify(postData));
    return this.http.post(this.url + '/usuarios/addFamiliar', JSON.stringify(postData), httpOptions);
  }

  //METODOS PARA COMPROBAR EL ROL DE UN USUARIO
  esSocio(username): Observable<any>{
    return this.http.get(this.url + '/usuarios/esSocio?username=' + username);
  }

  esGestor(username): Observable<any>{
    return this.http.get(this.url + '/usuarios/esGestor?username=' + username);
  }

  esVoluntario(username): Observable<any>{
    return this.http.get(this.url + '/usuarios/esVoluntario?username=' + username);
  }

  esFamiliar(username): Observable<any>{
    return this.http.get(this.url + '/usuarios/esFamiliar?username=' + username);
  }

  //METODOS PARA ELIMINAR
  eliminarUsuario(username): Observable<any>{

    console.log("Borrando " + username);
    return this.http.delete(this.url + '/usuarios?username=' + username);
  }

  eliminarActividad(id): Observable<any>{

    console.log("Borrando " + id);
    return this.http.delete(this.url + '/actividades?id=' + id);
  }

  eliminarCategoria(id): Observable<any>{

    console.log("Borrando " + id);
    return this.http.delete(this.url + '/actividades/categorias?id=' + id);
  }
}
