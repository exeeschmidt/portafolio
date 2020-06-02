import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  loading = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get('https://angular-portafolio-69110.firebaseio.com/productos_idx.json')
      .subscribe( (res: Producto[]) => {
        this.productos = res;
        this.loading = false;
      });
  }

}
