import { Component, OnInit } from '@angular/core';
import { Ganador } from 'src/app/entities/ganador';
import { GanadoresService } from 'src/app/services/ganadores.service';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {

  listaGanadores: Ganador[] | undefined;

  constructor(private ganadoresService: GanadoresService) { }

  ngOnInit(): void {
    this.ganadoresService.ganadoresSelect().subscribe(
      (res) => {
        //console.log(res);
        this.listaGanadores = JSON.parse(JSON.stringify(res));
      }
    )
  }

}
