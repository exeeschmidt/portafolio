import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina, Persona } from './../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  private env = environment;

  info: InfoPagina = {};
  loaded = false;
  equipo: Persona[];

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    this.http.get(this.env.urlDataPage)
      .subscribe((res: InfoPagina) => {
        this.info = res;
        this.loaded = true;
      });
  }

  private loadTeam() {
    this.http.get(this.env.urlTeam)
      .subscribe((res: Persona[]) => {
        this.equipo = res;
      });
  }

}
