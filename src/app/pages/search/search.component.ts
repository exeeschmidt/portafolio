import { Producto } from './../../interfaces/product.interface';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  productos: Producto[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.buscarProductos(params.termino);
      });
  }

  public buscarProductos(termino: string) {
    termino = termino.toLocaleLowerCase();
    this.productService.loadProducts()
      .subscribe(products => {
        this.productos = products.filter(
          prod => prod.categoria.toLocaleLowerCase().indexOf(termino) >= 0 ||
                  prod.titulo.toLocaleLowerCase().indexOf(termino) >= 0);
      });
  }

}
