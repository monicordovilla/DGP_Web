import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProveedorService {

  constructor(public http:HttpClient) { }

  obtenerActividades(): Observable<any>{
    return this.http.get('http://localhost:3000/actividades');
  }

  obtenerCategorias(): Observable<any>{
    return this.http.get('http://localhost:3000/actividades/categorias');
  }
}
