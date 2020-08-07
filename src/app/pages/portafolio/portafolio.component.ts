import { Producto } from './../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  productos: Producto[] = [];
  loading = true;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.loadProducts()
      .subscribe(res => {
        this.productos = res;
        this.loading = false;
      });
  }

}
