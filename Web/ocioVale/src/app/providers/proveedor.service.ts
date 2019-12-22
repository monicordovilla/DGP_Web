import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class ProveedorService {

  //url = 'http://192.168.1.134:3000';
  //url = 'http://192.168.56.200:3000';
  //url = 'http://192.168.1.45:3000';
  //url = 'http://192.168.102.3:3000';
  url = 'http://192.168.0.9:3000';

  constructor(public http:HttpClient) { }

  //METODO PARA LA EXTRACCION DE DATOS DE LA BD
  //Actividades
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

  obtenerCategorias(): Observable<any>{
    return this.http.get(this.url + '/actividades/categorias');
  }

  obtenerCategoriasDeActividad(id: String): Observable<any>{
    console.log("Obtener categorias de:" + id);
    return this.http.get(this.url + '/actividades/categoriasDeActividad?id=' + id);
  }

  obtenerMaxParticipantes(id: String): Observable<any>{
    return this.http.get(this.url + '/actividades/obtenerMaximo?id=' + id);
  }

  //Usuarios
  obtenerUsuarios(): Observable<any>{
    return this.http.get(this.url + '/usuarios');
  }

  obtenerDescripcionPrivada(id:string): Observable<any>{
    return this.http.get(this.url + '/usuarios/infoSocio?id=' + id);
  }

  obtenerCensurados(id:string): Observable<any>{
    if(id == null){
    return this.http.get(this.url + '/usuarios/censurado?');
    }
    else{
    return this.http.get(this.url + '/usuarios/censurado?id=' + id);
    }
  }

  censurarVoluntario(id:string): Observable<any>{
    console.log("censurar " + id);
    let ident = {"id": id};
    return this.http.post(this.url + '/usuarios/censurar', ident);
  }

  aprobarVoluntario(id:string): Observable<any>{
    console.log("aprobar " + id);
    let ident = {"id": id};
    return this.http.post(this.url + '/usuarios/aprobar', ident);
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

  obtenerFamiliarSocio(id): Observable<any>{
    return this.http.get(this.url + '/usuarios/familiaresDelSocio?id=' + id);
  }

  obtenerSocioDeFamiliar(id): Observable<any>{
    console.log("proveedor " + id);
    return this.http.get(this.url + '/usuarios/sociosDeFamiliar?id=' + id);
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

  obtenerValoracion(id:string): Observable<any>{
    if (id == null){
    return this.http.get(this.url + '/usuarios/puntuaciones');
    }
    else{
      return this.http.get(this.url + '/usuarios/puntuaciones?id=' + id);
    }
  }

  //METODO PARA INICIAR SESION
  enviarLogin(postData): Observable<any>{// Http Options
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      console.log(JSON.stringify(postData));
      return this.http.post(this.url + '/usuarios/loginGestor', JSON.stringify(postData), httpOptions);
  }

  enviarMensaje(): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    //console.log(JSON.stringify());
    return this.http.post(this.url + '/actividades/addActividadGrupal', httpOptions);
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

  //METODOS PARA MODIFICAR
  modificarActividad(postData): Observable<any>{

       // Http Options
       let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }

    console.log("Modificando actividad " + postData);
    return this.http.post(this.url + '/actividades/modificarActividad', postData, httpOptions);
  }

  modificarUsuario(postData): Observable<any>{
    // Http Options
    let httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   }

    console.log("Modificando usuario " + postData);
    return this.http.post(this.url + '/usuarios/modificarUser', postData, httpOptions);
  }
}
