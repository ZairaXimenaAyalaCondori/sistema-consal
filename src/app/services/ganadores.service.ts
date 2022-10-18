import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GanadoresService {

  constructor(private http: HttpClient) { }

 ganadoresSelect(){
    const ruta = "https://serviciozaira.000webhostapp.com/ganadores.php";
    return this.http.get(ruta);
  }
}
