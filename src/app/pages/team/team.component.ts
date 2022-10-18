import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/entities/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  listaTeam: Team[] | undefined;
  constructor(private teamService: TeamService) {  }

  ngOnInit(): void {
    this.teamService.teamSelect().subscribe(
      (res) => {
        this.listaTeam = JSON.parse(JSON.stringify(res));
      }
    )
  }
}
