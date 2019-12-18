import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class ProveedorService {

  private idPersona=null //Id en la tabla de personas
  private idTipo=null  //Id en la tabla de tipo de persona (Socio o Voluntario)
  private esSocio=null //Si es de tipo socio -> true

  constructor(public http:HttpClient) { }

  ip = "http://localhost:3000"

  obtenerActividades(): Observable<any>{
    return this.http.get(this.ip + '/actividades');
  }

  obtenerActividadesRecomendadas(id, esSocio): Observable<any> {
    var consulta="recomendadasVoluntario";
    if(esSocio)
      consulta="recomendadasSocio";
    return this.http.get(this.ip + '/actividades/' + consulta + "?id=" + id);
  }

  obtenerActividad(i): Observable<any>{
    return this.http.get(this.ip + '/actividades?id='+ i);
  }

  obtenerCategorias(): Observable<any>{
    return this.http.get(this.ip + '/actividades/categorias');
  }

  obtenerCategoriasActividad(i): Observable<any>{
    return this.http.get(this.ip + '/actividades/categoriasDeActividad?id='+i);
  }

  apuntadoActividad(id_part, id_act, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

    return this.http.get(this.ip + '/actividades/apuntado?id_part='+ id_part + '&id_act=' + id_act + '&tipo=' + tipo);
  }

  apuntarse(postData, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(postData));
    return this.http.post(this.ip + "/actividades/participar?tipo=" + tipo, JSON.stringify(postData), httpOptions);
  }

  desapuntarse(postData, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(postData));
    return this.http.post(this.ip + "3000/actividades/eliminarParticipacion?tipo="+ tipo, JSON.stringify(postData), httpOptions);
  }

  enviarLogin(postData): Observable<any>{// Http Options
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      console.log(JSON.stringify(postData));
      return this.http.post(this.ip + '/usuarios/loginApp', JSON.stringify(postData), httpOptions);
  }

  misActividadesRealizadas(id, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

      return this.http.get(this.ip + '/actividades/misActividades?id='+ id + '&proximas=0&tipo=' + tipo);
  }
  misActividadesProximas(id, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

      return this.http.get(this.ip + '/actividades/misActividades?id='+ id + '&proximas=1&tipo=' + tipo);
    }

  buscarActividades(valor, esSocio, filtros): Observable<any>{
    var tipo=1;
    var consulta='';
    if(esSocio)
      tipo=0;

    if(valor!=""){
      consulta+='&valor=' + valor;
    }
    if(filtros!=null){
      if(filtros.tipo==2 || filtros.tipo==3){
        consulta += '&tipoAct=' + filtros.tipo;
      }
      if(filtros.fecha_inicio!=null)
        consulta += '&fechaIni=' + filtros.fecha_inicio;
      if(filtros.fecha_fin!=null)
        consulta += '&fechaFin=' + filtros.fecha_fin;
      if(filtros.categorias.length>0){
        consulta += '&categorias=' + filtros.categorias;
      }
    }
    return this.http.get(this.ip + '/actividades/buscarActividad' + '?tipo=' + tipo + consulta);
  }

  obtenerMisCategorias(id, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;
      return this.http.get(this.ip + '/actividades/misCategorias?id='+ id + '&tipo=' + tipo); 
  }

  crearActividad(actividad): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(actividad));
    return this.http.post(this.ip + "/actividades/addActividadIndividual", JSON.stringify(actividad), httpOptions);
  }

  getId(){
    return this.idPersona;
  }

  getEsSocio(){
    return this.esSocio;
  }

  getIdTipo(){
    return this.idTipo;
  }

  setUsuario(id, username){
    this.idPersona=id;

    this.http.get(this.ip + '/usuarios/esSocio?username=' + username).subscribe(
      (res) => {
        console.log();
        if(res[0]!=null){
          this.esSocio=true;
          this.idTipo=res[0].id;
          console.log("ID: " + this.getId() + " ID TIPO: " + this.getIdTipo() + "ES_SOCIO: " + this.getEsSocio());
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}