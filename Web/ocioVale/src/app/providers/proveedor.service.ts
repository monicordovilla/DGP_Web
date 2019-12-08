import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class ProveedorService {

  constructor(public http:HttpClient) { }

  obtenerActividades(): Observable<any>{
    return this.http.get('http://192.168.1.45:3000/actividades');
  }

  obtenerUsuarios(): Observable<any>{
    return this.http.get('http://192.168.1.45:3000/usuarios');
  }

  obtenerParticipantes(): Observable<any>{
    return this.http.get('http://192.168.1.45:3000/usuarios/participantes');
  }

  obtenerSocios(): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/socios');
  }

  obtenerCategorias(): Observable<any>{
    return this.http.get('http://192.168.56.200:3000/actividades/categorias');
  }

  obtenerFamiliar(): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/familiaresDelSocio?id=5');
  }

  obtenerFamiliares(): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/familiares');
  }

  enviarActividad(postData): Observable<any>{

    // Http Options
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post("http://192.168.56.200:3000/actividades/addActividadGrupal", JSON.stringify(postData), httpOptions);
  }

  obtenerValoracion(): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/familiares');
  }
}
