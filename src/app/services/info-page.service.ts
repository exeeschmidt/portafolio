import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina, Persona } from './../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPagina = {};
  loaded = false;
  equipo: Persona[];

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    this.http.get('assets/data/data-page.json')
      .subscribe( (res: InfoPagina) => {
        this.info = res;
        this.loaded = true;
      });
  }

  private loadTeam() {
    this.http.get('https://angular-portafolio-69110.firebaseio.com/equipo.json')
      .subscribe( (res: Persona[]) => {
        this.equipo = res;
      });
  }

}
