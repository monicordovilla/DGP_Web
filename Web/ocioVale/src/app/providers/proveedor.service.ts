import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class ProveedorService {

  constructor(public http:HttpClient) { }

  obtenerActividades(): Observable<any>{
    return this.http.get('http://192.168.1.148:3000/actividades');
  }

  obtenerUsuarios(): Observable<any>{
    return this.http.get('http://192.168.1.148:3000/usuarios');
  }

  obtenerParticipantes(id:string): Observable<any>{
    if (id == null){
      return this.http.get('http://192.168.1.148:3000/usuarios/participantes');
    }
    else
      return this.http.get('http://192.168.1.148:3000/usuarios/participantes?id='+id);
  }

  obtenerSocios(): Observable<any>{
    return this.http.get('http://192.168.1.148:3000/usuarios/socios');
  }

  obtenerCategorias(): Observable<any>{
    return this.http.get('http://192.168.1.148:3000/actividades/categorias');
  }

  obtenerFamiliar(): Observable<any>{
    return this.http.get('http://192.168.1.148:3000/usuarios/familiaresDelSocio?id=5');
  }

  obtenerFamiliares(): Observable<any>{
    return this.http.get('http://192.168.1.148:3000/usuarios/familiares');
  }

  enviarActividad(postData): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(postData));
    return this.http.post("http://192.168.1.148:3000/actividades/addActividadGrupal", JSON.stringify(postData), httpOptions);
  }

  enviarLogin(postData): Observable<any>{// Http Options
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*'
        })
      }
      console.log(JSON.stringify(postData));
      return this.http.post("http://192.168.1.148:3000/loginGestor", JSON.stringify(postData));
  }

  enviarCategoria(postData): Observable<any>{
    console.log(JSON.stringify(postData));
    return this.http.post("http://192.168.1.148:3000/actividades/addCategoria", JSON.stringify(postData));
  }

  obtenerValoracion(): Observable<any>{
    return this.http.get('http://192.168.1.148:3000/usuarios/familiares');
  }
}
