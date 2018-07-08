import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ProveedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProveedorProvider Provider');
  }
  obtenerDatos(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}