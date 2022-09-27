import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/entities/colaborador';
import { PortafolioService } from 'src/app/services/portafolio/portafolio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  listaColaboradores: Colaborador[] | undefined;

  constructor(private portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.portafolioService.portafolioSelect().subscribe(
      (res) => {
        //console.log(res);
        this.listaColaboradores = JSON.parse(JSON.stringify(res));
      }
    )
  }

}
