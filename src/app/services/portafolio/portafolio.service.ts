import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  constructor(private http: HttpClient) { }

  portafolioSelect(){
    const ruta = "https://jsonplaceholder.typicode.com/users"
    return this.http.get(ruta);
  }
}