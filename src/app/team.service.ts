import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from './model/team';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TeamService {

  private baseURL = "https://initial-b.work.gd:6266/api/v1/teams";
  static header_node = {
    headers: new HttpHeaders(
        { 'Accept': 'application/json' ,
        'rejectUnauthorized': 'false' })
    };
    
  constructor(private httpClient: HttpClient) { }

  getTeamsList(): Observable<Team[]>{
    console.log("TeamService.getTeamsList() entry point");
    return this.httpClient.get<Team[]>(`${this.baseURL}`,TeamService.header_node);
  }
}
