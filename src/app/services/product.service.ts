import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private env = environment;

  constructor(private http: HttpClient) { }

  public loadProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.env.urlIProductsIdx);
  }

  /*
  public loadProducts(): Observable<Producto[]> {
    return this.http.get('https://angular-portafolio-69110.firebaseio.com/productos_idx.json')
      .pipe(
        map(products =>
          products.map(prod => Producto.mapToProd(prod))
        ),
        take(1)
      );
  }
  */

}
