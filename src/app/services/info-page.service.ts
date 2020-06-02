import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from './../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {
    this.http.get('assets/data/data-page.json')
      .subscribe( (res: InfoPagina) => {
        this.info = res;
        this.cargada = true;
      });
  }

}
