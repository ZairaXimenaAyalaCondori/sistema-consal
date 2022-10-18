import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  teamSelect(){
    const ruta = "https://serviciozaira.000webhostapp.com/team.php";
    return this.http.get(ruta);
  }}
