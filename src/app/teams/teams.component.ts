import { Component } from '@angular/core';
import { Team } from '../model/team'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teams: Team[];


  ngOnInit(): void{
    //this.getTeams();
  }
}
