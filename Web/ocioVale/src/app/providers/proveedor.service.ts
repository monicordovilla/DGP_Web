import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class ProveedorService {

  constructor(public http:HttpClient) { }

  obtenerActividades(): Observable<any>{
    return this.http.get('http://192.168.56.200:3000/actividades');
  }

  obtenerUsuarios(): Observable<any>{
    return this.http.get('http://192.168.56.200:3000/usuarios');
  }

  obtenerParticipantes(id:string): Observable<any>{
    if (id == null){
      return this.http.get('http://192.168.56.200:3000/usuarios/participantes');
    }
    else
      return this.http.get('http://192.168.56.200:3000/usuarios/participantes?id='+id);
  }

  obtenerSocios(): Observable<any>{
    return this.http.get('http://192.168.56.200:3000/usuarios/socios');
  }

  obtenerCategorias(): Observable<any>{
    return this.http.get('http://192.168.56.200:3000/actividades/categorias');
  }

  obtenerFamiliar(): Observable<any>{
    return this.http.get('http://192.168.56.200:3000/usuarios/familiaresDelSocio?id=5');
  }

  obtenerFamiliares(): Observable<any>{
    return this.http.get('http://192.168.56.200:3000/usuarios/familiares');
  }

  enviarActividad(postData): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(postData));
    return this.http.post("http://192.168.56.200:3000/actividades/addActividadGrupal", JSON.stringify(postData), httpOptions);
  }

  enviarCategoria(postData): Observable<any>{
    console.log(JSON.stringify(postData));
    return this.http.post("http://192.168.56.200:3000/actividades/addCategoria", JSON.stringify(postData));
  }

  obtenerValoracion(): Observable<any>{
    return this.http.get('http://192.168.56.200:3000/usuarios/familiares');
  }

  esSocio(username): Observable<any>{
    return this.http.get('http://192.168.56.200:3000/usuarios/esSocio?username=' + username);
  }

  esGestor(username): Observable<any>{
    return this.http.get('http://192.168.56.200:3000/usuarios/esGestor?username=' + username);
  }

  esVoluntario(username): Observable<any>{
    return this.http.get('http://192.168.56.200:3000/usuarios/esVoluntario?username=' + username);
  }

  esFamiliar(username): Observable<any>{
    return this.http.get('http://192.168.56.200:3000/usuarios/esFamiliar?username=' + username);
  }
    
}
