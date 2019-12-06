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

  obtenerCategorias(): Observable<any>{
    return this.http.get('http://192.168.56.200:3000/categorias');
  }

  obtenerSocios(): Observable<any>{
    return this.http.get('http://192168.56.200:3000/usuarios/socios');
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

    return this.http.post("http://192.168.56.200:3000/customers", JSON.stringify(postData), httpOptions);
  }
}
