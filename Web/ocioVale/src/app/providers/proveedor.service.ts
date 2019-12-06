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

  obtenerSocios(): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/socios');
  }

  obtenerFamiliares(): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/familiares');
  }

  obtenerValoracion(): Observable<any>{
    return this.http.get('http://192.168.1.141:3000/usuarios/familiares');
  }
}
